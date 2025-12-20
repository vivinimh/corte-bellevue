import { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Checkbox } from './ui/checkbox';

const COOKIE_CONSENT_KEY = 'cookie-consent';

interface CookiePreferences {
  essential: boolean;
  functional: boolean;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    functional: false,
  });
  const translations = useTranslation();

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        if (saved.preferences) {
          setPreferences(saved.preferences);
        }
      } catch (e) {
        // Invalid saved data, ignore
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const consentData = {
      accepted: true,
      timestamp: new Date().toISOString(),
      preferences: prefs,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    setIsVisible(false);
    setIsPreferencesOpen(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      functional: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      functional: false,
    };
    savePreferences(onlyEssential);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const handleTogglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-6xl mx-auto">
            <div className="flex-1">
              <p className="text-sm text-black">
                {translations.common.cookieBanner.message}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                onClick={() => setIsPreferencesOpen(true)}
                variant="outline"
                size="sm"
                className="whitespace-nowrap"
              >
                {translations.common.cookieBanner.customize}
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                size="sm"
                className="whitespace-nowrap"
              >
                {translations.common.cookieBanner.rejectAll}
              </Button>
              <Button
                onClick={handleAcceptAll}
                size="sm"
                className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white"
              >
                {translations.common.cookieBanner.acceptAll}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isPreferencesOpen} onOpenChange={setIsPreferencesOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle>
              {translations.common.cookieBanner.preferences.title}
            </DialogTitle>
            <DialogDescription>
              {translations.common.cookieBanner.preferences.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Essential Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">
                    {translations.common.cookieBanner.preferences.essential.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {translations.common.cookieBanner.preferences.essential.description}
                  </p>
                </div>
                <Checkbox checked={true} disabled className="ml-4" />
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">
                    {translations.common.cookieBanner.preferences.functional.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {translations.common.cookieBanner.preferences.functional.description}
                  </p>
                </div>
                <Checkbox
                  checked={preferences.functional}
                  onCheckedChange={() => handleTogglePreference('functional')}
                  className="ml-4"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setIsPreferencesOpen(false)}
            >
              {translations.common.cookieBanner.preferences.cancel}
            </Button>
            <Button 
              onClick={handleSavePreferences}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {translations.common.cookieBanner.preferences.save}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

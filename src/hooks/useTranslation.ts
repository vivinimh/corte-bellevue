import { useLanguage } from '../contexts/LanguageContext';
import itTranslations from '../translations/it.json';
import enTranslations from '../translations/en.json';

type TranslationKey = 
  | 'common'
  | 'home'
  | 'laProprieta'
  | 'linvestimento'
  | 'ilContesto';

type Translations = typeof itTranslations;

export function useTranslation() {
  const { language } = useLanguage();
  
  const translations: Translations = language === 'it' ? itTranslations : enTranslations;
  
  return translations;
}

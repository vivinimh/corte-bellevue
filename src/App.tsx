import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Desktop from "./layouts/Desktop";
import Mobile from "./layouts/Mobile";
import Tablet from "./layouts/Tablet";
import CookieBanner from "./components/CookieBanner";

// Lazy load pages for better performance
const LaProprieta = lazy(() => import("./pages/LaProprieta"));
const LInvestimento = lazy(() => import("./pages/LInvestimento"));
const IlContesto = lazy(() => import("./pages/IlContesto"));
const BackgroundColorTest = lazy(() => import("./pages/BackgroundColorTest"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      {/* Mobile view - shown on screens smaller than 768px */}
      <div className="block md:hidden">
        <Mobile />
      </div>
      {/* Tablet view - shown on screens 768px to 1279px */}
      <div className="hidden md:block xl:hidden">
        <Tablet />
      </div>
      {/* Desktop view - shown on screens 1280px and larger */}
      <div className="hidden xl:block">
        <Desktop />
      </div>
    </>
  );
}

// Loading fallback component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fffaf4]">
      <div className="text-[#714b55] font-['Open Sans',sans-serif]">Caricamento...</div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/la-proprieta" element={<LaProprieta />} />
          <Route path="/linvestimento" element={<LInvestimento />} />
          <Route path="/il-contesto" element={<IlContesto />} />
          <Route path="/test-background-color" element={<BackgroundColorTest />} />
        </Routes>
      </Suspense>
      <CookieBanner />
    </>
  );
}
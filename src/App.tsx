import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Desktop from "./layouts/Desktop";
import Mobile from "./layouts/Mobile";
import Tablet from "./layouts/Tablet";
import LaProprieta from "./pages/LaProprieta";
import LInvestimento from "./pages/LInvestimento";
import IlContesto from "./pages/IlContesto";
import UnderConstruction from "./components/UnderConstruction";

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

export default function App() {
  // Sito in costruzione - mostra UnderConstruction per tutte le route
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </>
  );
}
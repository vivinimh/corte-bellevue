import { Routes, Route } from "react-router-dom";
import Desktop from "./imports/Desktop";
import Mobile from "./imports/Mobile";
import Tablet from "./imports/Tablet";
import LaProprieta from "./pages/LaProprieta";
import LInvestimento from "./pages/LInvestimento";
import IlContesto from "./pages/IlContesto";

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
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/la-proprieta" element={<LaProprieta />} />
      <Route path="/linvestimento" element={<LInvestimento />} />
      <Route path="/il-contesto" element={<IlContesto />} />
    </Routes>
  );
}
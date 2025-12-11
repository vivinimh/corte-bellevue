import DesktopInvestimento from "../layouts/DesktopInvestimento";
import MobileInvestimento from "../layouts/MobileInvestimento";
import TabletInvestimento from "../layouts/TabletInvestimento";

export default function LInvestimento() {
  return (
    <>
      {/* Mobile view - shown on screens smaller than 768px */}
      <div className="block md:hidden">
        <MobileInvestimento />
      </div>
      {/* Tablet view - shown on screens 768px to 1279px */}
      <div className="hidden md:block xl:hidden">
        <TabletInvestimento />
      </div>
      {/* Desktop view - shown on screens 1280px and larger */}
      <div className="hidden xl:block">
        <DesktopInvestimento />
      </div>
    </>
  );
}

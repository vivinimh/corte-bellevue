import DesktopLaProprieta from "../imports/DesktopLaProprieta";
import MobileLaProprieta from "../imports/MobileLaProprieta";
import TabletLaProprieta from "../imports/TabletLaProprieta";

export default function LaProprieta() {
  return (
    <>
      {/* Mobile view - shown on screens smaller than 768px */}
      <div className="block md:hidden">
        <MobileLaProprieta />
      </div>
      {/* Tablet view - shown on screens 768px to 1279px */}
      <div className="hidden md:block xl:hidden">
        <TabletLaProprieta />
      </div>
      {/* Desktop view - shown on screens 1280px and larger */}
      <div className="hidden xl:block">
        <DesktopLaProprieta />
      </div>
    </>
  );
}

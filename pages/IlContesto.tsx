import DesktopIlContesto from "../imports/DesktopIlContesto";
import MobileIlContesto from "../imports/MobileIlContesto";
import TabletIlContesto from "../imports/TabletIlContesto";

export default function IlContesto() {
  return (
    <>
      {/* Mobile view - shown on screens smaller than 768px */}
      <div className="block md:hidden">
        <MobileIlContesto />
      </div>
      {/* Tablet view - shown on screens 768px to 1279px */}
      <div className="hidden md:block xl:hidden">
        <TabletIlContesto />
      </div>
      {/* Desktop view - shown on screens 1280px and larger */}
      <div className="hidden xl:block">
        <DesktopIlContesto />
      </div>
    </>
  );
}

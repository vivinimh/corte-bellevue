import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import svgPaths from "../utils/svg/svg-h09w87y71k";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "../components/Footer";
// Grass field images from Unsplash
const imgHeroBanner = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=778&fit=crop";
const imgImg = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=672&h=380&fit=crop";
const imgPlayer = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=672&h=380&fit=crop";
const imgImage1 = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=544&h=544&fit=crop";
const imgImage2 = "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=544&h=544&fit=crop";
const imgImage3 = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=544&h=544&fit=crop";
// YouTube video ID - replace with your actual video ID
const youtubeVideoId = "dQw4w9WgXcQ";

// Hook to detect when element is in view (replayable)
function useInView() {
  const [isInView, setIsInView] = useState(false);
  const [wasInView, setWasInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasInView) {
          setIsInView(true);
          setWasInView(true);
        } else if (!entry.isIntersecting && wasInView) {
          // Reset when leaving viewport to allow replay
          setIsInView(false);
          setWasInView(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, wasInView]);

  return [setRef, isInView] as const;
}

function Icons({ isOverlaying, onClick, isMenuOpen }: { isOverlaying: boolean; onClick: () => void; isMenuOpen: boolean }) {
  // X icon path for 32x32 viewBox - centered X shape
  const closeIconPath = "M25.1953 4.03027L15.3174 13.9082L25.1953 23.7861L23.7812 25.2002L13.9033 15.3223L4.02832 25.1982L2.61328 23.7842L12.4893 13.9082L2.61328 4.03223L4.02832 2.61816L13.9033 12.4932L23.7812 2.61621L25.1953 4.03027Z";
  const fillColor = isOverlaying ? "#F6EEE5" : "#714B55";
  
  return (
    <button onClick={onClick} className="relative shrink-0 size-[32px] cursor-pointer" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icons">
          <path 
            d={svgPaths.pc9f6700} 
            fill={fillColor} 
            id="Union" 
            style={{ 
              opacity: isMenuOpen ? 0 : 1,
              transition: 'opacity 200ms ease-in-out'
            }}
          />
          <path 
            d={closeIconPath} 
            fill={fillColor} 
            id="Close" 
            style={{ 
              opacity: isMenuOpen ? 1 : 0,
              transition: 'opacity 200ms ease-in-out'
            }}
          />
        </g>
      </svg>
    </button>
  );
}

function Title({ isOverlaying }: { isOverlaying: boolean }) {
  return (
    <a href="/" className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[0] relative shrink-0 text-center text-nowrap cursor-pointer" data-name="title">
      <div className={`flex flex-col font-['EB Garamond',serif] font-normal justify-center relative shrink-0 transition-colors duration-500 ease-in-out ${isOverlaying ? 'text-[#F6EEE5]' : 'text-[#ad3854]'} text-[32px]`}>
        <p className="leading-[1.1] text-nowrap whitespace-pre">Corte Belle Vue</p>
      </div>
      <div className={`flex flex-col font-['Open Sans',sans-serif] font-semibold justify-center relative shrink-0 transition-colors duration-500 ease-in-out ${isOverlaying ? 'text-[#F6EEE5]' : 'text-[#714b55]'} text-[16px] tracking-[1.6px] uppercase`} style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.1] text-nowrap whitespace-pre">COUNTRY PROPERTY FOR SALE</p>
      </div>
    </a>
  );
}

function Frame1({ isOverlaying }: { isOverlaying: boolean }) {
  const { language } = useLanguage();
  const label = language === 'it' ? 'ENG' : 'ITA';
  
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0 w-full">
      <p className={`font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 transition-colors duration-500 ease-in-out ${isOverlaying ? 'text-[#F6EEE5]' : 'text-[#714b55]'} text-[16px] text-center text-nowrap tracking-[0.8px] uppercase whitespace-pre`} style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
    </div>
  );
}

function NavButton({ isOverlaying }: { isOverlaying: boolean }) {
  const { toggleLanguage } = useLanguage();
  
  return (
    <button 
      onClick={toggleLanguage}
      className="content-stretch cursor-pointer flex h-[40px] items-center justify-center pl-[16px] pr-0 py-[8px] relative shrink-0 w-[56px]" 
      data-name="Nav button"
    >
      <Frame1 isOverlaying={isOverlaying} />
    </button>
  );
}

function Menu({ isOverlaying, isOpen, onClose }: { isOverlaying: boolean; isOpen: boolean; onClose: () => void }) {
  const location = useLocation();
  
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/20 z-[99] transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div 
        className={`fixed top-[93px] left-0 right-0 ${isOverlaying ? 'bg-[rgba(246,238,229,0.95)]' : 'bg-[#f6eee5]'} shadow-[0px_4px_24px_0px_rgba(89,54,21,0.15)] z-[100] transition-[opacity,transform] duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center py-[16px]">
          <Link 
            to="/la-proprieta" 
            onClick={onClose}
            className="px-[16px] py-[12px] font-['Open Sans',sans-serif] font-semibold text-[16px] tracking-[0.8px] uppercase transition-colors duration-500 ease-in-out text-center text-[#714b55]" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <span className={`inline-block relative ${location.pathname === "/la-proprieta" ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#714B55]' : ''}`}>
              La proprietà
            </span>
          </Link>
          <Link 
            to="/linvestimento" 
            onClick={onClose}
            className="px-[16px] py-[12px] font-['Open Sans',sans-serif] font-semibold text-[16px] tracking-[0.8px] uppercase transition-colors duration-500 ease-in-out text-center text-[#714b55]" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <span className={`inline-block relative ${location.pathname === "/linvestimento" ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#714B55]' : ''}`}>
              L'investimento
            </span>
          </Link>
          <Link 
            to="/il-contesto" 
            onClick={onClose}
            className="px-[16px] py-[12px] font-['Open Sans',sans-serif] font-semibold text-[16px] tracking-[0.8px] uppercase transition-colors duration-500 ease-in-out text-center text-[#714b55]" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <span className={`inline-block relative ${location.pathname === "/il-contesto" ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#714B55]' : ''}`}>
              Il contesto
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

function MaxW({ isOverlaying, onMenuClick, isMenuOpen }: { isOverlaying: boolean; onMenuClick: () => void; isMenuOpen: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1120px] relative shrink-0 w-full" data-name="max w">
      <Icons isOverlaying={isOverlaying} onClick={onMenuClick} isMenuOpen={isMenuOpen} />
      <Title isOverlaying={isOverlaying} />
      <NavButton isOverlaying={isOverlaying} />
    </div>
  );
}

export function Navigation({ isOverlaying }: { isOverlaying: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`transition-all duration-300 ease-in-out ${isOverlaying ? 'bg-transparent' : 'bg-[#f6eee5]'} sticky top-0 z-[100] ${isOverlaying ? '' : 'shadow-[0px_0px_24px_0px_rgba(89,54,21,0.15)]'} shrink-0 w-full relative`} data-name="Navigation">
        {isOverlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#F6EEE5] transition-opacity duration-300 ease-in-out" />
        )}
        <div className="size-full">
          <div className="content-stretch flex flex-col items-start px-[64px] py-[16px] relative w-full">
            <MaxW isOverlaying={isOverlaying} onMenuClick={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
          </div>
        </div>
      </header>
      <Menu isOverlaying={isOverlaying} isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[64px] py-[104px] relative w-full">
          <p className="[text-shadow:rgba(0,0,0,0.35)_2px_2px_7px] font-['EB Garamond',serif] font-normal leading-[1.15] max-w-[1120px] relative shrink-0 text-[#f6eee5] text-[32px] text-center w-full">Corte Belle Vue ha in sé il potenziale di adattarsi a progetti imprenditoriali o residenziali di ogni scala</p>
        </div>
      </div>
    </div>
  );
}

function HeroBanner() {
  const [scrollY, setScrollY] = useState(0);
  const heroBannerHeight = 778;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle parallax effect: image moves at 0.3x scroll speed, only while banner is in view
  const parallaxOffset = scrollY < heroBannerHeight ? scrollY * 0.3 : heroBannerHeight * 0.3;

  return (
    <header className="content-stretch flex flex-col h-[778px] items-center justify-end p-0 relative shrink-0 w-full z-[1] overflow-hidden" data-name="hero banner">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img 
          alt="Landscape" 
          className="absolute max-w-none object-50%-50% object-cover size-full" 
          src={imgHeroBanner}
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(4, 18, 3, 0) 69.231%, rgba(4, 18, 3, 0.8) 100%), linear-gradient(-4.26326e-14deg, rgba(26, 110, 166, 0) 76.923%, rgba(26, 110, 166, 0.9) 100%)" }} />
      </div>
      <Container />
    </header>
  );
}

function NavheroHp() {
  return (
    <div className="content-stretch flex flex-col h-[778px] isolate items-center overflow-clip absolute top-0 left-0 right-0 shrink-0 w-full" data-name="navhero hp">
      <HeroBanner />
    </div>
  );
}

function Contorno() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[0.06%]" data-name="contorno">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 156">
        <g id="contorno">
          <g id="70">
            <path d={svgPaths.p1b664030} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector" />
            <path d={svgPaths.p18a15680} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_2" />
            <path d={svgPaths.p29009100} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_3" />
            <path d={svgPaths.p16d5b540} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_4" />
            <path d={svgPaths.p1c8d7a00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_5" />
            <path d={svgPaths.p35339b80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_6" />
            <path d={svgPaths.p222c8f80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_7" />
            <path d={svgPaths.p3aabbc40} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_8" />
            <path d={svgPaths.p2f85d300} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_9" />
            <path d={svgPaths.p379620f0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_10" />
            <path d={svgPaths.p3c1a2500} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_11" />
            <path d={svgPaths.p27f04940} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_12" />
            <path d={svgPaths.p25509800} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_13" />
            <path d={svgPaths.p10a97100} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_14" />
            <path d={svgPaths.p16ccbaf0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_15" />
            <path d={svgPaths.p24ae4900} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_16" />
            <path d={svgPaths.paa82e80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_17" />
            <path d={svgPaths.p3463c700} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_18" />
            <path d={svgPaths.pf044200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_19" />
            <path d={svgPaths.p16baaf0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_20" />
            <path d={svgPaths.p3ec96a80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_21" />
            <path d={svgPaths.pade5f00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_22" />
            <path d={svgPaths.p24b5f680} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_23" />
            <path d={svgPaths.p2e86ae00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_24" />
            <path d={svgPaths.p15d36f00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_25" />
            <path d={svgPaths.p2be9fa00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_26" />
            <path d={svgPaths.p10bb1f00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_27" />
            <path d={svgPaths.p5915b00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_28" />
            <path d={svgPaths.p94b8d00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_29" />
            <path d={svgPaths.p3538dbe2} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_30" />
            <path d={svgPaths.p38687f00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_31" />
            <path d={svgPaths.p1d8d1400} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_32" />
            <path d={svgPaths.p3e6c1780} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_33" />
            <path d={svgPaths.p3309a200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_34" />
            <path d={svgPaths.p33b61f00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_35" />
            <path d={svgPaths.p34e0a400} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_36" />
            <path d={svgPaths.p2d187900} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_37" />
            <path d={svgPaths.pa380300} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_38" />
            <path d={svgPaths.pd54e480} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_39" />
            <path d={svgPaths.p15d24700} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_40" />
            <path d={svgPaths.p22a2c700} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_41" />
            <path d={svgPaths.p397fec00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_42" />
            <path d={svgPaths.p3a4e0e80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_43" />
            <path d={svgPaths.p308aa00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_44" />
            <path d={svgPaths.p2b426000} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_45" />
            <path d={svgPaths.p2fb14380} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_46" />
            <path d={svgPaths.p2b928180} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_47" />
            <path d={svgPaths.p2acf86b0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_48" />
            <path d={svgPaths.p19ee7300} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_49" />
            <path d={svgPaths.p1e2fa200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_50" />
            <path d={svgPaths.p35215f80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_51" />
            <path d={svgPaths.p16fc9b70} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_52" />
            <path d={svgPaths.p2c66ef0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_53" />
            <path d={svgPaths.p20fe2e80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_54" />
            <path d={svgPaths.p10d41a80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_55" />
            <path d={svgPaths.p128ed600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_56" />
            <path d={svgPaths.p348ffb80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_57" />
            <path d={svgPaths.p2e6d530} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_58" />
            <path d={svgPaths.p340c86c0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_59" />
            <path d={svgPaths.p202a3d40} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_60" />
            <path d={svgPaths.p5221680} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_61" />
            <path d={svgPaths.p29e47f00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_62" />
            <path d={svgPaths.p1c5c4a80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_63" />
            <path d={svgPaths.p4357a80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_64" />
            <path d={svgPaths.p18e062f0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_65" />
            <path d={svgPaths.p55a4f00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_66" />
            <path d={svgPaths.p31b33300} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_67" />
            <path d={svgPaths.p20322300} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_68" />
            <path d={svgPaths.p20da0600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_69" />
            <path d={svgPaths.p9399c00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_70" />
            <path d={svgPaths.p1cab1600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_71" />
            <path d={svgPaths.p26399380} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_72" />
            <path d={svgPaths.p1e5991f0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_73" />
          </g>
          <path d={svgPaths.p3f0e5400} fill="var(--fill-0, #53373E)" fillOpacity="0.9" id="90" />
        </g>
      </svg>
    </div>
  );
}

function Illustrazione() {
  return (
    <div className="h-[156px] max-h-[312.224px] max-w-[690px] relative shrink-0 w-[344px]" data-name="illustrazione">
      <Contorno />
    </div>
  );
}

function Testo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-center w-full" data-name="testo">
      <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.15] relative shrink-0 text-[#714b55] text-[32px] w-full">A pochi chilometri da Modena, tra le morbide colline e i filari di Lambrusco e Trebbiano di Spagna, si estende una proprietà unica nel suo genere: dieci ettari di autentica bellezza emiliana, dove il tempo rallenta e il paesaggio racconta storie di gusto, passione e ospitalità.</h3>
      <h3 className="block font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#ad3854] text-[14px] tracking-[0.7px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        corte belle vue
      </h3>
    </div>
  );
}

function MaxW1() {
  return (
    <div className="max-w-[1120px] relative shrink-0 w-full z-[1]" data-name="max w">
      <div aria-hidden="true" className="absolute border-t-[1px] border-b-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[inherit] p-[64px] relative w-full">
          <Illustrazione />
          <Testo />
        </div>
      </div>
    </div>
  );
}

function Apertura() {
  return (
    <div className="relative shrink-0 w-full reveal-apertura" data-name="apertura">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col isolate items-center px-[128px] py-[80px] relative w-full">
          <MaxW1 />
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <header className="aspect-[672/379.944] block mb-[-60px] relative shrink-0 w-full" data-name="img">
      <img alt="Landscape of Santorini, Greece" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImg} />
    </header>
  );
}

function IconPlay() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon/play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon/play">
          <path d={svgPaths.p2d56fb00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconAudio() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon/audio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon/audio">
          <path d={svgPaths.p676f500} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <IconPlay />
      <IconAudio />
    </div>
  );
}

function Player() {
  return (
    <div className="mb-[-60px] relative shrink-0 w-full" data-name="player">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlayer} />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pb-[8px] pt-[16px] px-[8px] relative w-full">
          <div className="h-[4px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 35.577%, rgba(255, 255, 255, 0) 35.587%), linear-gradient(90deg, rgb(68, 68, 68) 0%, rgb(68, 68, 68) 100%)" }} />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function VideoPlayer() {
  const [ref, isInView] = useInView();
  
  // Build YouTube URL with autoplay (when in view), mute, and loop
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeVideoId}?rel=0&mute=1&loop=1&playlist=${youtubeVideoId}${isInView ? '&autoplay=1' : ''}`;
  
  return (
    <div ref={ref} className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full max-w-[1120px] mx-auto px-[64px]" data-name="video player">
      <iframe
        className="w-full"
        style={{ aspectRatio: '16/9', minHeight: '400px' }}
        src={youtubeUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function Video() {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} className={`aspect-[800/452.315] content-stretch flex flex-col items-center relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="video">
      <VideoPlayer />
    </div>
  );
}

function Image() {
  return (
    <div className="aspect-[544/544] content-stretch flex items-center justify-center mb-[-64px] relative shrink-0 w-full" data-name="image">
      <div className="aspect-[348/348] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image 1">
        <img alt="santorini neighborhood" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Button() {
  return (
    <Link to="/la-proprieta" className="bg-[#714b55] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0 hover:bg-[#5a3d45] transition-colors duration-200" data-name="Button">
      <p className="font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        approfondisci
      </p>
    </Link>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-t-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.15] min-w-full relative shrink-0 text-[#ad3854] text-[32px] w-[min-content]">La proprietà</h3>
      <div className="font-['Open Sans',sans-serif] font-normal leading-[1.4] min-w-full not-italic overflow-hidden relative shrink-0 text-[#333333] text-[18px] w-[min-content]" style={{ display: '-webkit-box', WebkitLineClamp: 10, WebkitBoxOrient: 'vertical' }}>
        <h3 className="block mb-0">La tenuta ha quattro edifici rurali di fine Ottocento di interesse storico-architettonico: un’elegante basso comodo interamente ristrutturato, la casa padronale con annesso importante nella sua volumetria ed una stalla-fienile con porticato d’epoca ad elle, unico nel suo genere, sono interamente da ristrutturare.</h3>
        <h3 className="block">Il terreno che circonda gli edifici è per la maggior parte sviluppato a vigneti e in parte minore ad erba spagna.</h3>
      </div>
      <Button />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white relative shadow-[-16px_16px_48px_0px_rgba(89,54,21,0.06)] shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[64px] relative w-full">
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function TextBlock() {
  return (
    <div className="mb-[-64px] relative shrink-0 w-full" data-name="Text block">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[64px] py-0 relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function MaxW2() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1120px] pb-[64px] pt-0 px-0 relative shrink-0 w-full" data-name="max w">
      <Image />
      <TextBlock />
    </div>
  );
}

function ContenutoLancio() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto lancio">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative w-full">
          <MaxW2 />
        </div>
      </div>
    </article>
  );
}

function Image1() {
  return (
    <div className="aspect-[544/544] content-stretch flex items-center justify-center mb-[-64px] relative shrink-0 w-full" data-name="image">
      <div className="aspect-[348/348] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image 1">
        <img alt="santorini neighborhood" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <Link to="/il-contesto" className="bg-[#714b55] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0 hover:bg-[#5a3d45] transition-colors duration-200" data-name="Button">
      <p className="font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        approfondisci
      </p>
    </Link>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-t-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.15] min-w-full relative shrink-0 text-[#ad3854] text-[32px] w-[min-content]">Il contesto</h3>
      <h3 className="block font-['Open Sans',sans-serif] font-normal leading-[1.4] min-w-full not-italic overflow-hidden relative shrink-0 text-[#333333] text-[18px] w-[min-content]" style={{ display: '-webkit-box', WebkitLineClamp: 10, WebkitBoxOrient: 'vertical' }}>Il contesto circostante è una vetrina di eccellenze mondiali: a pochi minuti si trova la sede della Ferrari Spa Formula 1, Pagani Spa auto di lusso, l’Osteria Francescana di Massimo Bottura, le acetaie storiche di Modena e il distretto della ceramica di Sassuolo. Corte Belle Vue sorge in un territorio unico, dove heritage e innovazione convivono armoniosamente, raccontando l’essenza del Made in Italy e di uno stile di vita legato alle tradizioni e ad un patrimonio culturale unico al mondo.</h3>
      <Button1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative shadow-[-16px_16px_48px_0px_rgba(89,54,21,0.06)] shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[64px] relative w-full">
          <TextContent1 />
        </div>
      </div>
    </div>
  );
}

function TextBlock1() {
  return (
    <div className="mb-[-64px] relative shrink-0 w-full" data-name="Text block">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[64px] py-0 relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function MaxW3() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1120px] pb-[64px] pt-0 px-0 relative shrink-0 w-full" data-name="max w">
      <Image1 />
      <TextBlock1 />
    </div>
  );
}

function ContenutoLancio1() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto lancio">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative w-full">
          <MaxW3 />
        </div>
      </div>
    </article>
  );
}

function Image2() {
  return (
    <div className="aspect-[544/544] content-stretch flex items-center justify-center mb-[-64px] relative shrink-0 w-full" data-name="image">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="aspect-[348/348] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image 1">
        <img alt="santorini neighborhood" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <Link to="/linvestimento" className="bg-[#714b55] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0 hover:bg-[#5a3d45] transition-colors duration-200" data-name="Button">
      <p className="font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        approfondisci
      </p>
    </Link>
  );
}

function TextContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-t-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.15] min-w-full relative shrink-0 text-[#ad3854] text-[32px] w-[min-content]">Prospettive d’investimento</h3>
      <div className="font-['Open Sans',sans-serif] font-normal leading-[1.4] min-w-full not-italic overflow-hidden relative shrink-0 text-[#333333] text-[18px] w-[min-content]" style={{ display: '-webkit-box', WebkitLineClamp: 10, WebkitBoxOrient: 'vertical' }}>
        <h3 className="block mb-0">La posizione strategica, la bellezza naturale e la versatilità architettonica rendono questa proprietà una scelta di valore per chi cerca un investimento emozionale e solido nel tempo. Ad esempio, attraverso questa suggestiva immagine realizzata con l’intelligenza artificiale, si intuisce come un fienile possa rivelare tutto il suo potenziale, trasformandosi in una dimora d’ispirazione provenzale.</h3>
        <h3 className="block">Qui si può costruire un progetto di ospitalità di livello internazionale, o semplicemente vivere il sogno di una vita immersa nei ritmi autentici dell’Emilia.</h3>
      </div>
      <Button2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white relative shadow-[-16px_16px_48px_0px_rgba(89,54,21,0.06)] shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[64px] relative w-full">
          <TextContent2 />
        </div>
      </div>
    </div>
  );
}

function TextBlock2() {
  return (
    <div className="mb-[-64px] relative shrink-0 w-full" data-name="Text block">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[64px] py-0 relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function MaxW4() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1120px] pb-[64px] pt-0 px-0 relative shrink-0 w-full" data-name="max w">
      <Image2 />
      <TextBlock2 />
    </div>
  );
}

function ContenutoLancio2() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto lancio">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative w-full">
          <MaxW4 />
        </div>
      </div>
    </article>
  );
}

function MaxW5() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[1120px] px-0 py-[64px] relative shrink-0 w-full" data-name="max w">
      <div aria-hidden="true" className="absolute border-t-[1px] border-b-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <h3 className="basis-0 block font-['EB Garamond',serif] font-normal grow leading-[1.15] min-h-px min-w-px relative shrink-0 text-[#714b55] text-[32px] text-center">A Corte Bellevue l’autenticità incontra l’eleganza, la tranquillità si fonde con la vitalità economica e ogni prospettiva: turistica, residenziale o imprenditoriale, trova terreno fertile per crescere.</h3>
    </div>
  );
}

function Chiusura() {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} className={`bg-[#f6eee5] relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="chiusura">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[64px] relative w-full">
          <MaxW5 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main className="content-stretch flex flex-col items-center p-0 relative shrink-0 w-full mt-[685px]" data-name="main" tabIndex="-1">
      <Apertura />
      <Video />
      <ContenutoLancio />
      <ContenutoLancio1 />
      <ContenutoLancio2 />
      <Chiusura />
    </main>
  );
}

export default function Tablet() {
  const [isOverlaying, setIsOverlaying] = useState(true);
  const heroBannerHeight = 778;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsOverlaying(scrollY < heroBannerHeight);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroBannerHeight]);

  return (
    <div className="bg-[#fffaf4] content-stretch flex flex-col items-center relative size-full" data-name="Tablet">
      <Navigation isOverlaying={isOverlaying} />
      <NavheroHp />
      <Main />
      <Footer />
    </div>
  );
}
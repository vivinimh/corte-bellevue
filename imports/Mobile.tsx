import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import svgPaths from "./svg-dt0fmc7vhf";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "../components/Footer";
// Grass field images from Unsplash
const imgHeroBanner = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=778&fit=crop";
const imgImg = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=277&fit=crop";
const imgPlayer = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=277&fit=crop";
const imgImage1 = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=320&h=320&fit=crop";
const imgImage = "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=320&h=320&fit=crop";
const imgImage2 = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=320&h=320&fit=crop";
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
    <a href="/" className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center leading-[0] min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0 text-center text-nowrap cursor-pointer" data-name="title">
      <div className={`flex flex-col font-['EB Garamond',serif] font-normal justify-center relative shrink-0 transition-colors duration-500 ease-in-out ${isOverlaying ? 'text-[#F6EEE5]' : 'text-[#ad3854]'} text-[24px]`}>
        <p className="leading-[1.18] text-nowrap whitespace-pre">Corte Belle Vue</p>
      </div>
      <div className={`flex flex-col font-['Open Sans',sans-serif] font-semibold justify-center relative shrink-0 transition-colors duration-500 ease-in-out ${isOverlaying ? 'text-[#F6EEE5]' : 'text-[#714b55]'} text-[14px] tracking-[0.7px] uppercase`} style={{ fontVariationSettings: "'wdth' 100" }}>
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
        className={`fixed top-[80px] left-0 right-0 ${isOverlaying ? 'bg-[rgba(246,238,229,0.95)]' : 'bg-[#f6eee5]'} shadow-[0px_4px_24px_0px_rgba(89,54,21,0.15)] z-[100] transition-[opacity,transform] duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
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
    <div className="content-stretch flex h-[65px] items-center justify-between max-w-[1120px] relative shrink-0 w-full" data-name="max w">
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
          <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
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
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[80px] relative w-full">
          <p className="[text-shadow:rgba(0,0,0,0.35)_2px_2px_7px] font-['EB Garamond',serif] font-normal leading-[1.15] relative shrink-0 text-[#f6eee5] text-[32px] text-center w-full">Corte Belle Vue ha in sé il potenziale di adattarsi a progetti imprenditoriali o residenziali di ogni scala</p>
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
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(4, 18, 3, 0) 73.558%, rgba(4, 18, 3, 0.8) 100%), linear-gradient(-7.10543e-14deg, rgba(26, 110, 166, 0) 76.923%, rgba(26, 110, 166, 0.9) 100%)" }} />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 116">
        <g id="contorno">
          <g id="70">
            <path d={svgPaths.p1bc70200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector" />
            <path d={svgPaths.p353e410} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_2" />
            <path d={svgPaths.p19463680} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_3" />
            <path d={svgPaths.p17c5e780} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_4" />
            <path d={svgPaths.p3da28400} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_5" />
            <path d={svgPaths.p3aeb0b00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_6" />
            <path d={svgPaths.p32596530} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_7" />
            <path d={svgPaths.p16443a70} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_8" />
            <path d={svgPaths.p133eab30} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_9" />
            <path d={svgPaths.pfb4be80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_10" />
            <path d={svgPaths.p1badd00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_11" />
            <path d={svgPaths.p2b51c980} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_12" />
            <path d={svgPaths.p1214d950} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_13" />
            <path d={svgPaths.p3eb49600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_14" />
            <path d={svgPaths.p382ec800} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_15" />
            <path d={svgPaths.pbd3dcc0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_16" />
            <path d={svgPaths.p5fedc80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_17" />
            <path d={svgPaths.pe67e200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_18" />
            <path d={svgPaths.p22e85b00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_19" />
            <path d={svgPaths.p16016600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_20" />
            <path d={svgPaths.p16c3a080} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_21" />
            <path d={svgPaths.p2c281f00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_22" />
            <path d={svgPaths.p3f310f40} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_23" />
            <path d={svgPaths.p205ceb00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_24" />
            <path d={svgPaths.p38712b00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_25" />
            <path d={svgPaths.p8e2d9f0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_26" />
            <path d={svgPaths.p304f2280} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_27" />
            <path d={svgPaths.pd565900} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_28" />
            <path d={svgPaths.p12efa000} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_29" />
            <path d={svgPaths.p17b8a500} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_30" />
            <path d={svgPaths.p2ed44500} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_31" />
            <path d={svgPaths.p2ef76600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_32" />
            <path d={svgPaths.pd3f5000} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_33" />
            <path d={svgPaths.p28618d00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_34" />
            <path d={svgPaths.p35475280} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_35" />
            <path d={svgPaths.p27b92600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_36" />
            <path d={svgPaths.p156e2e00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_37" />
            <path d={svgPaths.p7119500} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_38" />
            <path d={svgPaths.p12b92200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_39" />
            <path d={svgPaths.p52cab00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_40" />
            <path d={svgPaths.p3408cc0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_41" />
            <path d={svgPaths.p50d2600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_42" />
            <path d={svgPaths.pd60b100} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_43" />
            <path d={svgPaths.p375c7900} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_44" />
            <path d={svgPaths.p18681a80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_45" />
            <path d={svgPaths.p3ce49a40} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_46" />
            <path d={svgPaths.p9016180} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_47" />
            <path d={svgPaths.p27daa700} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_48" />
            <path d={svgPaths.p2d3cd700} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_49" />
            <path d={svgPaths.p1599fa00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_50" />
            <path d={svgPaths.p3a62fd80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_51" />
            <path d={svgPaths.pc185900} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_52" />
            <path d={svgPaths.p15ea6680} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_53" />
            <path d={svgPaths.p4c2cc00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_54" />
            <path d={svgPaths.p356332a0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_55" />
            <path d={svgPaths.p5720800} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_56" />
            <path d={svgPaths.p1df22180} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_57" />
            <path d={svgPaths.p31282000} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_58" />
            <path d={svgPaths.p10195000} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_59" />
            <path d={svgPaths.p12238200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_60" />
            <path d={svgPaths.p22796b80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_61" />
            <path d={svgPaths.p179f4690} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_62" />
            <path d={svgPaths.p26a8c00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_63" />
            <path d={svgPaths.p21884d80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_64" />
            <path d={svgPaths.pc482900} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_65" />
            <path d={svgPaths.p2dfbe630} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_66" />
            <path d={svgPaths.p2c0c5700} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_67" />
            <path d={svgPaths.p2e7d53f0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_68" />
            <path d={svgPaths.p2d781080} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_69" />
            <path d={svgPaths.pb20b080} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_70" />
            <path d={svgPaths.pd36e700} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_71" />
            <path d={svgPaths.p26cb3480} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_72" />
            <path d={svgPaths.p4186b00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_73" />
          </g>
          <path d={svgPaths.p1411580} fill="var(--fill-0, #53373E)" fillOpacity="0.9" id="90" />
        </g>
      </svg>
    </div>
  );
}

function Illustrazione() {
  return (
    <div className="h-[116px] max-h-[312.224px] max-w-[690px] relative shrink-0 w-[256px]" data-name="illustrazione">
      <Contorno />
    </div>
  );
}

function Testo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-center w-full" data-name="testo">
      <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.18] relative shrink-0 text-[#714b55] text-[24px] w-full">A pochi chilometri da Modena, tra le morbide colline e i filari di Lambrusco e Trebbiano di Spagna, si estende una proprietà unica nel suo genere: dieci ettari di autentica bellezza emiliana, dove il tempo rallenta e il paesaggio racconta storie di gusto, passione e ospitalità.</h3>
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
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center p-[40px] relative w-full">
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
        <div className="content-stretch flex flex-col isolate items-center px-[16px] py-[64px] relative w-full">
          <MaxW1 />
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <header className="aspect-[400/277] block mb-[-60px] relative shrink-0 w-full" data-name="img">
      <img alt="Landscape of Santorini, Greece" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg} />
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
    <div ref={ref} className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full max-w-[1120px] mx-auto px-[16px]" data-name="video player">
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
    <div ref={ref} className={`aspect-[400/277] content-stretch flex flex-col items-center relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="video">
      <VideoPlayer />
    </div>
  );
}

function Image() {
  return (
    <div className="aspect-[320/320] content-stretch flex items-center mb-[-40px] relative shrink-0 w-full" data-name="image">
      <div className="aspect-[348/348] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image 1">
        <img alt="santorini neighborhood" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-[#714b55] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <p className="font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        approfondisci
      </p>
    </button>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-t-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.15] min-w-full relative shrink-0 text-[#ad3854] text-[32px] w-[min-content]">La proprietà</h3>
      <div className="-webkit-box font-['Open Sans',sans-serif] font-normal leading-[1.4] min-w-full not-italic overflow-hidden relative shrink-0 text-[#333333] text-[18px] w-[min-content]" style={{ display: '-webkit-box', WebkitLineClamp: 10, WebkitBoxOrient: 'vertical' }}>
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
        <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function TextBlock() {
  return (
    <div className="mb-[-40px] relative shrink-0 w-full" data-name="Text block">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function MaxW2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1120px] pb-[40px] pt-0 px-0 relative shrink-0 w-full" data-name="max w">
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
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[32px] relative w-full">
          <MaxW2 />
        </div>
      </div>
    </article>
  );
}

function Image1() {
  return (
    <div className="aspect-[320/320] content-stretch flex items-center mb-[-40px] relative shrink-0 w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      <div className="aspect-[348/348] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image 1">
        <img alt="santorini neighborhood" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <button className="bg-[#714b55] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <p className="font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        approfondisci
      </p>
    </button>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-t-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.15] min-w-full relative shrink-0 text-[#ad3854] text-[32px] w-[min-content]">Il contesto</h3>
      <h3 className="font-['Open Sans',sans-serif] font-normal leading-[1.4] min-w-full not-italic overflow-hidden relative shrink-0 text-[#333333] text-[18px] w-[min-content]" style={{ display: '-webkit-box', WebkitLineClamp: 10, WebkitBoxOrient: 'vertical' }}>Il contesto circostante è una vetrina di eccellenze mondiali: a pochi minuti si trova la sede della Ferrari Spa Formula 1, Pagani Spa auto di lusso, l’Osteria Francescana di Massimo Bottura, le acetaie storiche di Modena e il distretto della ceramica di Sassuolo. Corte Belle Vue sorge in un territorio unico, dove heritage e innovazione convivono armoniosamente, raccontando l’essenza del Made in Italy e di uno stile di vita legato alle tradizioni e ad un patrimonio culturale unico al mondo.</h3>
      <Button1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative shadow-[-16px_16px_48px_0px_rgba(89,54,21,0.06)] shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
          <TextContent1 />
        </div>
      </div>
    </div>
  );
}

function TextBlock1() {
  return (
    <div className="mb-[-40px] relative shrink-0 w-full" data-name="Text block">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function MaxW3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1120px] pb-[40px] pt-0 px-0 relative shrink-0 w-full" data-name="max w">
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
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[32px] relative w-full">
          <MaxW3 />
        </div>
      </div>
    </article>
  );
}

function Image2() {
  return (
    <div className="aspect-[320/320] content-stretch flex items-center mb-[-40px] relative shrink-0 w-full" data-name="image">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="aspect-[348/348] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image 1">
        <img alt="santorini neighborhood" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <button className="bg-[#714b55] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <p className="font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        approfondisci
      </p>
    </button>
  );
}

function TextContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-t-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.15] min-w-full relative shrink-0 text-[#ad3854] text-[32px] w-[min-content]">Prospettive d’investimento</h3>
      <div className="-webkit-box font-['Open Sans',sans-serif] font-normal leading-[1.4] min-w-full not-italic overflow-hidden relative shrink-0 text-[#333333] text-[18px] w-[min-content]" style={{ display: '-webkit-box', WebkitLineClamp: 10, WebkitBoxOrient: 'vertical' }}>
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
        <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
          <TextContent2 />
        </div>
      </div>
    </div>
  );
}

function TextBlock2() {
  return (
    <div className="mb-[-40px] relative shrink-0 w-full" data-name="Text block">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function MaxW4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1120px] pb-[40px] pt-0 px-0 relative shrink-0 w-full" data-name="max w">
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
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[32px] relative w-full">
          <MaxW4 />
        </div>
      </div>
    </article>
  );
}

function MaxW5() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[1120px] px-0 py-[40px] relative shrink-0 w-full" data-name="max w">
      <div aria-hidden="true" className="absolute border-t-[1px] border-b-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <h3 className="basis-0 block font-['EB Garamond',serif] font-normal grow leading-[1.15] min-h-px min-w-px relative shrink-0 text-[#714b55] text-[32px] text-center">A Corte Bellevue l’autenticità incontra l’eleganza, la tranquillità si fonde con la vitalità economica e ogni prospettiva: turistica, residenziale o imprenditoriale, trova terreno fertile per crescere.</h3>
    </div>
  );
}

function Chiusura() {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} className={`bg-[#f6eee5] content-stretch flex flex-col items-center p-[40px] relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="chiusura">
      <MaxW5 />
    </div>
  );
}

function Main() {
  return (
    <main className="content-stretch flex flex-col items-center p-0 relative shrink-0 w-full mt-[697px]" data-name="main" tabIndex="-1">
      <Apertura />
      <Video />
      <ContenutoLancio />
      <ContenutoLancio1 />
      <ContenutoLancio2 />
      <Chiusura />
    </main>
  );
}

export default function Mobile() {
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
    <div className="bg-[#fffaf4] content-stretch flex flex-col items-center relative size-full" data-name="Mobile">
      <Navigation isOverlaying={isOverlaying} />
      <NavheroHp />
      <Main />
      <Footer />
    </div>
  );
}
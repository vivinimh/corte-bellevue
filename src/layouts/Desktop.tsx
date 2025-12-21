import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import svgPaths from "../utils/svg/svg-j4imkms3yc";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "../components/Footer";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "../hooks/useTranslation";
import VideoPlayer from "../components/VideoPlayer";
import imgHeroBanner from "../../assets/photos/homepage/Hero.jpg";
import imgImage1 from "../../assets/photos/homepage/Photo 1.jpeg";
import imgImage2 from "../../assets/photos/homepage/Photo 3.jpg";
import imgImage3Slide1 from "../../assets/photos/homepage/Photo 2.jpeg";
import imgImage3Slide2 from "../../assets/photos/homepage/Photo 4.jpeg";
import imgPlayer from "../../assets/photos/homepage/Photo 3.jpg";
import videoSrc from "../../assets/photos/homepage/video.mp4";

function Title({ isOverlaying, isScrolled }: { isOverlaying: boolean; isScrolled?: boolean }) {
  const t = useTranslation();
  const scale = isScrolled ? 0.8 : 1;
  return (
    <a href="/" className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] relative shrink-0 text-center text-nowrap cursor-pointer transition-transform duration-300 ease-in-out" style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }} data-name="title">
      <div className={`flex flex-col font-['EB Garamond',serif] font-normal justify-center relative shrink-0 transition-colors duration-500 ease-in-out ${isOverlaying ? 'text-[#F6EEE5]' : 'text-[#ad3854]'} text-[48px]`}>
        <p className="leading-[1.1] text-nowrap whitespace-pre">{t.common.siteName}</p>
      </div>
      <div className={`flex flex-col font-['Open Sans',sans-serif] font-semibold justify-center relative shrink-0 transition-colors duration-500 ease-in-out ${isOverlaying ? 'text-[#F6EEE5]' : 'text-[#714b55]'} text-[16px] tracking-[1.6px] uppercase`} style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.1] text-nowrap whitespace-pre">{t.common.siteSubtitle}</p>
      </div>
    </a>
  );
}

function Frame1({ isOverlaying, isActive }: { isOverlaying: boolean; isActive?: boolean }) {
  const t = useTranslation();
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <p className={`font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 transition-colors duration-500 ease-in-out ${isOverlaying ? 'text-[#F6EEE5]' : 'text-[#714b55]'} text-[16px] text-center text-nowrap tracking-[0.8px] uppercase whitespace-pre ${isActive ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#714B55]' : ''}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.common.navigation.laProprieta}
      </p>
    </div>
  );
}

function NavButton({ isOverlaying }: { isOverlaying: boolean }) {
  const location = useLocation();
  const isActive = location.pathname === "/la-proprieta";
  
  return (
    <Link to="/la-proprieta" className="content-stretch flex h-full items-center justify-center px-[16px] py-[8px] relative shrink-0 hover:bg-[#AD8E95]/15 transition-colors duration-500 ease-in-out" data-name="Nav button">
      <Frame1 isOverlaying={isOverlaying} isActive={isActive} />
    </Link>
  );
}

function Frame3({ isOverlaying, isActive }: { isOverlaying: boolean; isActive?: boolean }) {
  const t = useTranslation();
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <p className={`font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 transition-colors duration-500 ease-in-out ${isOverlaying ? 'text-[#F6EEE5]' : 'text-[#714b55]'} text-[16px] text-center text-nowrap tracking-[0.8px] uppercase whitespace-pre ${isActive ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#714B55]' : ''}`} style={{ fontVariationSettings: "'wdth' 100" }}>{t.common.navigation.linvestimento}</p>
    </div>
  );
}

function NavButton1({ isOverlaying }: { isOverlaying: boolean }) {
  const location = useLocation();
  const isActive = location.pathname === "/linvestimento";
  
  return (
    <Link to="/linvestimento" className="content-stretch flex h-full items-center justify-center px-[16px] py-[8px] relative shrink-0 hover:bg-[#AD8E95]/15 transition-colors duration-500 ease-in-out" data-name="Nav button">
      <Frame3 isOverlaying={isOverlaying} isActive={isActive} />
    </Link>
  );
}

function Frame4({ isOverlaying, isActive }: { isOverlaying: boolean; isActive?: boolean }) {
  const t = useTranslation();
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0">
      <p className={`font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 transition-colors duration-500 ease-in-out ${isOverlaying ? 'text-[#F6EEE5]' : 'text-[#714b55]'} text-[16px] text-center text-nowrap tracking-[0.8px] uppercase whitespace-pre ${isActive ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#714B55]' : ''}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.common.navigation.ilContesto}
      </p>
    </div>
  );
}

function NavButton2({ isOverlaying }: { isOverlaying: boolean }) {
  const location = useLocation();
  const isActive = location.pathname === "/il-contesto";
  
  return (
    <Link to="/il-contesto" className="content-stretch flex h-full items-center justify-center px-[16px] py-[8px] relative shrink-0 hover:bg-[#AD8E95]/15 transition-colors duration-500 ease-in-out" data-name="Nav button">
      <Frame4 isOverlaying={isOverlaying} isActive={isActive} />
    </Link>
  );
}

function Nav({ isOverlaying }: { isOverlaying: boolean }) {
  return (
    <div className="content-stretch flex h-full items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="nav">
      <NavButton isOverlaying={isOverlaying} />
      <NavButton1 isOverlaying={isOverlaying} />
      <NavButton2 isOverlaying={isOverlaying} />
    </div>
  );
}

function Frame5({ isOverlaying }: { isOverlaying: boolean }) {
  const { language } = useLanguage();
  const t = useTranslation();
  const label = language === 'it' ? t.common.buttons.languageToggle.eng : t.common.buttons.languageToggle.ita;
  
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center justify-center relative shrink-0 w-full">
      <p className={`font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 transition-colors duration-500 ease-in-out ${isOverlaying ? 'text-[#F6EEE5]' : 'text-[#714b55]'} text-[16px] text-center text-nowrap tracking-[0.8px] uppercase whitespace-pre`} style={{ fontVariationSettings: "'wdth' 100" }}>
        {label}
      </p>
    </div>
  );
}

function NavButton3({ isOverlaying }: { isOverlaying: boolean }) {
  const { toggleLanguage } = useLanguage();
  
  return (
    <button 
      onClick={toggleLanguage}
      className="content-stretch flex h-full items-center justify-center px-[24px] py-[8px] relative shrink-0 hover:bg-[#AD8E95]/15 transition-colors duration-500 ease-in-out w-[72px]" 
      data-name="Nav button"
    >
      <Frame5 isOverlaying={isOverlaying} />
    </button>
  );
}

function NavLang({ isOverlaying }: { isOverlaying: boolean }) {
  return (
    <div className="content-stretch cursor-pointer flex h-full items-center relative shrink-0" data-name="nav + lang">
      <Nav isOverlaying={isOverlaying} />
      <div className={`h-[20px] w-[1px] mr-[16px] ${isOverlaying ? 'bg-[#F6EEE5]' : 'bg-[#53373e]'} transition-colors duration-500 ease-in-out`} />
      <NavButton3 isOverlaying={isOverlaying} />
    </div>
  );
}

function MaxW({ isOverlaying, isScrolled }: { isOverlaying: boolean; isScrolled?: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1120px] relative shrink-0 w-[1120px]" data-name="max w">
      <Title isOverlaying={isOverlaying} isScrolled={isScrolled} />
      <div className="flex flex-row items-center self-stretch">
        <NavLang isOverlaying={isOverlaying} />
      </div>
    </div>
  );
}

export function Navigation({ isOverlaying }: { isOverlaying: boolean }) {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isHomepage) {
      // On homepage: reduce logo when header changes from transparent to solid
      setIsScrolled(!isOverlaying);
    } else {
      // On other pages: reduce logo after 300px scroll
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 300);
      };

      handleScroll(); // Check initial state
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomepage, isOverlaying]);

  const paddingY = isScrolled ? 'py-[8px]' : 'py-[18px]';

  return (
    <header className={`transition-all duration-300 ease-in-out ${isOverlaying ? 'bg-[rgba(246,238,229,0.7)] backdrop-blur-sm' : 'bg-[#f6eee5]'} sticky top-0 z-[100] ${isOverlaying ? '' : 'shadow-[0px_0px_32px_0px_rgba(89,54,21,0.15)]'} shrink-0 w-full relative`} data-name="Navigation">
      {isOverlaying && (
        <>
          <div className="absolute top-0 left-0 right-0 bottom-[-24px] pointer-events-none" style={{ backgroundImage: "linear-gradient(-5.68434e-14deg, rgba(26, 110, 166, 0) 0%, rgba(26, 110, 166, 0.9) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#F6EEE5] transition-opacity duration-300 ease-in-out z-[1]" />
        </>
      )}
      <div className="flex flex-col items-center size-full">
        <div className={`content-stretch flex flex-col items-center px-[80px] ${paddingY} relative w-full transition-all duration-300 ease-in-out`}>
          <MaxW isOverlaying={isOverlaying} isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
}

function Container() {
  const t = useTranslation();
  return (
    <section className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full" data-name="section wrapper">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[136px] relative w-full" data-name="section container">
          <p className="[text-shadow:rgba(0,0,0,0.35)_2px_2px_7px] font-['EB Garamond',serif] font-normal leading-[1.1] max-w-[1120px] relative shrink-0 text-[#f6eee5] text-[48px] text-center w-full">{t.home.hero.title}</p>
        </div>
      </div>
    </section>
  );
}

function HeroBanner() {
  const [scrollY, setScrollY] = useState(0);
  const heroBannerHeight = 963;

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
    <header className="content-stretch flex flex-col h-[963px] items-center justify-end p-0 relative shrink-0 w-full z-[1] overflow-hidden" data-name="hero banner">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img 
          alt="Proprietà emiliana campagna" 
          className="absolute max-w-none object-bottom object-cover size-full" 
          src={imgHeroBanner}
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(4, 18, 3, 0) 66.827%, rgba(4, 18, 3, 0.8) 100%)" }} />
      </div>
      <Container />
    </header>
  );
}

function NavheroHp() {
  return (
    <div className="content-stretch flex flex-col h-[963px] isolate items-center overflow-clip absolute top-0 left-0 right-0 shrink-0 w-full" data-name="navhero hp">
      <HeroBanner />
    </div>
  );
}

function Contorno() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[0.06%]" data-name="contorno">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 528 239">
        <g id="contorno">
          <g id="70">
            <path d={svgPaths.p1fc2a380} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector" />
            <path d={svgPaths.p6318200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_2" />
            <path d={svgPaths.p9e9a580} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_3" />
            <path d={svgPaths.pe545c00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_4" />
            <path d={svgPaths.p677c800} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_5" />
            <path d={svgPaths.p6c37c80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_6" />
            <path d={svgPaths.padb5100} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_7" />
            <path d={svgPaths.pb42c200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_8" />
            <path d={svgPaths.p3164cac0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_9" />
            <path d={svgPaths.p354a9280} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_10" />
            <path d={svgPaths.p23885200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_11" />
            <path d={svgPaths.pabb1b00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_12" />
            <path d={svgPaths.p1e8fed00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_13" />
            <path d={svgPaths.pc3f9400} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_14" />
            <path d={svgPaths.p14e35b00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_15" />
            <path d={svgPaths.p193c2c00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_16" />
            <path d={svgPaths.p8f07100} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_17" />
            <path d={svgPaths.p28e13af0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_18" />
            <path d={svgPaths.p3ba79e00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_19" />
            <path d={svgPaths.p9b9e180} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_20" />
            <path d={svgPaths.p103ca0c0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_21" />
            <path d={svgPaths.p222a0300} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_22" />
            <path d={svgPaths.p342308f0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_23" />
            <path d={svgPaths.p31e10600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_24" />
            <path d={svgPaths.p2244c400} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_25" />
            <path d={svgPaths.p3b114c80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_26" />
            <path d={svgPaths.p19317e80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_27" />
            <path d={svgPaths.p37995e00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_28" />
            <path d={svgPaths.p3dd75b0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_29" />
            <path d={svgPaths.p10b5a100} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_30" />
            <path d={svgPaths.p1d9d2700} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_31" />
            <path d={svgPaths.p876ad80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_32" />
            <path d={svgPaths.p2db97b70} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_33" />
            <path d={svgPaths.p222b4880} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_34" />
            <path d={svgPaths.p2ec63600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_35" />
            <path d={svgPaths.p2336d680} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_36" />
            <path d={svgPaths.p29dc5900} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_37" />
            <path d={svgPaths.p1a64c80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_38" />
            <path d={svgPaths.p6d221b0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_39" />
            <path d={svgPaths.p37cd9600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_40" />
            <path d={svgPaths.p34cb7b00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_41" />
            <path d={svgPaths.p1257e700} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_42" />
            <path d={svgPaths.p28bf4c00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_43" />
            <path d={svgPaths.p24525670} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_44" />
            <path d={svgPaths.p4600980} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_45" />
            <path d={svgPaths.p1c17f100} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_46" />
            <path d={svgPaths.p390bb580} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_47" />
            <path d={svgPaths.pa2691f0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_48" />
            <path d={svgPaths.pb9e7f80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_49" />
            <path d={svgPaths.p36c15c80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_50" />
            <path d={svgPaths.p254de400} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_51" />
            <path d={svgPaths.p191b5f0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_52" />
            <path d={svgPaths.p5ec0a80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_53" />
            <path d={svgPaths.p608e200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_54" />
            <path d={svgPaths.p329be200} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_55" />
            <path d={svgPaths.p1c030000} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_56" />
            <path d={svgPaths.p13c28f00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_57" />
            <path d={svgPaths.p1d845380} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_58" />
            <path d={svgPaths.p245f8a80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_59" />
            <path d={svgPaths.pa45b4f2} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_60" />
            <path d={svgPaths.p374bca00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_61" />
            <path d={svgPaths.pe24ab00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_62" />
            <path d={svgPaths.p30500b00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_63" />
            <path d={svgPaths.p10ff2100} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_64" />
            <path d={svgPaths.p16cb7600} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_65" />
            <path d={svgPaths.pafb2000} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_66" />
            <path d={svgPaths.p3f390b00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_67" />
            <path d={svgPaths.p2a796c80} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_68" />
            <path d={svgPaths.pf3e88c0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_69" />
            <path d={svgPaths.p7dc9a00} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_70" />
            <path d={svgPaths.p2130b680} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_71" />
            <path d={svgPaths.p5ea6940} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_72" />
            <path d={svgPaths.p2fe879f0} fill="var(--fill-0, #53373E)" fillOpacity="0.7" id="Vector_73" />
          </g>
          <path d={svgPaths.p28415900} fill="var(--fill-0, #53373E)" fillOpacity="0.9" id="90" />
        </g>
      </svg>
    </div>
  );
}

function Illustrazione() {
  return (
    <div className="h-[239px] relative shrink-0 w-[528px]" data-name="illustrazione">
      <Contorno />
    </div>
  );
}

function Testo() {
  const t = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 text-center w-full" data-name="testo">
      <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.15] relative shrink-0 text-[#714b55] text-[32px] w-full">{t.home.apertura.title}</h3>
      <h3 className="block font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#ad3854] text-[16px] tracking-[1.6px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.home.apertura.subtitle}
      </h3>
    </div>
  );
}

function MaxW1() {
  return (
    <section className="max-w-[1120px] relative shrink-0 w-full" data-name="max w">
      <div aria-hidden="true" className="absolute border-t-[1px] border-b-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-center max-w-[inherit] p-[80px] relative w-full">
          <Illustrazione />
          <Testo />
        </div>
      </div>
    </section>
  );
}

function Apertura() {
  return (
    <div className="relative shrink-0 w-full reveal-apertura" data-name="apertura">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[160px] py-[120px] relative w-full">
          <MaxW1 />
        </div>
      </div>
    </div>
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
      <img alt="Sfondo video player" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlayer} />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pb-[8px] pt-[16px] px-[8px] relative w-full">
          <div className="h-[4px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 35.577%, rgba(255, 255, 255, 0) 35.587%), linear-gradient(90deg, rgb(68, 68, 68) 0%, rgb(68, 68, 68) 100%)" }} />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function VideoPlayerWrapper() {
  return (
    <VideoPlayer videoSrc={videoSrc} />
  );
}

function Video() {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} className={`content-stretch flex flex-col items-center relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="video">
      <VideoPlayerWrapper />
    </div>
  );
}

function Button() {
  const t = useTranslation();
  return (
    <Link to="/la-proprieta" className="bg-[#CA427D] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0 hover:bg-[#953C52] transition-colors duration-200" data-name="Button">
      <p className="font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.common.buttons.approfondisci}
      </p>
    </Link>
  );
}

function TextContent() {
  const t = useTranslation();
  return (
    <div className="relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-l-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pl-[40px] pr-0 py-0 relative w-full">
          <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.1] min-w-full relative shrink-0 text-[#ad3854] text-[48px] w-[min-content]">{t.home.sections.laProprieta.title}</h3>
          <div className="font-['Open Sans',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#333333] text-[20px] w-[min-content]">
            <h3 className="block mb-0">{t.home.sections.laProprieta.description}</h3>
            <h3 className="block">{t.home.sections.laProprieta.description2}</h3>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white relative shadow-[-16px_16px_48px_0px_rgba(89,54,21,0.06)] shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[56px] relative w-full">
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function TextBlock() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px mr-[-88px] pb-0 pt-[60px] px-0 relative shrink-0 z-[2]" data-name="Text block">
      <Container1 />
    </div>
  );
}

function Image() {
  return (
    <figure className="aspect-[524/524] basis-0 content-stretch flex grow items-start min-h-px min-w-px mr-[-88px] relative shrink-0 z-[1]" data-name="image">
      <div className="aspect-[348/348] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#c4c4c4] inset-0" />
          <img alt="Proprietà edifici rurali" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage1} />
        </div>
      </div>
    </figure>
  );
}

function MaxW2() {
  return (
    <section className="basis-0 content-stretch flex grow isolate items-start justify-center max-w-[1120px] min-h-px min-w-px pl-0 pr-[88px] py-0 relative shrink-0 z-[1]" data-name="max w">
      <TextBlock />
      <Image />
    </section>
  );
}

function ContenutoLancio() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto lancio">
      <div className="flex flex-row items-center justify-center size-full" data-name="section wrapper">
        <div className="content-stretch flex isolate items-center justify-center p-[80px] relative w-full" data-name="section container">
          <MaxW2 />
        </div>
      </div>
    </article>
  );
}

function Image1() {
  return (
    <figure className="aspect-[524/524] basis-0 content-stretch flex grow items-start min-h-px min-w-px mr-[-88px] relative shrink-0" data-name="image">
      <div className="aspect-[348/348] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image 1">
        <img alt="Contesto eccellenze italiane" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </figure>
  );
}

function Button1() {
  const t = useTranslation();
  return (
    <Link to="/il-contesto" className="bg-[#CA427D] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0 hover:bg-[#953C52] transition-colors duration-200" data-name="Button">
      <p className="font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.common.buttons.approfondisci}
      </p>
    </Link>
  );
}

function TextContent1() {
  const t = useTranslation();
  return (
    <div className="relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-l-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pl-[40px] pr-0 py-0 relative w-full">
          <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.1] min-w-full relative shrink-0 text-[#ad3854] text-[48px] w-[min-content]">{t.home.sections.ilContesto.title}</h3>
          <h3 className="block font-['Open Sans',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#333333] text-[20px] w-[min-content]">{t.home.sections.ilContesto.description}</h3>
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative shadow-[-16px_16px_48px_0px_rgba(89,54,21,0.06)] shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[56px] relative w-full">
          <TextContent1 />
        </div>
      </div>
    </div>
  );
}

function TextBlock1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px mr-[-88px] pb-0 pt-[60px] px-0 relative shrink-0" data-name="Text block">
      <Container2 />
    </div>
  );
}

function MaxW3() {
  return (
    <section className="basis-0 content-stretch flex grow items-start justify-center max-w-[1120px] min-h-px min-w-px pl-0 pr-[88px] py-0 relative shrink-0" data-name="max w">
      <Image1 />
      <TextBlock1 />
    </section>
  );
}

function ContenutoLancio1() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto lancio">
      <div className="flex flex-row items-center justify-center size-full" data-name="section wrapper">
        <div className="content-stretch flex items-center justify-center p-[80px] relative w-full" data-name="section container">
          <MaxW3 />
        </div>
      </div>
    </article>
  );
}

function Button2() {
  const t = useTranslation();
  return (
    <Link to="/linvestimento" className="bg-[#CA427D] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0 hover:bg-[#953C52] transition-colors duration-200" data-name="Button">
      <p className="font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.common.buttons.approfondisci}
      </p>
    </Link>
  );
}

function TextContent2() {
  const t = useTranslation();
  return (
    <section className="relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-l-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pl-[40px] pr-0 py-0 relative w-full" data-name="text content wrapper">
          <h3 className="block font-['EB Garamond',serif] font-normal leading-[1.1] min-w-full relative shrink-0 text-[#ad3854] text-[48px] w-[min-content]">{t.home.sections.prospettiveInvestimento.title}</h3>
          <div className="font-['Open Sans',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#333333] text-[20px] w-[min-content]">
            <h3 className="block mb-0 font-[Open_Sans]">{t.home.sections.prospettiveInvestimento.description}</h3>
            <h3 className="block">{t.home.sections.prospettiveInvestimento.description2}</h3>
          </div>
          <Button2 />
        </div>
      </div>
    </section>
  );
}

function Container3() {
  return (
    <div className="bg-white relative shadow-[-16px_16px_48px_0px_rgba(89,54,21,0.06)] shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[56px] relative w-full">
          <TextContent2 />
        </div>
      </div>
    </div>
  );
}

function TextBlock2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px mr-[-88px] pb-0 pt-[60px] px-0 relative shrink-0 z-[2]" data-name="Text block">
      <Container3 />
    </div>
  );
}

function Image2() {
  const t = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imgImage3Slide1, imgImage3Slide2];
  const altTexts = ["Investimento proprietà emiliana", "Investimento proprietà emiliana"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia immagine ogni 3 secondi

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <figure className="aspect-[524/524] basis-0 content-stretch flex grow items-start min-h-px min-w-px mr-[-88px] relative shrink-0 z-[1]" data-name="image">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="aspect-[348/348] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image 1">
        {images.map((image, index) => (
          <img 
            key={index}
            alt={altTexts[index]} 
            className={`absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={image} 
          />
        ))}
        <figcaption className="absolute top-0 right-0 font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#333333] text-[16px] p-[16px] z-10" style={{ fontVariationSettings: "'wdth' 100" }}>
          {t.home.sections.prospettiveInvestimento.rendering}
        </figcaption>
      </div>
    </figure>
  );
}

function MaxW4() {
  return (
    <section className="basis-0 content-stretch flex grow isolate items-start justify-center max-w-[1120px] min-h-px min-w-px pl-0 pr-[88px] py-0 relative shrink-0 z-[1]" data-name="max w">
      <TextBlock2 />
      <Image2 />
    </section>
  );
}

function ContenutoLancio2() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto lancio">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex isolate items-center justify-center p-[80px] relative w-full">
          <MaxW4 />
        </div>
      </div>
    </article>
  );
}

function MaxW5() {
  const t = useTranslation();
  return (
    <div className="content-stretch flex items-center justify-center max-w-[1120px] px-0 py-[80px] relative shrink-0 w-full" data-name="max w">
      <div aria-hidden="true" className="absolute border-t-[1px] border-b-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <h3 className="basis-0 block font-['EB Garamond',serif] font-normal grow leading-[1.1] min-h-px min-w-px relative shrink-0 text-[#714b55] text-[48px] text-center">{t.home.chiusura.text}</h3>
    </div>
  );
}

function Chiusura() {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} className={`bg-[rgb(246,238,229)] content-stretch flex flex-col items-center p-[80px] relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="chiusura">
      <MaxW5 />
    </div>
  );
}

function Main() {
  return (
    <main className="content-stretch flex flex-col items-center p-0 relative shrink-0 w-full bg-[rgba(255,250,244,0.9)] mt-[859px]" data-name="main" tabIndex={-1}>
      <Apertura />
      <Video />
      <ContenutoLancio />
      <ContenutoLancio1 />
      <ContenutoLancio2 />
      <Chiusura />
    </main>
  );
}




export default function Desktop() {
  const [isOverlaying, setIsOverlaying] = useState(true);
  const heroBannerHeight = 963;

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
    <div className="bg-[#fffaf4] content-stretch flex flex-col items-center relative size-full" data-name="Desktop">
      <Navigation isOverlaying={isOverlaying} />
      <NavheroHp />
      <Main />
      <Footer />
    </div>
  );
}
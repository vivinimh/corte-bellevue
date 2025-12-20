import { useState, useEffect } from "react";
import { Navigation } from "./Desktop";
import Footer from "../components/Footer";
import CrossSections from "../components/CrossSections";
import PageHeader from "../components/PageHeader";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "../hooks/useTranslation";

// Images from assets
import imgNavheroPage from "../../assets/photos/investimento/Hero.jpg";
import imgIntro1 from "../../assets/photos/investimento/intro/Photo 1.jpeg";
import imgIntro2 from "../../assets/photos/investimento/intro/Photo 2.png";
import imgIntro3 from "../../assets/photos/investimento/intro/Photo 3.jpeg";
import imgIntro4 from "../../assets/photos/investimento/intro/Photo 4.jpeg";

function Copy() {
  const t = useTranslation();
  return (
    <section className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="copy">
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.15] relative shrink-0 text-[#ad3854] text-[32px] w-full">{t.linvestimento.intro.title}</p>
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#333333] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }} data-name="description content">
        <h3 className="block">{t.linvestimento.intro.description}</h3>
      </div>
    </section>
  );
}

function Image() {
  const t = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imgIntro1, imgIntro2, imgIntro3, imgIntro4];
  const altTexts = ["Proprietà ristrutturazione potenziale", "Relais charm agriturismo", "Residenza privata prestigio", "Investimento ospitalità internazionale"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia immagine ogni 3 secondi

    return () => clearInterval(interval);
  }, [images.length]);

  const showCaption = currentIndex === 1 || currentIndex === 3;

  return (
    <figure className="aspect-[536/536] basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Image">
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0 relative w-full" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1">
        {images.map((image, index) => (
          <img 
            key={index}
            alt={altTexts[index]} 
            className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={image} 
          />
        ))}
        {showCaption && (
          <figcaption className="absolute top-0 right-0 font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#333333] text-[14px] p-[16px] z-10" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t.linvestimento.intro.renderingRistrutturazione}
          </figcaption>
        )}
      </div>
    </figure>
  );
}

function MaxW1() {
  return (
    <section className="basis-0 content-stretch flex gap-[48px] grow h-full items-start justify-center max-w-[1120px] min-h-px min-w-px mx-auto px-0 py-[80px] relative shrink-0 border-t border-b border-[#AD3854]" data-name="max w">
      <Copy />
      <Image />
    </section>
  );
}

function ContenutoFotoIsolata() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`bg-[#f6eee5] relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto foto isolata">
      <div className="flex flex-row items-center justify-center size-full" data-name="section wrapper">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[80px] relative w-full" data-name="section container">
          <MaxW1 />
        </div>
      </div>
    </article>
  );
}

function Image1() {
  return (
    <figure className="aspect-[536/536] basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Image">
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0 border-[1px] border-[#ad3854] p-[16px] relative" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1">
        <img alt="Investimento proprietà emiliana" className="absolute inset-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] max-w-none object-50%-50% object-cover pointer-events-none" src={imgNavheroPage} />
      </div>
    </figure>
  );
}

function Copy1() {
  const t = useTranslation();
  return (
    <section className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="copy">
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#333333] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }} data-name="description content">
        <h3 className="block mb-0">{t.linvestimento.terreno.description}</h3>
        <h3 className="block">{t.linvestimento.terreno.description2}</h3>
      </div>
    </section>
  );
}

function MaxW2() {
  return (
    <section className="basis-0 content-stretch flex gap-[48px] grow h-full items-start justify-center max-w-[1120px] min-h-px min-w-px relative shrink-0" data-name="max w">
      <Image1 />
      <Copy1 />
    </section>
  );
}

function ContenutoFotoIsolata1() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`bg-[#fffaf4] relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto foto isolata">
      <div className="flex flex-row items-center justify-center size-full" data-name="section wrapper">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[80px] relative w-full" data-name="section container">
          <MaxW2 />
        </div>
      </div>
    </article>
  );
}

function MaxW3() {
  const t = useTranslation();
  return (
    <section className="content-stretch flex items-center justify-center max-w-[1120px] px-0 py-[80px] relative shrink-0 w-full" data-name="max w">
      <div aria-hidden="true" className="absolute border-t-[1px] border-b-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <h3 className="basis-0 block font-['EB_Garamond:Regular',sans-serif] font-normal grow leading-[1.1] min-h-px min-w-px relative shrink-0 text-[#714b55] text-[48px] text-center">{t.linvestimento.chiusura.text}</h3>
    </section>
  );
}

function Chiusura() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className={`bg-[#f6eee5] relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="chiusura">
      <div className="flex flex-col items-center size-full" data-name="section wrapper">
        <div className="content-stretch flex flex-col items-center p-[80px] relative w-full" data-name="section container">
          <MaxW3 />
        </div>
      </div>
    </section>
  );
}

function Main() {
  return (
    <main className="content-stretch flex flex-col items-center p-0 relative shrink-0 w-full overflow-hidden" data-name="main" tabIndex={-1}>
      <ContenutoFotoIsolata />
      <ContenutoFotoIsolata1 />
      <Chiusura />
    </main>
  );
}

function Button() {
  const t = useTranslation();
  return (
    <button className="bg-[#CA427D] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-left text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.common.buttons.approfondisci}
      </p>
    </button>
  );
}

function TextContent() {
  const t = useTranslation();
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-[#ad3854] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pl-[40px] pr-0 py-0 relative size-full">
          <h3 className="block font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.1] min-w-full relative shrink-0 text-[#ad3854] text-[48px] w-[min-content]">{t.linvestimento.crossSections.ilContesto.title}</h3>
          <h3 className="-webkit-box basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t.linvestimento.crossSections.ilContesto.description}
          </h3>
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shadow-[-16px_16px_48px_0px_rgba(89,54,21,0.06)] shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[56px] relative size-full">
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function TextBlock() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Text block">
      <Container />
    </div>
  );
}

function Button1() {
  const t = useTranslation();
  return (
    <button className="bg-[#CA427D] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-left text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.common.buttons.approfondisci}
      </p>
    </button>
  );
}

function TextContent1() {
  const t = useTranslation();
  return (
    <div className="relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-[#ad3854] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pl-[40px] pr-0 py-0 relative w-full">
          <h3 className="block font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.1] min-w-full relative shrink-0 text-[#ad3854] text-[48px] w-[min-content]">{t.linvestimento.crossSections.laProprieta.title}</h3>
          <div className="-webkit-box font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[20px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <h3 className="block mb-0">{t.laProprieta.intro.title}</h3>
            <h3 className="block">{t.laProprieta.intro.description}</h3>
          </div>
          <Button1 />
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
          <TextContent1 />
        </div>
      </div>
    </div>
  );
}

function TextBlock1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text block">
      <Container1 />
    </div>
  );
}

export default function Desktop() {
  const t = useTranslation();
  return (
    <div className="bg-[#fffaf4] content-stretch flex flex-col items-start relative size-full" data-name="Desktop">
      <Navigation isOverlaying={false} />
      <PageHeader 
        title={t.linvestimento.pageTitle}
        subtitle={t.linvestimento.pageSubtitle}
        image={imgNavheroPage}
        variant="desktop"
      />
      <Main />
      <CrossSections 
        leftCard={{
          title: t.linvestimento.crossSections.ilContesto.title,
          description: t.linvestimento.crossSections.ilContesto.description
        }}
        rightCard={{
          title: t.linvestimento.crossSections.laProprieta.title,
          description: (
            <>
              <h3 className="block mb-0">{t.linvestimento.crossSections.laProprieta.description}</h3>
              <h3 className="block">{t.linvestimento.crossSections.laProprieta.description2}</h3>
            </>
          )
        }}
      />
      <Footer />
    </div>
  );
}

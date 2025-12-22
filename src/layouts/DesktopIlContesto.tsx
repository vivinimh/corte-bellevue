import { Navigation } from "./Desktop";
import Footer from "../components/Footer";
import CrossSections from "../components/CrossSections";
import PageHeader from "../components/PageHeader";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "../hooks/useTranslation";

// Images from assets
import imgNavheroPage from "../../assets/photos/contesto/Hero.png";
import imgImage1 from "../../assets/photos/contesto/Photo 1.png";
import imgWhatsAppImage20251121At1442501 from "../../assets/photos/contesto/Photo 2.png";
import imgWhatsAppImage20251121At1442502 from "../../assets/photos/contesto/Photo 3.jpg";

function Image() {
  const [ref, isInView] = useInView();
  return (
    <figure ref={ref} className={`bg-[#f6eee5] content-stretch flex flex-col items-center justify-center overflow-hidden relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="Image">
      <div className="aspect-square relative shrink-0 w-full overflow-hidden" data-name="Image 1">
        <img alt="Barili aceto balsamico" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgImage1} />
      </div>
    </figure>
  );
}

function ParagraphContent() {
  const [ref, isInView] = useInView();
  const t = useTranslation();
  return (
    <div ref={ref} className={`font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#333333] text-[20px] w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} style={{ fontVariationSettings: "'wdth' 100" }}>
      <p className="mb-0">{t.ilContesto.intro.description}</p>
      <p>{t.ilContesto.intro.description2}</p>
    </div>
  );
}

function Content() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className={`basis-0 content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px relative shrink-0 reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="content">
      <Image />
    </section>
  );
}

function Title() {
  const [ref, isInView] = useInView();
  const t = useTranslation();
  return (
    <p ref={ref} className={`font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.15] relative shrink-0 text-[#ad3854] text-[32px] w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`}>{t.ilContesto.intro.title}</p>
  );
}

function MaxW1() {
  return (
    <section className="basis-0 content-stretch flex gap-[80px] grow items-start max-w-[1120px] min-h-px min-w-px mx-auto px-0 py-[80px] relative shrink-0 border-t border-b border-[#AD3854]" data-name="max w">
      <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="text content wrapper">
        <Title />
        <ParagraphContent />
      </div>
      <Content />
    </section>
  );
}

function ContenutoTitoloIsolato() {
  return (
    <article className="bg-[#f6eee5] relative shrink-0 w-full" data-name="contenuto titolo isolato">
      <div className="flex flex-row items-center size-full" data-name="section wrapper">
        <div className="content-stretch flex items-center justify-center p-[80px] relative w-full" data-name="section container">
          <MaxW1 />
        </div>
      </div>
    </article>
  );
}

function Image1() {
  const [ref, isInView] = useInView();
  return (
    <figure ref={ref} className={`aspect-[536/536] basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="Image">
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0 border-[3px] border-[#ad3854] p-[16px] relative" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1">
        <img alt="Vista aerea Modena" className="absolute inset-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] max-w-none object-50%-50% object-cover pointer-events-none" src={imgWhatsAppImage20251121At1442501} />
      </div>
    </figure>
  );
}

function Copy() {
  const [ref, isInView] = useInView();
  const t = useTranslation();
  return (
    <section ref={ref} className={`basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="copy">
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#333333] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }} data-name="description content">
        <h3 className="block mb-0">{t.ilContesto.modena.description}</h3>
        <h3 className="block mb-0">{t.ilContesto.modena.description2}</h3>
        <h3 className="block">{t.ilContesto.modena.description3}</h3>
      </div>
    </section>
  );
}

function MaxW2() {
  return (
    <section className="basis-0 content-stretch flex gap-[48px] grow h-full items-start justify-center max-w-[1120px] min-h-px min-w-px mx-auto relative shrink-0" data-name="max w">
      <Image1 />
      <Copy />
    </section>
  );
}

function ContenutoFotoIsolata() {
  return (
    <article className="relative shrink-0 w-full" data-name="contenuto foto isolata">
      <div className="flex flex-row items-center justify-center size-full" data-name="section wrapper">
        <div className="content-stretch flex items-center justify-center p-[80px] relative w-full" data-name="section container">
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <MaxW2 />
          </div>
        </div>
      </div>
    </article>
  );
}

function Copy1() {
  const [ref, isInView] = useInView();
  const t = useTranslation();
  return (
    <section ref={ref} className={`basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="copy">
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#333333] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }} data-name="description content">
        <h3 className="block mb-0">{t.ilContesto.natura.description}</h3>
        <h3 className="block mb-0">{t.ilContesto.natura.description2}</h3>
        <h3 className="block">{t.ilContesto.natura.description3}</h3>
      </div>
    </section>
  );
}

function Image2() {
  const [ref, isInView] = useInView();
  return (
    <figure ref={ref} className={`aspect-[536/536] basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="Image">
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0 border-[3px] border-[#ad3854] p-[16px] relative" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1">
        <img alt="Campagna verde montagne" className="absolute inset-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover pointer-events-none" src={imgWhatsAppImage20251121At1442502} />
      </div>
    </figure>
  );
}

function MaxW3() {
  return (
    <section className="basis-0 content-stretch flex gap-[48px] grow h-full items-start justify-center max-w-[1120px] min-h-px min-w-px mx-auto relative shrink-0" data-name="max w">
      <Copy1 />
      <Image2 />
    </section>
  );
}

function ContenutoFotoIsolata1() {
  return (
    <article className="bg-[#fffaf4] relative shrink-0 w-full" data-name="contenuto foto isolata">
      <div className="flex flex-row items-center justify-center size-full" data-name="section wrapper">
        <div className="content-stretch flex items-center justify-center p-[80px] relative w-full" data-name="section container">
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <MaxW3 />
          </div>
        </div>
      </div>
    </article>
  );
}

function Main() {
  return (
    <main className="content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 w-full" data-name="main" tabIndex={-1}>
      <ContenutoTitoloIsolato />
      <ContenutoFotoIsolata />
      <ContenutoFotoIsolata1 />
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
          <h3 className="block font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.1] min-w-full relative shrink-0 text-[#ad3854] text-[48px] w-[min-content]">{t.ilContesto.crossSections.linvestimento.title}</h3>
          <div className="-webkit-box basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <h3 className="block mb-0">{t.ilContesto.crossSections.linvestimento.description}</h3>
            <h3 className="block">{t.ilContesto.crossSections.linvestimento.description2}</h3>
          </div>
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
          <h3 className="block font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.1] min-w-full relative shrink-0 text-[#ad3854] text-[48px] w-[min-content]">{t.ilContesto.crossSections.laProprieta.title}</h3>
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
        title={t.ilContesto.pageTitle}
        subtitle={t.ilContesto.pageSubtitle}
        image={imgNavheroPage}
        variant="desktop"
      />
      <Main />
      <CrossSections 
        leftCard={{
          title: t.ilContesto.crossSections.laProprieta.title,
          description: (
            <>
              <h3 className="block mb-0">{t.ilContesto.crossSections.laProprieta.description}</h3>
              <h3 className="block">{t.ilContesto.crossSections.laProprieta.description2}</h3>
            </>
          )
        }}
        rightCard={{
          title: t.ilContesto.crossSections.linvestimento.title,
          description: (
            <>
              <h3 className="block mb-0">{t.ilContesto.crossSections.linvestimento.description}</h3>
              <h3 className="block">{t.ilContesto.crossSections.linvestimento.description2}</h3>
            </>
          )
        }}
      />
      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import { Navigation } from "./Tablet";
import Footer from "../components/Footer";
import CrossSections from "../components/CrossSections";
import ImageCarousel from "../components/ImageCarousel";
import PageHeader from "../components/PageHeader";
// Images from assets
import imgNavheroPage from "../../assets/photos/interni basso/DSC_4405.jpg";
import imgWhatsAppImage20251121At1442501 from "../../assets/photos/interni basso/DSC_4406.jpg";
import imgWhatsAppImage20251121At1442502 from "../../assets/photos/interni basso/DSC_4407.jpg";
import imgWhatsAppImage20251121At1442503 from "../../assets/photos/interni basso/DSC_4408-HDR.jpg";

// Carousel images from interni basso folder
import carouselImg1 from "../../assets/photos/interni basso/DSC_4405.jpg";
import carouselImg2 from "../../assets/photos/interni basso/DSC_4406.jpg";
import carouselImg3 from "../../assets/photos/interni basso/DSC_4407.jpg";
import carouselImg4 from "../../assets/photos/interni basso/DSC_4408-HDR.jpg";
import carouselImg5 from "../../assets/photos/interni basso/DSC_4411-HDR.jpg";
import carouselImg6 from "../../assets/photos/interni basso/DSC_4414-HDR.jpg";
import carouselImg7 from "../../assets/photos/interni basso/DSC_4417-HDR.jpg";
import carouselImg8 from "../../assets/photos/interni basso/DSC_4420.jpg";
import carouselImg9 from "../../assets/photos/interni basso/DSC_4421.jpg";
import carouselImg10 from "../../assets/photos/interni basso/DSC_4422.jpg";
import carouselImg11 from "../../assets/photos/interni basso/DSC_4423-HDR.jpg";
import carouselImg12 from "../../assets/photos/interni basso/DSC_4426.jpg";
import carouselImg13 from "../../assets/photos/interni basso/DSC_4429.jpg";
import carouselImg14 from "../../assets/photos/interni basso/DSC_4430.jpg";
import carouselImg15 from "../../assets/photos/interni basso/DSC_4431.jpg";
import carouselImg16 from "../../assets/photos/interni basso/DSC_4432.jpg";
import carouselImg17 from "../../assets/photos/interni basso/DSC_4433-HDR.jpg";
import carouselImg18 from "../../assets/photos/interni basso/DSC_4436.jpg";
import carouselImg19 from "../../assets/photos/interni basso/DSC_4437-HDR.jpg";
import carouselImg20 from "../../assets/photos/interni basso/DSC_4440-HDR.jpg";
import carouselImg21 from "../../assets/photos/interni basso/DSC_4443-HDR.jpg";
import carouselImg22 from "../../assets/photos/interni basso/DSC_4446.jpg";
import carouselImg23 from "../../assets/photos/interni basso/DSC_4447.jpg";
import carouselImg24 from "../../assets/photos/interni basso/DSC_4454-HDR.jpg";
import carouselImg25 from "../../assets/photos/interni basso/DSC_4457-HDR.jpg";
import carouselImg26 from "../../assets/photos/interni basso/DSC_4460.jpg";
import carouselImg27 from "../../assets/photos/interni basso/DSC_4463.jpg";
import carouselImg28 from "../../assets/photos/interni basso/DSC_4465.jpg";
import carouselImg29 from "../../assets/photos/interni basso/DSC_4466.jpg";
import carouselImg30 from "../../assets/photos/interni basso/DSC_4467.jpg";
import carouselImg31 from "../../assets/photos/interni basso/DSC_4468.jpg";
import carouselImg32 from "../../assets/photos/interni basso/DSC_4469.jpg";
import carouselImg33 from "../../assets/photos/interni basso/DSC_4470.jpg";
import carouselImg34 from "../../assets/photos/interni basso/DSC_4471.jpg";
import carouselImg35 from "../../assets/photos/interni basso/DSC_4472.jpg";
import carouselImg36 from "../../assets/photos/interni basso/DSC_4473.jpg";
import carouselImg37 from "../../assets/photos/interni basso/DSC_4474.jpg";
import carouselImg38 from "../../assets/photos/interni basso/DSC_4475.jpg";
import carouselImg39 from "../../assets/photos/interni basso/DSC_4476.jpg";

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

function Image() {
  return (
    <div className="aspect-[672/672] basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Image">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgWhatsAppImage20251121At1442501} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgWhatsAppImage20251121At1442502} />
        </div>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="copy">
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.18] relative shrink-0 text-[#ad3854] text-[24px] w-full">Corte Belle Vue dispone di quattro edifici che possono essere utilizzati in futuro sia a scopo abitativo che commerciale, le strutture si affacciano su una corte comune e sono circondati da campagna a perdita d’occhio.</p>
      <div className="font-['Open_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#333333] text-[18px] w-full">
        <h3 className="block mb-0">{`Al centro della proprietà, la casa padronale dal fascino autentico e il suo fienile/stalla sulla destra (edifici A-C) dominano la campagna emiliana. Adiacente sulla sinistra si trova quello che una volta veniva definito il basso comodo. Edificio spazioso e luminoso, interamente ristrutturato (edificio B). `}</h3>
        <h3 className="block mb-0">{`Di fronte sull’altro lato è situato il fienile/stalla con il suo porticato d'epoca e gli ampi volumi luminosi che custodisce il fascino dell'architettura rurale emiliana (edificio D). Un altro edificio si trova accanto alla casa padronale e si presterebbe magnificamente ad una ristrutturazione open-space tipo loft con affaccio sul vigneto.`}</h3>
        <h3 className="block font-['Open_Sans:Bold',sans-serif] font-bold text-[#ad3854]">{`La corte disposta a ferro di cavallo, si affaccia sull'Appennino Tosco-Emiliano.`}</h3>
      </div>
    </div>
  );
}

function MaxW1() {
  return (
    <div className="content-stretch flex gap-[64px] items-start justify-center max-w-[1120px] px-0 py-[64px] relative shrink-0 w-full border-t border-b border-[#AD3854]" data-name="max w">
      <Image />
      <Copy />
    </div>
  );
}

function ContenutoFotoIsolata() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto foto isolata">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative w-full">
          <MaxW1 />
        </div>
      </div>
    </article>
  );
}

// Array of images for the carousel
const carouselImages = [
  carouselImg1,
  carouselImg2,
  carouselImg3,
  carouselImg4,
  carouselImg5,
  carouselImg6,
  carouselImg7,
  carouselImg8,
  carouselImg9,
  carouselImg10,
  carouselImg11,
  carouselImg12,
  carouselImg13,
  carouselImg14,
  carouselImg15,
  carouselImg16,
  carouselImg17,
  carouselImg18,
  carouselImg19,
  carouselImg20,
  carouselImg21,
  carouselImg22,
  carouselImg23,
  carouselImg24,
  carouselImg25,
  carouselImg26,
  carouselImg27,
  carouselImg28,
  carouselImg29,
  carouselImg30,
  carouselImg31,
  carouselImg32,
  carouselImg33,
  carouselImg34,
  carouselImg35,
  carouselImg36,
  carouselImg37,
  carouselImg38,
  carouselImg39,
];

function Slide() {
  return (
    <ImageCarousel
      images={carouselImages}
      initialIndex={1}
      variant="tablet"
    />
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Section header">
      <h2 className="block font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.15] relative shrink-0 text-[#ad3854] text-[32px] w-full">Il basso comodo ristrutturato</h2>
    </div>
  );
}

function Col() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] gap-[24px] items-start leading-[0] not-italic relative shrink-0 text-[#333333] w-full" data-name="col">
      <div className="relative shrink-0 w-full text-[18px]">
        <p className="leading-[1.4] mb-0 not-italic whitespace-pre-wrap">
          <span className="font-['Open_Sans:Bold',sans-serif]">{`Affacciato a sud  ovest troviamo l'edificio (B)  con una metratura totale di circa 300 mq che coniuga funzionalità, eleganza e versatilità`}</span>
          <span className="font-['Open_Sans:Regular',sans-serif]">{`. La struttura è suddivisa in due unità abitative: l'appartamento principale e un appartamento per gli ospiti con ingresso indipendente. Il basso  comodo dispone anche di due garage collocati ai lati dell'ingresso principale nel lato ovest.`}</span>
        </p>
        <p className="leading-[1.4] not-italic">
          <span className="font-['Open_Sans:Bold',sans-serif]">L’appartamento principale accoglie un ampio ingresso</span>
          <span className="font-['Open_Sans:Regular',sans-serif]">{` dominato da una scala di pregio in ottone fumè che conduce al primo piano dove incontriamo un elegante e luminoso salone dagli alti soffitti dotato di camino e stube, cuore caldo e raffinato della casa. Da qui si accede ad un’ampia cucina luminosa di 16 mq arredata con un gusto eclettico; sempre dal salone si raggiunge la zona notte con due stanze ed un bagno arredato con rivestimenti di pregio dal rilievo materico e grezzo, che ricorda il travertino.`}</span>
        </p>
      </div>
      <div className="leading-[1.4] relative shrink-0 text-[18px] w-full">
        <p className="mb-0">{`Dal salone, fulcro abitativo della casa, una moderna scala in acciaio e vetro ci porta verso un ampio soppalco con affaccio sul living, ideale come zona lettura o studio. Nel sottotetto si trova una stanza armadio, facilmente adattabile a camera aggiuntiva e un bagno con vasca, elegante e confortevole. Ripercorrendo la scala che dirige verso l'entrata troviamo al piano ammezzato, il vano tecnico e la lavanderia. `}</p>
        <p className="mb-0">{`Al piano terra, lato sud con entrata indipendente, si trovano circa 90 mq di abitazione per gli ospiti composta da cucina, tavernetta, due bagni, uno studio e una sala hobby. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold not-italic text-[#ad3854] whitespace-pre-wrap">{`L’abitazione principale e quella per  gli ospiti sono catastalmente uniche.`}</p>
      </div>
    </div>
  );
}

function Copy1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="copy">
      <SectionHeader />
      <Col />
    </div>
  );
}

function MaxW2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[1120px] relative shrink-0 w-full" data-name="max w">
      <Slide />
      <Copy1 />
    </div>
  );
}

function ContenutoConCarousel() {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} className={`bg-white relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="Contenuto con carousel">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[64px] relative w-full">
          <MaxW2 />
        </div>
      </div>
    </div>
  );
}

function Image12() {
  return (
    <div className="aspect-[672/672] basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Image">
      <div className="basis-0 bg-[#c4c4c4] grow min-h-px min-w-px shrink-0 w-full" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1" />
    </div>
  );
}

function Copy2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="copy">
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.18] relative shrink-0 text-[#ad3854] text-[24px] w-full">Gli altri locali</p>
      <div className="font-['Open_Sans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] w-full">
        <h3 className="block leading-[1.4] mb-0">Al centro della proprietà, la casa padronale dal fascino autentico ed il suo fienile/stalla sulla destra, dominano la campagna emiliana</h3>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px] whitespace-pre-wrap">
            <span className="leading-[1.4]">{`La casa padronale (edificio A - C) si sviluppa su due livelli oltre ad un sottotetto ad uso soffitta e una piccola porzione interrata ad uso cantina. Al pianterreno sono disposti locali quali androne passante: a sinistra il  soggiorno  e cucina; mentre a destra una stanza ad uso tv o sala hobby, l’accesso al vano scala e in fondo la  cantina. Al piano superiore  sono ubicate cinque camere oltre disimpegno, bagno e ripostiglio. Al secondo piano ampi locali ad uso soffitta con altezze comprese fra ml 1.00 e 2.55. La superficie totale è di  240 mq esclusa la soffitta. `}</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.4]">{`L'annesso (edificio A) ha una unica volumetria di 637 metri cubi e non è diviso in vani.`}</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[1.4]">Il fienile/stalla (edificio D) è caratterizzato da un porticato d’epoca ad elle, unico nel suo genere; con ampi spazi che possono essere adibiti a scopo abitativo o commerciale ed ha una superficie totale di 1180 metri cubi, escluso il porticato.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function MaxW3() {
  return (
    <div className="content-stretch flex gap-[64px] items-start justify-center max-w-[1120px] relative shrink-0 w-full" data-name="max w">
      <Image12 />
      <Copy2 />
    </div>
  );
}

function ContenutoFotoIsolata1() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto foto isolata">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[64px] relative w-full">
          <MaxW3 />
        </div>
      </div>
    </article>
  );
}

function Copy3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="copy">
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.18] relative shrink-0 text-[#ad3854] text-[24px] w-[352px]">Il vigneto e l’acetaia</p>
      <h3 className="block font-['Open_Sans:Regular',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#333333] text-[18px] w-[min-content]">{`Corte Belle Vue custodisce un patrimonio agricolo di rara bellezza. Una parte coltivato con vitigni di Lambrusco Grasparossa (sia IGT e DOC), caratterizzato da un frutto di colore rosso rubino intenso, profumo fruttato con note di amarena e ciliegia. Il Lambrusco Salamino (sia IGT e DOC) ha invece un colore più intenso a spuma vivace, al naso presenta profumi di frutta rossa e al palato secco con una piacevole acidità. Infine alcuni filari di Trebbiano di Spagna alimentano l’acetaia di proprietà della famiglia; una piccola batteria costituita da dieci botti, alcune della fine dell'Ottocento. Una tradizione che racconta la lenta magia dell’Aceto Balsamico di Modena Doc e Dop. Un'eccellenza che presto sarà annoverata tra i beni immateriali dell’ Unesco, simbolo di tradizione e maestria emiliana.`}</h3>
    </div>
  );
}

function Image13() {
  return (
    <div className="aspect-[672/672] basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Image">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatsAppImage20251121At1442503} />
      </div>
    </div>
  );
}

function MaxW4() {
  return (
    <div className="content-stretch flex gap-[64px] items-start justify-center max-w-[1120px] relative shrink-0 w-full" data-name="max w">
      <Copy3 />
      <Image13 />
    </div>
  );
}

function ContenutoFotoIsolata2() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto foto isolata">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[64px] relative w-full">
          <MaxW4 />
        </div>
      </div>
    </article>
  );
}

function Main() {
  return (
    <main className="content-stretch flex flex-col items-center p-0 relative shrink-0 w-full" data-name="main" tabIndex={-1}>
      <ContenutoFotoIsolata />
      <ContenutoConCarousel />
      <ContenutoFotoIsolata1 />
      <ContenutoFotoIsolata2 />
    </main>
  );
}

export default function Tablet() {
  return (
    <div className="bg-[#fffaf4] content-stretch flex flex-col items-center relative size-full" data-name="Tablet">
      <Navigation isOverlaying={false} />
      <PageHeader 
        title="La proprietà" 
        image={imgNavheroPage}
        variant="tablet"
      />
      <Main />
      <CrossSections 
        leftCard={{
          title: "Il contesto",
          description: "Il contesto circostante è una vetrina di eccellenze mondiali: a pochi minuti si trova la sede della Ferrari Spa Formula 1, Pagani Spa auto di lusso, l'Osteria Francescana di Massimo Bottura, le acetaie storiche di Modena e il distretto della ceramica di Sassuolo. Corte Belle Vue sorge in un territorio unico, dove heritage e innovazione convivono armoniosamente, raccontando l'essenza del Made in Italy e di uno stile di vita legato alle tradizioni e ad un patrimonio culturale unico al mondo."
        }}
        rightCard={{
          title: "L'investimento",
          description: (
            <>
              <h3 className="block mb-0">La posizione strategica, la bellezza naturale e la versatilità architettonica rendono questa proprietà una scelta di valore per chi cerca un investimento emozionale e solido nel tempo. Ad esempio, attraverso questa suggestiva immagine realizzata con l'intelligenza artificiale, si intuisce come un fienile possa rivelare tutto il suo potenziale, trasformandosi in una dimora d'ispirazione provenzale.</h3>
              <h3 className="block">Qui si può costruire un progetto di ospitalità di livello internazionale, o semplicemente vivere il sogno di una vita immersa nei ritmi autentici dell'Emilia.</h3>
            </>
          )
        }}
      />
      <Footer />
    </div>
  );
}
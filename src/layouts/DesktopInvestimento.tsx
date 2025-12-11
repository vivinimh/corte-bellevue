import { useState, useEffect } from "react";
import { Navigation } from "./Desktop";
import Footer from "../components/Footer";
import CrossSections from "../components/CrossSections";
import PageHeader from "../components/PageHeader";

// Placeholder image - replace with actual image from assets folder
const imgNavheroPage = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=963&fit=crop";

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

function Copy() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="copy">
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#333333] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <h3 className="block mb-0">Corte Belle Vue è un insieme armonioso di spazi e funzioni, capace di adattarsi a molteplici visioni imprenditoriali e residenziali.</h3>
        <h3 className="block mb-0">La sua versatilità è la chiave: la proprietà può trasformarsi in un Relais de Charme, in un agriturismo esclusivo, oppure in una residenza privata di prestigio per chi desidera vivere e investire nel cuore autentico dell'Emilia.</h3>
        <h3 className="block mb-0">I dieci ettari di terreno, di cui otto coltivati a vigneto di Lambrusco e Trebbiano di Spagna, offrono un potenziale produttivo concreto. Le vigne, curate e ben esposte, rappresentano una base ideale per una produzione vinicola di qualità o per progetti di enoturismo esperienziale, dove ospitalità, gusto e cultura rurale si fondono in un'unica proposta autentica.</h3>
        <h3 className="block">All'interno della tenuta, l'acetaia con alcune botti autentiche dell'Ottocento conferisce ulteriore prestigio alla proprietà, un elemento distintivo che permette di sviluppare una produzione di nicchia o arricchire un progetto ricettivo con un'esperienza territoriale d'eccellenza.</h3>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="aspect-[536/536] basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Image">
      <div className="basis-0 bg-[#c4c4c4] grow h-full min-h-px min-w-px shrink-0" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1" />
    </div>
  );
}

function MaxW1() {
  return (
    <div className="basis-0 content-stretch flex gap-[48px] grow h-full items-start justify-center max-w-[1120px] min-h-px min-w-px relative shrink-0" data-name="max w">
      <Copy />
      <Image />
    </div>
  );
}

function ContenutoFotoIsolata() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`bg-[#f6eee5] relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto foto isolata">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[80px] relative w-full">
          <MaxW1 />
        </div>
      </div>
    </article>
  );
}

function Image1() {
  return (
    <div className="aspect-[536/536] basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Image">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavheroPage} />
      </div>
    </div>
  );
}

function Copy1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="copy">
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#333333] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <h3 className="block mb-0">I dieci ettari di terreno, di cui otto coltivati a vigneto di Lambrusco e Trebbiano di Spagna, offrono un potenziale produttivo concreto. Le vigne, curate e ben esposte, rappresentano una base ideale per una produzione vinicola di qualità o per progetti di enoturismo esperienziale, dove ospitalità, gusto e cultura rurale si fondono in un'unica proposta autentica.</h3>
        <h3 className="block">All'interno della tenuta, l'acetaia con alcune botti autentiche dell'Ottocento conferisce ulteriore prestigio alla proprietà, un elemento distintivo che permette di sviluppare una produzione di nicchia o arricchire un progetto ricettivo con un'esperienza territoriale d'eccellenza.</h3>
      </div>
    </div>
  );
}

function MaxW2() {
  return (
    <div className="basis-0 content-stretch flex gap-[48px] grow h-full items-start justify-center max-w-[1120px] min-h-px min-w-px relative shrink-0" data-name="max w">
      <Image1 />
      <Copy1 />
    </div>
  );
}

function ContenutoFotoIsolata1() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`bg-[#fffaf4] relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto foto isolata">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[80px] relative w-full">
          <MaxW2 />
        </div>
      </div>
    </article>
  );
}

function MaxW3() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[1120px] px-0 py-[80px] relative shrink-0 w-full" data-name="max w">
      <div aria-hidden="true" className="absolute border-t-[1px] border-b-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <h3 className="basis-0 block font-['EB_Garamond:Regular',sans-serif] font-normal grow leading-[1.1] min-h-px min-w-px relative shrink-0 text-[#714b55] text-[48px] text-center">Un luogo dove ogni prospettiva d'investimento diventa una storia di valore, autenticità e futuro.</h3>
    </div>
  );
}

function Chiusura() {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} className={`bg-[#f6eee5] relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="chiusura">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[80px] relative w-full">
          <MaxW3 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main className="content-stretch flex flex-col items-center p-0 relative shrink-0 w-full overflow-hidden" data-name="main" tabIndex="-1">
      <ContenutoFotoIsolata />
      <ContenutoFotoIsolata1 />
      <Chiusura />
    </main>
  );
}

function Button() {
  return (
    <button className="bg-[#714b55] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-left text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        approfondisci
      </p>
    </button>
  );
}

function TextContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-[#ad3854] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pl-[40px] pr-0 py-0 relative size-full">
          <h3 className="block font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.1] min-w-full relative shrink-0 text-[#ad3854] text-[48px] w-[min-content]">Il contesto</h3>
          <h3 className="-webkit-box basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Il contesto circostante è una vetrina di eccellenze mondiali: a pochi minuti si trova la sede della Ferrari Spa Formula 1, l'Osteria Francescana di Massimo Bottura, le acetaie storiche di Modena e il distretto della ceramica di Sassuolo. Corte Bellevue sorge in un territorio unico, dove heritage e innovazione convivono armoniosamente, raccontando l'essenza del Made in Italy e di uno stile di vita legato alle tradizioni e ad un patrimonio culturale unico al mondo.
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
  return (
    <button className="bg-[#714b55] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Button">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-left text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        approfondisci
      </p>
    </button>
  );
}

function TextContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-[#ad3854] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pl-[40px] pr-0 py-0 relative w-full">
          <h3 className="block font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.1] min-w-full relative shrink-0 text-[#ad3854] text-[48px] w-[min-content]">La proprietà</h3>
          <div className="-webkit-box font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[20px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <h3 className="block mb-0">Corte Belle Vue dispone di quattro edifici che possono essere utilizzati in futuro sia a scopo abitativo che commerciale, si affacciano su una corte comune e sono circondati da campagna a perdita d'occhio.</h3>
            <h3 className="block">Al centro della proprietà, la casa padronale dal fascino autentico e il suo fienile/stalla sulla destra dominano la campagna emiliana. Adiacente sulla sinistra si trova quello che una volta veniva definito il basso comodo.</h3>
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
  return (
    <div className="bg-[#fffaf4] content-stretch flex flex-col items-start relative size-full" data-name="Desktop">
      <Navigation isOverlaying={false} />
      <PageHeader 
        title="L'investimento" 
        subtitle="Vivere o investire nella terra del gusto e dell'ingegno"
        image={imgNavheroPage}
        variant="desktop"
      />
      <Main />
      <CrossSections 
        leftCard={{
          title: "Il contesto",
          description: "Il contesto circostante è una vetrina di eccellenze mondiali: a pochi minuti si trova la sede della Ferrari Spa Formula 1, Pagani Spa auto di lusso, l'Osteria Francescana di Massimo Bottura, le acetaie storiche di Modena e il distretto della ceramica di Sassuolo. Corte Belle Vue sorge in un territorio unico, dove heritage e innovazione convivono armoniosamente, raccontando l'essenza del Made in Italy e di uno stile di vita legato alle tradizioni e ad un patrimonio culturale unico al mondo."
        }}
        rightCard={{
          title: "La proprietà",
          description: (
            <>
              <h3 className="block mb-0">La tenuta ha quattro edifici rurali di fine Ottocento di interesse storico-architettonico: un'elegante basso comodo interamente ristrutturato, la casa padronale con annesso importante nella sua volumetria ed una stalla-fienile con porticato d'epoca ad elle, unico nel suo genere, sono interamente da ristrutturare.</h3>
              <h3 className="block">Il terreno che circonda gli edifici è per la maggior parte sviluppato a vigneti e in parte minore ad erba spagna.</h3>
            </>
          )
        }}
      />
      <Footer />
    </div>
  );
}

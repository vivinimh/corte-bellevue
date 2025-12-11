import { Navigation } from "./Tablet";
import Footer from "../components/Footer";
import CrossSections from "../components/CrossSections";
import PageHeader from "../components/PageHeader";

// Placeholder images - replace with actual images from assets folder
const imgNavheroPage = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=963&fit=crop";
const imgImage1 = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=672&h=672&fit=crop";
const imgWhatsAppImage20251121At1442501 = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=672&h=672&fit=crop";
const imgWhatsAppImage20251121At1442502 = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=672&h=672&fit=crop";

function Image() {
  return (
    <div className="bg-[#f6eee5] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Image">
      <div className="aspect-[672/672] relative shrink-0 w-full" data-name="Image 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#c4c4c4] inset-0" />
          <img alt="santorini neighborhood" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="content">
      <Image />
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#333333] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">A pochi chilometri da Modena, nel cuore pulsante dell'Emilia, Corte Belle Vue si trova in uno degli otto comuni della celebre MotorValley: dalla Ferrari alla Lamborghini, qui nascono le macchine dell'eccellenza meccanica e di design più iconico al mondo.</p>
        <p>Per non parlare della ricca eredità enogastronomica del territorio, dove incontriamo il rinomato Chef Massimo Bottura e la sua Osteria Francescana, riconosciuto a livello internazionale per la sua maestria nel padroneggiare la cucina tradizionale, interpretandola in modo originale e raffinato. E poi ancora le acetaie storiche, dove nasce il rinomato Aceto Balsamico tradizionale di Modena.</p>
      </div>
    </div>
  );
}

function MaxW1() {
  return (
    <div className="content-stretch flex gap-[64px] items-start justify-center max-w-[1120px] px-0 py-[64px] relative shrink-0 w-full border-t border-b border-[#AD3854]" data-name="max w">
      <h2 className="basis-0 block font-['EB_Garamond:Regular',sans-serif] font-normal grow leading-[1.15] min-h-px min-w-px relative self-stretch shrink-0 text-[#714b55] text-[32px]">Dove le eccellenze italiane sono di casa</h2>
      <Content />
    </div>
  );
}

function ContenutoTitoloIsolato() {
  return (
    <article className="bg-[#f6eee5] relative shrink-0 w-full" data-name="contenuto titolo isolato">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative w-full">
          <MaxW1 />
        </div>
      </div>
    </article>
  );
}

function Image1() {
  return (
    <div className="aspect-[672/672] basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Image">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatsAppImage20251121At1442501} />
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="copy">
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#333333] text-[18px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <h3 className="block mb-0">{`In questa meravigliosa città, troviamo un patrimonio artistico e culturale ricco di storia: Modena è infatti strettamente legata alla dinastia degli estensi, mecenati e promotori delle arti che la fecero cuore del loro ducato, riunendo nella città collezione di opere d'arte di grande valore e costruendo monumentali edifici come il Palazzo Ducale.`}</h3>
        <h3 className="block mb-0">{`Sempre a Modena, abbiamo la fortuna di ospitare uno dei siti riconosciuti patrimonio dell'Umanità dall'Unesco: Il Duomo e La Torre Ghirlandina, vero simbolo della città, magistrale esempio di architettura romanica e gotica. `}</h3>
        <h3 className="block">E poi il complesso di Sassuolo, facente parte dell'Unione dei Comuni del distretto ceramico, dove nascono pregiate piastrelle ancora prime al mondo per qualità e design innovativo.</h3>
      </div>
    </div>
  );
}

function MaxW2() {
  return (
    <div className="content-stretch flex gap-[64px] items-start justify-center max-w-[1120px] relative shrink-0 w-full" data-name="max w">
      <Image1 />
      <Copy />
    </div>
  );
}

function ContenutoFotoIsolata() {
  return (
    <article className="relative shrink-0 w-full" data-name="contenuto foto isolata">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[64px] relative w-full">
          <MaxW2 />
        </div>
      </div>
    </article>
  );
}

function Copy1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="copy">
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#333333] text-[18px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <h3 className="block mb-0">Per finire, la natura che circonda Corte Belle Vue: siamo al centro della meravigliosa campagna formiginese, immersi nel verde, con lo sguardo che abbraccia l'Appennino Tosco-Emiliano ed i suoi comprensori sciistici del Monte Cimone e dell'Abetone, raggiungibili in meno di un'ora.</h3>
        <h3 className="block mb-0">Un paesaggio che unisce la quiete della campagna alla forza produttiva di una delle aree più dinamiche d'Italia.</h3>
        <h3 className="block">Corte Belle Vue sorge dunque in un contesto unico, dove l'artigianalità incontra la tecnologia, la tradizione si fonde con il lusso e ogni strada conduce a un'eccellenza riconosciuta in tutto il mondo.</h3>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="aspect-[672/672] basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Image">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatsAppImage20251121At1442502} />
      </div>
    </div>
  );
}

function MaxW3() {
  return (
    <div className="content-stretch flex gap-[64px] items-start justify-center max-w-[1120px] relative shrink-0 w-full" data-name="max w">
      <Copy1 />
      <Image2 />
    </div>
  );
}

function ContenutoFotoIsolata1() {
  return (
    <article className="bg-[#fffaf4] relative shrink-0 w-full" data-name="contenuto foto isolata">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[64px] relative w-full">
          <MaxW3 />
        </div>
      </div>
    </article>
  );
}

function Main() {
  return (
    <main className="content-stretch flex flex-col items-center p-0 relative shrink-0 w-full" data-name="main" tabIndex={-1}>
      <ContenutoTitoloIsolato />
      <ContenutoFotoIsolata />
      <ContenutoFotoIsolata1 />
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
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-[#ad3854] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <h3 className="block font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.15] min-w-full relative shrink-0 text-[#ad3854] text-[32px] w-[min-content]">Le prospettive d'investimento</h3>
      <h3 className="-webkit-box basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        La posizione strategica, la bellezza naturale e la versatilità architettonica rendono questa proprietà una scelta di valore per chi cerca un investimento emozionale e solido nel tempo. Qui si può costruire un progetto di ospitalità di livello internazionale, o semplicemente vivere il sogno di una vita immersa nei ritmi autentici dell'Emilia.
      </h3>
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shadow-[-16px_16px_48px_0px_rgba(89,54,21,0.06)] shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function TextBlock() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Text block">
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
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-name="Text content">
      <div aria-hidden="true" className="absolute border-[#ad3854] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <h3 className="block font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.15] min-w-full relative shrink-0 text-[#ad3854] text-[32px] w-[min-content]">La proprietà</h3>
      <div className="-webkit-box font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[18px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <h3 className="block mb-0">Corte Belle Vue dispone di quattro edifici che possono essere utilizzati in futuro sia a scopo abitativo che commerciale, si affacciano su una corte comune e sono circondati da campagna a perdita d'occhio.</h3>
        <h3 className="block">Al centro della proprietà, la casa padronale dal fascino autentico e il suo fienile/stalla sulla destra dominano la campagna emiliana. Adiacente sulla sinistra si trova quello che una volta veniva definito il basso comodo.</h3>
      </div>
      <Button1 />
    </div>
  );
}

function Container1() {
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
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text block">
      <Container1 />
    </div>
  );
}

function MaxW4() {
  return (
    <div className="basis-0 content-stretch flex gap-[40px] grow items-start justify-center max-w-[1120px] min-h-px min-w-px relative self-stretch shrink-0" data-name="max w">
      <TextBlock />
      <TextBlock1 />
    </div>
  );
}

export default function Tablet() {
  return (
    <div className="bg-[#fffaf4] content-stretch flex flex-col items-start relative size-full" data-name="Tablet">
      <Navigation isOverlaying={false} />
      <PageHeader 
        title="Il contesto" 
        subtitle="Un luogo ideale per vivere, creare, investire e far parte del racconto più autentico del Made in Italy."
        image={imgNavheroPage}
        variant="tablet"
      />
      <Main />
      <CrossSections 
        leftCard={{
          title: "La proprietà",
          description: "Corte Belle Vue dispone di quattro edifici che possono essere utilizzati in futuro sia a scopo abitativo che commerciale, si affacciano su una corte comune e sono circondati da campagna a perdita d'occhio."
        }}
        rightCard={{
          title: "L'investimento",
          description: (
            <>
              <h3 className="block mb-0">La posizione strategica, la bellezza naturale e la versatilità architettonica rendono questa proprietà una scelta di valore per chi cerca un investimento emozionale e solido nel tempo.</h3>
              <h3 className="block">Qui si può costruire un progetto di ospitalità di livello internazionale, o semplicemente vivere il sogno di una vita immersa nei ritmi autentici dell'Emilia.</h3>
            </>
          )
        }}
      />
      <Footer />
    </div>
  );
}

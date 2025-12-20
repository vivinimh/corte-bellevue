import { useState, useEffect } from "react";
import { Navigation } from "./Mobile";
import Footer from "../components/Footer";
import CrossSections from "../components/CrossSections";
import ImageCarousel from "../components/ImageCarousel";
import PageHeader from "../components/PageHeader";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "../hooks/useTranslation";
// Images from assets
import imgNavheroPage from "../../assets/photos/proprietà/Hero.jpeg";
import imgIntro from "../../assets/photos/proprietà/Intro.png";
import imgGrapes from "../../assets/photos/proprietà/vigneto e acetaia/Photo 2.jpg";
import imgBarrels from "../../assets/photos/proprietà/vigneto e acetaia/Photo 1.jpg";
import imgAltriLocali1 from "../../assets/photos/proprietà/Gli altri locali/Photo 1.jpeg";
import imgAltriLocali2 from "../../assets/photos/proprietà/Gli altri locali/Photo 2.jpeg";

// Carousel images from Il basso comodo folder
import carouselImg1 from "../../assets/photos/proprietà/Il basso comodo/Photo 1.jpg";
import carouselImg2 from "../../assets/photos/proprietà/Il basso comodo/Photo 2.jpg";
import carouselImg3 from "../../assets/photos/proprietà/Il basso comodo/Photo 3.jpg";
import carouselImg4 from "../../assets/photos/proprietà/Il basso comodo/Photo 4.jpg";
import carouselImg5 from "../../assets/photos/proprietà/Il basso comodo/Photo 5.jpg";
import carouselImg6 from "../../assets/photos/proprietà/Il basso comodo/Photo 6.jpg";
import carouselImg7 from "../../assets/photos/proprietà/Il basso comodo/Photo 7.jpg";
import carouselImg8 from "../../assets/photos/proprietà/Il basso comodo/Photo 8.jpg";
import carouselImg9 from "../../assets/photos/proprietà/Il basso comodo/Photo 9.jpg";
import carouselImg10 from "../../assets/photos/proprietà/Il basso comodo/Photo 10.jpg";
import carouselImg11 from "../../assets/photos/proprietà/Il basso comodo/Photo 11.jpg";
import carouselImg12 from "../../assets/photos/proprietà/Il basso comodo/Photo 12.jpg";
import carouselImg13 from "../../assets/photos/proprietà/Il basso comodo/Photo 13.jpg";
import carouselImg14 from "../../assets/photos/proprietà/Il basso comodo/Photo 14.jpg";
import carouselImg15 from "../../assets/photos/proprietà/Il basso comodo/Photo 15.jpg";
import carouselImg16 from "../../assets/photos/proprietà/Il basso comodo/Photo 16.jpg";
import carouselImg17 from "../../assets/photos/proprietà/Il basso comodo/Photo 17.jpg";
import carouselImg18 from "../../assets/photos/proprietà/Il basso comodo/Photo 18.jpg";
import carouselImg19 from "../../assets/photos/proprietà/Il basso comodo/Photo 19.jpg";
import carouselImg20 from "../../assets/photos/proprietà/Il basso comodo/Photo 20.jpg";
import carouselImg21 from "../../assets/photos/proprietà/Il basso comodo/Photo 21.jpg";
import carouselImg22 from "../../assets/photos/proprietà/Il basso comodo/Photo 22.jpg";

function Image() {
  return (
    <figure className="aspect-[352/352] bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Image">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1">
        <img alt="Proprietà edifici ristrutturati" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIntro} />
      </div>
    </figure>
  );
}

function Copy() {
  const t = useTranslation();
  return (
    <section className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="copy">
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.18] relative shrink-0 text-[#ad3854] text-[24px] w-full">{t.laProprieta.intro.title}</p>
      <div className="font-['Open_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#333333] text-[18px] w-full" data-name="description text content">
        <h3 className="block mb-0">{t.laProprieta.intro.description}</h3>
        <h3 className="block mb-0">{t.laProprieta.intro.description2}</h3>
        <h3 className="block font-['Open_Sans:Bold',sans-serif] font-bold text-[#ad3854]">{t.laProprieta.intro.highlight}</h3>
      </div>
    </section>
  );
}

function MaxW1() {
  return (
    <section className="content-stretch flex flex-col gap-[32px] items-start px-0 py-[40px] relative shrink-0 w-full border-t border-b border-[#AD3854]" data-name="max w">
      <Image />
      <Copy />
    </section>
  );
}

function ContenutoFotoIsolata() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto foto isolata">
      <div className="flex flex-col items-center justify-center size-full" data-name="section wrapper">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[40px] relative w-full" data-name="section container">
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
];

function Slide() {
  return (
    <ImageCarousel
      images={carouselImages}
      initialIndex={0}
      variant="mobile"
    />
  );
}

function SectionHeader() {
  const t = useTranslation();
  return (
    <header className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Section header">
      <h2 className="block font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.15] relative shrink-0 text-[#ad3854] text-[32px] w-full">{t.laProprieta.bassoComodo.title}</h2>
    </header>
  );
}

function Col() {
  const t = useTranslation();
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] items-start leading-[0] not-italic relative shrink-0 text-[#333333] text-[0px] w-full" data-name="col">
      <div className="relative shrink-0 w-full" data-name="left column">
        <p className="leading-[1.4] mb-0 not-italic text-[18px] whitespace-pre-wrap">
          <span className="font-['Open_Sans:Bold',sans-serif]">{t.laProprieta.bassoComodo.description.split('.')[0]}.</span>
          <span className="font-['Open_Sans:Regular',sans-serif]">{`. ${t.laProprieta.bassoComodo.description.split('.').slice(1).join('.')}`}</span>
        </p>
        <p className="leading-[1.4] not-italic text-[18px]">
          <span className="font-['Open_Sans:Bold',sans-serif]">{t.laProprieta.bassoComodo.description2.split('.')[0]}</span>
          <span className="font-['Open_Sans:Regular',sans-serif]">{t.laProprieta.bassoComodo.description2.split('.').slice(1).join('.')}</span>
        </p>
      </div>
      <div className="leading-[1.4] relative shrink-0 text-[18px] w-full" data-name="right column">
        <p className="font-['Open_Sans:Regular',sans-serif] mb-0 not-italic">{t.laProprieta.bassoComodo.description3}</p>
        <p className="font-['Open_Sans:Regular',sans-serif] mb-0 not-italic">{t.laProprieta.bassoComodo.description4}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold not-italic text-[#ad3854] whitespace-pre-wrap">{t.laProprieta.bassoComodo.note}</p>
      </div>
    </div>
  );
}

function Copy1() {
  return (
    <section className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="copy">
      <SectionHeader />
      <Col />
    </section>
  );
}

function MaxW2() {
  return (
    <section className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="max w">
      <Slide />
      <Copy1 />
    </section>
  );
}

function ContenutoConCarousel() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className={`bg-white relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="Contenuto con carousel">
      <div className="flex flex-col items-center size-full" data-name="section wrapper">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[40px] relative w-full" data-name="section container">
          <MaxW2 />
        </div>
      </div>
    </section>
  );
}

function Image12() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imgAltriLocali1, imgAltriLocali2];
  const altTexts = ["Casa padronale interno", "Fienile stalla dettaglio"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia immagine ogni 3 secondi

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <figure className="aspect-[352/352] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Image">
      <div className="basis-0 grow min-h-px min-w-px shrink-0 w-full border-[1px] border-[#ad3854] p-[16px] relative" data-name="WhatsApp Image 2025-11-21 at 14.42.50 1">
        {images.map((image, index) => (
          <img 
            key={index}
            alt={altTexts[index]} 
            className={`absolute inset-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover pointer-events-none transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={image} 
          />
        ))}
      </div>
    </figure>
  );
}

function Copy2() {
  const t = useTranslation();
  return (
    <section className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="copy">
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.18] relative shrink-0 text-[#ad3854] text-[24px] w-full">{t.laProprieta.altriLocali.title}</p>
      <div className="font-['Open_Sans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] w-full" data-name="description content">
        <h3 className="block leading-[1.4] mb-0">{t.laProprieta.altriLocali.description}</h3>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px] whitespace-pre-wrap">
            <span className="leading-[1.4]">{t.laProprieta.altriLocali.casaPadronale}</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.4]">{t.laProprieta.altriLocali.annesso}</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[1.4]">{t.laProprieta.altriLocali.fienileStalla}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function MaxW3() {
  return (
    <section className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="max w">
      <Image12 />
      <Copy2 />
    </section>
  );
}

function ContenutoFotoIsolata1() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto foto isolata">
      <div className="flex flex-col items-center justify-center size-full" data-name="section wrapper">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[40px] relative w-full" data-name="section container">
          <MaxW3 />
        </div>
      </div>
    </article>
  );
}

function Image13() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imgGrapes, imgBarrels];
  const altTexts = ["Vigneto uva Lambrusco", "Acetaia barili legno"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia immagine ogni 3 secondi

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <figure className="aspect-[352/352] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Image">
      <div className="basis-0 grow min-h-px min-w-px shrink-0 w-full border-[1px] border-[#ad3854] p-[16px] relative" data-name="image gallery container">
        {images.map((image, index) => (
          <img 
            key={index}
            alt={altTexts[index]} 
            className={`absolute inset-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover pointer-events-none transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={image} 
          />
        ))}
      </div>
    </figure>
  );
}

function Copy3() {
  const t = useTranslation();
  return (
    <section className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="copy">
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.18] relative shrink-0 text-[#ad3854] text-[24px] w-full">{t.laProprieta.vignetoAcetaia.title}</p>
      <h3 className="block font-['Open_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#333333] text-[18px] w-full">{t.laProprieta.vignetoAcetaia.description}</h3>
    </section>
  );
}

function MaxW4() {
  return (
    <section className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="max w">
      <Image13 />
      <Copy3 />
    </section>
  );
}

function ContenutoFotoIsolata2() {
  const [ref, isInView] = useInView();
  return (
    <article ref={ref} className={`relative shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="contenuto foto isolata">
      <div className="flex flex-col items-center justify-center size-full" data-name="section wrapper">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[40px] relative w-full" data-name="section container">
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

export default function Mobile() {
  const t = useTranslation();
  return (
    <div className="bg-[#fffaf4] content-stretch flex flex-col items-center relative size-full" data-name="Mobile">
      <Navigation isOverlaying={false} />
      <PageHeader 
        title={t.laProprieta.pageTitle}
        image={imgNavheroPage}
        variant="mobile"
      />
      <Main />
      <CrossSections 
        leftCard={{
          title: t.laProprieta.crossSections.ilContesto.title,
          description: t.laProprieta.crossSections.ilContesto.description
        }}
        rightCard={{
          title: t.laProprieta.crossSections.linvestimento.title,
          description: (
            <>
              <h3 className="block mb-0">{t.laProprieta.crossSections.linvestimento.description}</h3>
              <h3 className="block">{t.laProprieta.crossSections.linvestimento.description2}</h3>
            </>
          )
        }}
      />
      <Footer />
    </div>
  );
}
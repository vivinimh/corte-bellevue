import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "../hooks/useTranslation";

interface CardProps {
  title: string;
  description: string | JSX.Element;
}

function getRouteFromTitle(title: string): string {
  const routeMap: { [key: string]: string } = {
    "La proprietà": "/la-proprieta",
    "The Property": "/la-proprieta",
    "Il contesto": "/il-contesto",
    "The Context": "/il-contesto",
    "L'investimento": "/linvestimento",
    "Investment prospects": "/linvestimento",
    "The Investment": "/linvestimento"
  };
  return routeMap[title] || "/";
}

function CardButton({ title }: { title: string }) {
  const t = useTranslation();
  const route = getRouteFromTitle(title);
  
  return (
    <Link 
      to={route}
      className="bg-[#CA427D] content-stretch cursor-pointer flex h-[50px] items-center justify-center px-[24px] py-[16px] relative shrink-0 hover:bg-[#953C52] transition-colors duration-200" 
      data-name="Card Button"
    >
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#fffaf4] text-[16px] text-nowrap tracking-[0.8px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t.common.buttons.approfondisci}
      </p>
    </Link>
  );
}

function CardContent({ title, description }: CardProps) {
  return (
    <div className="content-stretch xl:relative flex flex-col gap-[24px] items-start pb-0 pt-[24px] xl:pt-0 px-0 xl:pl-[40px] xl:pr-0 relative shrink-0 w-full" data-name="Card Content">
      {/* Border: top on mobile/tablet, left on desktop */}
      <div aria-hidden="true" className="absolute border-t-[1px] xl:border-t-0 xl:border-l-[1px] border-[#AD3854] border-solid inset-0 pointer-events-none" />
      <div className="md:size-full xl:size-full">
        <div className="content-stretch flex flex-col gap-[24px] xl:gap-[40px] items-start xl:pl-[0px] xl:pr-0 xl:py-0 relative md:w-full xl:w-full">
          <h3 className="block font-['EB_Garamond:Regular',sans-serif] font-normal leading-[1.15] xl:leading-[1.1] min-w-full relative shrink-0 text-[#ad3854] text-[32px] xl:text-[48px] w-[min-content]">{title}</h3>
          {typeof description === 'string' ? (
            <h3 className="font-['Open_Sans:Regular',sans-serif] leading-[1.4] xl:leading-[1.6] min-w-full not-italic relative shrink-0 text-[#333333] text-[18px] xl:text-[20px] w-full">{description}</h3>
          ) : (
            <div className="font-['Open_Sans:Regular',sans-serif] leading-[1.4] xl:leading-[1.6] not-italic relative shrink-0 text-[#333333] text-[18px] xl:text-[20px] w-full">
              {description}
            </div>
          )}
          <CardButton title={title} />
        </div>
      </div>
    </div>
  );
}

function LeftCard({ card, isInView }: { card: CardProps; isInView: boolean }) {
  return (
    <div className={`bg-white xl:basis-0 xl:grow xl:min-w-px relative shadow-[-16px_16px_48px_0px_rgba(89,54,21,0.06)] shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="Left Card">
      <div className="w-full">
        <div className="content-stretch flex flex-col items-start p-[40px] xl:p-[56px] relative w-full">
          <CardContent 
            title={card.title}
            description={card.description}
          />
        </div>
      </div>
    </div>
  );
}

function LeftCardWrapper({ card, isInView }: { card: CardProps; isInView: boolean }) {
  return (
    <div className="content-stretch xl:basis-0 xl:grow flex flex-col items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Left Card Wrapper">
      <LeftCard card={card} isInView={isInView} />
    </div>
  );
}

function RightCard({ card, isInView }: { card: CardProps; isInView: boolean }) {
  return (
    <div className={`bg-white xl:basis-0 xl:grow xl:min-w-px xl:h-full relative shadow-[-16px_16px_48px_0px_rgba(89,54,21,0.06)] shrink-0 w-full reveal-in-view ${isInView ? 'is-in-view' : ''}`} data-name="Right Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[40px] xl:p-[56px] relative size-full">
          <CardContent 
            title={card.title}
            description={card.description}
          />
        </div>
      </div>
    </div>
  );
}

function RightCardWrapper({ card, isInView }: { card: CardProps; isInView: boolean }) {
  return (
    <div className="content-stretch xl:basis-0 xl:grow xl:h-full flex flex-col items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Right Card Wrapper">
      <RightCard card={card} isInView={isInView} />
    </div>
  );
}

function CardsRow({ leftCard, rightCard, isInView }: { leftCard: CardProps; rightCard: CardProps; isInView: boolean }) {
  return (
    <div className="content-stretch xl:basis-0 flex flex-col xl:flex-row gap-[24px] xl:gap-[40px] items-center xl:items-stretch justify-center max-w-[1120px] xl:grow xl:min-w-px relative shrink-0 w-full" data-name="Cards Row">
      <LeftCardWrapper card={leftCard} isInView={isInView} />
      <RightCardWrapper card={rightCard} isInView={isInView} />
    </div>
  );
}

interface CrossSectionsProps {
  leftCard: CardProps;
  rightCard: CardProps;
}

export default function CrossSections({ leftCard, rightCard }: CrossSectionsProps) {
  const [ref, isInView] = useInView();
  
  return (
    <article ref={ref} className="bg-[#f6eee5] block relative shrink-0 w-full" data-name="cross sections">
      <div className="flex flex-col md:flex-row md:justify-center xl:flex-row xl:justify-center size-full">
        <div className="content-stretch flex flex-col md:flex-row items-center md:items-start xl:items-start md:justify-center xl:justify-center px-[16px] md:px-[64px] xl:px-[80px] py-[32px] md:py-[40px] xl:py-[80px] relative w-full">
          <CardsRow leftCard={leftCard} rightCard={rightCard} isInView={isInView} />
        </div>
      </div>
    </article>
  );
}

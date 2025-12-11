function Email() {
  return (
    <div className="bg-[#f6eee5] relative shrink-0 w-full" data-name="email">
      <div aria-hidden="true" className="absolute border-t-[1px] border-[#FFFAF4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[40px] md:px-[64px] md:py-[40px] xl:px-[80px] relative w-full">
          <h2 className="basis-0 block font-['Open Sans',sans-serif] font-normal grow leading-[1.6] max-w-[1120px] min-h-px min-w-px not-italic relative shrink-0 text-[#714b55] text-[20px] text-center">
            Per informazioni si prega di contattare Elis all'indirizzo{" "}
            <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid text-[#ad3854] underline" href="mailto:cortebellevue@gmail.com">
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.6]">
                cortebellevue@gmail.com
              </span>
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[1120px] relative shrink-0 text-nowrap w-full whitespace-pre">
      <h2 className="block font-['EB Garamond',serif] font-normal leading-[1.15] relative shrink-0 text-[#f6eee5] text-[32px] text-center">Corte Belle Vue</h2>
      <p className="font-['Open Sans',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[14px] text-white tracking-[1.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        © 2025 All Rights Reserved
      </p>
    </div>
  );
}

function Copyright() {
  return (
    <div className="bg-[#53373e] relative shrink-0 w-full" data-name="copyright">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[40px] md:px-[64px] md:py-[40px] xl:px-[80px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#53373e] content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 w-full" data-name="Footer">
      <Email />
      <Copyright />
    </footer>
  );
}

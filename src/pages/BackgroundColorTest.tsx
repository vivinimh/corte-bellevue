import { useEffect, useState, useRef } from "react";

interface ColorInfo {
  computed: string;
  rgb: string;
  hex: string;
  rgba: string;
  hsl: string;
  element: string;
  source: string;
}

export default function BackgroundColorTest() {
  const [colors, setColors] = useState<ColorInfo[]>([]);
  const [browserInfo, setBrowserInfo] = useState<any>({});
  const htmlRef = useRef<HTMLElement | null>(null);
  const bodyRef = useRef<HTMLElement | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Raccogli informazioni sul browser
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      vendor: navigator.vendor,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      devicePixelRatio: window.devicePixelRatio,
      colorDepth: window.screen.colorDepth,
      pixelDepth: window.screen.pixelDepth,
    };
    setBrowserInfo(info);

    // Funzione per convertire RGB in HEX
    const rgbToHex = (r: number, g: number, b: number): string => {
      return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }).join("");
    };

    // Funzione per convertire RGB in HSL
    const rgbToHsl = (r: number, g: number, b: number): string => {
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0, s = 0, l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
          case g: h = ((b - r) / d + 2) / 6; break;
          case b: h = ((r - g) / d + 4) / 6; break;
        }
      }

      return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    };

    // Funzione per estrarre il colore da un elemento
    const getColorInfo = (element: HTMLElement | null, name: string, source: string): ColorInfo | null => {
      if (!element) return null;

      const computed = window.getComputedStyle(element);
      const bgColor = computed.backgroundColor;

      // Estrai valori RGB
      const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (!rgbMatch) return null;

      const r = parseInt(rgbMatch[1]);
      const g = parseInt(rgbMatch[2]);
      const b = parseInt(rgbMatch[3]);
      const a = rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1;

      return {
        computed: bgColor,
        rgb: `rgb(${r}, ${g}, ${b})`,
        hex: rgbToHex(r, g, b).toUpperCase(),
        rgba: `rgba(${r}, ${g}, ${b}, ${a})`,
        hsl: rgbToHsl(r, g, b),
        element: name,
        source: source,
      };
    };

    // Raccogli tutti i colori
    const colorInfos: ColorInfo[] = [];

    // HTML element
    htmlRef.current = document.documentElement;
    const htmlColor = getColorInfo(htmlRef.current, "html", "Elemento HTML");
    if (htmlColor) colorInfos.push(htmlColor);

    // Body element
    bodyRef.current = document.body;
    const bodyColor = getColorInfo(bodyRef.current, "body", "Elemento BODY");
    if (bodyColor) colorInfos.push(bodyColor);

    // Root div
    const rootElement = document.getElementById("root");
    if (rootElement) {
      const rootColor = getColorInfo(rootElement, "#root", "Container React Root");
      if (rootColor) colorInfos.push(rootColor);
    }

    // Cerca il container principale della homepage
    const desktopContainer = document.querySelector('[data-name="Desktop"]') as HTMLElement;
    if (desktopContainer) {
      const desktopColor = getColorInfo(desktopContainer, '[data-name="Desktop"]', "Layout Desktop Homepage");
      if (desktopColor) colorInfos.push(desktopColor);
    }

    const mobileContainer = document.querySelector('[data-name="Mobile"]') as HTMLElement;
    if (mobileContainer) {
      const mobileColor = getColorInfo(mobileContainer, '[data-name="Mobile"]', "Layout Mobile Homepage");
      if (mobileColor) colorInfos.push(mobileColor);
    }

    const tabletContainer = document.querySelector('[data-name="Tablet"]') as HTMLElement;
    if (tabletContainer) {
      const tabletColor = getColorInfo(tabletContainer, '[data-name="Tablet"]', "Layout Tablet Homepage");
      if (tabletColor) colorInfos.push(tabletColor);
    }

    // Cerca anche elementi con classe bg-[#fffaf4]
    const elementsWithBg = document.querySelectorAll('[class*="bg-[#fffaf4]"], [class*="bg-\\[#fffaf4\\]"]');
    elementsWithBg.forEach((el, idx) => {
      if (el instanceof HTMLElement && !colorInfos.some(c => c.element === `Element with bg-[#fffaf4] #${idx}`)) {
        const bgColor = getColorInfo(el, `Element with bg-[#fffaf4] #${idx}`, "Elemento con classe Tailwind bg-[#fffaf4]");
        if (bgColor) colorInfos.push(bgColor);
      }
    });

    setColors(colorInfos);
  }, []);

  const expectedColor = "#FFFAF4";
  const expectedRgb = "rgb(255, 250, 244)";

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Test Colore Sfondo - Homepage</h1>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Informazioni Browser/Dispositivo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><strong>User Agent:</strong> {browserInfo.userAgent}</div>
            <div><strong>Platform:</strong> {browserInfo.platform}</div>
            <div><strong>Vendor:</strong> {browserInfo.vendor}</div>
            <div><strong>Screen:</strong> {browserInfo.screenWidth} × {browserInfo.screenHeight}px</div>
            <div><strong>Device Pixel Ratio:</strong> {browserInfo.devicePixelRatio}</div>
            <div><strong>Color Depth:</strong> {browserInfo.colorDepth} bit</div>
            <div><strong>Pixel Depth:</strong> {browserInfo.pixelDepth} bit</div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Colore Atteso</h2>
          <div className="flex items-center gap-4">
            <div 
              className="w-32 h-32 rounded border-2 border-gray-400"
              style={{ backgroundColor: expectedColor }}
            ></div>
            <div>
              <div><strong>HEX:</strong> {expectedColor}</div>
              <div><strong>RGB:</strong> {expectedRgb}</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Colori Rilevati dagli Elementi</h2>
          {colors.length === 0 ? (
            <p className="text-gray-600">Nessun colore rilevato. Assicurati di essere sulla homepage.</p>
          ) : (
            <div className="space-y-4">
              {colors.map((color, index) => {
                const matches = color.hex === expectedColor || color.rgb === expectedRgb;
                return (
                  <div 
                    key={index} 
                    className={`p-4 rounded border-2 ${matches ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-24 h-24 rounded border-2 border-gray-400 flex-shrink-0"
                        style={{ backgroundColor: color.computed }}
                      ></div>
                      <div className="flex-1">
                        <div className="font-semibold mb-2">
                          {color.element} {matches ? '✓' : '✗'}
                        </div>
                        <div className="text-sm space-y-1">
                          <div><strong>Source:</strong> {color.source}</div>
                          <div><strong>Computed:</strong> {color.computed}</div>
                          <div><strong>HEX:</strong> {color.hex}</div>
                          <div><strong>RGB:</strong> {color.rgb}</div>
                          <div><strong>RGBA:</strong> {color.rgba}</div>
                          <div><strong>HSL:</strong> {color.hsl}</div>
                          {!matches && (
                            <div className="text-red-600 font-semibold mt-2">
                              ⚠️ Il colore non corrisponde a quello atteso!
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Istruzioni per il Test</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Apri questa pagina su diversi browser (Chrome, Firefox, Safari, Edge)</li>
            <li>Testa su diversi dispositivi (Desktop, Tablet, Mobile)</li>
            <li>Verifica che tutti i colori rilevati corrispondano a <strong>{expectedColor}</strong></li>
            <li>Fai screenshot per confrontare la visualizzazione</li>
            <li>Controlla se ci sono differenze di colore tra browser/dispositivi</li>
          </ol>
        </div>

      </div>
    </div>
  );
}


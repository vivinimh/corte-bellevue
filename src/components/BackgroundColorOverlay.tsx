import { useEffect, useState } from "react";

/**
 * Componente overlay per visualizzare il colore di sfondo in tempo reale
 * Utile per test rapidi durante lo sviluppo
 * 
 * Per usarlo, aggiungi temporaneamente questo componente alla homepage
 */
export default function BackgroundColorOverlay() {
  const [colorInfo, setColorInfo] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateColor = () => {
      // Trova il container principale
      const desktopContainer = document.querySelector('[data-name="Desktop"]') as HTMLElement;
      const mobileContainer = document.querySelector('[data-name="Mobile"]') as HTMLElement;
      const tabletContainer = document.querySelector('[data-name="Tablet"]') as HTMLElement;
      
      const container = desktopContainer || mobileContainer || tabletContainer || document.body;
      
      if (container) {
        const computed = window.getComputedStyle(container);
        const bgColor = computed.backgroundColor;
        
        const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (rgbMatch) {
          const r = parseInt(rgbMatch[1]);
          const g = parseInt(rgbMatch[2]);
          const b = parseInt(rgbMatch[3]);
          
          const hex = "#" + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          }).join("").toUpperCase();
          
          setColorInfo({
            computed: bgColor,
            hex,
            rgb: `rgb(${r}, ${g}, ${b})`,
            element: container === document.body ? 'body' : container.getAttribute('data-name') || 'container'
          });
        }
      }
    };

    updateColor();
    window.addEventListener('resize', updateColor);
    
    return () => window.removeEventListener('resize', updateColor);
  }, []);

  if (!isVisible || !colorInfo) return null;

  const expectedColor = "#FFFAF4";
  const matches = colorInfo.hex === expectedColor;

  return (
    <div 
      className="fixed bottom-4 right-4 z-[9999] bg-white border-2 border-gray-400 rounded-lg shadow-lg p-4 max-w-xs"
      style={{ fontFamily: 'monospace' }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-bold">Colore Sfondo</div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 text-lg"
          aria-label="Chiudi"
        >
          ×
        </button>
      </div>
      
      <div className="flex items-center gap-3 mb-2">
        <div 
          className="w-16 h-16 rounded border-2 border-gray-400 flex-shrink-0"
          style={{ backgroundColor: colorInfo.computed }}
        ></div>
        <div className="flex-1 text-xs">
          <div><strong>HEX:</strong> {colorInfo.hex}</div>
          <div><strong>RGB:</strong> {colorInfo.rgb}</div>
          <div className="text-xs text-gray-600 mt-1">Elemento: {colorInfo.element}</div>
        </div>
      </div>
      
      <div className={`text-xs p-2 rounded ${matches ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {matches ? '✓ Corrisponde a #FFFAF4' : '✗ NON corrisponde a #FFFAF4'}
      </div>
      
      <div className="mt-2 text-xs text-gray-600">
        Atteso: {expectedColor}
      </div>
    </div>
  );
}


/**
 * Script di test per verificare il colore di sfondo visualizzato
 * 
 * Istruzioni:
 * 1. Apri la homepage del sito
 * 2. Apri la console del browser (F12 o Cmd+Option+I)
 * 3. Copia e incolla questo script nella console
 * 4. Premi Invio
 * 
 * Lo script mostrerà il colore effettivo visualizzato da ogni elemento
 */

(function() {
  console.log('%c=== TEST COLORE SFONDO HOMEPAGE ===', 'font-size: 16px; font-weight: bold; color: #333;');
  console.log('');

  const expectedColor = '#FFFAF4';
  const expectedRgb = 'rgb(255, 250, 244)';

  // Funzione per convertire RGB in HEX
  function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("").toUpperCase();
  }

  // Funzione per estrarre informazioni colore
  function getColorInfo(element, name) {
    if (!element) return null;

    const computed = window.getComputedStyle(element);
    const bgColor = computed.backgroundColor;

    // Estrai valori RGB
    const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (!rgbMatch) {
      return {
        name: name,
        computed: bgColor,
        hex: 'N/A',
        rgb: 'N/A',
        matches: false
      };
    }

    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);
    const a = rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1;

    const hex = rgbToHex(r, g, b);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const matches = hex === expectedColor || rgb === expectedRgb;

    return {
      name: name,
      computed: bgColor,
      hex: hex,
      rgb: rgb,
      rgba: `rgba(${r}, ${g}, ${b}, ${a})`,
      matches: matches
    };
  }

  // Raccogli informazioni browser
  const browserInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    vendor: navigator.vendor,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    devicePixelRatio: window.devicePixelRatio,
    colorDepth: window.screen.colorDepth,
    pixelDepth: window.screen.pixelDepth
  };

  console.log('%cInformazioni Browser/Dispositivo:', 'font-weight: bold; color: #0066cc;');
  console.table(browserInfo);
  console.log('');

  // Test elementi
  const elements = [
    { el: document.documentElement, name: 'HTML' },
    { el: document.body, name: 'BODY' },
    { el: document.getElementById('root'), name: '#root' },
    { el: document.querySelector('[data-name="Desktop"]'), name: '[data-name="Desktop"]' },
    { el: document.querySelector('[data-name="Mobile"]'), name: '[data-name="Mobile"]' },
    { el: document.querySelector('[data-name="Tablet"]'), name: '[data-name="Tablet"]' }
  ];

  console.log('%cColore Atteso:', 'font-weight: bold; color: #0066cc;');
  console.log(`HEX: ${expectedColor}`);
  console.log(`RGB: ${expectedRgb}`);
  console.log('');

  console.log('%cColori Rilevati:', 'font-weight: bold; color: #0066cc;');
  const results = [];

  elements.forEach(({ el, name }) => {
    const colorInfo = getColorInfo(el, name);
    if (colorInfo) {
      results.push(colorInfo);
      
      const style = colorInfo.matches 
        ? 'color: #00aa00; font-weight: bold;' 
        : 'color: #aa0000; font-weight: bold;';
      
      console.log(`%c${colorInfo.name} ${colorInfo.matches ? '✓' : '✗'}`, style);
      console.log(`  Computed: ${colorInfo.computed}`);
      console.log(`  HEX: ${colorInfo.hex}`);
      console.log(`  RGB: ${colorInfo.rgb}`);
      if (colorInfo.rgba) console.log(`  RGBA: ${colorInfo.rgba}`);
      if (!colorInfo.matches) {
        console.log(`  ⚠️  NON CORRISPONDE AL COLORE ATTESO!`);
      }
      console.log('');
    }
  });

  // Riepilogo
  const allMatch = results.every(r => r.matches);
  const summaryStyle = allMatch 
    ? 'background: #00aa00; color: white; padding: 10px; font-weight: bold;' 
    : 'background: #aa0000; color: white; padding: 10px; font-weight: bold;';
  
  console.log('%c=== RIEPILOGO ===', summaryStyle);
  if (allMatch) {
    console.log('%c✓ Tutti i colori corrispondono a quello atteso!', 'color: #00aa00; font-weight: bold;');
  } else {
    console.log('%c✗ Alcuni colori NON corrispondono a quello atteso!', 'color: #aa0000; font-weight: bold;');
    console.log('Controlla i dettagli sopra per vedere quali elementi hanno colori diversi.');
  }

  // Crea un oggetto con tutti i risultati per esportazione
  window.backgroundColorTestResults = {
    browserInfo,
    expectedColor,
    expectedRgb,
    results,
    allMatch,
    timestamp: new Date().toISOString()
  };

  console.log('');
  console.log('%cI risultati sono stati salvati in window.backgroundColorTestResults', 'color: #666; font-style: italic;');
  console.log('Puoi esportarli con: JSON.stringify(window.backgroundColorTestResults, null, 2)');
})();


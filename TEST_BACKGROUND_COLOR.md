# Test Colore Sfondo - Istruzioni

Questo documento spiega come testare il colore di sfondo della homepage su diversi browser e dispositivi.

## Metodo 1: Pagina di Test Interattiva

1. **Avvia il server di sviluppo** (se non è già avviato):
   ```bash
   npm run dev
   ```

2. **Apri la pagina di test** nel browser:
   ```
   http://localhost:5173/test-background-color
   ```
   (Sostituisci la porta se diversa)

3. **La pagina mostrerà**:
   - Informazioni sul browser/dispositivo
   - Il colore atteso (#FFFAF4)
   - I colori effettivamente rilevati da ogni elemento
   - Indicatori visivi se i colori corrispondono o meno

4. **Testa su diversi browser**:
   - Chrome/Edge (Windows, macOS, Android)
   - Firefox (Windows, macOS, Android)
   - Safari (macOS, iOS)
   - Opera

5. **Testa su diversi dispositivi**:
   - Desktop (varie risoluzioni)
   - Tablet (iPad, Android tablet)
   - Mobile (iPhone, Android phone)

## Metodo 2: Script Console Browser

1. **Apri la homepage** del sito:
   ```
   http://localhost:5173/
   ```

2. **Apri la console del browser**:
   - Chrome/Edge: `F12` o `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)
   - Firefox: `F12` o `Cmd+Option+K` (Mac) / `Ctrl+Shift+K` (Windows)
   - Safari: `Cmd+Option+C` (Mac, devi abilitare il menu Sviluppo)

3. **Copia e incolla lo script** dal file `test-background-color.js` nella console

4. **Premi Invio** - Lo script mostrerà:
   - Informazioni sul browser
   - Il colore atteso
   - I colori rilevati da ogni elemento
   - Un riepilogo finale

5. **I risultati sono salvati** in `window.backgroundColorTestResults` - puoi esportarli con:
   ```javascript
   JSON.stringify(window.backgroundColorTestResults, null, 2)
   ```

## Cosa Verificare

### ✅ Colore Corretto
Il colore atteso è **#FFFAF4** (RGB: 255, 250, 244), un beige/crema molto chiaro.

### ⚠️ Problemi Comuni

1. **Colore bianco (#FFFFFF)**:
   - Significa che lo sfondo non è applicato correttamente
   - Verifica che il CSS sia caricato
   - Controlla che gli elementi abbiano la classe `bg-[#fffaf4]`

2. **Colore diverso ma simile**:
   - Alcuni browser/dispositivi possono applicare color management
   - iOS Safari può mostrare leggere variazioni
   - Schermi ad alta densità (Retina) possono influenzare la percezione

3. **Colore trasparente**:
   - Significa che l'elemento non ha uno sfondo definito
   - Lo sfondo del parent o del body potrebbe essere visibile

## Strumenti di Test Online

Per testare su dispositivi reali senza averli fisicamente:

1. **BrowserStack** (https://www.browserstack.com)
   - Test su browser e dispositivi reali
   - Screenshot automatici

2. **LambdaTest** (https://www.lambdatest.com)
   - Simile a BrowserStack
   - Test interattivi

3. **Chrome DevTools Device Mode**:
   - Apri DevTools (F12)
   - Clicca sull'icona del dispositivo
   - Simula diversi dispositivi

## Risultati Attesi

Su tutti i browser e dispositivi, dovresti vedere:
- **HEX**: `#FFFAF4`
- **RGB**: `rgb(255, 250, 244)`

Se vedi colori diversi, potrebbe essere necessario:
1. Aggiungere fallback CSS
2. Applicare lo sfondo anche a `html` e `body`
3. Usare colori in formato RGB invece di HEX per maggiore compatibilità

## Esportazione Risultati

Per salvare i risultati del test:

1. **Dalla console**:
   ```javascript
   // Copia i risultati
   copy(JSON.stringify(window.backgroundColorTestResults, null, 2))
   ```

2. **Dalla pagina di test**:
   - Fai screenshot della pagina
   - Copia i valori mostrati manualmente

## Note

- La pagina di test funziona solo se sei sulla homepage o hai gli elementi del layout caricati
- Lo script console può essere eseguito su qualsiasi pagina, ma funziona meglio sulla homepage
- I colori possono apparire leggermente diversi su schermi con profili colore diversi (sRGB vs Display P3)


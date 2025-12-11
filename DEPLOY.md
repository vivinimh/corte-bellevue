# Guida al Deploy su Vercel

Questo progetto è configurato per essere deployato su Vercel.

## Prerequisiti

1. Account Vercel (gratuito): [vercel.com](https://vercel.com)
2. Repository Git (GitHub, GitLab o Bitbucket)

## Deploy Automatico da Git (Consigliato)

### Passo 1: Push del codice su GitHub/GitLab/Bitbucket

```bash
git add .
git commit -m "Preparato per deploy su Vercel"
git push origin main
```

### Passo 2: Connetti il progetto a Vercel

1. Vai su [vercel.com](https://vercel.com) e accedi
2. Clicca su **"Add New Project"**
3. Seleziona il tuo repository
4. Vercel rileverà automaticamente le impostazioni:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Passo 3: Deploy

1. Clicca su **"Deploy"**
2. Vercel compilerà e pubblicherà il sito automaticamente
3. Riceverai un URL temporaneo (es: `corte-belle-vue.vercel.app`)

## Configurazione del Dominio Personalizzato

### Passo 1: Aggiungi il dominio in Vercel

1. Vai al progetto su Vercel
2. Clicca su **Settings** → **Domains**
3. Aggiungi il tuo dominio (es: `cortebellevue.it`)

### Passo 2: Configura i DNS

Vercel ti fornirà due opzioni:

**Opzione A: Usa i Nameserver di Vercel (Consigliato)**
1. Copia i nameserver forniti da Vercel
2. Vai al pannello del tuo registrar (dove hai acquistato il dominio)
3. Sostituisci i nameserver con quelli di Vercel
4. Attendi la propagazione DNS (1-48 ore)

**Opzione B: Aggiungi Record DNS**
1. Aggiungi un record CNAME o A come indicato da Vercel
2. Attendi la propagazione DNS

### Passo 3: Configura HTTPS

Vercel fornisce automaticamente certificati SSL gratuiti. Una volta configurato il dominio, HTTPS sarà attivo automaticamente.

## Deploy Manuale (Alternativa)

Se preferisci deployare manualmente:

```bash
# 1. Installa le dipendenze
npm install

# 2. Compila il progetto
npm run build

# 3. Installa Vercel CLI
npm i -g vercel

# 4. Deploy
vercel
```

## Configurazione del Progetto

Il file `vercel.json` contiene la configurazione per:
- Routing di React Router (tutte le route puntano a `index.html`)
- Comandi di build automatici
- Framework detection (Vite)

## Note Importanti

- Il progetto usa React Router per il routing client-side
- Tutte le route sono configurate per essere servite tramite `index.html`
- Le immagini sono ottimizzate automaticamente da Vercel
- Il sito è completamente statico e non richiede un server backend

## Supporto

Per problemi o domande:
- [Documentazione Vercel](https://vercel.com/docs)
- [Supporto Vercel](https://vercel.com/support)

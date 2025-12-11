# Workflow: Modifiche Locali → Vercel

Questa guida spiega come portare le modifiche dal tuo computer a Vercel in modo automatico.

---

## 🚀 Metodo Consigliato: Deploy Automatico (Git Integration)

Con questo metodo, ogni volta che fai `git push` su GitHub, Vercel deploya automaticamente il sito aggiornato.

### Setup Iniziale (Una Volta Sola)

#### Passo 1: Connetti Vercel a GitHub

1. Vai su [vercel.com](https://vercel.com) e accedi
2. Clicca su **"Add New Project"** (o **"New Project"**)
3. Seleziona **"Import Git Repository"**
4. Autorizza Vercel ad accedere a GitHub (se richiesto)
5. Seleziona il repository: `vivinimh/corte-bellevue`
6. Clicca **"Import"**

#### Passo 2: Configura il Progetto

Vercel rileverà automaticamente:
- **Framework Preset**: Vite ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅

**Non modificare nulla**, clicca direttamente su **"Deploy"**

#### Passo 3: Attendi il Deploy

Vercel compilerà e pubblicherà il sito. Riceverai un URL tipo:
- `corte-bellevue.vercel.app` (temporaneo)
- Oppure il tuo dominio personalizzato (se configurato)

**✅ Fatto!** Ora ogni push su GitHub triggerà automaticamente un nuovo deploy.

---

## 📝 Workflow Quotidiano: Modifiche → Deploy

Ogni volta che modifichi il progetto, segui questi passi:

### 1. Fai le tue modifiche

Modifica i file nel progetto come preferisci (es. in Cursor/VS Code).

### 2. Verifica le modifiche

```bash
cd "/Users/vivianaproietti/Progetti Cursor/Corte Belle Vue"
git status
```

Vedrai i file modificati in rosso.

### 3. Aggiungi le modifiche

```bash
git add .
```

Oppure per file specifici:
```bash
git add nomefile.tsx
git add altrocartella/
```

### 4. Crea un commit

```bash
git commit -m "Descrizione delle modifiche"
```

**Esempi di messaggi**:
- `"Aggiornato testo nella homepage"`
- `"Fix bug nel carousel immagini"`
- `"Aggiunto nuovo componente Footer"`
- `"Modificato stile del menu"`

### 5. Push su GitHub

```bash
git push
```

**🎉 Fatto!** Vercel inizierà automaticamente a compilare e deployare il sito.

### 6. Monitora il Deploy

1. Vai su [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clicca sul tuo progetto
3. Vedrai lo stato del deploy in tempo reale:
   - 🟡 **Building** (in corso)
   - 🟢 **Ready** (completato)
   - 🔴 **Error** (errore - clicca per vedere i dettagli)

### 7. Verifica il Sito

Una volta completato, visita il tuo sito. Le modifiche saranno live!

---

## 🔄 Esempio Completo

```bash
# 1. Modifichi App.tsx nel tuo editor

# 2. Vai nel terminale
cd "/Users/vivianaproietti/Progetti Cursor/Corte Belle Vue"

# 3. Vedi cosa è cambiato
git status
# Output: modified: App.tsx

# 4. Aggiungi le modifiche
git add App.tsx

# 5. Crea commit
git commit -m "Aggiornato routing in App.tsx"

# 6. Push (triggera deploy automatico su Vercel)
git push

# 7. Attendi 1-2 minuti e visita il sito!
```

---

## 🛠️ Metodo Alternativo: Deploy Manuale

Se preferisci controllare manualmente quando deployare:

### Opzione A: Vercel CLI

```bash
# 1. Installa Vercel CLI (una volta)
npm i -g vercel

# 2. Login (una volta)
vercel login

# 3. Deploy manuale
cd "/Users/vivianaproietti/Progetti Cursor/Corte Belle Vue"
vercel --prod
```

### Opzione B: Dashboard Vercel

1. Vai su [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clicca sul tuo progetto
3. Vai su **"Deployments"**
4. Clicca sui **"..."** accanto a un deployment
5. Seleziona **"Redeploy"**

---

## 📊 Branch e Preview Deployments

### Branch Principale (main/master)

- Deploy automatico su produzione
- URL: `corte-bellevue.vercel.app` o il tuo dominio

### Altri Branch

Se crei un nuovo branch:

```bash
git checkout -b feature/nuova-funzionalita
# ... fai modifiche ...
git add .
git commit -m "Aggiunta nuova funzionalità"
git push origin feature/nuova-funzionalita
```

Vercel creerà automaticamente un **Preview Deployment**:
- URL unico per quel branch (es: `corte-bellevue-git-feature-nuova-funzionalita.vercel.app`)
- Perfetto per testare prima di mergeare in main

---

## 🔍 Verificare lo Stato del Deploy

### Nel Terminale

```bash
# Vedi l'ultimo commit
git log --oneline -1

# Vedi se ci sono modifiche non committate
git status
```

### Su Vercel Dashboard

1. Dashboard → Il tuo progetto
2. Tab **"Deployments"**: vedi tutti i deploy
3. Tab **"Analytics"**: statistiche del sito
4. Tab **"Settings"**: configurazioni

---

## ⚠️ Risoluzione Problemi

### Deploy Fallito

1. Vai su Vercel Dashboard → Il tuo progetto
2. Clicca sul deployment fallito (icona rossa)
3. Leggi i log di errore
4. Correggi l'errore localmente
5. Fai commit e push di nuovo

### Modifiche Non Apparse

1. Verifica che il push sia andato a buon fine: `git log origin/main`
2. Controlla lo stato del deploy su Vercel Dashboard
3. Attendi 1-2 minuti (il deploy può richiedere tempo)
4. Prova a fare hard refresh del browser (Cmd+Shift+R su Mac)

### Rollback a Versione Precedente

1. Vercel Dashboard → Deployments
2. Trova il deployment che funzionava
3. Clicca sui **"..."** → **"Promote to Production"**

---

## 💡 Best Practices

### Commit Frequenti

Fai commit spesso, anche per piccole modifiche:
```bash
git add .
git commit -m "Fix typo"
git push
```

### Messaggi di Commit Chiari

Usa messaggi descrittivi:
- ✅ `"Aggiunto componente ImageCarousel"`
- ✅ `"Fix: corretta altezza header su mobile"`
- ❌ `"modifiche"`
- ❌ `"fix"`

### Test Locali Prima del Push

```bash
# Testa il build localmente
npm run build

# Preview locale
npm run preview
```

Se funziona localmente, funzionerà anche su Vercel!

---

## 📱 Notifiche

Vercel può inviarti notifiche via:
- Email (quando un deploy è completato/fallito)
- Slack (se configurato)
- GitHub (commenti sui commit)

Configura in: **Settings → Notifications**

---

## 🎯 Riepilogo Workflow

```
Modifiche Locali
    ↓
git add .
    ↓
git commit -m "messaggio"
    ↓
git push
    ↓
GitHub riceve il push
    ↓
Vercel rileva il push (automatico)
    ↓
Vercel compila il progetto
    ↓
Vercel deploya il sito
    ↓
Sito aggiornato live! 🎉
```

**Tempo totale**: 1-3 minuti dalla push al sito live.

---

## Domande Frequenti

**Q: Devo fare push ogni volta che modifico un file?**  
A: No, puoi fare più modifiche e poi un unico commit + push.

**Q: Quanto tempo ci vuole per il deploy?**  
A: Di solito 1-3 minuti, dipende dalla dimensione del progetto.

**Q: Posso vedere le modifiche prima che vadano in produzione?**  
A: Sì! Usa branch separati per creare preview deployments.

**Q: Cosa succede se il deploy fallisce?**  
A: Il sito rimane con l'ultima versione funzionante. Correggi l'errore e fai push di nuovo.

---

## Supporto

- [Documentazione Vercel](https://vercel.com/docs)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Git Documentation](https://git-scm.com/doc)

# Guida Completa: Push del Codice su Git

Questa guida ti accompagnerà passo-passo per pubblicare il tuo progetto su GitHub e renderlo pronto per il deploy su Vercel.

## Prerequisiti

- Git installato sul tuo computer
- Account GitHub (gratuito): [github.com](https://github.com)

### Verifica che Git sia installato

Apri il Terminale e digita:
```bash
git --version
```

Se Git non è installato:
- **macOS**: `brew install git` (se hai Homebrew) oppure scarica da [git-scm.com](https://git-scm.com/download/mac)
- **Windows**: Scarica da [git-scm.com](https://git-scm.com/download/win)

---

## Passo 1: Inizializza il Repository Git Locale

### 1.1 Apri il Terminale

Apri il Terminale (Terminal su macOS) e naviga nella cartella del progetto:

```bash
cd "/Users/vivianaproietti/Progetti Cursor/Corte Belle Vue"
```

### 1.2 Inizializza Git

```bash
git init
```

Questo comando crea una cartella `.git` nascosta che contiene tutte le informazioni del repository.

### 1.3 Configura Git (se non l'hai già fatto)

Se è la prima volta che usi Git, configura il tuo nome e email:

```bash
git config --global user.name "Il Tuo Nome"
git config --global user.email "tua.email@esempio.com"
```

**Nota**: Sostituisci con il tuo nome e email reale. Queste informazioni appariranno nei commit.

---

## Passo 2: Aggiungi i File al Repository

### 2.1 Verifica lo stato

```bash
git status
```

Vedrai tutti i file non tracciati (in rosso).

### 2.2 Aggiungi tutti i file

```bash
git add .
```

Il punto (`.`) significa "tutti i file nella cartella corrente".

**Alternativa**: Se vuoi aggiungere file specifici:
```bash
git add nomefile.tsx
git add altrofile.ts
```

### 2.3 Verifica che i file siano stati aggiunti

```bash
git status
```

Ora i file dovrebbero apparire in verde (staged, pronti per il commit).

---

## Passo 3: Crea il Primo Commit

### 3.1 Crea il commit

```bash
git commit -m "Preparato per deploy su Vercel"
```

Il messaggio `-m` descrive cosa hai fatto in questo commit.

**Buone pratiche per i messaggi di commit**:
- Usa messaggi chiari e descrittivi
- Esempi: "Aggiunto componente Header", "Fix bug nel routing", "Aggiornato stile footer"

### 3.2 Verifica il commit

```bash
git log
```

Dovresti vedere il tuo commit con il messaggio che hai scritto. Premi `q` per uscire.

---

## Passo 4: Crea un Repository su GitHub

### 4.1 Accedi a GitHub

1. Vai su [github.com](https://github.com)
2. Accedi al tuo account (o creane uno se non ce l'hai)

### 4.2 Crea un nuovo repository

1. Clicca sul pulsante **"+"** in alto a destra
2. Seleziona **"New repository"**

### 4.3 Configura il repository

Compila il form:

- **Repository name**: `corte-belle-vue` (o un nome a tua scelta)
- **Description**: (opzionale) "Sito web per Corte Belle Vue"
- **Visibility**: 
  - ✅ **Public** (consigliato per progetti pubblici, gratuito)
  - ⚪ **Private** (solo tu puoi vederlo, richiede account GitHub Pro per repository privati gratuiti)
- **⚠️ NON spuntare**:
  - ❌ "Add a README file" (ne abbiamo già uno)
  - ❌ "Add .gitignore" (ne abbiamo già uno)
  - ❌ "Choose a license" (puoi aggiungerlo dopo se vuoi)

### 4.4 Crea il repository

Clicca su **"Create repository"**

---

## Passo 5: Collega il Repository Locale a GitHub

### 5.1 Copia l'URL del repository

Dopo aver creato il repository, GitHub ti mostrerà una pagina con istruzioni. 

Trova la sezione **"…or push an existing repository from the command line"** e copia l'URL che inizia con `https://github.com/...` o `git@github.com:...`

**Esempio**:
```
https://github.com/tuousername/corte-belle-vue.git
```

oppure (se usi SSH):
```
git@github.com:tuousername/corte-belle-vue.git
```

### 5.2 Aggiungi il remote

Torna al Terminale e digita (sostituisci con il TUO URL):

```bash
git remote add origin https://github.com/TUOUSERNAME/corte-belle-vue.git
```

**Nota**: Sostituisci `TUOUSERNAME` con il tuo username GitHub e `corte-belle-vue` con il nome del repository che hai scelto.

### 5.3 Verifica che il remote sia stato aggiunto

```bash
git remote -v
```

Dovresti vedere:
```
origin  https://github.com/TUOUSERNAME/corte-belle-vue.git (fetch)
origin  https://github.com/TUOUSERNAME/corte-belle-vue.git (push)
```

---

## Passo 6: Rinomina il Branch Principale (Opzionale ma Consigliato)

GitHub ora usa `main` come nome del branch principale invece di `master`.

### 6.1 Rinomina il branch

```bash
git branch -M main
```

Questo rinomina il branch corrente in `main`.

---

## Passo 7: Push del Codice su GitHub

### 7.1 Esegui il push

```bash
git push -u origin main
```

**Cosa significa questo comando**:
- `git push`: invia i commit a GitHub
- `-u origin main`: imposta il branch `main` locale per tracciare il branch `main` remoto
- Dopo la prima volta, potrai usare solo `git push`

### 7.2 Autenticazione

GitHub ti chiederà di autenticarti:

**Opzione A: Personal Access Token (Consigliato)**
1. GitHub ti chiederà username e password
2. Per la password, usa un **Personal Access Token** (non la password del tuo account)
3. Per creare un token:
   - Vai su GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Clicca "Generate new token (classic)"
   - Dai un nome (es: "Vercel Deploy")
   - Seleziona scadenza (es: "No expiration" o "90 days")
   - Spunta "repo" (per accedere ai repository)
   - Clicca "Generate token"
   - **⚠️ COPIA IL TOKEN SUBITO** (non lo vedrai più!)
   - Usa questo token come password quando Git te lo chiede

**Opzione B: GitHub CLI**
Se hai installato GitHub CLI:
```bash
gh auth login
```

**Opzione C: SSH Key (Avanzato)**
Se hai configurato SSH keys, puoi usare l'URL SSH invece di HTTPS.

### 7.3 Verifica il Push

Dopo il push, vai sul tuo repository su GitHub. Dovresti vedere tutti i tuoi file!

---

## Comandi Utili per il Futuro

### Aggiungere nuove modifiche

Dopo aver fatto modifiche al codice:

```bash
# 1. Vedi cosa è cambiato
git status

# 2. Aggiungi i file modificati
git add .

# 3. Crea un commit
git commit -m "Descrizione delle modifiche"

# 4. Invia su GitHub
git push
```

### Vedere la cronologia dei commit

```bash
git log --oneline
```

### Annullare modifiche non salvate

```bash
# Annulla modifiche a file non ancora aggiunti (git add)
git restore nomefile.tsx

# Annulla tutte le modifiche non salvate
git restore .
```

---

## Risoluzione Problemi Comuni

### Errore: "remote origin already exists"

Se hai già un remote configurato:
```bash
git remote remove origin
git remote add origin https://github.com/TUOUSERNAME/corte-belle-vue.git
```

### Errore: "failed to push some refs"

Se GitHub ha file che non hai localmente (es. README creato su GitHub):
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Dimenticato di aggiungere un file

```bash
git add filemancante.tsx
git commit --amend --no-edit  # Aggiunge al commit precedente
git push --force-with-lease
```

**⚠️ Attenzione**: `--force` sovrascrive la storia. Usalo solo se sei sicuro!

---

## Prossimo Passo: Deploy su Vercel

Una volta che il codice è su GitHub, puoi procedere con il deploy su Vercel seguendo le istruzioni in `DEPLOY.md`.

---

## Domande Frequenti

**Q: Devo pushare ogni volta che faccio una modifica?**  
A: No, puoi fare più commit localmente e poi fare un push quando vuoi sincronizzare con GitHub.

**Q: Cosa succede se cancello un file per sbaglio?**  
A: Puoi recuperarlo con `git restore nomefile.tsx` se non hai ancora fatto commit, oppure `git checkout HEAD -- nomefile.tsx` se hai già fatto commit.

**Q: Posso lavorare da più computer?**  
A: Sì! Su ogni computer fai `git clone https://github.com/TUOUSERNAME/corte-belle-vue.git` per scaricare il progetto.

---

## Supporto

- [Documentazione Git](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

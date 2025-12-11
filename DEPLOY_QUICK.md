# 🚀 Deploy Rapido - Comandi Essenziali

## Workflow Veloce (3 Comandi)

Dopo aver fatto le modifiche al progetto:

```bash
cd "/Users/vivianaproietti/Progetti Cursor/Corte Belle Vue"

# 1. Aggiungi tutte le modifiche
git add .

# 2. Crea commit
git commit -m "Descrizione modifiche"

# 3. Push (triggera deploy automatico su Vercel)
git push
```

**Fatto!** Il sito sarà aggiornato su Vercel in 1-3 minuti.

---

## Comandi Utili

### Verifica stato
```bash
git status                    # Vedi file modificati
git log --oneline -5          # Ultimi 5 commit
```

### Test locale prima del deploy
```bash
npm run build                 # Compila il progetto
npm run preview               # Preview locale su http://localhost:4173
```

### Annulla modifiche (se necessario)
```bash
git restore nomefile.tsx      # Annulla modifiche a un file
git restore .                 # Annulla tutte le modifiche non committate
```

---

## Setup Iniziale Vercel (Una Volta)

1. Vai su [vercel.com](https://vercel.com)
2. **Add New Project** → Seleziona `vivinimh/corte-bellevue`
3. Clicca **Deploy** (non modificare le impostazioni)
4. ✅ Fatto! Ogni `git push` deployerà automaticamente.

---

Per dettagli completi, vedi `WORKFLOW.md`

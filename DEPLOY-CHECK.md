# Pre-Deployment Validation System ✅

## 1. Clean Build Check (Simulates Vercel)
```bash
npm run check
```
**Does:** Clean install + production build → verifies `dist/`

## 2. Full Safety Check
```bash
npm run safe-check
```
**Does:** Clean build + preview server → full validation

## 3. Binary Safety Check
```bash
git ls-files | findstr /r "\\.exe \\.node"
```
**Expect:** No output (clean repo ✅)

## 4. Deploy Flow
```
npm run safe-check && git add . && git commit -m "deploy: validated" && git push
```

**Vercel Integration:** Uses same `npm ci && vite build` ✅

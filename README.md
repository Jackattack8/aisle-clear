# AisleClear

Find packaged foods that match your allergen restrictions, using real ingredient data. Built for parents and caregivers who need fast, reliable answers in the grocery store aisle.

## What it does

- Set allergen restrictions with large tap-friendly buttons (gluten, dairy, eggs, banana, soy, peanuts, tree nuts, sesame, or any custom ingredient)
- Search any food category (bread, crackers, pasta, etc.)
- Results come from Open Food Facts, a real ingredient database, not AI recall
- Allergen terms highlighted in red directly in the ingredient list
- Last-updated date shown so you know how fresh the data is
- Local store and online shopping search links built from your allergen list and location
- Mobile-first design built for use in the grocery store aisle
- Zero API keys required, zero token cost, free to host and share publicly

## Important disclaimer

Ingredient data comes from Open Food Facts, a community-maintained database. Always verify ingredients on the physical package before consuming, especially for serious allergies. Manufacturers change formulas without notice.

## Tech stack

- Vanilla HTML, CSS, and JS (no framework, fast on mobile)
- Open Food Facts public API for real ingredient data
- Client-side allergen string matching with synonym expansion
- Static site, no backend or serverless functions needed

## Deployment

### Deploy to Vercel (recommended)

1. Push this repo to GitHub
2. Go to vercel.com and import the repo
3. Vercel auto-detects the static site, no config needed
4. Deploy. Done.

No environment variables required.

### Deploy to GitHub Pages

1. Push to GitHub
2. Go to repo Settings > Pages
3. Set source to the `public` folder
4. Done.

### Local development

Open `public/index.html` directly in your browser, or use any static file server:

```bash
npx serve public
```

## Project structure

```
aisle-clear/
  public/
    index.html    Full app, single file
  vercel.json     Vercel static site config
  package.json
  README.md
  .gitignore
```

## Built by

Mark Burns - Practical AI Builder
https://github.com/Jackattack8

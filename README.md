# AisleClear

Find packaged foods and local stores that match your allergen restrictions. Built for parents and caregivers who need to quickly identify safe products while shopping.

## What it does

- Set allergen restrictions with large tap-friendly buttons (gluten, dairy, eggs, banana, soy, peanuts, tree nuts, sesame, or any custom ingredient)
- Search any food category (bread, crackers, pasta, etc.)
- Optionally enter your city or zip code for local store results
- Returns named packaged products with full ingredient lists and Google search links
- Flags products where a banned ingredient may be hiding as a substitute (e.g. banana used as egg replacer in gluten-free baking)
- Local bakeries and specialty stores surfaced with Google Maps links
- Mobile-first design built for use in the grocery store aisle

## Tech stack

- Vanilla HTML/CSS/JS frontend (no framework, fast load on mobile)
- Vercel serverless function routes requests to the Claude API
- Claude claude-sonnet-4-6 powers the allergen-aware product search and reasoning

## Setup

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/aisle-clear.git
cd aisle-clear
npm install -g vercel
```

### 2. Get your Anthropic API key

Sign up at https://console.anthropic.com and create an API key.

### 3. Deploy to Vercel

```bash
vercel
```

When prompted, add your environment variable:

```
ANTHROPIC_API_KEY=your_key_here
```

Or add it in the Vercel dashboard under Settings > Environment Variables.

### 4. Local development

```bash
vercel dev
```

Then open http://localhost:3000

## Project structure

```
aisle-clear/
  api/
    search.js       Vercel serverless function, calls Claude API
  public/
    index.html      Full frontend, mobile-first
  vercel.json       Vercel routing config
  package.json
  README.md
```

## Environment variables

| Variable | Description |
|---|---|
| ANTHROPIC_API_KEY | Your Anthropic API key from console.anthropic.com |

## Disclaimer

Ingredient information is AI-generated based on known product formulations and may not reflect recent changes. Always read the physical package label before consuming, especially for serious allergies.

## Built by

Mark Burns - Practical AI Builder
https://github.com/Jackattack8

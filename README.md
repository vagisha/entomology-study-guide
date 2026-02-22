# Entomology Study Guide - Science Olympiad 2026

Interactive flashcards and browse interface for studying insects for Science Olympiad 2026.

## Features

- **Flashcards** (`index.html`): Interactive flashcards with images, distinguishing marks, and optional family filtering
- **Browse** (`browse.html`): Browse insects by order with notes, PDF export, and detailed information
- **Shared Data**: All insect metadata stored in `insects-data.json` for easy maintenance
- **Shared Code**: Common functionality in `shared.js` (data loading, image fetching, URL generation)

## File Structure

```
├── index.html              # Flashcard interface
├── browse.html             # Browse interface
├── insects-data.json       # Insect metadata (123 families, 27 optional)
├── shared.js               # Shared JavaScript functions
├── shared.css              # Shared CSS styles
├── images/                 # Local specimen images (Order/Family/specimen.jpg)
└── README.md               # This file
```

## Image Naming Convention

Local specimen images should be placed in `images/[Order]/[Family]/` with the following naming:

- **Required format**: `specimen1.jpg`, `specimen2.jpg`, `specimen3.jpg`, etc.
- **Do NOT use**: `specimen.jpg` (without a number)

**Important**: 
- Always start with `specimen1.jpg` (not specimen.jpg)
- Use sequential numbering with **no gaps** (specimen1, specimen2, specimen3...)
- The system checks up to `specimen10.jpg`
- If there's a gap (e.g., specimen1.jpg exists but specimen2.jpg doesn't), it will stop checking
- Multiple images for a family will create separate flashcards for each image
- If no local images exist, the system falls back to Wikipedia API

**Examples**:
```
images/Coleoptera/Cerambycidae/specimen1.jpg
images/Coleoptera/Cerambycidae/specimen2.jpg
images/Coleoptera/Cerambycidae/specimen3.jpg
```

**Note**: You'll see 404 errors in the browser console when checking for non-existent images. This is normal and doesn't affect functionality.

## Data Structure

The `insects-data.json` file contains 123 families from 26 orders, including:
- 27 optional families (State/National level only)
- Common names, scientific names, distinguishing marks
- Wikipedia and BugGuide reference IDs

## Local Development

**You must run a local web server** (browsers block fetch() from file:// URLs):

**Option 1: Python**
```bash
python -m http.server 8000
```

**Option 2: Node.js**
```bash
npx http-server -p 8000
```

**Option 3: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

Then open `http://localhost:8000/index.html` or `http://localhost:8000/browse.html`

## GitHub Pages Deployment

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select branch and root folder
4. Access at `https://[username].github.io/[repo-name]/`

## Notes

- Notes are stored in browser localStorage
- Export/import notes as JSON
- PDF export excludes optional families
- Images loaded from local `images/` folder or Wikipedia API fallback

## Shared Functions (shared.js)

- `loadInsectsData()` - Loads insects-data.json
- `fetchInsectImage(insect)` - Fetches image with local/Wikipedia fallback
- `getNcStateUrl(insect)` - Generates NC State Entomology URL
- `getBugGuideUrl(insect)` - Generates BugGuide URL
- `getWikipediaUrl(insect)` - Generates Wikipedia URL

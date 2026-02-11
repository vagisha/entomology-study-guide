# Entomology Study Guide - Science Olympiad 2026

A comprehensive web-based study tool for the Science Olympiad 2026 Entomology event. Features flashcards, browseable insect families, and PDF export capabilities.

## Features

### 📚 Flashcard Mode (`index.html`)
- Interactive flashcards for all 113 insect families across 26 orders
- 169 total specimens for comprehensive study
- Click to flip between image and detailed information
- Filter to include/exclude State/National level (optional) families
- Previous/Next navigation and shuffle functionality
- Shows family name, common name, order, and distinguishing marks
- Links to Wikipedia and NC State resources

### 🔍 Browse Mode (`browse.html`)
- Organized by metamorphosis type (Ametabolous, Hemimetabolous, Holometabolous)
- View all families within each order
- Order characteristics and information
- Add and save personal notes for orders and families (stored in browser localStorage)
- Export notes as JSON
- **PDF Export**: Generate study guides with 2x2 grid layout, images, and space for notes
- Links to Wikipedia, NC State, and BugGuide resources
- Local image support with Wikipedia API fallback

### 🎨 Features
- Optional families marked with orange dashed borders
- No server required - runs entirely in the browser
- Notes persist across sessions using localStorage

## Getting Started
Simply open `index.html` or `browse.html` in your web browser. No installation required!


```

## Science Olympiad 2026 Coverage

### Orders Covered (26 total)
- **Ametabolous**: Acari (non-insect), Protura, Diplura, Archaeognatha, Zygentoma
- **Hemimetabolous**: Ephemeroptera, Odonata, Blattodea, Mantodea, Embioptera, Dermaptera, Plecoptera, Orthoptera, Phasmatodea, Psocodea, Hemiptera, Thysanoptera
- **Holometabolous**: Megaloptera, Neuroptera, Coleoptera, Mecoptera, Raphidioptera, Siphonaptera, Diptera, Trichoptera, Lepidoptera, Hymenoptera

### Families Covered
- 113 insect families
- 27 optional families (State/National level only)
- 86 required families (Regional/Invitational level)

## Notes Feature

- **Order Notes**: Add study notes for entire orders
- **Family Notes**: Add specific notes for individual families
- **Export**: Download all notes as JSON for backup
- **Persistence**: Notes are saved in browser localStorage

## PDF Export

Generate printable study guides:
- 2x2 grid layout (4 families per page)
- Includes images and family information
- Space for handwritten notes
- Excludes optional families
- Perfect for offline study

## Technologies Used

- Pure HTML/CSS/JavaScript (no frameworks)
- [jsPDF](https://github.com/parallax/jsPDF) for PDF generation
- Wikipedia API for fallback images
- localStorage for note persistence

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge
- Firefox
- Safari

## License

This is an educational tool created for Science Olympiad preparation. All insect information should be verified against official Science Olympiad rules and resources.

## Resources

- [NC State Insect Identification](https://genent.cals.ncsu.edu/insect-identification/)
- [BugGuide](https://bugguide.net/)
- [Wikipedia](https://en.wikipedia.org/)
- [Science Olympiad Official Rules](https://www.soinc.org/)

## Acknowledgments

Created for Science Olympiad 2026 Entomology event preparation.

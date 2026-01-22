# Interactive Periodic Table Web App

An educational and visually appealing interactive periodic table built with HTML, CSS, and vanilla JavaScript.

## Features

- **Modern grid layout** for periodic table elements
- **Each element tile** shows symbol, name, and atomic number
- **Detailed modal** appears when clicking an element showing:
  - Name, atomic number, atomic mass, and category
  - Electron configuration
  - Fun fact about the element
  - Option to mark as favorite
- **Color-coded categories** (alkali metals, noble gases, etc.)
- **Search bar** to find elements by name or atomic number
- **Option to mark favorite elements** (using localStorage)
- **Mini-game**: guess the element from a clue
- **Fun facts** for each of the 118 elements

## How to Use

1. Open `index.html` in a web browser
2. Click on any element to view detailed information
3. Use the search bar to quickly find elements
4. Mark your favorite elements using the "Add to Favorites" button
5. Access your favorites through the "Show Favorites" button
6. Play the element guessing game using the "Play Element Game" button

## Technical Details

- Pure HTML, CSS, and vanilla JavaScript (no external dependencies)
- Responsive design that works on different screen sizes
- Local storage to save favorite elements between sessions
- Complete data for all 118 elements including:
  - Atomic numbers
  - Symbols and names
  - Categories
  - Atomic masses
  - Electron configurations
  - Unique fun facts

## File Structure

- `index.html`: Main HTML structure
- `styles.css`: Styling and layout
- `script.js`: JavaScript functionality and element data

## Browser Compatibility

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## Educational Value

This interactive periodic table is designed to be both educational and engaging for:
- Students learning chemistry
- Teachers looking for visual aids
- Anyone interested in learning about chemical elements

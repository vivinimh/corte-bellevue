# Corte Belle Vue - Country Property Website

A fully responsive React website for Corte Belle Vue, a country property for sale in Italy.

## Features

- 🎨 Fully responsive design (Mobile, Tablet, Desktop)
- ⚡ Built with React + Vite for fast development
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 📱 Three distinct layouts for different screen sizes

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── App.tsx                 # Main app component with responsive routing
├── imports/               # Responsive layout components
│   ├── Desktop.tsx       # Desktop layout (1280px+)
│   ├── Tablet.tsx        # Tablet layout (768px - 1279px)
│   └── Mobile.tsx        # Mobile layout (< 768px)
├── components/           # Reusable UI components
│   ├── figma/           # Figma-specific components
│   └── ui/              # shadcn/ui components
├── styles/               # Global styles and Tailwind config
└── imports/             # SVG path definitions

```

## Customization

### Replacing Placeholder Images

The current images use placeholder services. To replace them with actual images:

1. Add your images to a `public/assets/` folder
2. Update the image URLs in:
   - `imports/Desktop.tsx`
   - `imports/Tablet.tsx`
   - `imports/Mobile.tsx`

Replace the placeholder URLs with paths like `/assets/your-image.jpg`

### Fonts

The website uses:
- **EB Garamond** for headings
- **Open Sans** for body text

Fonts are loaded from Google Fonts in `index.html`. You can customize them in the HTML file.

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Google Fonts

## License

All Rights Reserved © 2025

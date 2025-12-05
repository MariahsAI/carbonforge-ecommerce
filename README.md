# CarbonForge - Premium Carbon Fiber Parts E-Commerce

A modern e-commerce platform for premium carbon fiber automotive parts, featuring vehicles from Nissan to Ferrari.

![CarbonForge Preview](preview.png)

## Features

- 🚗 **Multi-Manufacturer Support** - Browse parts for 10+ car brands (Nissan, Toyota, BMW, Porsche, Ferrari, Lamborghini, McLaren, and more)
- 🎨 **Interior & Exterior Categories** - Easy dropdown filtering by part category
- 💎 **Premium Design** - Dark luxury theme with carbon fiber textures and gold accents
- 📦 **Dropship Ready** - Built for dropshipping business model
- 📱 **Responsive** - Works on desktop, tablet, and mobile

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/carbonforge-ecommerce.git
cd carbonforge-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Project Structure

```
carbonforge-ecommerce/
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Main application component
│   └── index.css       # Global styles
└── README.md
```

## Customization

### Adding Manufacturers

Edit the `manufacturers` array in `src/App.jsx`:

```javascript
const manufacturers = [
  { id: 'nissan', name: 'Nissan', logo: '🚗' },
  // Add more manufacturers here
];
```

### Adding Products

Edit the `featuredProducts` array in `src/App.jsx`:

```javascript
const featuredProducts = [
  { 
    id: 1, 
    name: 'Carbon Fiber Hood', 
    category: 'Exterior', 
    price: 2499, 
    manufacturer: 'BMW', 
    image: '🛡️', 
    rating: 4.9 
  },
  // Add more products here
];
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS-in-JS** - Inline styles for component isolation

## Next Steps for Production

1. **Backend Integration** - Connect to Shopify, WooCommerce, or custom API
2. **Database** - Add product catalog and inventory management
3. **Dropshipping** - Integrate with suppliers (AutoDS, Spocket, etc.)
4. **Payments** - Add Stripe/PayPal checkout
5. **Authentication** - User accounts and order history
6. **Search** - Full-text product search
7. **Reviews** - Customer review system

## License

MIT License - feel free to use for your own projects!

## Contact

Questions? Open an issue or reach out!

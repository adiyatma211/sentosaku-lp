# Sentosaku Landing Page

Official landing page for Sentosaku Tech - Professional Web & Mobile Development Studio

![Sentosaku Tech](https://img.shields.io/badge/Sentosaku-Tech-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.0+-black)
![React](https://img.shields.io/badge/React-18.0+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 About Sentosaku Tech

Sentosaku Tech adalah studio pengembangan web & mobile yang fokus membangun produk digital full-stack untuk startup dan enterprise. Kami menghadirkan solusi digital yang inovatif dengan tim ahli yang berpengalaman.

### 💡 Our Services
- **Web Development** - Aplikasi web modern dan scalable
- **Mobile Apps** - iOS & Android native development
- **Cloud Solutions** - Infrastructure & DevOps services
- **Full-Stack Solutions** - End-to-end product development

## ✨ Features

### 🎨 Modern UI/UX Design
- **Responsive Design** - Optimized untuk desktop, tablet, dan mobile
- **Glass Morphism** - Modern aesthetic dengan blur effects
- **Smooth Animations** - Engaging micro-interactions
- **Professional Typography** - Clean and readable typography system

### 🏠 Landing Page Sections
- **Hero Section** - Compelling value proposition dengan CTA buttons
- **Live Dashboard** - Real-time statistics dan project metrics
- **Project Showcase** - Portfolio dengan modal detail view
- **Client Carousel** - Auto-scrolling client logos
- **Testimonials** - Social proof dengan client reviews
- **Contact Section** - Multiple contact channels

### ⚡ Technical Features
- **Performance Optimized** - Fast loading dan smooth scrolling
- **SEO Friendly** - Meta tags dan semantic HTML structure
- **Mobile First** - Progressive enhancement approach
- **Accessibility** - WCAG compliant components
- **TypeScript** - Type-safe development

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules with custom design system
- **Icons**: Custom SVG icons
- **Deployment**: Vercel (recommended)

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn or pnpm

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sentosa-app.git
   cd sentosa-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Deployment
```bash
npm run build
npm start
```

## 📁 Project Structure

```
sentosa-app/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main landing page
│   │   ├── page.module.css   # Styling for landing page
│   │   ├── layout.tsx        # Root layout
│   │   └── assets/           # Static assets
│   └── ...                   # Other app files
├── public/                   # Public assets
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md               # This file
```

## 🎨 Customization

### Brand Colors
Edit CSS variables in `page.module.css`:
```css
:root {
  --primary: #5e8c52;      /* Primary brand color */
  --secondary: #a1b986;    /* Secondary brand color */
  --bg-deep: #f4f7f0;      /* Background color */
  /* ... more variables */
}
```

### Content Updates
- **Hero Section**: Update text content in `src/app/page.tsx`
- **Projects**: Modify `projects` array for showcase
- **Testimonials**: Update `testimonialsSection` content
- **Client Logos**: Modify `clientsSection` carousel items

### Contact Information
Update contact details:
```typescript
const WHATSAPP_URL = "https://wa.me/6281234567890?text=Hello%20Sentosaku%20Team";
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npm run type-check   # TypeScript type checking
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [sentosakutech.com](https://sentosakutech.com)
- **Email**: studio@sentosaku.com
- **WhatsApp**: +62 812-3456-7890
- **Portfolio**: View project showcase on the landing page

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons and illustrations created in-house
- Design inspired by modern SaaS landing pages
- Special thanks to our clients for their trust and collaboration

---

**Sentosaku Tech** - Transforming Ideas into Digital Reality 🚀

*Built with ❤️ by the Sentosaku Tech team*
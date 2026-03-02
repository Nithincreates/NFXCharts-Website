# NFXCharts Quick Start Guide

## 🚀 Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 File Structure

```
app/
├── components/
│   ├── Hero.tsx → Hero section with CTA buttons
│   ├── Framework.tsx → "What We Teach" cards
│   ├── Instruments.tsx → Markets section
│   ├── Process.tsx → Membership process
│   └── Membership.tsx → Pricing section
├── page.tsx → Main landing page
├── layout.tsx → Root layout
└── globals.css → Theme & global styles
```

---

## 🎨 Quick Customizations

### Update Pricing (Membership.tsx)
```tsx
Find: ₹XXXX / month
Replace with: ₹XXX / month
```

### Change Theme Colors (globals.css)
```css
:root {
  --background: #0b0f14;      /* Main background */
  --accent-blue: #3b82f6;     /* Indices color */
  --accent-gold: #d4a574;     /* Gold color */
}
```

### Edit Section Content
- **Hero**: `app/components/Hero.tsx` (lines 25-40)
- **Framework**: `app/components/Framework.tsx` (lines 6-19)
- **Instruments**: `app/components/Instruments.tsx` (lines 29-60)
- **Process**: `app/components/Process.tsx` (lines 6-17)
- **Membership**: `app/components/Membership.tsx` (lines 6-28)

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

---

## 📦 Deploy to Vercel

```bash
npm i -g vercel
vercel
```

---

## ✅ Features

- ✅ Dark premium theme
- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll navigation
- ✅ TypeScript + Tailwind CSS
- ✅ Zero external UI libraries
- ✅ Production-ready code
- ✅ Fast next-gen build system

---

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📋 Sections (5 Total)

1. **Hero** - Main headline + CTAs
2. **Framework** - 3 education cards
3. **Instruments** - Markets overview
4. **Process** - 3-step membership explanation
5. **Membership** - Pricing + features

---

## 🎯 Next Steps

1. Replace "XXXX" with actual membership price
2. Add your contact/email links
3. Deploy to Vercel
4. Set up analytics
5. Configure email captures

---

**Status**: ✅ Production Ready  
**Version**: 1.0.0

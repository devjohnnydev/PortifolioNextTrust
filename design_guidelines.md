# NextTrust Landing Page - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern tech companies like Linear, Vercel, and Stripe that balance sophistication with accessibility. The design embodies NextTrust's mantra "Nós buscamos o novo" through forward-thinking visual language that conveys trust, innovation, and technical excellence.

## Color Palette

**Primary Brand Colors:**
- **Cyan Primary**: 190 85% 45% (from logo, vibrant tech feel)
- **Deep Blue**: 220 70% 25% (trust, stability)
- **Purple Accent**: 270 65% 50% (innovation, creativity)

**Dark Mode (Primary):**
- Background: 220 15% 8%
- Surface: 220 12% 12%
- Surface Elevated: 220 10% 16%
- Text Primary: 0 0% 98%
- Text Secondary: 220 10% 70%
- Border: 220 15% 25%

**Light Mode (Secondary):**
- Background: 0 0% 100%
- Surface: 220 20% 98%
- Text Primary: 220 70% 10%
- Text Secondary: 220 20% 45%

**Gradient Treatments:**
- Hero gradient: Cyan to Purple (190 85% 45% → 270 65% 50%)
- Accent overlays: Blue to Cyan with 20% opacity

## Typography

**Font Stack:**
- Primary: 'Inter' (headings, UI elements) - Google Fonts
- Secondary: 'JetBrains Mono' (technical accents, stats) - Google Fonts
- Body: 'Inter' (all body text)

**Type Scale:**
- Hero Headline: text-6xl/text-7xl, font-bold, tracking-tight
- Section Headers: text-4xl/text-5xl, font-bold
- Service/Card Titles: text-xl/text-2xl, font-semibold
- Body: text-base/text-lg, font-normal
- Captions: text-sm, font-medium

## Layout System

**Spacing Primitives:** Consistently use Tailwind units of 4, 8, 12, 16, 20, and 32 (p-4, h-8, m-12, py-16, gap-20, py-32)

**Container Strategy:**
- Max-width: max-w-7xl for main content
- Section padding: py-20 lg:py-32
- Grid gaps: gap-8 lg:gap-12

**Responsive Breakpoints:**
- Mobile-first approach
- md: 768px (tablet)
- lg: 1024px (desktop)
- xl: 1280px (wide)

## Component Library

### Hero Section (Full-width, ~85vh)
- Large NextTrust logo (provided image) centered or left-aligned
- Animated gradient background (cyan to purple)
- Bold headline with company tagline
- Primary CTA button (ghost/outline with backdrop blur)
- Subtle grid pattern overlay for depth
- Trust indicators: "Parceiro estratégico de + empresas"

### Services Grid
- 3-column grid (lg), 2-column (md), 1-column (mobile)
- Icon + Title + Description cards
- Hover state: subtle lift with shadow
- Use outline icons from Heroicons
- Background: subtle surface elevation with border

### Case Studies
- Horizontal cards with left-aligned content
- Stats highlighted in monospace font
- Before/After metrics in contrasting colors
- 2-column layout on desktop

### About/Values Section
- Asymmetric layout mixing text and visual elements
- Mission/Vision/Values in card grid
- Timeline-style presentation of company mantra

### Contact Form
- 2-column split: Form (left) + Contact info (right)
- Floating label inputs with focus states
- Prominent submit button
- WhatsApp and LinkedIn quick actions
- Phone: (11) 98352-2274 displayed prominently

### Footer
- Multi-column layout (4 columns on desktop)
- Quick links to services
- Social proof elements
- Newsletter signup
- Contact information repeated
- Copyright and credits

## Visual Enhancements

**Micro-interactions:** Subtle hover states on cards (scale: 1.02, shadow expansion), button ripple effects

**Backgrounds:**
- Mesh gradient backgrounds for hero and CTAs
- Subtle dot pattern overlays (opacity: 0.05)
- Glassmorphism effects on elevated cards (backdrop-blur-sm)

**Borders & Shadows:**
- Borders: 1px with low opacity (border-white/10 in dark mode)
- Shadows: Multi-layered, colored shadows using brand colors
- Glow effects on hover for interactive elements

## Images

**Hero Section:**
- **Large Hero Image**: NO - Use animated gradient background with logo instead
- Logo placement: Prominent, centered with breathing room

**Service Icons:**
- Use Heroicons outline style for all service icons
- Consistent sizing: w-12 h-12
- Cyan color with purple glow on hover

**Case Study Visuals:**
- Use abstract tech illustrations or data visualization mockups
- Placeholder for client logos (if available)
- Focus on metrics and results presentation

**Supplementary Images:**
- Team photo in "Nosso Time" section (if available)
- Abstract tech patterns for section dividers
- Client portal screenshot mockup for "Portal do Cliente" section

## Accessibility & Polish

- Dark mode as default with toggle option
- All form inputs with proper labels and focus indicators
- Minimum contrast ratio 4.5:1 for text
- Keyboard navigation support
- Smooth scroll behavior between sections
- Loading states for form submission

## Content Strategy

**Page Flow (8 sections):**
1. Hero with branding and CTA
2. "Quem Somos" - Mission, Vision, Values (3-column grid)
3. Services showcase (9 services in 3×3 grid)
4. Case Studies (4 featured cases)
5. Differentials (Customer Experience, Portal, Punctuality)
6. Trust section with team intro
7. Contact/Consultation CTA with form
8. Comprehensive footer

**Tone:** Professional yet approachable, innovation-focused, technically credible, emphasizing partnership and results.
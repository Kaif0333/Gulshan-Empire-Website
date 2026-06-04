# Tech Spec — Gulshan Empire Landing Page

## Dependencies

```json
{
  "dependencies": {
    "gsap": "^3.12.7",
    "lenis": "^1.1.18",
    "lucide-react": "^0.460.0",
    "@gsap/react": "^2.1.1"
  }
}
```

- `gsap` — Core animation engine (tweens, timelines, ScrollTrigger, SplitText)
- `@gsap/react` — `useGSAP` hook for proper cleanup in React
- `lenis` — Smooth scroll with inertia
- `lucide-react` — Icon library (theater, flower-2, dumbbell, trees, landmark, party-popper, baby, mountain, footprints, target, circle-dot, waves, droplets, water, snowflake, plus navigation icons)

---

## Component Inventory

### shadcn/ui Components

| Component | Usage | Customization |
|-----------|-------|---------------|
| `dialog` | Floor plan modal — full-screen image viewer | Custom overlay opacity (95%), custom animation, dark theme |
| `button` | CTAs throughout | Gold gradient variant, outline variant, custom sizing |

### Custom Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `Navigation` | Fixed nav bar with scroll-aware transparency | — |
| `MobileMenu` | Full-screen overlay menu | `isOpen, onClose` |
| `HeroSection` | Full-viewport hero with entrance timeline | — |
| `OverviewSection` | Master plan + connectivity + feature cards | — |
| `LocationSection` | Map + distances + Wave City stats | — |
| `FloorPlansSection` | 2 floor plan cards + modal trigger | — |
| `AmenitiesSection` | 15-item icon grid | — |
| `FooterCTA` | Final CTA before footer | — |
| `Footer` | Compact footer | — |
| `ScrollReveal` | Reusable scroll-triggered fade-up wrapper | `children, delay?, stagger?, direction?` |
| `SplitTextReveal` | Word-by-word headline animation | `children, delay?` |
| `StatCounter` | Animated number counter | `value, prefix?, suffix?, duration?` |
| `IconRevealGrid` | Grid with scale+fade icon entrance | `children, stagger?` |
| `GoldButton` | CTA with shimmer pseudo-element | `children, variant?, onClick?` |
| `FeatureCard` | Image + title + description + link | `image, title, description, linkText, linkHref` |
| `AmenityItem` | Icon in circle + label | `icon, label` |
| `FloorPlanCard` | Image + specs + CTA | `image, title, areas, onViewFull` |
| `FloorPlanModal` | Full-screen floor plan viewer | `isOpen, onClose, imageSrc, title` |
| `ConnectivityItem` | Icon + name + distance | `icon, name, distance` |
| `StatItem` | Icon/number + label | `icon?, number, label, sublabel?` |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Hero entrance sequence** | GSAP Timeline | Single `gsap.timeline()` on mount. 8 sequential tweens: bg fade+scale → eyebrow → headline words (manual word spans) → description → price → CTAs → stats bar slide. Precise delay chain. | High |
| **Smooth scrolling** | Lenis | `useEffect` init, connect to ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`. RAF loop via `lenis.raf`. Cleanup on unmount. | Low |
| **Cinematic Section Reveals** | GSAP + SplitText | `SplitText` splits headlines into words. GSAP timeline with ScrollTrigger: `words stagger → body fade → visuals stagger`. Reusable per section via `useGSAP`. | High |
| **Scroll-Triggered Reveals** | GSAP ScrollTrigger | `ScrollReveal` wrapper component. `gsap.from()` with ScrollTrigger: `opacity:0, y:40` → visible. Stagger option for children. Reused across all sections. | Low |
| **Gold Shimmer CTA** | CSS | Pseudo-element with gradient, `animation: shimmer 3s ease-in-out infinite` (2s delay). Pure CSS, no JS. | Low |
| **Icon Reveal Grid** | GSAP ScrollTrigger | `gsap.from()` with `back.out(1.4)` easing, stagger 0.06s. ScrollTrigger at `top 80%`. Used in Amenities section. | Medium |
| **Parallax Depth Layers** | GSAP ScrollTrigger | `gsap.to()` with `scrub: 1` on inner image, `y: -40 → 40`. Used on hero bg and feature card images. | Low |
| **Stat Counter** | GSAP | Animate proxy object `{value:0}` to target. OnUpdate callback formats display. ScrollTrigger `once: true`. `StatCounter` component. | Medium |
| **Nav scroll transition** | GSAP ScrollTrigger | ScrollTrigger with `onUpdate` toggling CSS classes for bg/blur/border. Threshold at 100px. | Low |
| **Card hover image zoom** | CSS | `overflow: hidden` container, inner image `transition: transform 0.6s`, hover `scale(1.05)`. | Low |
| **Button hover effects** | CSS | `transition: all 0.3s`. Hover state changes bg/shadow. | Low |
| **Link underline** | CSS | Pseudo-element `scaleX(0) → scaleX(1)` on hover, `transform-origin: left`. | Low |
| **Floor plan modal** | CSS + GSAP | Dialog open/close: overlay fade 0.3s, image `scale(0.9→1)` with `power3.out`. | Medium |
| **Mobile menu** | GSAP | Overlay fade, links stagger in from bottom 0.08s. | Medium |

---

## State & Logic Plan

### Global State (React Context — `AppContext`)

```typescript
interface AppState {
  lenis: Lenis | null;        // Lenis instance for scroll control
  isMenuOpen: boolean;        // Mobile menu toggle
  activeSection: string;      // Current section for nav highlighting
}
```

### Local State

| Component | State | Purpose |
|-----------|-------|---------|
| `Navigation` | `isScrolled: boolean` | Toggle transparent → solid bg |
| `MobileMenu` | `isOpen: boolean` | Menu visibility |
| `FloorPlanModal` | `isOpen: boolean, activePlan: string` | Modal visibility + which plan |
| `FloorPlansSection` | `activePlan: '3bhk' \| '4bhk' \| null` | Which floor plan to show in modal |

### Data Flow

- App-level: Lenis instance created once, passed via context
- Section components self-contained — each registers own ScrollTriggers
- Modal state lifted to `FloorPlansSection`, not global
- No external API calls — all content is static

### Key Decisions

1. **GSAP plugin registration**: `ScrollTrigger`, `SplitText` registered once in main.tsx via `gsap.registerPlugin()`
2. **Lenis integration**: Connected to ScrollTrigger update loop. Disabled on `prefers-reduced-motion`.
3. **ScrollReveal reusability**: Single wrapper component handles 80% of section animations. Complex sections (Hero, Overview) use custom timelines.
4. **Image optimization**: All images loaded via Vite's `?url` import. Floor plan thumbnails lazy-loaded.
5. **Responsive**: CSS Grid + Flexbox. Mobile menu is a separate full-screen overlay, not a CSS transform.

---

## Project Structure

```
src/
├── main.tsx                    # Entry point, GSAP plugin registration
├── App.tsx                     # Root layout, Lenis init, Navigation, sections
├── index.css                   # Tailwind directives, custom CSS (shimmer, fonts)
├── context/
│   └── AppContext.tsx          # Lenis + menu state
├── sections/
│   ├── HeroSection.tsx
│   ├── OverviewSection.tsx
│   ├── LocationSection.tsx
│   ├── FloorPlansSection.tsx
│   ├── AmenitiesSection.tsx
│   ├── FooterCTA.tsx
│   └── Footer.tsx
├── components/
│   ├── Navigation.tsx
│   ├── MobileMenu.tsx
│   ├── ScrollReveal.tsx
│   ├── SplitTextReveal.tsx
│   ├── StatCounter.tsx
│   ├── IconRevealGrid.tsx
│   ├── GoldButton.tsx
│   ├── FeatureCard.tsx
│   ├── AmenityItem.tsx
│   ├── FloorPlanCard.tsx
│   ├── FloorPlanModal.tsx
│   ├── ConnectivityItem.tsx
│   └── StatItem.tsx
├── hooks/
│   ├── useLenis.ts             # Access Lenis from context
│   ├── useScrollReveal.ts      # Reusable ScrollTrigger setup
│   └── useMediaQuery.ts        # Responsive breakpoint detection
└── types/
    └── index.ts                # Shared TypeScript types
```

---

## Font Loading

Google Fonts via `<link>` in `index.html`:
- `Playfair Display:400,500,600,700`
- `Inter:300,400,500,600`
- `Cormorant Garamond:400italic`

---

## Color Configuration

Custom Tailwind theme extension in `tailwind.config.js`:

```javascript
colors: {
  'bg-primary': '#0F0F0F',
  'bg-secondary': '#1A1A1A',
  'bg-tertiary': '#141414',
  'text-primary': '#F5F0EB',
  'text-secondary': '#9A9590',
  'text-muted': '#5C5854',
  'accent-gold': '#C4933F',
  'accent-gold-hover': '#D4A54F',
  'accent-gold-dim': '#8B7340',
  'border-subtle': '#2A2A2A',
}
```

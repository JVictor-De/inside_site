# 📱 Mobile CRO Implementation - Visual Reference

## Quick Implementation Summary

### ✅ What Was Implemented

#### 1. **Sticky Conversion Bar** (Bottom Footer)
```
┌─────────────────────────────────────┐
│  📱  Falar com Consultor           │
│  Análise gratuita • Resposta 24h   │
└─────────────────────────────────────┘
```
- **Appears:** After 80vh scroll (Hero section)
- **Style:** Glassmorphism with blur(20px)
- **Color:** Navy blue rgba(11,42,69,0.85)
- **Animation:** Slides up from bottom (400ms)
- **Mobile Only:** Hidden on desktop (md:hidden)

---

#### 2. **Carousel Navigation** (Como Trabalhamos Section)
```
Desktop View (md+):
┌──────┐  ┌──────┐  ┌──────┐
│ Card │  │ Card │  │ Card │  [Grid Layout]
└──────┘  └──────┘  └──────┘

Mobile View (<768px):
┌────────────┐
│   Card 1   │ [peek→]  [Swipeable Carousel]
└────────────┘
     ⚫ ○ ○ ○ ○  [Dot Indicators]
```
- **Behavior:** Horizontal scroll with snap points
- **Card Width:** 85vw (shows "peek" of next card)
- **Background:** Solid white (0.95 opacity) for readability
- **Dots:** Interactive tap navigation + auto-tracking

---

#### 3. **Mobile Menu Glassmorphism**
```
┌─────────────────────────────────┐
│ ☰ INSITE                        │  [Header]
└─────────────────────────────────┘
          ↓ [Tap Menu]
┌═════════════════════════════════┐
║ [Glassmorphism Overlay]         ║
║  Início                         ║
║  Como Funciona                  ║
║  Serviços                       ║
║  Análise                        ║
║  ─────────────────────          ║
║  📱 Falar com Consultor         ║
╚═════════════════════════════════╝
```
- **Backdrop:** Blur(20px) with rgba(11,42,69,0.7)
- **Menu:** Gradient glass with blur(24px)
- **Text:** White color for contrast
- **CTA:** Gradient button (Green → Navy)

---

## Component Architecture

### File Structure
```
src/app/components/
├── StickyBarMobile.tsx     [NEW - Sticky footer bar]
├── HowWeWork.tsx           [UPDATED - Added carousel]
├── Header.tsx              [UPDATED - Added mobile menu]
└── App.tsx                 [UPDATED - Imported StickyBar]

src/styles/
└── index.css               [UPDATED - Added scrollbar-hide]

docs/
├── MOBILE_CRO_SPECS.md     [NEW - Full documentation]
└── MOBILE_QUICK_REF.md     [NEW - This file]
```

---

## Key CSS Classes

### Carousel (HowWeWork.tsx)
```css
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Container */
overflow-x: auto
scroll-snap-type: x mandatory
scroll-behavior: smooth

/* Cards */
flex: 0 0 85vw
scroll-snap-align: center
```

### Glassmorphism Pattern
```css
/* Sticky Bar */
background: rgba(11, 42, 69, 0.85)
backdrop-filter: blur(20px) saturate(150%)
border-top: 1px solid rgba(255, 255, 255, 0.2)

/* Mobile Menu Overlay */
background: rgba(11, 42, 69, 0.7)
backdrop-filter: blur(20px) saturate(150%)

/* Menu Content */
background: linear-gradient(180deg, 
  rgba(255, 255, 255, 0.12) 0%, 
  rgba(255, 255, 255, 0.05) 100%)
backdrop-filter: blur(24px) saturate(180%)
```

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `< 768px` (Mobile) | Carousel + Sticky Bar + Mobile Menu |
| `768px - 1023px` (Tablet) | Desktop grid (2 cols) + No sticky bar |
| `≥ 1024px` (Desktop) | Desktop grid (3 cols) + SVG animations |

---

## User Flow (Mobile)

1. **Page Load**
   - Hero appears with futuristic design
   - Header visible with hamburger menu

2. **Scroll to 80vh** (Below Hero)
   - Sticky bar slides up from bottom
   - Glassmorphism effect activates

3. **Scroll to "Como Trabalhamos"**
   - Carousel appears with peek of next card
   - User can swipe horizontally
   - Dots show progress (5 steps)

4. **Tap Hamburger Menu**
   - Glassmorphism overlay fades in
   - Menu items slide in
   - CTA button at bottom

5. **Tap CTA (Sticky Bar or Menu)**
   - Smooth scroll to contact form
   - Progressive form appears (3 steps)

---

## Testing Checklist

### Visual Testing
- [ ] iPhone SE (375px) - Sticky bar appears correctly
- [ ] iPhone 14 Pro (390px) - Carousel swipes smoothly
- [ ] iPhone 14 Pro Max (430px) - Dots are tappable
- [ ] Android (360px) - Menu overlay works
- [ ] iPad Mini (768px) - Desktop grid appears

### Functional Testing
- [ ] Scroll to 80vh → Sticky bar appears
- [ ] Swipe carousel → Cards snap to center
- [ ] Tap dot → Carousel scrolls to card
- [ ] Tap hamburger → Menu opens with glass effect
- [ ] Tap menu item → Menu closes
- [ ] Tap CTA → Scrolls to contact form

### Performance Testing
- [ ] Lighthouse Mobile Score: 90+
- [ ] First Contentful Paint: < 1.8s
- [ ] Largest Contentful Paint: < 2.5s
- [ ] No layout shift (CLS < 0.1)

---

## Key Decisions Made

### Why 85vw for Carousel?
- Shows "peek" of next card (15vw visible)
- Creates curiosity and encourages swiping
- Industry best practice for horizontal scrolls

### Why 80vh Trigger for Sticky Bar?
- After Hero section (user has seen value prop)
- Before long-form content (prevents fatigue)
- Balances urgency without being intrusive

### Why Glassmorphism Only on Overlays?
- **Interaction layers** (menu, sticky bar): Premium feel
- **Content cards** (carousel): Readability priority
- Performance: Reduces backdrop-filter usage

### Why No Auto-Advance Carousel?
- User control: Respects user pace
- Accessibility: Reduces cognitive load
- Mobile UX: Swipe gestures feel natural

---

## Quick Reference: Props & State

### StickyBarMobile
```typescript
State:
- isVisible: boolean (scroll > 80vh)

Logic:
- useEffect: addEventListener('scroll')
- Cleanup: removeEventListener on unmount
```

### HowWeWork (Mobile)
```typescript
State:
- activeIndex: number (current card)

Refs:
- carouselRef: HTMLDivElement (scroll container)

Logic:
- Scroll listener → Calculate active card
- Dot click → Smooth scroll to target
```

### Header (Mobile Menu)
```typescript
State:
- isMobileMenuOpen: boolean

Logic:
- Toggle on hamburger click
- Close on menu item click
- Close on backdrop click
```

---

## Analytics Events to Track

```javascript
// When sticky bar appears
'sticky_bar_visible' { scroll_depth: '80vh' }

// When user clicks CTA
'cta_click' { location: 'sticky_bar_mobile' }

// When user swipes carousel
'carousel_swipe' { card_index: 2, direction: 'right' }

// When user taps dot
'carousel_navigate' { method: 'dot_click', target: 3 }

// When menu opens
'menu_toggle' { action: 'open', device: 'mobile' }
```

---

## Common Issues & Solutions

### Issue: Sticky bar jumps on first scroll
**Solution:** Use `will-change: transform` for GPU acceleration

### Issue: Carousel doesn't snap properly
**Solution:** Ensure `scroll-snap-type: x mandatory` on container

### Issue: Backdrop-filter not working on older devices
**Solution:** Fallback to higher opacity background

### Issue: Menu doesn't close on item click
**Solution:** Call `setIsMobileMenuOpen(false)` in onClick

### Issue: Dots don't update on swipe
**Solution:** Add scroll event listener to track position

---

## Color Palette Reference

| Element | Color | Hex/RGBA |
|---------|-------|----------|
| Primary (Navy) | Dark Blue | #0B2A45 |
| Secondary (Green) | Teal Green | #1F7A5A |
| Accent (Red) | Warning Red | #FF4444 |
| Text (Dark) | Charcoal | #4A5568 |
| Background (Light) | Off-White | #F8FAFB |
| Glass (Overlay) | Navy 85% | rgba(11,42,69,0.85) |
| Glass (Menu) | White 12% | rgba(255,255,255,0.12) |

---

## Typography Scale (Mobile)

| Element | Size | Weight | Font |
|---------|------|--------|------|
| H1 (Hero) | 36px | 900 | Montserrat |
| H2 (Section) | 28px | 900 | Montserrat |
| H3 (Card Title) | 18px | 700 | Montserrat |
| Body Text | 14px | 400 | Lato |
| CTA Button | 16px | 600 | Lato |
| Support Text | 12px | 400 | Lato |

---

## Performance Optimizations Applied

1. **GPU Acceleration**
   ```css
   will-change: transform
   transform: translateZ(0)
   ```

2. **Passive Scroll Listeners**
   ```typescript
   addEventListener('scroll', handler, { passive: true })
   ```

3. **Reduced Motion Support**
   ```css
   @media (prefers-reduced-motion: reduce) {
     animation: none !important;
   }
   ```

4. **Lazy Loading**
   - Images: `loading="lazy"`
   - Components: React.lazy() for below-fold

---

## Next Steps (If Needed)

### Phase 2 Enhancements
- [ ] Add WhatsApp click-to-chat integration
- [ ] Implement localStorage for sticky bar dismissal
- [ ] Add haptic feedback on iOS (Vibration API)
- [ ] Create A/B test variants for carousel width

### Phase 3 Advanced Features
- [ ] Progressive Web App (PWA) manifest
- [ ] Push notifications for follow-ups
- [ ] Offline mode with Service Worker
- [ ] Analytics dashboard integration

---

**Quick Ref Version:** 1.0  
**Created:** 2024  
**For:** Mobile CRO Implementation  
**Status:** ✅ Production Ready

---

## One-Minute Summary

**What we built:**
1. Sticky conversion bar that appears after 80vh scroll
2. Swipeable carousel for "Como Trabalhamos" section
3. Glassmorphism mobile menu with blur effects

**Why it matters:**
- Reduces scroll fatigue (carousel vs. long vertical list)
- Improves conversion (always-visible CTA in sticky bar)
- Premium feel (Glassmorphism on overlays)

**Key metrics:**
- Mobile-first design (< 768px breakpoint)
- 85vw carousel cards (shows peek)
- 80vh scroll trigger (after Hero)
- blur(20px) Glassmorphism effect

**Testing priority:**
1. iPhone Safari (primary target)
2. Chrome Android (secondary)
3. Lighthouse mobile score (90+)

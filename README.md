# BuildFlow AI - Design System & Handoff

## 1. Design Tokens

### Colors (CSS Variables)
```css
--ci-bg: #F7F8FA;            /* Page Background */
--ci-ink: #1B2636;           /* Primary Text */
--ci-slate: #2F4858;         /* Secondary Text */
--ci-concrete: #E6E9EC;      /* Surfaces / Cards */
--ci-safety: #F2A900;        /* Primary Accent (Construction Yellow) */
--ci-strong: #0E4A6E;        /* Deep Accent / Primary CTA */
--ci-success: #2F9A6A;       /* Success States */
--ci-danger: #D64545;        /* Error States */
--ci-muted: #8B95A1;         /* Muted Text / Borders */

/* State Variants */
--ci-strong-700: #0b3a53;
--ci-safety-700: #cf8900;
--ci-muted-600: #6d7780;
```

### Typography
- **Headings**: Roboto Slab (400, 700)
- **Body/UI**: Inter (300, 400, 600)
- **Scale**:
  - H1: 40px (700)
  - H2: 28px (700)
  - H3: 20px (600)
  - Body: 16px (400)
  - Small: 13px (400)
  - Caption: 12px (600)

### Spacing & Grid
- **Baseline**: 8px
- **Grid**: 12-column Desktop (24px gutter), 8-column Tablet, 1-column Mobile.
- **Max Width**: 1200px (centered).

## 2. Component Library

### Buttons (`/components/ui/button.tsx`)
- **Variants**: `primary`, `secondary`, `outline`, `ghost`, `danger`, `link`.
- **Sizes**: `sm`, `default`, `lg`, `icon`.

### Inputs (`/components/ui/input.tsx`)
- Standard text input with focus states and brand styling.

### Stepper (`/components/ui/stepper.tsx`)
- Multi-step progress indicator with success/active/pending states.

### File Uploader (`/components/ui/file-uploader.tsx`)
- Drag-and-drop interface with progress bars and file type icons.

### Card (`/components/ui/card.tsx`)
- Container for content with header, content, and footer sub-components.

## 3. Responsive Rules
- **Desktop (1440px+)**: Multi-column layouts, full navigation.
- **Tablet (768px - 1024px)**: Stacked columns (2-col), simplified navigation.
- **Mobile (375px - 767px)**: Single column, sticky actions, touch-friendly targets (min 44px).

## 4. AI Integration Points (UI Only)
- **Renderings**: `ProjectDetail` -> `AI Renderings Studio` modal.
- **Estimates**: `ProjectDetail` -> `Cost Estimator` modal.
- **Chat**: `ProjectDetail` -> `Communication Hub` with AI-suggested prompts.

## 5. Accessibility
- WCAG 2.1 AA compliant contrast ratios.
- Keyboard navigable stepper and modals.
- Focus traps implemented for modal overlays.
- ARIA labels for icon-only buttons.

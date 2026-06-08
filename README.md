# SI EGYPTE Website

Premium, colorful, family-friendly static marketing website for SI EGYPTE, a family entertainment company serving Egypt specializing in trackless trains, kids electric cars, shopping centre attractions, carnivals, and family event experiences.

The site is built with plain HTML, CSS, and JavaScript so it can be reviewed quickly, hosted easily, and later converted into WordPress + Elementor Pro, a custom WordPress theme, or Figma page layouts.

## Pages Included

- `index.html` - Home page with hero, attraction previews, why choose section, audience cards, stats, gallery, and CTA.
- `attractions.html` - Detailed services for trackless trains, kids electric cars, and custom entertainment setups.
- `events.html` - Event and carnival solutions, packages, staffing, and booking process.
- `shopping-centres.html` - Shopping centre partner page focused on dwell time, family engagement, and fully managed activations.
- `safety.html` - Safety, compliance, training, maintenance, insurance, and venue readiness page.
- `about.html` - Company story, mission, vision, values, and differentiators.
- `contact.html` - Contact form, phone, email, location, business hours, and service map.

## Design System

### Color Tokens

| Token            | Hex       | Usage                                         |
| ---------------- | --------- | --------------------------------------------- |
| Navy             | `#071B3A` | Header, footer, dark panels, premium contrast |
| Royal Blue       | `#1266F1` | Links, badges, accents, visual balance        |
| Orange           | `#FF7A1A` | Primary CTA energy, highlighted hero phrase   |
| Yellow           | `#FFD23F` | Playful badges, partner card, trust accents   |
| Red              | `#EF4444` | CTA gradient, validation, warm accent         |
| Green            | `#22C55E` | Safety, success, trust accents                |
| White            | `#FFFFFF` | Cards and content surfaces                    |
| Light Background | `#F7FAFF` | Soft page bands and alternate sections        |
| Text Dark        | `#102033` | Primary text and headings                     |
| Text Muted       | `#667085` | Paragraphs and secondary text                 |

### Typography

- Headings: `Poppins`, then system sans-serif fallback.
- Body: `Inter`, then system sans-serif fallback.
- Large page headings are responsive through breakpoints, not continuous viewport scaling.
- Font weights use strong contrast: 800 to 900 for CTAs, nav, badges, and section labels.

### Spacing And Layout

- Mobile-first spacing starts at 72px section padding.
- Tablet and desktop increase section rhythm to 88px.
- Main container: `min(100% - 32px, 1180px)`.
- Cards, media, and panels use consistent rounded corners and soft shadows.
- Desktop pages use two-column hero/detail layouts and multi-column cards.
- Mobile pages stack vertically with full-width CTA buttons.

### Components

- Header with logo, hamburger navigation, desktop nav, and partner CTA.
- Footer with logo, social assets, quick links, partner links, contact details, and yellow partner card.
- Primary button: orange/red gradient.
- Secondary button: white button with navy text.
- CTA banner: colorful premium gradient block.
- Service card: image, icon badge, title, description, link.
- Benefit card: icon badge, title, description.
- Statistic card: number/label format on navy strip.
- Gallery card: image asset and caption.
- Contact form fields: labels, error states, validation text, success status.
- Section title block: eyebrow, heading, optional supporting paragraph.
- Icon badge: reusable letter-based asset that can later be replaced with icon assets.
- Trust/partner card assets: safety badges, footer partner card, package cards.

## How To Run Locally

Open `index.html` directly in a browser. No build step, package manager, or server is required.

For local development with live reload, use any static server. Example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Folder Structure

```text
si-egypte-website/
  assets/
    about-family.svg
    attraction-cars.svg
    attraction-setup.svg
    attraction-train.svg
    events-carnival.svg
    hero-train.svg
    map-egypt.svg
    safety-badges.svg
    shopping-centre.svg
  about.html
  attractions.html
  contact.html
  events.html
  figma-layout-guide.md
  index.html
  README.md
  safety.html
  script.js
  shopping-centres.html
  style.css
```

## How To Edit Content

The HTML includes comments for client-editable blocks such as:

- Hero text
- Buttons
- Phone number
- Email
- Services
- Images
- Gallery
- Events
- Contact details
- Footer links

Search for `EDITABLE:` inside each HTML file to find content blocks that can be replaced without changing the design system.

## How To Replace Images

The current files use lightweight SVG illustrations because no real photography was provided. Replace them with client-supplied WebP images when available.

Recommended approach:

1. Export optimized images as `.webp`.
2. Put them in the `assets/` folder.
3. Replace the relevant `src="assets/example.svg"` paths in HTML.
4. Keep meaningful `alt` text for accessibility.
5. Use the same approximate aspect ratios to avoid layout shifts.

Suggested future image names:

- `hero-train.webp`
- `trackless-train.webp`
- `kids-electric-cars.webp`
- `shopping-centre-activation.webp`
- `event-carnival.webp`
- `safety-team.webp`
- `about-family-entertainment.webp`

## Performance Notes

- No frameworks or heavy libraries.
- All non-hero images use `loading="lazy"`.
- CSS animations are small transform/opacity transitions.
- Motion is reduced for users with `prefers-reduced-motion`.
- Reusable CSS tokens reduce repeated styling.
- SVG illustrations are lightweight and local.

## WordPress + Elementor Pro Conversion Notes

This static structure is intentionally section-based. Each major page section can become an Elementor section, container, or template part:

- Header and footer become global Elementor theme builder templates.
- Service cards become reusable card widgets or loop items.
- CTA banners become global call-to-action sections.
- Contact form can be replaced with Elementor Form, WPForms, Fluent Forms, or Gravity Forms.
- Assets can be uploaded into the WordPress media library and swapped in without changing copy.
- CSS tokens can become Elementor global colors and typography styles.
- Repeated page sections can be converted into Elementor saved sections or custom block patterns.

For a custom WordPress theme, keep the current HTML sections as template partials and move repeated content into reusable PHP components.

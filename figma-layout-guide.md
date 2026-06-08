# SI EGYPTE Figma Layout Guide

This guide maps the static website into Figma-ready pages, frames, styles, reusable components, and Auto Layout structures.

## 1. Page List

1. Home
2. Our Attractions
3. Events & Carnivals
4. Shopping Centres
5. Safety & Compliance
6. About Us
7. Contact Us

## 2. Suggested Figma Frames

Create three frame sizes for each page:

- Desktop: `1440px` width
- Tablet: `768px` width
- Mobile: `390px` width

Recommended frame names:

- `Home / Desktop / 1440`
- `Home / Tablet / 768`
- `Home / Mobile / 390`

Repeat this naming pattern for all pages.

## 3. Color Styles

Create these Figma color styles:

- `Brand/Navy` - `#071B3A`
- `Brand/Royal Blue` - `#1266F1`
- `Brand/Orange` - `#FF7A1A`
- `Brand/Yellow` - `#FFD23F`
- `Brand/Red` - `#EF4444`
- `Brand/Green` - `#22C55E`
- `Neutral/White` - `#FFFFFF`
- `Neutral/Light Background` - `#F7FAFF`
- `Text/Dark` - `#102033`
- `Text/Muted` - `#667085`
- `Border/Soft Blue` - `#D9E4F5`

## 4. Typography Styles

Use Poppins if available; otherwise use the closest clean geometric sans-serif.

- `Display/H1 Desktop`: Poppins Bold, 70px, line height 1.08
- `Display/H1 Tablet`: Poppins Bold, 57px, line height 1.08
- `Display/H1 Mobile`: Poppins Bold, 39px, line height 1.08
- `Heading/H2 Desktop`: Poppins Bold, 41px, line height 1.1
- `Heading/H2 Mobile`: Poppins Bold, 32px, line height 1.1
- `Heading/H3`: Poppins Bold, 19px, line height 1.2
- `Body/Large`: Inter Regular, 17px, line height 1.6
- `Body/Default`: Inter Regular, 16px, line height 1.6
- `Body/Small`: Inter Regular, 14px, line height 1.5
- `Label/Eyebrow`: Inter Black, 13px, uppercase
- `Button/Default`: Inter Extra Bold, 16px

## 5. Spacing Scale

Use an 8px-based spacing system:

- `4px` - micro gaps
- `8px` - icon/text gaps
- `12px` - compact inner spacing
- `16px` - mobile container gutters and card gaps
- `20px` - card padding
- `24px` - grid gaps
- `32px` - panel padding
- `48px` - section inner spacing
- `72px` - mobile section padding
- `88px` - tablet/desktop section padding

Container widths:

- Desktop content max width: `1180px`
- Mobile gutter: `16px` each side
- Tablet gutter: `24px` each side

## 6. Component List

Create these reusable Figma components:

- `Header/Desktop`
- `Header/Mobile`
- `Footer`
- `Button/Primary`
- `Button/Secondary`
- `Button/Light`
- `Section Heading`
- `Icon Badge`
- `Service Card`
- `Benefit Card`
- `Statistic Card`
- `Gallery Card`
- `CTA Banner`
- `Trust Badge`
- `Package Card`
- `Timeline Step`
- `Contact Field`
- `Contact Card`
- `Map Asset`
- `Partner Card`

## 7. Reusable Blocks

### Header

Auto Layout horizontal on desktop:

- Logo group
- Navigation group
- CTA button

Mobile:

- Logo group
- Menu button
- Collapsed vertical nav overlay

### Section Heading

Auto Layout vertical:

- Eyebrow row
- Heading
- Optional paragraph

Suggested width:

- Desktop: `720px` to `760px`
- Mobile: Fill container

### Service Card

Auto Layout vertical:

- Image frame, ratio about `1.55:1`
- Content block
- Icon badge
- Title
- Description
- Text link

### CTA Banner

Desktop Auto Layout horizontal:

- Copy group: eyebrow, heading, paragraph
- CTA button aligned right

Mobile Auto Layout vertical:

- Copy group
- Full-width CTA button

## 8. Page Section Breakdown

### Home Page

Sections:

1. Header
2. Hero
   - Eyebrow: SI EGYPTE
   - H1 with orange highlight on "Family Entertainment"
   - Supporting paragraph
   - Two CTA buttons
   - Location badge
   - Large train/kids visual
3. Our Attractions Preview
   - Section heading
   - Three service cards
4. Why Choose SI EGYPTE
   - Dark navy panel
   - Copy column
   - Six check-list items
5. Who We Serve
   - Three benefit cards
6. Statistics Strip
   - Four statistic cards
7. Gallery
   - Four gallery cards
8. CTA Banner
9. Footer

### Our Attractions Page

Sections:

1. Header
2. Page hero with attraction visual
3. Trackless Train Experience detail
4. Kids Electric Cars detail
5. Custom Entertainment Setups detail
6. Gallery grid
7. CTA banner
8. Footer

### Events & Carnivals Page

Sections:

1. Header
2. Page hero with carnival visual
3. Event solutions card grid
4. Full setup and operation split section
5. Package cards
6. Booking process timeline
7. CTA banner
8. Footer

### Shopping Centres Page

Sections:

1. Header
2. Page hero with shopping centre visual
3. Partner benefits grid
4. Activation formats split section
5. Statistics strip
6. Partner CTA banner
7. Footer

### Safety & Compliance Page

Sections:

1. Header
2. Page hero with safety badges visual
3. Operating standards grid
4. Dark shopping-centre compliance panel
5. Trust badge row
6. CTA banner
7. Footer

### About Us Page

Sections:

1. Header
2. Page hero with family entertainment visual
3. Company story and mission/vision cards
4. Values grid
5. Differentiator split section
6. CTA banner
7. Footer

### Contact Us Page

Sections:

1. Header
2. Page hero with contact pills and map visual
3. Contact form panel
4. Contact sidebar
   - Contact information card
   - Business hours card
   - Service map
5. Footer

## 9. Notes For Converting HTML Sections Into Figma Frames

- Each `<section>` should become its own top-level Figma frame within the page.
- Keep the same section order as the HTML to preserve the content flow.
- Use a page-level vertical Auto Layout frame for each viewport.
- Set each section frame to fill width.
- Place an inner container frame at `1180px` max width on desktop.
- On mobile, set inner container to fill width with `16px` side padding.
- Convert repeated cards into components before laying out all pages.
- Use component variants for button styles, icon badge colors, package card featured/default states, and form field states.

## 10. Image Assets Needed

Current local assets:

- `hero-train.svg`
- `attraction-train.svg`
- `attraction-cars.svg`
- `attraction-setup.svg`
- `events-carnival.svg`
- `shopping-centre.svg`
- `safety-badges.svg`
- `about-family.svg`
- `map-egypt.svg`

Future photography or rendered WebP assets:

- Hero train and kids/family image
- Real trackless train operation image
- Real kids electric car image
- Shopping centre activation image
- Events/carnival setup image
- Staff/safety operation image
- Founder/team/family entertainment image
- Egypt service map or embedded map screenshot

## 11. Auto Layout Suggestions

- Page frame: vertical Auto Layout, gap `0`, fill width.
- Section frame: vertical or horizontal Auto Layout depending on content.
- Hero desktop: horizontal Auto Layout, two columns, `48px` gap.
- Hero mobile: vertical Auto Layout, copy first, media second, `32px` gap.
- Card grids: use Auto Layout wrap or fixed grid frames.
- Card content: vertical Auto Layout, `12px` to `16px` gap.
- Footer desktop: horizontal Auto Layout with four columns.
- Footer mobile: vertical Auto Layout with `32px` gaps.
- Contact form desktop: two-column form grid.
- Contact form mobile: single-column vertical stack.

## 12. Mobile Responsive Notes

- Header collapses into a hamburger menu.
- CTA buttons become full-width where useful.
- Hero and page split sections stack vertically.
- Card grids become one column on mobile, two columns on tablet, three or four columns on desktop.
- Footer columns stack vertically.
- Use large touch targets: minimum `44px` height.
- Keep card images at stable aspect ratios to prevent layout shifts.
- Avoid placing floating labels over important imagery on narrow screens.

## 13. Component States

Buttons:

- Default
- Hover
- Focus
- Disabled, if needed for future forms

Form fields:

- Default
- Focus
- Error
- Filled

Cards:

- Default
- Hover lift
- Featured package state

Navigation:

- Default link
- Active link
- Mobile menu open state

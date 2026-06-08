# SI EGYPTE Figma Implementation Checklist

This checklist is based on the final HTML/CSS/JS implementation. Use it to recreate the website as editable Figma pages, components, variables, and responsive frames.

## Global Setup

### Figma Pages

- [ ] Create page: `00 Design System`
- [ ] Create page: `01 Home`
- [ ] Create page: `02 Our Attractions`
- [ ] Create page: `03 Events & Carnivals`
- [ ] Create page: `04 Shopping Centres`
- [ ] Create page: `05 Safety & Compliance`
- [ ] Create page: `06 About Us`
- [ ] Create page: `07 Contact Us`
- [ ] Create page: `08 Assets & Assets`

### Frame Sizes

Create these frames for every website page:

- [ ] `Page Name / Desktop / 1440` - width `1440px`
- [ ] `Page Name / Tablet / 768` - width `768px`
- [ ] `Page Name / Mobile / 390` - width `390px`

Frame rules:

- [ ] Page frame uses vertical Auto Layout.
- [ ] Section frames fill width.
- [ ] Desktop inner container max width: `1180px`.
- [ ] Desktop page side margin: center aligned.
- [ ] Tablet side padding: `24px`.
- [ ] Mobile side padding: `16px`.
- [ ] Section vertical padding desktop/tablet: `88px`.
- [ ] Section vertical padding mobile: `72px`.

## Design Tokens

### Color Styles

- [ ] `Brand/Navy` - `#071B3A`
- [ ] `Brand/Royal Blue` - `#1266F1`
- [ ] `Brand/Orange` - `#FF7A1A`
- [ ] `Brand/Yellow` - `#FFD23F`
- [ ] `Brand/Red` - `#EF4444`
- [ ] `Brand/Green` - `#22C55E`
- [ ] `Neutral/White` - `#FFFFFF`
- [ ] `Neutral/Light Background` - `#F7FAFF`
- [ ] `Text/Dark` - `#102033`
- [ ] `Text/Muted` - `#667085`
- [ ] `Border/Soft Blue` - `#D9E4F5`
- [ ] `Overlay/Navy 12` - `#071B3A` at `12%`
- [ ] `Overlay/White 10` - `#FFFFFF` at `10%`
- [ ] `Accent/Blue Tint` - `#1266F1` at `12%`
- [ ] `Accent/Orange Tint` - `#FF7A1A` at `14%`
- [ ] `Accent/Green Tint` - `#22C55E` at `14%`
- [ ] `Accent/Red Tint` - `#EF4444` at `12%`

### Gradients

- [ ] `Gradient/Primary Button` - `#FF7A1A` to `#EF4444`, 135 degrees.
- [ ] `Gradient/Logo Mark` - `#FFD23F` to `#FF7A1A`, 135 degrees.
- [ ] `Gradient/Hero Background` - `#F7FAFF` to warm yellow/orange tint.
- [ ] `Gradient/Dark Panel` - navy base with royal blue/orange overlays.
- [ ] `Gradient/CTA Banner` - red/orange/royal blue blend.

### Text Styles

- [ ] `Display/H1 Desktop` - Poppins Bold, `70px`, line height `1.08`, color `Text/Dark`.
- [ ] `Display/H1 Tablet` - Poppins Bold, `57px`, line height `1.08`, color `Text/Dark`.
- [ ] `Display/H1 Mobile` - Poppins Bold, `39px`, line height `1.08`, color `Text/Dark`.
- [ ] `Heading/H2 Desktop` - Poppins Bold, `41px`, line height `1.1`, color `Text/Dark`.
- [ ] `Heading/H2 Mobile` - Poppins Bold, `32px`, line height `1.1`, color `Text/Dark`.
- [ ] `Heading/H3` - Poppins Bold, `19px`, line height `1.2`, color `Text/Dark`.
- [ ] `Body/Large` - Inter Regular, `17px`, line height `1.6`, color `Text/Muted`.
- [ ] `Body/Default` - Inter Regular, `16px`, line height `1.6`, color `Text/Muted`.
- [ ] `Body/Small` - Inter Regular, `14px`, line height `1.5`, color `Text/Muted`.
- [ ] `Label/Eyebrow` - Inter Black, `13px`, uppercase, color `Brand/Royal Blue`.
- [ ] `Label/Nav` - Inter Extra Bold, `14px`, color white at `82%`.
- [ ] `Button/Default` - Inter Extra Bold, `16px`, color by variant.
- [ ] `Stat/Value` - Poppins Bold, `29px`, line height `1`, color `Brand/Yellow`.

### Effects

- [ ] `Shadow/Card` - y `14`, blur `30`, color `#071B3A` at `11%`.
- [ ] `Shadow/Soft` - y `18`, blur `45`, color `#071B3A` at `12%`.
- [ ] `Shadow/Panel` - y `24`, blur `60`, color `#071B3A` at `22%`.
- [ ] `Hover Lift` note - cards move up `6px` on hover in prototype docs.

### Radius

- [ ] `Radius/Button` - `999px`
- [ ] `Radius/Logo` - `16px`
- [ ] `Radius/Card` - `20px`
- [ ] `Radius/Panel` - `28px`
- [ ] `Radius/Input` - `14px`
- [ ] `Radius/Badge` - `14px`

## Global Components

### Header Desktop

- [ ] Component name: `Header/Desktop`
- [ ] Frame fill: `Brand/Navy`
- [ ] Height: `80px`
- [ ] Inner container width: `1180px`
- [ ] Auto Layout: horizontal
- [ ] Alignment: center
- [ ] Distribution: space between
- [ ] Gap: `16px`
- [ ] Children:
- [ ] `Logo`
- [ ] `Primary Nav`
- [ ] `Button/Primary Small`

Logo:

- [ ] Auto Layout horizontal, gap `12px`, center aligned.
- [ ] Logo mark `48x48`, radius `16px`, `Gradient/Logo Mark`.
- [ ] Text stack vertical.
- [ ] Brand text: `SI EGYPTE`, white, Poppins Bold `16px`.
- [ ] Subtext: `Trains & Toys`, white `74%`, Inter `12px`.

Primary Nav:

- [ ] Auto Layout horizontal.
- [ ] Gap: `2px` to `4px`.
- [ ] Nav item padding: horizontal `12px`, vertical `9px`.
- [ ] Active item fill: white at `10%`.
- [ ] Active radius: `12px`.
- [ ] Text style: `Label/Nav`.

### Header Mobile

- [ ] Component name: `Header/Mobile`
- [ ] Width: fill
- [ ] Height: `80px`
- [ ] Auto Layout horizontal, space between.
- [ ] Logo same as desktop.
- [ ] Menu button `46x46`, radius `14px`.
- [ ] Menu button fill: white at `8%`.
- [ ] Menu button stroke: white at `18%`.
- [ ] Menu icon: three white lines, width `20px`.
- [ ] Create open-state nav overlay below header.
- [ ] Overlay Auto Layout vertical.
- [ ] Overlay fill: `Brand/Navy`.
- [ ] Overlay side inset: `16px`.
- [ ] Overlay padding: `16px`.
- [ ] Overlay radius bottom-left/bottom-right `22px`.

### Footer

- [ ] Component name: `Footer`
- [ ] Fill: `Brand/Navy`.
- [ ] Desktop padding top `52px`, bottom `36px`.
- [ ] Desktop Auto Layout horizontal.
- [ ] Desktop columns: brand `1.5fr`, quick links `0.8fr`, partner `0.8fr`, contact `1fr`.
- [ ] Gap: `32px`.
- [ ] Mobile Auto Layout vertical, gap `32px`.
- [ ] Include logo component.
- [ ] Include social social buttons `40x40`, radius `999px`, white `10%`.
- [ ] Footer heading: Poppins Bold `19px`, white.
- [ ] Footer link: Inter `16px`, white `72%`.
- [ ] Partner card fill: `Brand/Yellow`, radius `20px`, padding `16px`.

### Button Components

- [ ] `Button/Primary`
- [ ] Auto Layout horizontal, center.
- [ ] Min height `48px`.
- [ ] Padding horizontal `18px`, vertical `14px`.
- [ ] Radius `999px`.
- [ ] Fill `Gradient/Primary Button`.
- [ ] Text style `Button/Default`, white.

- [ ] `Button/Secondary`
- [ ] Same sizing as primary.
- [ ] Fill `Neutral/White`.
- [ ] Stroke `Border/Soft Blue`.
- [ ] Text color `Brand/Navy`.
- [ ] Effect `Shadow/Card`.

- [ ] `Button/Light`
- [ ] Same sizing as primary.
- [ ] Fill `Neutral/White`.
- [ ] Text color `Brand/Navy`.

Mobile rule:

- [ ] Buttons inside hero/actions/forms fill container width.

### Section Heading

- [ ] Component name: `Section Heading`
- [ ] Auto Layout vertical.
- [ ] Gap: `12px`.
- [ ] Max desktop width: `760px`.
- [ ] Eyebrow row Auto Layout horizontal, gap `8px`.
- [ ] Eyebrow pill line: `28x8`, radius `999px`, fill `Brand/Yellow`.
- [ ] Eyebrow text style `Label/Eyebrow`.
- [ ] H2 text style `Heading/H2 Desktop` or mobile variant.
- [ ] Optional paragraph text style `Body/Default`.

### Icon Badge

- [ ] Component name: `Icon Badge`
- [ ] Size minimum `44x44`.
- [ ] Radius `14px`.
- [ ] Text Inter Black `14px`.
- [ ] Variants:
- [ ] `Blue` - fill royal blue `12%`, text `Brand/Royal Blue`.
- [ ] `Orange` - fill orange `14%`, text `Brand/Orange`.
- [ ] `Green` - fill green `14%`, text `Brand/Green`.
- [ ] `Red` - fill red `12%`, text `Brand/Red`.

### Service Card

- [ ] Component name: `Service Card`
- [ ] Auto Layout vertical.
- [ ] Fill: `Neutral/White`.
- [ ] Stroke: `Border/Soft Blue`.
- [ ] Radius: `20px`.
- [ ] Effect: `Shadow/Card`.
- [ ] Image frame ratio: `1.55:1`.
- [ ] Image clips content and fills width.
- [ ] Content padding: `20px`.
- [ ] Content Auto Layout vertical, gap `12px`.
- [ ] Include `Icon Badge`, H3, paragraph, text link.
- [ ] Text link: royal blue, Inter Black `16px`, arrow symbol.

### Benefit Card

- [ ] Component name: `Benefit Card`
- [ ] Fill: `Neutral/White`.
- [ ] Stroke: `Border/Soft Blue`.
- [ ] Radius: `20px`.
- [ ] Effect: `Shadow/Card`.
- [ ] Padding: `20px`.
- [ ] Auto Layout vertical, gap `12px`.
- [ ] Include icon badge, H3, paragraph, optional text link.

### Statistic Card

- [ ] Component name: `Statistic Card`
- [ ] Fill: white at `8%`.
- [ ] Stroke: white at `12%`.
- [ ] Radius: `20px`.
- [ ] Padding: `20px`.
- [ ] Auto Layout vertical, gap `6px`.
- [ ] Value style: `Stat/Value`.
- [ ] Label style: Inter Bold `16px`, white `78%`.

### Gallery Card

- [ ] Component name: `Gallery Card`
- [ ] Fill: `Neutral/White`.
- [ ] Stroke: `Border/Soft Blue`.
- [ ] Radius: `20px`.
- [ ] Effect: `Shadow/Card`.
- [ ] Auto Layout vertical.
- [ ] Image ratio: `1.4:1`.
- [ ] Caption padding: `16px 18px`.
- [ ] Caption style: Inter Black `16px`, color `Brand/Navy`.

### CTA Banner

- [ ] Component name: `CTA Banner`
- [ ] Fill: `Gradient/CTA Banner`.
- [ ] Radius: `28px`.
- [ ] Effect: `Shadow/Panel`.
- [ ] Desktop padding: `36px`.
- [ ] Mobile padding: `24px`.
- [ ] Desktop Auto Layout horizontal.
- [ ] Desktop distribution: space between.
- [ ] Desktop alignment: center.
- [ ] Desktop gap: `32px`.
- [ ] Mobile Auto Layout vertical, gap `24px`.
- [ ] Text color: white.
- [ ] Eyebrow text color: yellow.
- [ ] CTA uses `Button/Light`.

### Dark Choice Panel

- [ ] Component name: `Dark Choice Panel`
- [ ] Fill: `Gradient/Dark Panel`.
- [ ] Radius: `28px`.
- [ ] Effect: `Shadow/Panel`.
- [ ] Desktop Auto Layout horizontal.
- [ ] Desktop columns: copy `1.25fr`, checklist `0.75fr`.
- [ ] Desktop padding: `36px`.
- [ ] Mobile Auto Layout vertical.
- [ ] Mobile padding: `24px`.
- [ ] Checklist Auto Layout vertical, gap `14px`.
- [ ] Check icon box: `18x18`, radius `6px`, fill `Brand/Yellow`.
- [ ] Checklist text: Inter Bold `16px`, white.

### Contact Field

- [ ] Component name: `Contact Field`
- [ ] Auto Layout vertical, gap `6px`.
- [ ] Label style: Inter Extra Bold `16px`, `Brand/Navy`.
- [ ] Input height minimum `48px`.
- [ ] Input padding: `14px`.
- [ ] Input radius: `14px`.
- [ ] Input fill: white.
- [ ] Input stroke: `Border/Soft Blue`.
- [ ] Variant `Focus`: stroke `Brand/Royal Blue`, blue focus ring `12%`.
- [ ] Variant `Error`: stroke `Brand/Red`, error text visible.
- [ ] Error text: Inter Bold `14px`, `Brand/Red`.

## Asset Assets

- [ ] Import `assets/hero-train.svg` as `Image/Hero Train`.
- [ ] Import `assets/attraction-train.svg` as `Image/Trackless Train`.
- [ ] Import `assets/attraction-cars.svg` as `Image/Kids Electric Cars`.
- [ ] Import `assets/attraction-setup.svg` as `Image/Custom Setup`.
- [ ] Import `assets/events-carnival.svg` as `Image/Events Carnival`.
- [ ] Import `assets/shopping-centre.svg` as `Image/Shopping Centre`.
- [ ] Import `assets/safety-badges.svg` as `Image/Safety Badges`.
- [ ] Import `assets/about-family.svg` as `Image/About Family`.
- [ ] Import `assets/map-egypt.svg` as `Image/Map Asset`.

Image frame rules:

- [ ] Hero visual frame radius `28px`.
- [ ] Page hero visual card padding `12px`, white fill, radius `20px`.
- [ ] Detail media image ratio `1.45:1`.
- [ ] Gallery image ratio `1.4:1`.
- [ ] Service card image ratio `1.55:1`.

## Page 01: Home

### Frame Checklist

- [ ] `Home / Desktop / 1440`
- [ ] `Home / Tablet / 768`
- [ ] `Home / Mobile / 390`

### Section 1: Header

- [ ] Place `Header/Desktop` on desktop.
- [ ] Place `Header/Mobile` on tablet/mobile.
- [ ] Active nav item: `Home`.
- [ ] CTA text: `Partner With Us`.

### Section 2: Hero

- [ ] Section frame name: `Home / Hero`
- [ ] Fill: `Gradient/Hero Background`.
- [ ] Desktop min height: viewport minus `80px`.
- [ ] Desktop Auto Layout horizontal.
- [ ] Desktop inner gap: `36px`.
- [ ] Desktop columns: copy left, visual right.
- [ ] Tablet/mobile Auto Layout vertical.
- [ ] Mobile gap: `32px`.

Copy column:

- [ ] Auto Layout vertical.
- [ ] Width desktop: flexible half container.
- [ ] Eyebrow: `SI EGYPTE`.
- [ ] H1 text: `Creating Unforgettable Family Entertainment Experiences across Egypt`.
- [ ] Set `Family Entertainment` span color to `Brand/Orange`.
- [ ] Paragraph style: `Body/Large`.
- [ ] Button group desktop: horizontal, gap `12px`.
- [ ] Button group mobile: vertical, gap `12px`, buttons fill width.
- [ ] Location badge: white fill, radius `999px`, shadow card, horizontal Auto Layout, gap `10px`.
- [ ] Location dot: `12x12`, fill `Brand/Green`.

Visual column:

- [ ] Place `Image/Hero Train`.
- [ ] Radius `28px`.
- [ ] Add floating pill `Fully Managed`: orange fill, white text.
- [ ] Add floating pill `Safe Rides`: royal blue fill, white text.
- [ ] Hide or reposition floating pills on mobile if they crowd the artwork.

### Section 3: Our Attractions Preview

- [ ] Section frame name: `Home / Our Attractions Preview`.
- [ ] Fill: white.
- [ ] Auto Layout vertical, gap `32px`.
- [ ] Add `Section Heading`.
- [ ] Cards container desktop: horizontal Auto Layout or 3-column grid, gap `18px`.
- [ ] Tablet: 2-column grid.
- [ ] Mobile: vertical stack, gap `18px`.
- [ ] Add 3 `Service Card` components:
- [ ] Trackless Train Experience, image `Image/Trackless Train`, badge blue `T`.
- [ ] Kids Electric Cars, image `Image/Kids Electric Cars`, badge orange `C`.
- [ ] Custom Entertainment Setups, image `Image/Custom Setup`, badge green `S`.

### Section 4: Why Choose SI EGYPTE

- [ ] Section frame name: `Home / Why Choose`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Place `Dark Choice Panel`.
- [ ] Eyebrow: `Why Choose SI EGYPTE?`.
- [ ] H2: `Professional operations with the joy families remember.`
- [ ] Body paragraph from code.
- [ ] Button: `View Safety Standards`, variant light.
- [ ] Checklist items:
- [ ] Multiple attraction options.
- [ ] Fully managed operations.
- [ ] Professional trained staff.
- [ ] Safe for children.
- [ ] Indoor & outdoor suitable.
- [ ] Flexible packages & scheduling.

### Section 5: Who We Serve

- [ ] Section frame name: `Home / Who We Serve`.
- [ ] Fill: white.
- [ ] Add `Section Heading`.
- [ ] Cards container desktop: 3 columns, gap `18px`.
- [ ] Add `Benefit Card` components:
- [ ] Shopping Centres, badge blue `SC`.
- [ ] Events & Carnivals, badge orange `EV`.
- [ ] Private & Corporate Events, badge green `PC`.

### Section 6: Statistics Strip

- [ ] Section frame name: `Home / Stats Strip`.
- [ ] Fill: `Brand/Navy`.
- [ ] Vertical padding: `32px`.
- [ ] Cards container desktop: 4 columns, gap `16px`.
- [ ] Tablet: 2 columns.
- [ ] Mobile: 1 column.
- [ ] Add `Statistic Card` components:
- [ ] `10,000+` / `Happy Riders`.
- [ ] `Safe` / `Operations`.
- [ ] `Egypt` / `Serving Across Egypt`.
- [ ] `All Sizes` / `Events of All Sizes`.

### Section 7: Gallery

- [ ] Section frame name: `Home / Gallery`.
- [ ] Fill: white.
- [ ] Add `Section Heading`.
- [ ] Cards container desktop: 4 columns, gap `16px`.
- [ ] Tablet: 2 columns.
- [ ] Mobile: 1 column.
- [ ] Add `Gallery Card` components:
- [ ] Trackless Train, image `Image/Trackless Train`.
- [ ] Kids Electric Cars, image `Image/Kids Electric Cars`.
- [ ] Events & Carnivals, image `Image/Events Carnival`.
- [ ] Shopping Centres, image `Image/Shopping Centre`.

### Section 8: CTA Banner

- [ ] Section frame name: `Home / CTA`.
- [ ] Fill: white.
- [ ] Place `CTA Banner`.
- [ ] Eyebrow: `Partner With SI EGYPTE`.
- [ ] H2: `Let's Bring Smiles Together!`.
- [ ] Button: `Get In Touch Today`.

### Section 9: Footer

- [ ] Place `Footer`.

## Page 02: Our Attractions

### Frame Checklist

- [ ] `Our Attractions / Desktop / 1440`
- [ ] `Our Attractions / Tablet / 768`
- [ ] `Our Attractions / Mobile / 390`

### Section 1: Header

- [ ] Place header.
- [ ] Active nav item: `Our Attractions`.

### Section 2: Page Hero

- [ ] Section name: `Attractions / Hero`.
- [ ] Fill: `Neutral/Light Background` with light blue gradient.
- [ ] Auto Layout desktop: horizontal, gap `36px`.
- [ ] Mobile: vertical, gap `32px`.
- [ ] Eyebrow: `Our Attractions`.
- [ ] H1: `Colorful attractions for shopping centres, carnivals, and family events.`
- [ ] Buttons: `Enquire Now`, `View Services`.
- [ ] Visual card: white fill, stroke soft blue, radius `20px`, padding `12px`.
- [ ] Image: `Image/Trackless Train`.

### Section 3: Trackless Train Experience

- [ ] Section name: `Attractions / Trackless Train`.
- [ ] Fill: white.
- [ ] Desktop Auto Layout horizontal, gap `32px`.
- [ ] Mobile Auto Layout vertical.
- [ ] Left media: `Image/Trackless Train`, ratio `1.45:1`.
- [ ] Right copy Auto Layout vertical, gap `16px`.
- [ ] Eyebrow: `Signature Attraction`.
- [ ] H2: `Trackless Train Experience`.
- [ ] Add benefit chips in 2-column desktop grid, 1-column mobile:
- [ ] Indoor and outdoor friendly.
- [ ] Strong visual impact.
- [ ] Managed queue flow.
- [ ] Family-friendly pace.
- [ ] Button: `Enquire Now`.

### Section 4: Kids Electric Cars

- [ ] Section name: `Attractions / Kids Electric Cars`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Desktop Auto Layout horizontal, reverse order: copy left, image right.
- [ ] Mobile Auto Layout vertical, image above or below consistently.
- [ ] Image: `Image/Kids Electric Cars`.
- [ ] Eyebrow: `Ride-On Fun`.
- [ ] H2: `Kids Electric Cars`.
- [ ] Benefit chips:
- [ ] Supervised sessions.
- [ ] Child-friendly equipment.
- [ ] Flexible zone layouts.
- [ ] Popular with repeat riders.
- [ ] Button: `Enquire Now`.

### Section 5: Custom Entertainment Setups

- [ ] Section name: `Attractions / Custom Setups`.
- [ ] Fill: white.
- [ ] Desktop Auto Layout horizontal, gap `32px`.
- [ ] Image: `Image/Custom Setup`.
- [ ] Eyebrow: `Flexible Packages`.
- [ ] H2: `Custom Entertainment Setups`.
- [ ] Benefit chips:
- [ ] Custom footprints.
- [ ] Package planning.
- [ ] Staffing included.
- [ ] Venue-ready operation.
- [ ] Button: `Enquire Now`.

### Section 6: Gallery

- [ ] Section name: `Attractions / Gallery`.
- [ ] Fill: white.
- [ ] Add `Section Heading`.
- [ ] Desktop: 3-column gallery grid.
- [ ] Tablet: 2 columns.
- [ ] Mobile: 1 column.
- [ ] Cards: Train Setup, Car Zone, Custom Layout.

### Section 7: CTA

- [ ] Place `CTA Banner`.
- [ ] Eyebrow: `Attraction Packages`.
- [ ] H2: `Ready to design your family attraction?`
- [ ] Button: `Enquire Now`.

### Section 8: Footer

- [ ] Place `Footer`.

## Page 03: Events & Carnivals

### Frame Checklist

- [ ] `Events & Carnivals / Desktop / 1440`
- [ ] `Events & Carnivals / Tablet / 768`
- [ ] `Events & Carnivals / Mobile / 390`

### Section 1: Header

- [ ] Place header.
- [ ] Active nav item: `Events & Carnivals`.

### Section 2: Page Hero

- [ ] Section name: `Events / Hero`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Desktop Auto Layout horizontal.
- [ ] Mobile Auto Layout vertical.
- [ ] Eyebrow: `Events & Carnivals`.
- [ ] H1: `Family attractions that make event days easier to run and harder to forget.`
- [ ] Buttons: `Book For Your Event`, `View Process`.
- [ ] Visual card with `Image/Events Carnival`.

### Section 3: Event Solutions

- [ ] Section name: `Events / Event Solutions`.
- [ ] Fill: white.
- [ ] Add `Section Heading`.
- [ ] Desktop: 4-column card grid, gap `18px`.
- [ ] Tablet: 2 columns.
- [ ] Mobile: 1 column.
- [ ] Add `Benefit Card` components:
- [ ] School Events, badge blue `SE`.
- [ ] Festivals, badge orange `FP`.
- [ ] Private Parties, badge green `PP`.
- [ ] Carnivals, badge red `CA`.

### Section 4: Full Setup & Operation

- [ ] Section name: `Events / Setup Operation`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Desktop Auto Layout horizontal, gap `36px`.
- [ ] Mobile Auto Layout vertical.
- [ ] Left copy: eyebrow `Full Setup & Operation`, H2 from code.
- [ ] Right stack: vertical Auto Layout, gap `12px`.
- [ ] Stack item style: white fill, soft blue stroke, radius `20px`, shadow card, padding `16px`.
- [ ] Items: Site planning, Setup, Operation, Pack-down.

### Section 5: Packages

- [ ] Section name: `Events / Packages`.
- [ ] Fill: white.
- [ ] Add `Section Heading`.
- [ ] Desktop: 3-column pricing grid.
- [ ] Mobile: vertical stack.
- [ ] Add `Package Card` components:
- [ ] Starter, default style.
- [ ] Event Day, featured style with yellow `Popular` pill and orange-tinted border.
- [ ] Custom, default style.
- [ ] Package button variants: secondary, primary for featured.

### Section 6: Booking Process

- [ ] Section name: `Events / Booking Process`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Add `Section Heading`.
- [ ] Desktop: 4-column timeline.
- [ ] Mobile: vertical timeline.
- [ ] Timeline card fill: white, radius `20px`, shadow card.
- [ ] Left border: `6px`, `Brand/Orange`.
- [ ] Step labels: `01`, `02`, `03`, `04`, royal blue.
- [ ] Steps: Send enquiry, Confirm fit, Lock package, Enjoy the day.

### Section 7: CTA

- [ ] Place `CTA Banner`.
- [ ] Eyebrow: `Event Planning`.
- [ ] H2: `Need an attraction your guests will talk about?`
- [ ] Button: `Book For Your Event`.

### Section 8: Footer

- [ ] Place `Footer`.

## Page 04: Shopping Centres

### Frame Checklist

- [ ] `Shopping Centres / Desktop / 1440`
- [ ] `Shopping Centres / Tablet / 768`
- [ ] `Shopping Centres / Mobile / 390`

### Section 1: Header

- [ ] Place header.
- [ ] Active nav item: `Shopping Centres`.

### Section 2: Page Hero

- [ ] Section name: `Shopping Centres / Hero`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Desktop Auto Layout horizontal.
- [ ] Mobile Auto Layout vertical.
- [ ] Eyebrow: `Shopping Centres`.
- [ ] H1: `Family entertainment activations that lift dwell time and customer experience.`
- [ ] Buttons: `Partner With Us`, `Safety First`.
- [ ] Visual card with `Image/Shopping Centre`.

### Section 3: Partner Benefits

- [ ] Section name: `Shopping Centres / Partner Benefits`.
- [ ] Fill: white.
- [ ] Add `Section Heading`.
- [ ] Desktop: 3-column grid, 2 rows.
- [ ] Tablet: 2 columns.
- [ ] Mobile: 1 column.
- [ ] Cards:
- [ ] Increased Dwell Time, badge blue `DT`.
- [ ] Family Engagement, badge orange `FE`.
- [ ] Foot Traffic, badge green `FT`.
- [ ] Better Experience, badge red `CX`.
- [ ] Fully Managed, badge blue `FM`.
- [ ] Centre Friendly, badge orange `SC`.

### Section 4: Activation Formats

- [ ] Section name: `Shopping Centres / Activation Formats`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Desktop Auto Layout horizontal.
- [ ] Mobile Auto Layout vertical.
- [ ] Left copy: eyebrow `Activation Formats`, H2 from code.
- [ ] Right vertical stack:
- [ ] School holidays.
- [ ] Weekend activations.
- [ ] Seasonal campaigns.
- [ ] Community days.

### Section 5: Statistics Strip

- [ ] Section name: `Shopping Centres / Stats`.
- [ ] Fill: `Brand/Navy`.
- [ ] Desktop: 4-column grid.
- [ ] Cards:
- [ ] Dwell / Encourage longer visits.
- [ ] Flow / Managed guest movement.
- [ ] Family / Positive centre memories.
- [ ] Care / Staffed operation.

### Section 6: CTA

- [ ] Place `CTA Banner`.
- [ ] Eyebrow: `Shopping Centre Partners`.
- [ ] H2: `Bring premium family entertainment to your centre.`
- [ ] Button: `Start Partnership`.

### Section 7: Footer

- [ ] Place `Footer`.

## Page 05: Safety & Compliance

### Frame Checklist

- [ ] `Safety & Compliance / Desktop / 1440`
- [ ] `Safety & Compliance / Tablet / 768`
- [ ] `Safety & Compliance / Mobile / 390`

### Section 1: Header

- [ ] Place header.
- [ ] Active nav item: `Safety`.

### Section 2: Page Hero

- [ ] Section name: `Safety / Hero`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Desktop Auto Layout horizontal.
- [ ] Mobile Auto Layout vertical.
- [ ] Eyebrow: `Safety & Compliance`.
- [ ] H1: `Professional systems behind every playful family moment.`
- [ ] Buttons: `Discuss Requirements`, `View Standards`.
- [ ] Visual card with `Image/Safety Badges`.

### Section 3: Operating Standards

- [ ] Section name: `Safety / Operating Standards`.
- [ ] Fill: white.
- [ ] Add `Section Heading`.
- [ ] Desktop: 3-column grid, 2 rows.
- [ ] Tablet: 2 columns.
- [ ] Mobile: 1 column.
- [ ] Cards:
- [ ] Staff Training, badge blue `ST`.
- [ ] Safe Operation Procedures, badge orange `SO`.
- [ ] Child-Friendly Equipment, badge green `CE`.
- [ ] Insurance, badge red `IN`.
- [ ] Maintenance Checks, badge blue `MC`.
- [ ] Emergency Readiness, badge orange `ER`.

### Section 4: Shopping Centre Compliance Panel

- [ ] Section name: `Safety / Compliance Panel`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Place `Dark Choice Panel`.
- [ ] Eyebrow: `Shopping Centre Compliance`.
- [ ] H2: `Prepared for centre operations and approval workflows.`
- [ ] Checklist:
- [ ] Site access planning.
- [ ] Approved operating zones.
- [ ] Queue and pedestrian flow support.
- [ ] Clear staff roles.
- [ ] Pack-down coordination.
- [ ] Partner communication.

### Section 5: Trust Badges

- [ ] Section name: `Safety / Trust Badges`.
- [ ] Fill: white.
- [ ] Add `Section Heading`.
- [ ] Desktop: 4-column grid.
- [ ] Tablet: 2 columns.
- [ ] Mobile: 1 column.
- [ ] Trust badge component: white fill, soft border, radius `20px`, padding `20px`.
- [ ] Badges:
- [ ] Trained Staff / Professional on-site support.
- [ ] Maintained Equipment / Routine attraction checks.
- [ ] Venue Coordination / Centre and event planning.
- [ ] Family Friendly / Clear guest experience.

### Section 6: CTA

- [ ] Place `CTA Banner`.
- [ ] Eyebrow: `Safety First`.
- [ ] H2: `Have compliance requirements for your venue?`
- [ ] Button: `Talk To Us`.

### Section 7: Footer

- [ ] Place `Footer`.

## Page 06: About Us

### Frame Checklist

- [ ] `About Us / Desktop / 1440`
- [ ] `About Us / Tablet / 768`
- [ ] `About Us / Mobile / 390`

### Section 1: Header

- [ ] Place header.
- [ ] Active nav item: `About Us`.

### Section 2: Page Hero

- [ ] Section name: `About / Hero`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Desktop Auto Layout horizontal.
- [ ] Mobile Auto Layout vertical.
- [ ] Eyebrow: `About SI EGYPTE`.
- [ ] H1: `Bringing premium family entertainment experiences to Egyptian communities.`
- [ ] Buttons: `Work With Us`, `Explore Attractions`.
- [ ] Visual card with `Image/About Family`.

### Section 3: Company Story

- [ ] Section name: `About / Company Story`.
- [ ] Fill: white.
- [ ] Desktop Auto Layout horizontal.
- [ ] Mobile Auto Layout vertical.
- [ ] Left copy:
- [ ] Eyebrow `Company Story`.
- [ ] H2 `Entertainment with operational care.`
- [ ] Two body paragraphs.
- [ ] Right mission stack: vertical Auto Layout, gap `16px`.
- [ ] Mission card style: white fill, soft border, radius `20px`, shadow card, padding `20px`.
- [ ] Cards:
- [ ] Vision, badge blue `V`.
- [ ] Mission, badge orange `M`.

### Section 4: Our Values

- [ ] Section name: `About / Values`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Add `Section Heading`.
- [ ] Desktop: 4-column grid.
- [ ] Tablet: 2 columns.
- [ ] Mobile: 1 column.
- [ ] Cards:
- [ ] Safety, badge blue `SA`.
- [ ] Joy, badge orange `JO`.
- [ ] Professionalism, badge green `PR`.
- [ ] Flexibility, badge red `FL`.

### Section 5: Why SI EGYPTE Is Different

- [ ] Section name: `About / Difference`.
- [ ] Fill: white.
- [ ] Desktop Auto Layout horizontal.
- [ ] Mobile Auto Layout vertical.
- [ ] Left visual card with `Image/Shopping Centre`.
- [ ] Right copy:
- [ ] Eyebrow `Why SI EGYPTE Is Different`.
- [ ] H2 `We consider the whole experience.`
- [ ] Body paragraph.
- [ ] Bullet list with yellow check boxes.

### Section 6: CTA

- [ ] Place `CTA Banner`.
- [ ] Eyebrow: `Let's Create Together`.
- [ ] H2: `Looking for a family attraction partner?`
- [ ] Button: `Contact SI EGYPTE`.

### Section 7: Footer

- [ ] Place `Footer`.

## Page 07: Contact Us

### Frame Checklist

- [ ] `Contact Us / Desktop / 1440`
- [ ] `Contact Us / Tablet / 768`
- [ ] `Contact Us / Mobile / 390`

### Section 1: Header

- [ ] Place header.
- [ ] Active nav item: `Contact`.

### Section 2: Page Hero

- [ ] Section name: `Contact / Hero`.
- [ ] Fill: `Neutral/Light Background`.
- [ ] Desktop Auto Layout horizontal.
- [ ] Mobile Auto Layout vertical.
- [ ] Eyebrow: `Contact Us`.
- [ ] H1: `Tell us about your venue, event, or family attraction idea.`
- [ ] Body paragraph.
- [ ] Contact pills Auto Layout desktop horizontal, mobile vertical.
- [ ] Contact pill style: white fill, soft blue stroke, radius `999px`, shadow card, padding `14px 16px`.
- [ ] Pills:
- [ ] `01147840842`
- [ ] `egypte1122@gmail.com`
- [ ] Visual card with `Image/Map Asset`.

### Section 3: Contact Form And Sidebar

- [ ] Section name: `Contact / Form Area`.
- [ ] Fill: white.
- [ ] Desktop Auto Layout horizontal, gap `24px`.
- [ ] Desktop columns: form panel `1fr`, sidebar `1fr`.
- [ ] Mobile Auto Layout vertical, gap `24px`.

Form panel:

- [ ] Fill: white.
- [ ] Stroke: soft blue.
- [ ] Radius: `20px`.
- [ ] Effect: `Shadow/Card`.
- [ ] Padding: `20px`.
- [ ] Auto Layout vertical, gap `16px`.
- [ ] Eyebrow: `Enquiry Form`.
- [ ] H2: `Start your booking conversation.`
- [ ] Form grid desktop: 2 columns, gap `16px`.
- [ ] Form grid mobile: 1 column.
- [ ] Full-width message field spans both desktop columns.
- [ ] Add `Contact Field` components:
- [ ] Full Name, text input, required.
- [ ] Email, email input, required.
- [ ] Phone, phone input, required.
- [ ] Organisation / Venue, text input.
- [ ] Service Interested In, select input, required.
- [ ] Event Date, date input.
- [ ] Message, textarea, required.
- [ ] Submit button: `Send Enquiry`, primary.
- [ ] Status text message below button.

Sidebar:

- [ ] Auto Layout vertical, gap `16px`.
- [ ] Contact card fill white, stroke soft blue, radius `20px`, shadow card, padding `20px`.
- [ ] Contact information card includes phone, email, location.
- [ ] Business hours card fill `Brand/Yellow`, text `Brand/Navy`.
- [ ] Map card uses `Image/Map Asset`, radius `20px`, clips content.

### Section 4: Footer

- [ ] Place `Footer`.

## Responsive Checklist

### Desktop 1440

- [ ] Header is horizontal and CTA is visible.
- [ ] Hero sections use two columns.
- [ ] 3-card sections are 3 columns.
- [ ] 4-card sections are 4 columns.
- [ ] Footer is 4 columns.
- [ ] CTA banner uses horizontal layout.
- [ ] Contact form uses 2-column fields.

### Tablet 768

- [ ] Header uses mobile hamburger.
- [ ] Major split sections remain 2 columns where space allows, or stack if content feels crowded.
- [ ] Card grids use 2 columns.
- [ ] Footer stacks or uses compact columns.
- [ ] Buttons remain readable and touch friendly.

### Mobile 390

- [ ] Header uses mobile hamburger.
- [ ] All split sections stack vertically.
- [ ] Buttons in hero and forms fill width.
- [ ] Card grids become single column.
- [ ] CTA banner stacks vertically.
- [ ] Contact form fields become single column.
- [ ] No text overlaps visual assets.
- [ ] No horizontal scrolling.

## Prototype Notes

- [ ] Link all header nav items to their matching page frames.
- [ ] Link all CTA buttons to `Contact Us` unless the button targets a page section.
- [ ] Prototype mobile hamburger button to open mobile nav overlay.
- [ ] Document hover states for cards: y `-6px`, stronger shadow.
- [ ] Document button hover state: y `-2px`.
- [ ] Document reveal animation as implementation note only: opacity `0` to `1`, y `18px` to `0`.

## Final QA Checklist

- [ ] Every page has desktop, tablet, and mobile frames.
- [ ] Every page uses the correct active nav item.
- [ ] All local SVG illustrations are imported into `08 Assets & Assets`.
- [ ] All repeated blocks use components, not detached copies.
- [ ] Color styles are applied instead of raw fills where possible.
- [ ] Text styles are applied consistently.
- [ ] Auto Layout is enabled on sections, cards, banners, header, footer, and form fields.
- [ ] Mobile frames have `16px` side padding.
- [ ] Desktop inner content aligns to `1180px` max width.
- [ ] All buttons and touch targets are at least `44px` high.
- [ ] Figma component names match the names listed in this checklist.

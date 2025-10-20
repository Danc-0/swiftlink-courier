# Design Guidelines: Nairobi Logistics Company Website

## Design Approach
**Reference-Based Approach** drawing inspiration from modern delivery and logistics platforms (Uber, DoorDash, Bolt) combined with African tech startup aesthetics. Focus on trust-building, speed indicators, and growth potential visualization.

**Core Principles:**
- Action-oriented: Every section drives toward customer connection
- Trust through transparency: Show real fleet, real coverage, real benefits
- Mobile-first: Primary booking channel
- Growth mindset: Visual language that scales beyond motorcycles

## Color Palette

**Light Mode:**
- Primary Blue: 215 85% 35% (deep trust blue)
- Secondary Orange: 25 95% 55% (energetic delivery orange)
- Background: 0 0% 98% (soft white)
- Surface: 0 0% 100% (pure white)
- Text Primary: 220 20% 15% (nearly black)
- Text Secondary: 220 15% 45% (medium gray)

**Dark Mode:**
- Primary Blue: 215 80% 65% (brighter blue)
- Secondary Orange: 25 90% 60% (vibrant orange)
- Background: 220 25% 8% (deep navy-black)
- Surface: 220 20% 12% (elevated surface)
- Text Primary: 0 0% 95% (off-white)
- Text Secondary: 220 10% 65% (light gray)

## Typography

**Font Families:**
- Headlines: 'Inter' (700-800 weight) - modern, professional, geometric
- Body: 'Inter' (400-600 weight) - excellent readability
- Accent/Numbers: 'JetBrains Mono' (500 weight) - for metrics, pricing

**Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl font-bold
- Subsection Headers: text-2xl md:text-3xl font-semibold
- Body Large: text-lg md:text-xl leading-relaxed
- Body Regular: text-base leading-relaxed
- Small Text: text-sm

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component internal spacing: p-4, p-6, p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Element gaps: gap-4, gap-6, gap-8
- Container: max-w-7xl mx-auto px-6

**Grid System:**
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns for features (md:grid-cols-2)
- Desktop: 3-4 columns for services/benefits (lg:grid-cols-3)

## Component Library

**Navigation:**
- Sticky header with backdrop blur
- Logo + Navigation links + WhatsApp CTA button
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Full viewport height (min-h-screen) with large hero image
- Motorcycle courier in action across Nairobi cityscape
- Overlay gradient (from-background/90 to-background/40)
- Centered content with headline + subheadline + dual CTAs
- Trust indicator: "500+ Deliveries Completed" badge

**Service Cards:**
- Grid layout with hover lift effect (hover:-translate-y-2)
- Icon + Title + Description + Pricing indicator
- Rounded-2xl with border, subtle shadow
- 3 tiers: Express, Same-Day, Scheduled

**Fleet Showcase:**
- Masonry grid or carousel showing current vehicles
- Each card: Vehicle image + Type + Capacity + Availability
- "Expanding Fleet" teaser card for future vehicles
- Include motorcycles, and placeholder for vans/trucks

**Coverage Map:**
- Interactive visual showing Nairobi delivery zones
- Color-coded areas: Active zones (orange), Coming soon (blue outline)
- Text list of covered neighborhoods

**About Us Section:**
- Two-column layout: Story text + Founder/team image
- Mission statement in highlighted card
- Vision for growth timeline/roadmap graphic

**Why Choose Us:**
- 4-column grid on desktop, 2 on tablet, 1 on mobile
- Icon-led benefits: Speed, Reliability, Affordability, Real-time Tracking
- Each with metric or proof point

**Customer Benefits:**
- Segmented tabs or cards for: Individuals, SMEs, Enterprises
- Specific value propositions for each segment

**Social Media Integration:**
- Instagram feed grid (6 recent posts)
- Social links bar with platform icons
- "Follow us" section with handles

**WhatsApp Business CTA:**
- Floating action button (bottom-right on desktop, bottom-center on mobile)
- Fixed position with WhatsApp green (142 70% 50%)
- Icon + "Chat Now" text
- Click opens WhatsApp with pre-filled message

**Contact Section:**
- Two-column: Contact form + Contact details
- Form fields: Name, Phone, Service Type, Pickup/Delivery locations, Message
- Details: Phone (clickable tel:), Email, Physical office address
- Business hours clearly displayed

**Footer:**
- Three-column: Company Info, Quick Links, Connect
- Newsletter signup: "Get delivery updates"
- Social media icons
- Copyright + Built with pride in Nairobi

## Images Strategy

**Required Images:**
1. **Hero**: Dynamic shot of motorcycle courier navigating Nairobi traffic/streets - conveys speed and local context
2. **Fleet Section**: 3-4 photos of actual motorcycles with branding
3. **About/Team**: Founder or team photo showing human side
4. **Coverage Map**: Stylized Nairobi map graphic
5. **Background Elements**: Subtle Nairobi skyline silhouettes, road patterns as decorative elements

## Animations

**Minimal, purposeful only:**
- Scroll-triggered fade-ins for sections (once)
- Smooth hover states on cards and buttons
- WhatsApp button pulse (subtle, repeating)
- No parallax, no excessive motion

## Special Considerations

- RTL-ready for potential Arabic/Swahili variations
- Optimized for 3G connections (common in Kenya)
- Click-to-call buttons for phone numbers
- WhatsApp link opens directly in app/web
- Social media links open in new tabs
- Accessible contrast ratios (WCAG AA minimum)
- Form validation with helpful error messages
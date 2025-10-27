# Swift Link Courier - Delivery Platform

## Overview

Swift Link Courier is a modern courier and delivery platform for Nairobi, Kenya. The application provides a customer-facing website showcasing delivery services, fleet information, coverage areas, and contact options. Built as a full-stack web application with a focus on mobile-first design and user engagement through multiple channels (WhatsApp, social media, contact forms).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query for server state management
- Tailwind CSS for styling with custom design system

**Component Strategy:**
- Shadcn UI component library (New York style) for consistent, accessible UI primitives
- All Radix UI primitives for headless component functionality
- Custom business components organized by feature (Hero, Services, Fleet, Coverage, About, Contact, etc.)
- Theme system supporting light/dark modes via context provider

**Design System:**
- Custom color palette using HSL values with CSS variables
- Primary: Deep trust blue (215 85% 35%)
- Secondary/Accent: Energetic delivery orange (25 95% 55%)
- Typography: Inter font family for all text, JetBrains Mono for metrics/numbers
- Spacing follows Tailwind's 4px-based scale
- Mobile-first responsive approach with breakpoints at 768px (md) and 1024px (lg)

**State Management:**
- Theme state managed through React Context (ThemeProvider)
- Form state handled locally with React hooks
- Toast notifications via custom hook (use-toast)
- No global application state - primarily static content site

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server
- TypeScript for type safety across frontend and backend
- Vite middleware integration for development with HMR
- Static file serving for production builds

**Storage Layer:**
- In-memory storage implementation (MemStorage class) as default
- Interface-based design (IStorage) allowing easy swap to database
- Drizzle ORM configured for PostgreSQL (via Neon serverless)
- Schema defined in shared directory for type safety across stack

**API Design:**
- RESTful API pattern with `/api` prefix for all backend routes
- Currently minimal - user authentication schema exists but no routes implemented
- Designed for future expansion (quote requests, delivery tracking, user accounts)

### Database Schema

**Current Schema (PostgreSQL via Drizzle):**
- Users table with id, username, password fields
- UUID primary keys with automatic generation
- Zod schemas for validation (drizzle-zod integration)
- Migration support via drizzle-kit

**Design Pattern:**
- Shared schema definitions between client and server (`shared/schema.ts`)
- Type-safe insertions and selections through Drizzle's inference
- Prepared for expansion to delivery orders, tracking, quotes, etc.

### Project Structure

```
client/           # Frontend React application
  src/
    components/   # Reusable UI components
      ui/         # Shadcn UI primitives
      examples/   # Component showcase/demos
    pages/        # Route components
    hooks/        # Custom React hooks
    lib/          # Utilities (queryClient, utils)
server/           # Backend Express application
  routes.ts       # API route definitions
  storage.ts      # Data access layer
  vite.ts         # Vite dev server integration
shared/           # Code shared between client and server
  schema.ts       # Database schema and types
```

### Development Workflow

**Build Process:**
- Development: Vite dev server with HMR, proxy to Express backend
- Production: Vite builds static assets, esbuild bundles server code
- Single command deployment - builds both frontend and backend

**Path Aliases:**
- `@/` maps to `client/src/`
- `@shared/` maps to `shared/`
- `@assets/` maps to `attached_assets/` (for images)

## External Dependencies

### Core Services
- **Neon Database**: Serverless PostgreSQL database (configured but not required for basic operation)
- **Google Maps**: Embedded iframe for coverage area visualization

### UI Component Libraries
- **Radix UI**: Headless accessible component primitives (accordion, dialog, dropdown, select, tooltip, etc.)
- **Lucide React**: Icon library
- **React Icons**: Additional icons (social media)
- **Embla Carousel**: Carousel/slider functionality

### Development Tools
- **Drizzle ORM**: Database ORM with type safety
- **Drizzle Kit**: Database migration and push tooling
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner

### Form Handling
- **React Hook Form**: Form state management (configured via @hookform/resolvers)
- **Zod**: Schema validation library

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx + tailwind-merge**: Conditional class name utilities

### Third-Party Integrations
- **WhatsApp Business**: Direct messaging via wa.me links (phone: 254700000000)
- **Social Media**: Placeholder links for Facebook, Instagram, X/Twitter, TikTok
- **Google Fonts**: Inter and JetBrains Mono font families

### Production Considerations
- Application currently runs entirely in-memory with no persistent storage by default
- Database credentials expected via `DATABASE_URL` environment variable
- Session management prepared with connect-pg-simple but not actively used
- Static asset serving from `dist/public` in production mode
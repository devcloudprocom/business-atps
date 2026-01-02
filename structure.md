# Structure du projet — `business-atps`

> Format d’arborescence **aligné sur ton modèle** (`├──`, `│`, `└──`).  
> Note: **`node_modules/`** (dépendances) et **`.next/`** (build/cache Next.js) existent mais ne sont pas détaillés ici.

```text
business-atps/
│
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── favicon.ico
│   │
│   ├── (routes)/
│   │   ├── (auth)/
│   │   │   ├── layout.tsx
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx
│   │   │   ├── reset-password/
│   │   │   │   └── page.tsx
│   │   │   ├── sign-in/
│   │   │   │   └── page.tsx
│   │   │   └── sign-up/
│   │   │       └── page.tsx
│   │   │
│   │   └── (landingpage)/
│   │       └── (routes)/
│   │           ├── layout.tsx
│   │           ├── page.tsx
│   │           ├── Blog/
│   │           │   ├── page.tsx
│   │           │   └── [id]/
│   │           │       └── page.tsx
│   │           └── Contact/
│   │               └── page.tsx
│   │
│   └── generated/
│       └── prisma/
│           ├── client.d.ts
│           ├── client.js
│           ├── default.d.ts
│           ├── default.js
│           ├── edge.d.ts
│           ├── edge.js
│           ├── index-browser.js
│           ├── index.d.ts
│           ├── index.js
│           ├── package.json
│           ├── query_compiler_bg.js
│           ├── query_compiler_bg.wasm
│           ├── query_compiler_bg.wasm-base64.js
│           ├── schema.prisma
│           ├── wasm-edge-light-loader.mjs
│           ├── wasm-worker-loader.mjs
│           └── runtime/
│               ├── client.d.ts
│               ├── client.js
│               ├── index-browser.d.ts
│               ├── index-browser.js
│               └── wasm-compiler-edge.js
│
├── components/
│   ├── BlogDetails.tsx
│   ├── ButtonDemo.tsx
│   ├── CountUp.tsx
│   ├── HeroMackup.tsx
│   │
│   ├── form/
│   │   └── Form-Field.tsx
│   │
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── BlogSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FeatureCardsSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── KeyBenefitsSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ProductOverviewSection.tsx
│   │   └── TestimonialsSection.tsx
│   │
│   ├── shared/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── NavbarFloating.tsx
│   │
│   └── ui/
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── animated-tooltip.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button-group.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── container-scroll-animation.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── empty.tsx
│       ├── field.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-group.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── item.tsx
│       ├── kbd.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── spinner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── text-generate-effect.tsx
│       ├── textarea.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       ├── tooltip.tsx
│       └── typewriter-effect.tsx
│
├── lib/
│   ├── prisma.ts
│   ├── utils.ts
│   ├── motion/
│   │   └── motion.ts
│   └── validation/
│       └── auth.ts
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│       ├── migration_lock.toml
│       └── 20251228200507_initprisma/
│           └── migration.sql
│
├── public/
│   ├── assets/
│   │   ├── adaptive.avif
│   │   ├── analystic_ad.avif
│   │   ├── benefist.avif
│   │   ├── bg_pic.png
│   │   ├── boul.avif
│   │   ├── boys.avif
│   │   ├── check_sec.avif
│   │   ├── connect.avif
│   │   ├── cube.png
│   │   ├── data_m.avif
│   │   ├── data.avif
│   │   ├── girl1.avif
│   │   ├── girl2.avif
│   │   ├── ia_p.avif
│   │   ├── img_log.jpg
│   │   ├── img_log.png
│   │   ├── intell.avif
│   │   ├── logo_f.png
│   │   ├── openia.svg
│   │   ├── predictive.avif
│   │   ├── round.png
│   │   ├── smart.avif
│   │   ├── user_b.png
│   │   ├── user_g.png
│   │   └── user.png
│   │
│   ├── fonts/
│   │   └── GeneralSans/
│   │       ├── GeneralSans-Bold.woff
│   │       ├── GeneralSans-BoldItalic.woff
│   │       ├── GeneralSans-Extralight.woff
│   │       ├── GeneralSans-ExtralightItalic.woff
│   │       ├── GeneralSans-Italic.woff
│   │       ├── GeneralSans-Light.woff
│   │       ├── GeneralSans-LightItalic.woff
│   │       ├── GeneralSans-Medium.woff
│   │       ├── GeneralSans-MediumItalic.woff
│   │       ├── GeneralSans-Regular.woff
│   │       ├── GeneralSans-Semibold.woff
│   │       └── GeneralSans-SemiboldItalic.woff
│   │
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── constants/
│   └── constants.ts
│
├── hooks/
│   └── use-mobile.ts
│
├── types/
│   └── index.ts
│
├── components.json
├── compose.yaml
├── Dockerfile
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── prisma.config.ts
├── README.md
└── tsconfig.json
```



## Getting Started

First, run the development server:

```bash
npm install 

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder structure
```bash 
/uw-alex-nextjs
│
├── /public            # Static files like images, fonts, etc.
├── /app               # App directory for routing and layout
│   │   ├── layout.tsx  # Root Layout
│   │   ├── /[slug]    # Dynamic routes with optional layouts
│   │   ├── /page.tsx  # Root page component
│   │   ├── /[slug]    # Dynamic routes
│   │   ├── /styles    # Styles folder
│   │   │   ├── /global.css # Global style  
│   │   └── /...        # Other pages and layouts
│   │
│   ├── /components    # Reusable UI components
│   │   ├── /forms     # Form components and custom hooks
│   │   ├── /ui        # Custom UI components (buttons, modals, etc.)
│   │   └── /layout    # Layout components
│   │   ├── /screens   # Custom UI components for specific page
│   │   └── /layout    # Layout components
│   │
│   ├── /hooks         # Custom React hooks
│   ├── /lib           # Utility functions and libraries
│   ├── /styles        # Global styles and theme settings
│   ├── /types         # TypeScript type definitions
│   └── /utils         # Helper utilities
│
├── .env.local         # Environment variables
├── next.config.js     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies and scripts
```
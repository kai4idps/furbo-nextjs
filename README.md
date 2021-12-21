# Overview

```bash
furbo-web-nextjs
├── README.md
├── .gitignore
├── .eslintignore
├── .eslintrc.js
├── prettier.config.js
├── jsconfig.json
├── next.config.js
├── package.json
├── styles               ---- Global css/jss files
├── src                  ---- Other code files
├── redux                ---- Redux related
├── public               ---- Assets files
├── pages                ---- Nextjs file routing systme
│  └── [region]          ---- Dynamic routing of regions
│     ├── pages
│     └── products
├── components           ---- React components
└── config               ---- Customizable configuration files

```

# Prerequisite

- Node.js 14 or higher
- Yarn

# Development

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Build

Generate build files:

```bash
yarn build
```

# Production

Run the production server:

```bash
yarn start
```

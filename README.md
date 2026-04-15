# FISTIC

<p align="center">
  <img src="./assets/fistic-logo.png" alt="FISTIC logo" width="180" />
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" />
  <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img alt="Bun" src="https://img.shields.io/badge/Bun-runtime-F9F1E1?logo=bun&logoColor=black" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" />
</p>

<p align="center">
  Presentation website for <strong>FISTIC</strong>, built as a portfolio-ready frontend project with <strong>Next.js</strong>, <strong>Bun</strong>, and custom animated UI components.
</p>

## Preview

<p align="center">
  <img src="./assets/clatite_cu_fistic.png" alt="FISTIC pistachio crepe" width="30%" />
  <img src="./assets/gogosi-cu-ciocolata-si-fructe.png" alt="FISTIC mini donuts" width="30%" />
  <img src="./assets/clatite_cu_oreo.png" alt="FISTIC Oreo crepe" width="30%" />
</p>

Note: the project also includes code-generated Open Graph and Twitter images through `next/og`.  
If the website is deployed publicly, the generated social image can be used as the main preview image as well.

## Project Goal

This project was built with a clear technical purpose:

- to experiment with `Bun` in a real frontend workflow
- to build a polished landing page using `Next.js` App Router
- to test deployment through `Vercel`
- to integrate animated UI patterns inspired by `React Bits`
- to produce a clean website suitable for a portfolio

## Why This Stack

- `Next.js 16`
  for App Router, metadata routes, legal pages, and social image generation
- `Bun`
  for a fast modern dev/build workflow and hands-on experimentation outside the usual npm setup
- `Vercel`
  because it is the most direct hosting target for a Next.js project
- custom `React Bits`-style components
  to explore interactive, reusable UI blocks instead of static marketing layout patterns

## What’s Inside

- single-page landing page in `app/page.tsx`
- animated hero with a carousel inside a `TiltedCard`
- visual product gallery using `Masonry`
- service, location, and contact sections
- legal pages for Terms, Privacy Policy, and ANPC
- code-generated `Open Graph` and `Twitter` images
- reusable animated UI components in `components/`

## Build Process

The implementation followed a straightforward frontend product workflow:

1. Define the visual structure, color direction, and copy based on the project docs.
2. Build the landing page as a focused one-page experience.
3. Adapt the component set for `Next.js` App Router compatibility.
4. Refine layout, motion, typography, and image presentation.
5. Add legal pages and metadata routes.
6. Generate share images from code using `next/og`.

## Tech Stack

- Next.js
- React
- TypeScript
- Bun
- Tailwind CSS
- GSAP
- Motion
- Custom UI components

## Project Structure

- `app/`
  routes, pages, metadata handlers, Open Graph image routes
- `components/`
  UI components and animations
- `assets/`
  product images and branding assets
- `docs/`
  project structure, palette, and content references
- `lib/`
  helpers such as social image generation

## Running Locally

```bash
bun install
bun dev
```

Production build:

```bash
bun run build
```

## Deployment

This project is intended to be deployed on `Vercel`.

## Portfolio Context

- end-to-end frontend implementation
- practical use of Next.js App Router
- metadata and Open Graph generation
- reusable animated component integration
- a clean, presentable codebase for portfolio use

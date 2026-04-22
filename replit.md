# Historica

A Node/Express + React/Vite/Three.js app showcasing India's historical monuments with 3D models, AR/VR previews, time-travel views, day/night cycle, interactive hotspots, cross-monument compare, map search/filter, quiz mode, and share links.

## Stack
- React + Vite (client/)
- Express + tsx (server/)
- @react-three/fiber, @react-three/drei, three
- Leaflet + react-leaflet for the map
- wouter for routing
- Tailwind + shadcn-style UI components
- sonner for toasts

## Routes (`client/src/App.tsx`)
- `/` — Leaflet map with search/filter overlay (`LeafletMap.tsx`)
- `/monument/:id` — Detail with 3D viewer, hotspots, day/night cycle, share button (`MonumentDetail.tsx`)
- `/monument/:id/ar` — AR view (`ARView.tsx`)
- `/monument/:id/vr` — VR view (`VRView.tsx`)
- `/monument/:id/timetravel` — Time-period viewer (`TimeTravel.tsx`)
- `/compare` — Side-by-side cross-monument comparison (`ComparePage.tsx`)
- `/quiz` — Heritage trivia quiz (`QuizPage.tsx`)

## Data
`client/src/data/monuments.ts` is the single source of truth for monuments. Each entry can include:
- `primaryModel` and `historicalModels.{past, ancient}` — paths under `client/public/models/`
- `era` — `"ancient" | "medieval" | "modern"` (used by map filter)
- `hotspots: { name, description, position: [x, y, z] }[]` — clickable 3D hotspots
- `UNESCO`, `facts`, `visitingHours`, `entryFee`, etc.

`MonumentComparison.tsx` and `ComparePage.tsx` rely on the GLB files actually existing in `client/public/models/`. When adding a new model, also add its path to the `AVAILABLE_MODEL_PATHS` allow-list in `MonumentComparison.tsx`.

## Notable models added in this session
- `hampi.glb`, `hampi_ancient.glb`
- `charminar.glb` (no past variant — generation kept timing out, falls back to present model)
- `lotus_temple.glb`
- `gateway_of_india.glb`
- `golden_temple.glb`, `golden_temple_ancient.glb`

## Workflow
- `Start Game` runs `npm run dev` on port 5000.

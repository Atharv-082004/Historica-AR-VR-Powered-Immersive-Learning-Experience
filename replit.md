# Historica

A Node/Express + React/Vite/Three.js app showcasing India's historical monuments with 3D models, AR/VR previews, time-travel views, day/night cycle, interactive hotspots, cross-monument compare, map search/filter, quiz modes, multi-language support, heritage passport, audio tours, weather effects, and first-person walkthrough.

## Stack
- React + Vite (client/)
- Express + tsx (server/)
- @react-three/fiber, @react-three/drei, three
- Leaflet + react-leaflet for the map
- wouter for routing
- Tailwind + shadcn-style UI components
- sonner for toasts
- i18next + react-i18next (EN + HI translations)
- zustand (monument store, passport store, audio store)

## Routes (`client/src/App.tsx`)
- `/` — Leaflet map with search/filter overlay + "On This Day" panel (`LeafletMap.tsx`, `OnThisDay.tsx`)
- `/monument/:id` — Detail with 3D viewer, hotspots, day/night cycle, audio tour, weather effects, first-person mode, share button (`MonumentDetail.tsx`)
- `/monument/:id/ar` — AR view (`ARView.tsx`)
- `/monument/:id/vr` — VR view (`VRView.tsx`)
- `/monument/:id/timetravel` — Time-period viewer (`TimeTravel.tsx`)
- `/compare` — Side-by-side cross-monument comparison (`ComparePage.tsx`)
- `/quiz` — Heritage trivia quiz with Classic + Blitz modes (`QuizPage.tsx`)

## Data
`client/src/data/monuments.ts` is the single source of truth for monuments. Each entry can include:
- `primaryModel` and `historicalModels.{past, ancient}` — paths under `client/public/models/`
- `era` — `"ancient" | "medieval" | "modern"` (used by map filter)
- `hotspots: { name, description, position: [x, y, z] }[]` — clickable 3D hotspots
- `UNESCO`, `facts`, `visitingHours`, `entryFee`, etc.

`MonumentComparison.tsx` and `ComparePage.tsx` rely on the GLB files actually existing in `client/public/models/`. When adding a new model, also add its path to the `AVAILABLE_MODEL_PATHS` allow-list in `MonumentComparison.tsx`.

## 8 New Features (added in latest session)

### 1. Multi-language (i18next)
- `client/src/i18n/i18n.ts` — setup, persists lang in `localStorage` key `historica-lang`
- `client/src/i18n/translations/en.ts` + `hi.ts` — full EN + HI UI translations
- Language switcher in `Navigation.tsx` (top-right button + hamburger menu)
- Import `"./i18n/i18n"` in `main.tsx` before App renders

### 2. "On This Day" Panel
- `client/src/data/onThisDay.ts` — 33 dated historical events across all monuments
- `client/src/components/OnThisDay.tsx` — animated floating card on the home map
- Falls back to same-month events if no exact date match

### 3. Quiz Blitz Mode
- `QuizPage.tsx` now has a **mode menu** (Classic / Blitz)
- Blitz: 60-second countdown, streak multiplier (×1 → ×2 → ×3 → ×5), localStorage top-5 leaderboard
- Classic: 15 questions, no time limit, explanation after each answer
- Scores stored in `localStorage` key `historica-blitz-scores`

### 4. Heritage Passport
- `client/src/lib/stores/usePassport.ts` — zustand persisted store (`historica-passport`)
- `client/src/components/HeritagePassport.tsx` — full passport overlay with stamps + regional badges
- `markVisited(id)` called on every MonumentDetail open
- 4 regions: North India, South & Deccan, East India, West India
- Passport button in Navigation top bar + hamburger menu

### 5. Shadow Realism
- `TOD_PRESETS` in `MonumentDetail.tsx` now includes `sunPos: [x,y,z]` per time-of-day
- Dawn → east low angle; Day → overhead; Sunset → west low angle; Night → below horizon + point light
- `directionalLight` uses `sunPos` instead of fixed `[10,10,5]`, with `shadow-mapSize={[2048,2048]}`

### 6. Guided Audio Tour
- `client/src/hooks/useAudioTour.tsx` — Web Speech API wrapper (no npm dep)
- Toggle button in MonumentDetail's 3D panel (bottom-right)
- Reads monument name, city, description, and all facts aloud
- Prefers `en-IN` voice; falls back to `en-GB` / `en`; hidden if browser unsupported

### 7. Ambient Weather Effects
- `client/src/components/WeatherEffects.tsx` — Three.js particle system (rain, dust, fog/haze)
- `getMonumentWeather(state)` maps Indian states to weather type
  - Rajasthan/Gujarat → dust | Odisha/West Bengal/Kerala/Tamil Nadu → rain | Delhi/UP/Telangana/Maharashtra → haze | Punjab → fog
- `<WeatherEffects>` renders inside the `<Canvas>` in MonumentDetail
- Weather badge shown in the bottom-left badge row

### 8. First-Person Walkthrough
- `FirstPersonController` component uses `useThree` + `useFrame` + keyboard refs for WASD/arrow/Q/E movement
- `<PointerLockControls />` from @react-three/drei for mouse-look on canvas click
- Toggle button ("Walk Inside" / "Orbit Mode") in MonumentDetail's 3D panel (bottom-right)
- Camera FOV widens to 70° in first-person mode
- Hint banner shows controls when active

## Notable models
- `hampi.glb`, `hampi_ancient.glb`
- `charminar.glb`
- `lotus_temple.glb`
- `gateway_of_india.glb`
- `golden_temple.glb`, `golden_temple_ancient.glb`

## Workflow
- `Start Game` runs `npm run dev` on port 5000.

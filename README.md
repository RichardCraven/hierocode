# CravenTech 2.0 — Personal & Professional Portfolio

A modern, high-tech portfolio built in **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed for **Richard Craven** to showcase all personal and professional engineering projects, system architectures, and technical competencies.

---

## 🎨 Visual Design Inspiration

- **Connecting Skill & Project Tree (Screenshot 1)**:
  - Interactive SVG circuit cabling connecting the central root (`CravenTech 2.0 Core`) down to major engineering branches:
    - **Professional Systems** (Enterprise, FinTech, Multi-Region Cloud, Telemetry, IoT Fleet)
    - **Personal Labs & Open Source** (Autonomous Agent Runtimes, WebAudio Modular Synth, Rust Storage Engines, 3D Git Explorer)
    - **Technical Disciplines** (Distributed Systems, Cloud-Native Orchestration, Interactive UI/Graphics, Agent Systems)
  - Interactive hover state, branch selection, and quick-inspector HUD with real-time metric cards.
  - Subtle topographical contour vector background patterns and vertical section connectors.

- **Obsidian & Neon Violet Theme (Screenshot 2)**:
  - Deep midnight / space palette (`#080511`, `#0d091b`, `#120c24`).
  - Electric purple, neon violet, and hot fuchsia glow highlights (`#a855f7`, `#8b5cf6`, `#ec4899`, `#06b6d4`).
  - Hero section featuring HUD circuit trace lines branching to developer roles and social network nodes.
  - Glassmorphic card surfaces with dynamic hover states and purple border glow (`rgba(168, 85, 247, 0.2)`).

---

## 🚀 Key Features

1. **Interactive Architecture & Skill Tree** (`src/components/ConnectingTree.tsx`):
   - Visual node graph with SVG connecting cables, traveling electric pulse animations, and branch filters (`All`, `Professional`, `Personal Labs`, `Engineering Pillars`).
   - Click any node to preview key metrics or open the detailed system modal.

2. **Project Matrix Catalog** (`src/components/ProjectsShowcase.tsx`):
   - 12 comprehensive personal and professional projects with placeholder text and realistic architecture metrics.
   - Filter by Category (`All`, `Professional`, `Personal Labs`) and Domain (`Distributed Systems`, `Cloud & DevOps`, `AI & Agents`, `Full-Stack Web`, `Developer Tools`).
   - Real-time search across titles, descriptions, roles, and tech stack tags.

3. **System Architecture Deep-Dive Modal** (`src/components/ProjectModal.tsx`):
   - Multi-tab modal detailing:
     - High-level topology dataflow (Ingress, Core Processing, Storage & Live HUD).
     - Engineering challenges solved (concurrency, idempotency, streaming deltas).
     - Performance benchmarks & metrics.
     - Complete technology stack and live repository/demo links.

4. **Engineering Success Stories Timeline** (`src/components/ExperienceTimeline.tsx`):
   - Vertical circuit cable with node markers documenting career trajectory from TechSolvers (Lead IT Systems Engineer), Nexus Innovations, CyberScale Defense, and Apex Dynamics.
   - Metrics like *+30% network efficiency*, *15 engineers led*, *4.2B spans/day*, and *$140k/yr saved*.

5. **Skills Radar & Matrix** (`src/components/SkillsRadar.tsx`):
   - Interactive breakdown of proficiencies across Languages, Frontend, Backend, and Cloud/Infra.
   - Clicking any skill dynamically lists and highlights all projects that use it.

6. **Direct Transmission & Contact Terminal** (`src/components/ContactSection.tsx`):
   - Interactive transmission form with category selection, email copy button, availability status, and confetti celebration upon dispatch.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler / Dev Server**: Vite 5
- **Styling**: Tailwind CSS with custom neon violet / fuchsia extensions
- **Icons**: Lucide React
- **Animations**: CSS keyframe circuit dashed flow, ambient pulse glow, canvas-confetti

---

## 📦 Project Structure

```
CravenTech2.0/
├── index.html               # Main HTML entry with Inter & JetBrains Mono fonts
├── package.json             # Dependencies and build scripts
├── tailwind.config.js       # Custom CravenTech color palette and glow utilities
├── vite.config.ts           # Vite configuration
├── src/
│   ├── main.tsx             # React mount
│   ├── App.tsx              # Root component coordinating state and modal
│   ├── index.css            # Base styles, glassmorphic panels, circuit lines
│   ├── types/
│   │   └── portfolio.ts     # TypeScript interfaces for Project, Skill, Experience
│   ├── data/
│   │   ├── projects.ts      # 12 detailed personal & professional projects
│   │   ├── skills.ts        # Technical proficiencies and category mappings
│   │   └── experience.ts    # Engineering career milestones & impact metrics
│   └── components/
│       ├── Navbar.tsx             # Floating pill header with logo & quick links
│       ├── HeroSection.tsx        # Screenshot 2 inspired hero with HUD branches
│       ├── ConnectingTree.tsx     # Interactive SVG skill/project tree
│       ├── ProjectsShowcase.tsx   # Searchable & filterable project catalog
│       ├── ProjectModal.tsx       # Deep-dive architecture & topology modal
│       ├── ExperienceTimeline.tsx # Career success stories with vertical trunk
│       ├── SkillsRadar.tsx        # Skill badges & project cross-referencing
│       ├── ContactSection.tsx     # Transmission form & contact HUD
│       ├── BackgroundContour.tsx  # Topographic SVG contours & ambient glow
│       └── Footer.tsx             # Bottom navigation & copyright
```

---

## 🏃 Running the Application

### 1. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3001` (or the URL printed in the terminal).

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Customizing Content

- **To update or add projects**: Edit [`src/data/projects.ts`](file:///Users/richardcraven/Documents/CravenTech2.0/src/data/projects.ts).
- **To update skills**: Edit [`src/data/skills.ts`](file:///Users/richardcraven/Documents/CravenTech2.0/src/data/skills.ts).
- **To update work experience**: Edit [`src/data/experience.ts`](file:///Users/richardcraven/Documents/CravenTech2.0/src/data/experience.ts).
- **To change the color theme or accents**: Adjust `colors.craven` in [`tailwind.config.js`](file:///Users/richardcraven/Documents/CravenTech2.0/tailwind.config.js).

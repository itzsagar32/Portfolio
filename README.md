# Krishu Raj — Cinematic Interactive 3D Portfolio

> *"The things that happened to me shaped what I became."*

An interactive cinematic 3D developer portfolio and personal narrative built with **React**, **Three.js**, **React Three Fiber**, and **GSAP ScrollTrigger**.

Instead of a generic template, this website is structured as an interactive digital art piece and technical showcase centered around an anatomical 3D head metaphor with subtle interactive scars. Each scar represents an inflection point: a hard failure, a security finding, a turning point in discipline, or a low-level systems breakthrough.

---

## 🌟 Key Highlights & Features

1. **Section 1: Cinematic Intro**
   - 3–4 second fullscreen sequential typographic animation.
   - Conceptualized around "Languages": Hindi, English, C, Python, JavaScript, HTML, CSS, React.
   - Cinematic blur, scaling, and opacity transitions culminating in *"Now I build with them."*
   - Subtle "Skip Intro" option and strict `prefers-reduced-motion` compliance.

2. **Section 2 & 3: Hero & Scroll-Driven 3D Head**
   - Sculpted 3D anatomical head bust rendered in real-time with React Three Fiber.
   - Dark, moody cinematic lighting: warm burnt orange / amber rim lights, cool key light, and floating ambient embers.
   - Scroll-driven GSAP choreography:
     - 0% scroll: Face looks forward toward visitor with subtle breathing and parallax mouse tracking.
     - 25%–65% scroll: Head smoothly tilts upward, eyes gradually close, camera perspective changes, and neck structure becomes visible.
     - 65%–100% scroll: Head translates upward out of the viewport, naturally handing off to the About section.

3. **Section 4: Interactive Scars (Turning Points)**
   - 5 subtle scars embedded organically into the 3D surface:
     - **Forehead**: *"The First Time I Failed Badly"* (Resilience & Architecture)
     - **Left Eyebrow**: *"First Security Finding"* (Ethical Disclosure & Hall of Fame)
     - **Right Cheek**: *"The Turning Point"* (Execution Over Hesitation)
     - **Jawline**: *"The Low-Level Awakening"* (Pointers & Memory Reality)
     - **Neck**: *"The Silent Discipline"* (Offensive Intuition & Drive)
   - Hovering or tapping a scar highlights its seam in molten amber, triggers a subtle pulse, and displays the story card.
   - Mobile-optimized: Includes an accessible Quick Scar Selector bar for one-tap inspection.

4. **Section 5: About Me**
   - Authentic profile of Krishu Raj: *Cybersecurity student / developer / builder*.
   - 4 core pillars: *What I Am Learning*, *What I Build*, *What I'm Interested In*, and *Current Direction*.
   - Core philosophy and key verification stats.

5. **Section 6: Interactive Skills Telemetry**
   - Structured into *Cybersecurity (SEC-OPS)*, *Programming (CORE-SYS)*, *Frontend (DEV-UI)*, and *Tools (ENV-TOOL)*.
   - Interactive Telemetry HUD inspector with instant search filtering.

6. **Section 7: Selected Projects**
   - 5 featured projects:
     1. **Cinematic 3D Portfolio** (Three.js, R3F, GSAP, Vite)
     2. **Aegis Mental Coach Android App** (Mobile Engineering, Clean Architecture, SQLite)
     3. **Security Research & Bug Bounty** (Responsible Disclosure, Burp Suite, Web Security)
     4. **C Systems Toolkit & Memory Inspector** (POSIX, C99, Memory Allocation)
     5. **Automated Recon Engine** (Async Python, HTTPX, Target Surface Analysis)
   - Interactive preview blueprints, tech tags, GitHub/Live links, and deep architectural inspector modal.

7. **Section 8: Cybersecurity Lab & Research**
   - Official **Security Hall of Fame** acknowledgment card with responsible disclosure credentials.
   - Interactive Cyber Terminal CLI supporting real-time commands (`whoami`, `hof`, `recon`, `tools`, `clear`).
   - Ethical disclosure principles (RFC-9116 / ISO-29147, ATT&CK Matrix).

8. **Section 9: The Journey Timeline**
   - 8-stage chronological progression from foundational logic to 3D synthesis.
   - Directly linked to the central scar metaphor.

9. **Section 10: Contact & Dispatch**
   - Direct coordinates: GitHub, LinkedIn, Email with one-click clipboard copy.
   - Working interactive encrypted transmission form with feedback states.
   - Final closing signature: *"Still building."* with an animated amber terminal cursor.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **Animation**: [GSAP](https://gsap.com/) & ScrollTrigger
- **Styling**: Tailwind CSS & Modern CSS3 Custom Variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Syne (Display), Inter (Body), JetBrains Mono (Code/HUD)

---

## 📂 Project Architecture

```
my website/
├── public/
│   └── models/               # (Optional: drop custom face.glb here)
├── src/
│   ├── 3d/
│   │   ├── FaceModel.jsx      # Model loader & procedural fallback wrapper
│   │   ├── ProceduralHead.jsx # Sculpted 3D anatomical head, eyelids & scars
│   │   └── Scene3D.jsx        # Canvas, lighting, camera rig, ember particles
│   ├── components/
│   │   ├── Navbar.jsx         # Header navigation & status badge
│   │   └── Footer.jsx         # Bottom footer & back-to-top button
│   ├── data/
│   │   ├── about.js           # Identity, bio & pillars
│   │   ├── contact.js         # Social coordinates & messages
│   │   ├── journey.js         # Timeline milestones & scar mapping
│   │   ├── languages.js       # Cinematic intro typography sequence
│   │   ├── projects.js        # Projects metadata, metrics & links
│   │   ├── scars.js           # 3D scar positions, quotes & turning points
│   │   ├── security.js        # Hall of Fame, principles & terminal log
│   │   └── skills.js          # Categorized capabilities & tags
│   ├── sections/
│   │   ├── CinematicIntro.jsx # Fullscreen language kinetic typography
│   │   ├── HeroFaceSection.jsx# Pinned scroll-driven 3D experience
│   │   ├── AboutSection.jsx   # Profile & technical direction
│   │   ├── SkillsSection.jsx  # Interactive telemetry matrix & HUD
│   │   ├── ProjectsSection.jsx# Interactive project cards & inspect modal
│   │   ├── SecuritySection.jsx# Cybersecurity lab & terminal emulator
│   │   ├── JourneySection.jsx # Chronological timeline of scars
│   │   └── ContactSection.jsx # Minimalist contact & message channel
│   ├── App.jsx                # Root application coordinator
│   ├── main.jsx               # React DOM entry
│   └── index.css              # Dark cinematic design system & Tailwind
├── index.html                 # SEO metadata, Open Graph & typography links
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Design tokens & color palette
├── vite.config.js             # Chunk optimization & build configuration
└── README.md                  # Documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (v9.0.0 or higher)

### Installation

```bash
# Clone or navigate to the project directory
cd "my website"

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:3000/` in your browser.

### Building for Production

```bash
npm run build
```

The production-ready assets will be created in the `dist/` directory with automatic code-splitting for Three.js, React, and GSAP.

---

## 🎨 Customizing & Replacing Placeholders

1. **Substituting with a Real 3D Model**:
   - The project currently renders an artistic zero-dependency sculpted procedural head that works out-of-the-box.
   - If you have your own 3D head scan or GLTF model, place it at `public/models/face.glb` and reference it inside [`src/3d/FaceModel.jsx`](file:///c:/Users/Krishu%20Raj/Desktop/Personal/reume/my%20website/src/3d/FaceModel.jsx).

2. **Personal Scars & Stories**:
   - Update [`src/data/scars.js`](file:///c:/Users/Krishu%20Raj/Desktop/Personal/reume/my%20website/src/data/scars.js) with your real-world turning points, quotes, and reflections.

3. **Hall of Fame & Security Findings**:
   - Update [`src/data/security.js`](file:///c:/Users/Krishu%20Raj/Desktop/Personal/reume/my%20website/src/data/security.js) with your actual company names, CVEs, or bug bounty platforms when permitted by disclosure agreements.

4. **Contact Details**:
   - Update [`src/data/contact.js`](file:///c:/Users/Krishu%20Raj/Desktop/Personal/reume/my%20website/src/data/contact.js) with your actual email, LinkedIn handle, and GitHub links.

---

## ♿ Accessibility & Performance

- **Reduced Motion**: Automatically skips heavy motion when the user has `prefers-reduced-motion` enabled.
- **Dynamic DPR Clamping**: Restricts canvas pixel ratio to `Math.min(devicePixelRatio, 1.5)` to ensure a solid 60 FPS on mobile and high-DPI laptops.
- **Accessible Touch Fallback**: On touch devices, visitors can tap directly on the 3D head or use the pill bar to read any scar story without requiring micro-precision raycasting.

---

## 📄 License

MIT © [Krishu Raj](https://github.com/KrishuRaj)

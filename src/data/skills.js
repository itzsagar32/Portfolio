export const skillsData = {
  categories: [
    {
      id: "cybersecurity",
      name: "Cybersecurity & Vulnerability Research",
      badge: "SECURITY",
      description: "Analysis of web targets, perimeter reconnaissance, and responsible vulnerability discovery.",
      skills: [
        { name: "Web Security", level: "Intermediate", tag: "OWASP Top 10", desc: "Identification of IDOR, XSS, CSRF, broken access control, and injection vectors." },
        { name: "Burp Suite", level: "Hands-on", tag: "Proxy & Repeater", desc: "Traffic interception, HTTP request manipulation, automated fuzzing, and session inspection." },
        { name: "HTTP / HTTPS", level: "Advanced", tag: "Protocol Mechanics", desc: "Deep packet mechanics, request smuggling awareness, headers, cookies, and CORS policies." },
        { name: "API Security", level: "Intermediate", tag: "REST & JSON", desc: "Token leakage analysis, unauthorized endpoint invocation, mass assignment, and BOLA/BFLA." },
        { name: "Reconnaissance", level: "Hands-on", tag: "OSINT & Surface", desc: "Target surface mapping, DNS enumeration, asset discovery, and footprinting." },
        { name: "Vulnerability Research", level: "Active", tag: "Responsible Disclosure", desc: "Reproducing anomalies, crafting proof-of-concept exploits, and structured report drafting." }
      ]
    },
    {
      id: "programming",
      name: "Systems & Programming Languages",
      badge: "SYSTEMS",
      description: "Low-level memory awareness and high-level scripting for automation and tooling.",
      skills: [
        { name: "C", level: "Foundational", tag: "Pointers & Memory", desc: "Understanding stack vs. heap allocation, memory addresses, structs, and low-level system calls." },
        { name: "Python", level: "Proficient", tag: "Automation & Tooling", desc: "Rapid security tooling, HTTP request scripting, automation scripts, and custom CLI utilities." }
      ]
    },
    {
      id: "frontend",
      name: "Frontend Architecture",
      badge: "FRONTEND",
      description: "Building responsive, modern, performance-first user interfaces with rich interactivity.",
      skills: [
        { name: "HTML5", level: "Advanced", tag: "Semantic DOM", desc: "Accessible markup, SEO metadata, canvas APIs, and progressive enhancement." },
        { name: "CSS3", level: "Advanced", tag: "Modern Layouts", desc: "Grid, Flexbox, custom properties, keyframe animations, responsive media queries." },
        { name: "JavaScript", level: "Proficient", tag: "ES6+ & Async", desc: "Event loop, Promises/async-await, DOM manipulation, functional paradigms." },
        { name: "React", level: "Proficient", tag: "Component Systems", desc: "Modular state management, component lifecycles, custom hooks, and virtual DOM optimization." },
        { name: "Vite", level: "Proficient", tag: "Build Tooling", desc: "Blazing fast HMR, Rollup bundling, asset pipelines, and environment configuration." }
      ]
    },
    {
      id: "tools",
      name: "Developer Tools & Environment",
      badge: "ENVIRONMENT",
      description: "Daily developer workflows, version control, and system environments.",
      skills: [
        { name: "Linux", level: "Comfortable", tag: "Debian & Bash", desc: "Command-line navigation, file permissions, shell scripting, process monitoring, and networking." },
        { name: "Git", level: "Proficient", tag: "Version Control", desc: "Branching strategies, conflict resolution, rebase, and commit discipline." },
        { name: "GitHub", level: "Proficient", tag: "Collaboration", desc: "Issue tracking, pull requests, repository management, and GitHub Actions." },
        { name: "VS Code", level: "Daily Driver", tag: "IDE Ecosystem", desc: "Debugging configurations, linting, extensions, and tailored workspace settings." }
      ]
    }
  ]
};

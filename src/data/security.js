export const securityData = {
  headline: "Cybersecurity & Vulnerability Research",
  subheadline: "Offensive curiosity channeled into ethical defense. Mapping attack surfaces and responsible disclosure.",
  hallOfFame: {
    title: "Security Hall of Fame Recognition",
    organization: "Enterprise Target (Responsible Disclosure Program)",
    status: "Verified & Resolved",
    year: "Acknowledged",
    description: "Identified and responsibly reported an authorization / IDOR vulnerability that could have exposed sensitive entity records. Followed standard responsible disclosure protocol. Verified and inducted into the organization's official Security Hall of Fame / Contributor Acknowledgement list.",
    tags: ["Hall of Fame", "Responsible Disclosure", "IDOR / Broken Access Control"]
  },
  principles: [
    {
      title: "Responsible Disclosure",
      code: "RFC-9116 / ISO-29147",
      desc: "Zero public exploitation. Every finding is documented with reproduction steps, impact assessment, and remediation recommendations sent directly to security teams."
    },
    {
      title: "Offensive Intuition, Defensive Mindset",
      code: "ATT&CK MATRIX",
      desc: "To design impervious architectures, one must understand how attackers traverse trust boundaries, bypass sanitization, and manipulate state."
    },
    {
      title: "Target Surface Reconnaissance",
      code: "RECON-OSINT",
      desc: "Passive asset discovery, DNS enumeration, directory fuzzing, and endpoint mapping before a single packet is crafted."
    }
  ],

  latestDisclosure: {
    title: 'First Coordinated Vulnerability Disclosure (CVD)',
    vendor: 'Major Security Software Vendor',
    severity: ['Medium – client‑side control bypass', 'Low – info‑disclosure'],
    description: `While auditing a widely used browser extension I discovered a client‑side control bypass that allowed a malicious frame to trick the extension into saving spoofed credentials. The vendor triaged the issue, classified it as Medium severity, and will credit me in their upcoming Security Advisory.`,
    status: 'Triaged & validated',
    tags: ['CVD', 'browser‑extension', 'cross‑origin', 'credential‑theft']
  },
  domains: [
    {
      category: "Web Security",
      status: "Active Focus",
      concepts: ["Broken Access Control (IDOR)", "Cross-Site Scripting (XSS)", "Server-Side Request Forgery (SSRF)", "Session Management", "CORS Misconfigurations"]
    },
    {
      category: "API & Endpoint Testing",
      status: "Hands-on",
      concepts: ["BOLA / BFLA", "Parameter Pollution", "JWT Validation Flaws", "Rate Limiting Audits", "GraphQL Introspection"]
    },
    {
      category: "Tooling & Methodology",
      status: "Daily Stack",
      concepts: ["Burp Suite Professional / Community", "Custom Python Async Probers", "Linux CLI / Bash Scripts", "OWASP Testing Guide (WSTG)", "cURL & HTTP/2 Analysis"]
    }
  ],

  latestDisclosure: {
    title: 'First Coordinated Vulnerability Disclosure (CVD)',
    vendor: 'Major Security Software Vendor',
    severity: ['Medium – client‑side control bypass', 'Low – info‑disclosure'],
    description: `While auditing a widely used browser extension I discovered a client‑side control bypass that allowed a malicious frame to trick the extension into saving spoofed credentials. The vendor triaged the issue, classified it as Medium severity, and will credit me in their upcoming Security Advisory.`,
    status: 'Triaged & validated',
    tags: ['CVD', 'browser‑extension', 'cross‑origin', 'credential‑theft']
  },
  terminalLog: [
    { time: "00:01:14", type: "INFO", text: "[+] Target scope confirmed: in-scope wildcards loaded" },
    { time: "00:02:30", type: "EXEC", text: "exec: subfinder -d target.domain -silent | httpx -sc -title" },
    { time: "00:04:12", type: "INFO", text: "[*] HTTP 200 OK endpoints mapped: 42 active assets" },
    { time: "00:07:45", type: "WARN", text: "[!] Discrepancy observed in /api/v2/user/{id}/profile authorization header" },
    { time: "00:11:03", type: "SUCCESS", text: "[+] Reproduction verified with unprivileged token — PoC drafted" },
    { time: "00:14:20", type: "SEC", text: "[✓] Encrypted disclosure transmitted to security@target.domain" },
    { time: "00:19:00", type: "STATUS", text: "[✓] Triaged: Severity confirmed. Hall of Fame acknowledgment granted." }
  ]
};

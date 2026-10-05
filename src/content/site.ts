// Single source of truth for company facts used across both languages,
// structured data (JSON-LD) and llms.txt. Update here, not in page copy.
export const site = {
  name: "Highly Distinguish",
  legalName: "Highly Distinguish Pty Ltd",
  url: "https://www.hdeazy.com",
  abn: "70 651 431 677",
  phone: "1300 690 188",
  phoneHref: "tel:1300690188",
  // TODO: switch to a domain address (e.g. hello@hdeazy.com) once set up.
  email: "highlydistinguish@gmail.com",
  region: "NSW",
  country: "AU",
  // Shown in the footer and About page. National positioning — no single city.
  location: "Australia",
  // Google Analytics 4 measurement ID (e.g. "G-XXXXXXXXXX"). Leave empty to disable.
  gaId: "G-FZCZCLPPSV",
  links: {
    github: "https://github.com/CloudsDocker",
    blog: "https://www.todzhang.com",
    playbook: "https://github.com/CloudsDocker/AI-FDE-Playbook",
  },
  // Live engineering blog (full archive), English and Chinese listings.
  archive: {
    tech: "https://www.todzhang.com/posts/",
    chinese: "https://www.todzhang.com/zh/posts/",
  },
} as const;

export function mailtoHref(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

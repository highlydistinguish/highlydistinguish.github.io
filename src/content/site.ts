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
  city: "Sydney",
  region: "NSW",
  country: "AU",
  founder: "Todd Zhang",
  links: {
    github: "https://github.com/CloudsDocker",
    blog: "https://www.todzhang.com",
    playbook: "https://github.com/CloudsDocker/AI-FDE-Playbook",
  },
  // Pre-2022 engineering posts, kept at their original URLs.
  archive: {
    tech: "/blog_tech/",
    chinese: "/blog_chn/",
  },
} as const;

export function mailtoHref(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

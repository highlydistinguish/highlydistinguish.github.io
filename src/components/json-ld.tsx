import { site } from "@/content/site";

/** Organisation details for search engines and AI assistants (schema.org). */
export function OrganizationJsonLd({ description }: { description: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/img/HighlyDistinguishLogo-stamp.png`,
    description,
    telephone: site.phone,
    email: site.email,
    taxID: `ABN ${site.abn}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: [
      { "@type": "City", name: "Sydney" },
      { "@type": "Country", name: "Australia" },
    ],
    knowsLanguage: ["en", "zh"],
    founder: { "@type": "Person", name: site.founder, url: site.links.blog },
    sameAs: [site.links.github, site.links.blog],
  };
  return <JsonLd data={data} />;
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

import Script from "next/script";
import { site } from "@/content/site";

// Google Analytics 4. The measurement ID lives in site.ts (it's not a secret —
// it ships in the page HTML regardless). Renders nothing until an ID is set,
// so local dev and preview builds don't send hits.
export function Analytics() {
  if (!site.gaId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
      </Script>
    </>
  );
}

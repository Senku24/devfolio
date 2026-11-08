import Head from "next/head";
import {
  CERTIFICATION,
  EDUCATION,
  EXPLORING,
  FAQS,
  METADATA,
  PROFILE,
  PROJECTS,
  SKILLS,
} from "../../constants";

const absoluteUrl = (path) => {
  if (!METADATA.siteUrl) return "";
  const origin = METADATA.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${origin}/`;
  if (/^https?:\/\//.test(path)) return path;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
};

const TECH_NAMES = Object.fromEntries(
  Object.values(SKILLS)
    .flat()
    .map((skill) => [skill.icon, skill.name])
);

const KNOWS_ABOUT = [...new Set([
  ...Object.values(SKILLS).flat().map((skill) => skill.name),
  ...EXPLORING,
])];

const Meta = () => {
  const pageUrl = absoluteUrl("/");
  const imageUrl = absoluteUrl(METADATA.image);
  const personId = `${pageUrl}#person`;
  const websiteId = `${pageUrl}#website`;
  const profilePageId = `${pageUrl}#profilepage`;
  const projectsId = `${pageUrl}#projects`;
  const faqId = `${pageUrl}#faq`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: PROFILE.name,
        url: pageUrl,
        image: imageUrl,
        jobTitle: PROFILE.title,
        description: METADATA.description,
        email: PROFILE.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gurugram",
          addressCountry: "IN",
        },
        sameAs: [PROFILE.github, PROFILE.linkedin],
        knowsAbout: KNOWS_ABOUT,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: EDUCATION.school,
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: CERTIFICATION.name,
          credentialCategory: "certification",
          recognizedBy: {
            "@type": "Organization",
            name: CERTIFICATION.issuer,
          },
        },
        mainEntityOfPage: { "@id": profilePageId },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: pageUrl,
        name: PROFILE.name,
        description: METADATA.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: pageUrl,
        name: METADATA.title,
        description: METADATA.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        hasPart: [{ "@id": projectsId }, { "@id": faqId }],
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: `${pageUrl}#faq`,
        name: `Frequently asked questions about ${PROFILE.name}`,
        isPartOf: { "@id": websiteId },
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": projectsId,
        name: `Projects by ${PROFILE.name}`,
        numberOfItems: PROJECTS.length,
        itemListElement: PROJECTS.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareSourceCode",
            name: project.name,
            description: project.outcome,
            codeRepository: project.repo || undefined,
            url: project.live || undefined,
            programmingLanguage: project.tech
              .map((tech) => TECH_NAMES[tech] || tech)
              .join(", "),
            author: { "@id": personId },
          },
        })),
      },
    ],
  };

  return (
    <Head>
      <title>{METADATA.title}</title>
      <meta name="description" content={METADATA.description} />
      <meta name="keywords" content={METADATA.keywords} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content={METADATA.language} />
      <meta name="author" content={METADATA.author} />
      <meta name="publisher" content={PROFILE.name} />
      <meta name="application-name" content={PROFILE.name} />
      <meta name="apple-mobile-web-app-title" content={PROFILE.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="color-scheme" content="dark" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content={METADATA.themeColor} />

      <link rel="icon" href="/logo.svg?v=2" type="image/svg+xml" />
      <link rel="icon" href="/favicons/favicon.ico?v=2" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png?v=2" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png?v=2" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png?v=2" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link
        rel="alternate"
        type="text/plain"
        href="/llms.txt"
        title="LLM-readable site summary"
      />
      {pageUrl ? <link rel="canonical" href={pageUrl} /> : null}

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={METADATA.title} />
      <meta property="og:description" content={METADATA.description} />
      {pageUrl ? <meta property="og:url" content={pageUrl} /> : null}
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      {imageUrl ? <meta property="og:image:secure_url" content={imageUrl} /> : null}
      {imageUrl ? <meta property="og:image:type" content="image/png" /> : null}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${PROFILE.name} — ${PROFILE.title}`} />
      <meta property="og:site_name" content={PROFILE.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={METADATA.title} />
      <meta name="twitter:description" content={METADATA.description} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
      {imageUrl ? (
        <meta name="twitter:image:alt" content={`${PROFILE.name} — ${PROFILE.title}`} />
      ) : null}
      {METADATA.twitterHandle ? (
        <>
          <meta
            name="twitter:site"
            content={`@${METADATA.twitterHandle.replace(/^@/, "")}`}
          />
          <meta
            name="twitter:creator"
            content={`@${METADATA.twitterHandle.replace(/^@/, "")}`}
          />
        </>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </Head>
  );
};

export default Meta;

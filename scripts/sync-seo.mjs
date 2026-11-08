import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const origin = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://nixonpaul.dev"
).replace(/\/$/, "");

const sitemapPath = path.join(root, "public", "sitemap.xml");
const robotsPath = path.join(root, "public", "robots.txt");
const llmsPath = path.join(root, "public", "llms.txt");

const previousSitemap = await readFile(sitemapPath, "utf8");
const lastmod =
  previousSitemap.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ||
  new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  <url>
    <loc>${origin}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${origin}/preview.png</image:loc>
      <image:title>Nixon Paul — Software Engineer</image:title>
    </image:image>
  </url>
</urlset>
`;

const robots = `# Search engines and AI answer engines are welcome to crawl this portfolio.
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${origin}/sitemap.xml
`;

const llms = (await readFile(llmsPath, "utf8"))
  .replace(/^Canonical: .*$/m, `Canonical: ${origin}/`)
  .replace(/^Sitemap: .*$/m, `Sitemap: ${origin}/sitemap.xml`)
  .replace(/^Resume: .*$/m, `Resume: ${origin}/resume.pdf`)
  .replace(/^- Portfolio: .*$/m, `- Portfolio: ${origin}/`);

await Promise.all([
  writeFile(sitemapPath, sitemap),
  writeFile(robotsPath, robots),
  writeFile(llmsPath, llms),
]);

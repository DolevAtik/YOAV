# SEO Setup Guide — Yoav Zadikov Portfolio

## 1. Connect a Custom Domain

1. Go to [vercel.com](https://vercel.com) → your project → **Settings → Domains**
2. Click **Add Domain** and enter your domain (e.g. `yoavzadikov.com`)
3. Vercel gives you DNS records — go to your domain registrar (GoDaddy, Namecheap, etc.)
4. Add the records:
   - **A record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
5. Wait up to 48 hours for DNS to propagate
6. Update all URLs in these files from `yoav-steel.vercel.app` to your real domain:
   - `index.html` (canonical, og:url, og:image)
   - `public/robots.txt` (Sitemap URL)
   - `public/sitemap.xml` (loc URL)
   - `src/components/StructuredData.jsx` (all @id and url fields)

---

## 2. Submit the Sitemap to Google

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Select your property (or add it if first time)
3. In the left sidebar click **Sitemaps**
4. Enter: `sitemap.xml` and click **Submit**
5. Status should turn **Success** within a few hours

---

## 3. Verify Ownership in Google Search Console

**Method A — HTML Meta Tag (easiest):**
1. In Search Console → **Settings → Ownership verification**
2. Choose **HTML tag**
3. Copy the `content` value from the provided meta tag
4. Open `index.html` and uncomment this line, replacing the token:
   ```html
   <meta name="google-site-verification" content="REPLACE_WITH_YOUR_TOKEN" />
   ```
5. Deploy to Vercel and click **Verify**

**Method B — HTML file upload:**
1. Download the HTML file Google provides
2. Place it in the `public/` folder
3. Deploy and verify

---

## 4. Request Indexing

After verifying:
1. In Search Console → **URL Inspection**
2. Enter your homepage URL
3. Click **Request Indexing**
4. Google typically indexes within 1–7 days

To speed it up, share your URL on social media (Instagram, LinkedIn) — social signals help discovery.

---

## 5. Track Search Performance

**Google Search Console:**
- **Performance** → see which keywords bring traffic
- **Coverage** → check for indexing errors
- **Core Web Vitals** → see real-world performance scores

**Recommended tools:**
- [PageSpeed Insights](https://pagespeed.web.dev) — check Lighthouse score
- [Rich Results Test](https://search.google.com/test/rich-results) — verify JSON-LD schema
- [Schema Validator](https://validator.schema.org) — validate structured data

**Target keywords already implemented:**
- Music Video Director Israel
- Music Video Producer
- Creative Director Israel
- Video Production
- Commercial Director
- Music Video Production
- Yoav Zadikov (brand keyword)

---

## Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site and verify with the meta tag method
3. In `index.html`, uncomment and fill in:
   ```html
   <meta name="msvalidate.01" content="REPLACE_WITH_YOUR_TOKEN" />
   ```
4. Submit your sitemap URL in Bing Webmaster → Sitemaps

---

## Quick Checklist

- [ ] Custom domain connected and verified on Vercel
- [ ] URLs updated in index.html, robots.txt, sitemap.xml, StructuredData.jsx
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Sitemap submitted to Bing
- [ ] URL indexing requested
- [ ] Lighthouse score checked (target 95+)
- [ ] Rich Results Test passed

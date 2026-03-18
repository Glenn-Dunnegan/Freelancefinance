
  # Freelance Rate Calculator

  This is a code bundle for Freelance Rate Calculator. The original project is available at https://www.figma.com/design/4rtQkoJmUNaEWAdK1vvPCV/Freelance-Rate-Calculator.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Production Verification

  Run `npm run check:production` to verify that the live site is reachable to crawlers before requesting an AdSense review.

  The check confirms:

  - the homepage and a key guide page return `200`
  - `robots.txt`, `sitemap.xml`, and `ads.txt` are accessible
  - the built JS and CSS assets referenced by the homepage are downloadable

  To test a different deployed URL, set `SITE_URL` first.

  In PowerShell:

  ```
  $env:SITE_URL = 'https://your-site.example'
  npm run check:production
  ```

  In POSIX shells:

  ```
  SITE_URL=https://your-site.example npm run check:production
  ```

  ## Google Analytics (GA4)

  1. Create a GA4 web stream and copy your Measurement ID (for example, `G-ABC1234567`).
  2. Create a `.env` file in the project root.
  3. Add this variable:

  ```
  VITE_GA_MEASUREMENT_ID=G-ABC1234567
  ```

  You can copy `.env.example` as a starting point.
  
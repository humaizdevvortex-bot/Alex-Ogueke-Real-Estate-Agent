# Alex Ogueke | Keller Williams Realty South Bay

A premium, responsive, single-page real estate portfolio website for **Alex Ogueke**, real estate professional affiliated with **Keller Williams Realty South Bay** (Torrance, CA) serving the Los Angeles and South Bay areas. CalDRE #02079279.

Based directly on authentic transaction data, verified Homes.com closed production ($10.2M total volume across 16 sales), verified Yelp reviews (5.0 stars), and genuine property and neighborhood photography.

---

## 🌟 Key Features

- **Genuine Agent Portrait Hero**: High-fidelity presentation of Alex Ogueke with live comps search filter, CalDRE licensing badge, and verified credentials.
- **Key Statistics Strip**: 16 closed sales, $10.2M sales volume, $638.1K average price, 4 years of experience under the verified 5-year MLS snapshot.
- **About Alex**: Detailed biography highlighting his roots in Carson, CA, international perspective (9 years in Nigeria), and client specialties (First-Time Buyers, Multi-Unit Investments, Military Families, Luxury & Townhomes).
- **Recently Sold Properties Gallery**: 6 verified historical transactions matching Homes.com records:
  - `7721 Bell Ave, Los Angeles, CA` ($840,000 · Multifamily 6-Bed duplex · 5% over list)
  - `1040 W 220th St, Torrance, CA` ($805,000 · Single Family House · Buyer's Agent)
  - `1314 W 71st St, Los Angeles, CA` ($624,000 · Single Family House · 4% over list)
  - `13231 Gramercy Pl, Gardena, CA` ($885,000 · Single Family House · Buyer's Agent)
  - `45620 Barham Ave, Lancaster, CA` ($550,000 · Single Family House · Buyer's Agent)
  - `201 W Williams St, Barstow, CA` ($352,000 · Multifamily 4-unit asset · Buyer's Agent)
- **Interactive Location Map**: Leaflet-powered map displaying custom pins for each transaction across Torrance, Gardena, LA, and regional markets with popups and auto-focusing cards.
- **Transaction History Dashboard**: Visual breakdown of Buyer Representation (14 deals · $8.75M) vs. Seller Representation (2 deals · $1.46M).
- **Areas Alex Knows**: 6 photographic neighborhood discovery cards (Carson, Gardena, Manchester Square, Central Lancaster, Vermont-Slauson, West Carson).
- **Advisory Services**: 6 tailored practice areas for buyers, sellers, and investors.
- **South Bay Mortgage Calculator**: Real-time monthly payment estimator with California property tax (~1.2%), insurance, and PMI calculations.
- **Yelp Social Proof & Client Reviews**: 5.0-star rating verified reviews from Khadijah B. and Leah T.
- **Frequently Asked Questions**: Accessible accordion answering client questions.
- **Lead Capture & Direct Contact**: Validated contact form with immediate feedback, mailto fallback, and one-tap calling to `(323) 915-1693`.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 with custom glassmorphism utilities
- **Icons**: Lucide React
- **Mapping**: Leaflet + OpenStreetMap (CARTO Voyager tiles)
- **Typography**: Manrope, Plus Jakarta Sans, Inter

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ or Bun

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

---

## 🌐 Deployment to Hostinger

### Method 1: Hostinger Static Web Hosting / File Manager
1. Run `npm run build` locally or in your CI workflow.
2. Log in to your **Hostinger hPanel**.
3. Go to **Websites** > **Manage** > **File Manager**.
4. Open the `public_html` directory of your domain.
5. Upload the entire contents of the `dist/` folder into `public_html` (so `index.html` resides at `public_html/index.html`).

### Method 2: Git Deployment via Hostinger
1. Push this repository to GitHub.
2. In Hostinger hPanel, navigate to **Advanced** > **GIT**.
3. Connect your repository branch (`main`).
4. Set the deployment directory to your domain root and configure auto-deployment.

---

## 📄 License & Compliance

- **CalDRE License**: #02079279
- **Brokerage**: Keller Williams Realty South Bay (23670 Hawthorne Blvd, Suite 100, Torrance, CA 90505)
- **Fair Housing**: Equal Housing Opportunity compliant.

# Project structure

This map is the source of truth for finding pages and understanding ownership.
The current route locations are intentionally preserved so existing URLs,
bookmarks, SEO entries, and imports continue to work.

## Top-level folders

| Folder | Purpose |
| --- | --- |
| `src/app/` | Public pages, layouts, metadata, and backend route handlers |
| `src/data/` | Local fallback/static data used by pages |
| `components/` | Reusable UI and feature components |
| `public/` | Images, icons, PDFs, sitemap, and crawler files |
| `docs/` | Architecture and maintenance documentation |

## Public page groups

### Home and company

| URL | Source | Purpose |
| --- | --- | --- |
| `/` | `src/app/page.js` | Homepage |
| `/about` | `src/app/about/page.js` | Company overview |
| `/team` | `src/app/team/page.js` | Team members |
| `/contact` | `src/app/contact/page.js` | Contact and support |
| `/blog` | `src/app/blog/page.js` | Blog listing |
| `/blog/[slug]` | `src/app/blog/[slug]/page.js` | Individual blog article |

### Payments and utilities

| URL | Source | Purpose |
| --- | --- | --- |
| `/recharge` | `src/app/recharge/page.js` | Recharge overview |
| `/bill-payments` | `src/app/bill-payments/page.js` | BBPS/payment overview |
| `/bbps` | `src/app/bbps/page.js` | Bharat Bill Payment System |
| `/financial-payments` | `src/app/financial-payments/page.js` | Financial payment categories |
| `/service-payment/[service]` | `src/app/service-payment/[service]/page.js` | Shared form and information page for every supported payment service |
| `/credit-card` | `src/app/credit-card/page.js` | Credit-card products |
| `/fastag` | `src/app/fastag/page.js` | FASTag information |

The dynamic `service-payment` route owns mobile, DTH, utilities, FASTag,
insurance premiums, vehicle-insurance premiums, loans, municipal payments,
gift cards, donations, and other supported bill categories. Add new payment
services to its `services` configuration instead of creating duplicate pages.

### Banking and merchant services

| URL | Source | Purpose |
| --- | --- | --- |
| `/aeps` | `src/app/aeps/page.js` | Aadhaar Enabled Payment System |
| `/dmt` | `src/app/dmt/page.js` | Domestic money transfer |
| `/matm` | `src/app/matm/page.js` | Micro ATM |
| `/merchant` | `src/app/merchant/page.js` | Merchant services |

### Loans and tools

| URL | Source | Purpose |
| --- | --- | --- |
| `/instant-loan` | `src/app/instant-loan/page.js` | Loan overview |
| `/loan/personal-loan` | `src/app/loan/personal-loan/page.js` | Personal loans |
| `/loan/home-loan` | `src/app/loan/home-loan/page.js` | Home loans |
| `/loan/car-loan` | `src/app/loan/car-loan/page.js` | Car loans |
| `/loan/business-loan` | `src/app/loan/business-loan/page.js` | Business loans |
| `/loan/construction-equipment-loan` | `src/app/loan/construction-equipment-loan/page.js` | Equipment loans |
| `/loan-emi` | `src/app/loan-emi/page.js` | EMI calculator |
| `/income-calc` | `src/app/income-calc/page.js` | Income calculator |
| `/free-credit-score` | `src/app/free-credit-score/page.js` | Credit-score experience |

### Insurance

| URL | Source | Purpose |
| --- | --- | --- |
| `/insurance` | `src/app/insurance/page.js` | Insurance overview |
| `/insurance/car-insurance` | `src/app/insurance/car-insurance/page.js` | Car insurance information |
| `/insurance/bike-insurance` | `src/app/insurance/bike-insurance/page.js` | Bike insurance information |
| `/insurance/taxi-insurance` | `src/app/insurance/taxi-insurance/page.js` | Taxi insurance information |
| `/insurance/commercial-vehicle` | `src/app/insurance/commercial-vehicle/page.js` | Commercial vehicle insurance information |

Premium-payment forms live under `/service-payment/`, while these routes are
product-information pages.

### PAN services

All PAN routes live together under `src/app/pan-card/`. The parent
`src/app/pan-card/page.js` is the overview; its child folders cover new PAN,
correction, address update, reprint, documents, instructions, guidelines, and
foreign-applicant guidance.

### Account

| URL | Source | Purpose |
| --- | --- | --- |
| `/login` | `src/app/login/page.js` | Login |
| `/signup` | `src/app/signup/page.js` | Registration and KYC |
| `/profile` | `src/app/profile/page.js` | Direct profile fallback; normal access uses the header drawer |

### Legal

| URL | Source |
| --- | --- |
| `/privacy-policy` | `src/app/privacy-policy/page.js` |
| `/terms-of-use` | `src/app/terms-of-use/page.js` |
| `/refund-policy` | `src/app/refund-policy/page.js` |
| `/charge-back-policy` | `src/app/charge-back-policy/page.js` |
| `/kyc-policy` | `src/app/kyc-policy/page.js` |

### Travel

| URL | Source | Purpose |
| --- | --- | --- |
| `/booking` | `src/app/booking/page.js` | Travel booking |

`animated-hero-preview`, `recharge-bills-preview`, and `travel-preview` are
homepage modules that are currently also addressable as routes. Treat them as
homepage-owned modules; do not add business logic to them.

## API groups

| Folder | Responsibility |
| --- | --- |
| `src/app/api/auth/` | Login, registration, session, logout, and OTP |
| `src/app/api/kyc/` | Aadhaar, email, and PAN verification |
| `src/app/api/blogs/` | Blog CMS proxy |
| `src/app/api/team/` | Team CMS proxy |
| `src/app/api/chat/` | Support chatbot endpoint |

API handlers keep secrets server-side. Client components should call the local
`/api/...` endpoint and must not call protected upstream services directly.

## Naming rules for new work

1. Use lowercase kebab-case for route and asset folders.
2. Use PascalCase for React component filenames.
3. Put a component in a feature folder when it is used by one domain.
4. Keep truly shared sections at the `components/` root until a shared folder
   migration is performed as a separately tested change.
5. Avoid spaces in new folder names.
6. Add every new route to this document and the sitemap when applicable.

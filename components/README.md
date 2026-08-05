# Component map

## Feature folders

| Folder | Ownership |
| --- | --- |
| `About/` | About-page data and sections |
| `auth/` | Login, signup, OTP, and KYC forms |
| `bbps/` | BBPS-specific sections |
| `Bike Insurance/` | Shared vehicle-insurance sections (legacy folder name) |
| `layout/` | Header, footer, site shell, and support chatbot |
| `merchant/` | Merchant-page sections |
| `Pancard/` | PAN instruction, document, and guideline components |
| `payments/` | Dynamic service-payment form, navigation, animation, and information |
| `Reprint/` | PAN reprint guidance |
| `SEO/` | Dynamic SEO helpers |

## Root components

Root-level components are legacy shared/page sections. Find consumers before
editing or moving one:

```bash
rg "ComponentName" src components
```

Broad ownership prefixes:

- `Home*` — homepage sections.
- `Loan*`, `EMICal2`, `Eligibility`, `DocumentsRequired*` — loans.
- `Insurance*`, `GetInsurance`, `Carinsurancebanner` — insurance.
- `Pan*`, `Pancard*`, `ReprintOfPANCard` — PAN services.
- `Aeps*` — AePS.
- `Credit*`, `CardGrid` — credit cards and credit score.
- `Booking*`, `Travel*`, `PromotionSlider` — travel.
- `Service*`, `Benefits*`, `PartnersSection`, `ContactBanner`,
  `TestimonialSlider` — shared sections used across several pages.

## Placement rule

- One domain only: place the component in that domain folder.
- Used by multiple domains: keep it shared and use a descriptive name.
- Page route/layout: keep it in `src/app/`, not here.
- Static content only: prefer `src/data/` over a component file.

The legacy folder names and root files remain in place until each feature can be
migrated with its imports and a full production build in one focused change.
This avoids breaking the currently working website during a broad rename.

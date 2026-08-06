import Image from "next/image";
import Link from "next/link";
import { Gauge, Mail, ShieldCheck } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Blog", "/blog"],
  ["Contact Us", "/contact"],
  ["Team Members", "/team"],
];

const navigationLinks = [
  {
    title: "Recharge & Bills",
    links: [
      ["Mobile Recharge", "/service-payment/mobile"],
      ["DTH Recharge", "/service-payment/dth"],
      ["FASTag Recharge", "/service-payment/fastag"],
      ["Electricity Bill", "/service-payment/electricity"],
      ["BBPS Services", "/bbps"],
    ],
  },
  {
    title: "Bookings",
    links: [
      ["Booking Overview", "/booking"],
      ["Bus Booking", "/service-payment/bus-booking"],
      ["Train Booking", "/service-payment/train-booking"],
      ["Flight Booking", "/service-payment/flight-booking"],
      ["Hotel Booking", "/service-payment/hotel-booking"],
    ],
  },
  {
    title: "Financial Services",
    links: [
      ["Financial Payments", "/financial-payments"],
      ["Credit Card Bill", "/service-payment/credit-card-bill"],
      ["PAN Card", "/pan-card"],
      ["Insurance Premium", "/service-payment/insurance"],
      ["Free Credit Score", "/free-credit-score"],
    ],
  },
  {
    title: "Loans",
    links: [
      ["Loan Overview", "/loan"],
      ["Instant Loan", "/instant-loan"],
      ["Personal Loan", "/loan/personal-loan"],
      ["Home Loan", "/loan/home-loan"],
      ["Car Loan", "/loan/car-loan"],
      ["Business Loan", "/loan/business-loan"],
      ["Construction Equipment Loan", "/loan/construction-equipment-loan"],
    ],
  },
  {
    title: "Insurance",
    links: [
      ["Insurance Overview", "/insurance"],
      ["Bike Insurance", "/insurance/bike-insurance"],
      ["Car Insurance", "/insurance/car-insurance"],
      ["Commercial Vehicle", "/insurance/commercial-vehicle"],
      ["Taxi Insurance", "/insurance/taxi-insurance"],
      ["Pay Insurance Premium", "/service-payment/insurance"],
    ],
  },
];

const legalLinks = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms of Use", "/terms-of-use"],
  ["Cancellation & Refund Policy", "/refund-policy"],
  ["Chargeback Policy", "/charge-back-policy"],
  ["KYC Policy", "/kyc-policy"],
];

const socialLinks = [
  [
    FaFacebookF,
    "https://www.facebook.com/share/19EmpVPPdL/",
    "Facebook",
    "bg-[#1877f2]",
  ],
  [FaYoutube, "https://www.youtube.com/@Save_Dost", "YouTube", "bg-[#ff0000]"],
  [
    FaInstagram,
    "https://www.instagram.com/savedost_?igsh=MTVmYWRmZWFxOG03eQ==",
    "Instagram",
    "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]",
  ],
  [FaXTwitter, "https://x.com/SaveDost_", "X", "bg-black"],
];

function FooterHeading({ children, centered = false }) {
  return (
    <h3
      className={`mb-5 text-xs font-bold uppercase tracking-wide text-[#0C3D4C] ${centered ? "text-center" : ""}`}
    >
      {children}
      <span className={`mt-2 block h-0.5 w-8 bg-[#018EDE] ${centered ? "mx-auto" : ""}`} />
    </h3>
  );
}

export default function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="border-t border-[#c7e3ea] bg-[#eaf6f9] text-[#0C3D4C]"
    >
      <div className="mx-auto max-w-7xl px-5 pb-7 pt-0 sm:px-6 lg:pt-3 lg:pb-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.15fr_1.15fr] lg:gap-0">
          <section className="lg:pr-8 pt-0">
            <Link href="/" className="inline-flex flex-col items-start gap-1" aria-label="SaveDost home">
              <Image
                src="/image/SaveDost logo.png"
                alt="SaveDost Logo"
                width={1686}
                height={933}
                className="h-auto  w-50 object-contain sm:w-36"
                priority
              />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#315f6d]">
                Powered by FinUnique
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-xs leading-5 text-[#456b76]">
              Making everyday digital payments and financial services simple, secure and accessible
              for users across India.
            </p>
            <div className="mt-5 space-y-3 text-xs text-[#315f6d]">
              <a
                href="mailto:support@savedost.com"
                className="flex items-center gap-2 transition hover:text-[#00a8e8]"
              >
                <Mail size={14} /> support@savedost.com
              </a>
            </div>
          </section>

          <section className="border-[#c7e3ea] lg:border-l lg:px-8">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-3 text-xs">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#315f6d] transition hover:text-[#00a8e8]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-[#c7e3ea] lg:border-l lg:px-8">
            <FooterHeading>Tools</FooterHeading>
            <ul className="space-y-4 text-xs">
              <li>
                <Link
                  href="/free-credit-score"
                  className="flex items-center gap-2 text-[#315f6d] transition hover:text-[#00a8e8]"
                >
                  <Gauge size={14} /> Free Credit Score
                </Link>
              </li>
              <li>
                <Link
                  href="/loan-emi"
                  className="flex items-center gap-2 whitespace-nowrap text-[#315f6d] transition hover:text-[#00a8e8]"
                >
                  <Gauge size={14} className="shrink-0" /> Loan EMI Calculator
                </Link>
              </li>
            </ul>
          </section>

          <section className="border-[#c7e3ea] lg:border-l lg:px-8">
            <FooterHeading>Company</FooterHeading>
            <p className="text-xs leading-5 text-[#456b76]">
              SaveDost, powered by FinUnique, is a trusted digital services platform that helps
              users across India access recharges, bill payments, travel bookings and essential
              financial services securely and conveniently.
            </p>
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-[#c7e3ea]">
              <ShieldCheck size={30} className="shrink-0 text-[#00a8e8]" />
              <p className="text-xs font-medium leading-5">
                Trusted by 3,50,000+ customers across India
              </p>
            </div>
          </section>

          <section className="space-y-4 lg:pl-8">
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-[#c7e3ea]">
              <FooterHeading centered>Verified &amp; Secure</FooterHeading>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/home/pci-logo.png"
                  width={82}
                  height={52}
                  alt="PCI DSS compliant"
                  className="h-12 w-auto rounded bg-white p-1 object-contain"
                />
                <Image
                  src="/home/iso-logo.png"
                  width={82}
                  height={52}
                  alt="ISO certified"
                  className="h-12 w-auto rounded bg-white p-1 object-contain"
                />
              </div>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-[#c7e3ea]">
              <FooterHeading centered>Follow Us</FooterHeading>
              <div className="flex flex-nowrap items-center justify-center gap-2.5">
                {socialLinks.map(([Icon, href, label, color]) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm text-white transition hover:-translate-y-0.5 ${color}`}
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>

        <nav
          className="mt-10 grid gap-7 border-t border-[#c7e3ea] pt-9 sm:grid-cols-2 lg:grid-cols-5"
          aria-label="Footer services navigation"
        >
          {navigationLinks.map((group) => (
            <section key={group.title}>
              <FooterHeading>{group.title}</FooterHeading>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-3 text-xs">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-[#315f6d] transition hover:text-[#00a8e8]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <div className="border-t border-[#c7e3ea] bg-white/45">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-center text-[11px] text-[#456b76] sm:px-6 lg:flex-row lg:text-left">
          <p>
            &copy; {new Date().getFullYear()} SaveDost. Powered by Finunique Small Private Limited.
            All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-3 gap-y-2">
            {legalLinks.map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                className={`transition hover:text-[#00a8e8] ${index < legalLinks.length - 1 ? "after:ml-3 after:text-[#9bb9c2] after:content-['|']" : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

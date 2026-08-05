"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, CheckCircle2, Download, LockKeyhole, X } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { getClientSession } from "./auth/sessionClient";

const cards = [
  {
    id: 1,
    image: "/credit/cc1.png",
    bank: "Axis Bank",
    title: "ACE Credit Card",
    type: "Credit Card",
    highlights: "A rewards-focused Axis Bank card option for eligible applicants",
    benefit: "Review current ACE rewards, fees and eligibility directly with Axis Bank",
    idealFor: "Everyday digital payments and eligible reward categories",
    details: [
      "Axis Bank ACE card artwork",
      "Contactless Visa Signature card",
      "Issuer-defined reward programme",
    ],
    compare: [
      "Joining and annual fees",
      "Eligible cashback categories",
      "Reward and fee-waiver rules",
    ],
  },
  {
    id: 2,
    image: "/credit/cc2.png",
    bank: "ICICI Bank",
    title: "Coral+ International Debit Card",
    type: "Debit Card",
    highlights: "An ICICI Bank international debit-card option linked to an eligible bank account",
    benefit: "Issuance and features depend on the associated ICICI Bank account",
    idealFor: "Account-linked domestic and eligible international payments",
    details: [
      "ICICI Bank Coral+ artwork",
      "International debit card",
      "Account and issuer-defined privileges",
    ],
    compare: ["Account eligibility", "Annual card charges", "International usage and markup terms"],
  },
  {
    id: 3,
    image: "/credit/cc3.png",
    bank: "HDFC Bank",
    title: "EasyShop Platinum Debit Card",
    type: "Debit Card",
    highlights: "An HDFC Bank EasyShop Platinum option for eligible account holders",
    benefit: "Features depend on the selected HDFC Bank account and current terms",
    idealFor: "Account-linked shopping and everyday payments",
    details: [
      "HDFC Bank EasyShop Platinum artwork",
      "International debit card",
      "Issuer-defined account benefits",
    ],
    compare: ["Account requirements", "Transaction and annual limits", "Applicable card charges"],
  },
  {
    id: 4,
    image: "/credit/cc4.png",
    bank: "Bank of Baroda",
    title: "Premier Card",
    type: "Card Option",
    highlights: "A Bank of Baroda Premier option subject to the bank’s current product terms",
    benefit: "Confirm the exact card variant, eligibility and benefits with Bank of Baroda",
    idealFor: "Eligible customers seeking a premium Bank of Baroda card",
    details: [
      "Bank of Baroda Premier artwork",
      "Contactless card design",
      "Bank-defined privileges and limits",
    ],
    compare: ["Exact card variant", "Fees and transaction limits", "Current premium benefits"],
  },
  {
    id: 5,
    image: "/credit/cc5.png",
    bank: "AU Small Finance Bank",
    title: "Altura Visa Platinum Credit Card",
    type: "Credit Card",
    highlights: "An AU Bank Altura credit-card option for eligible applicants",
    benefit: "Review current Altura rewards, fees and eligibility before applying",
    idealFor: "Everyday purchases and eligible AU Bank card offers",
    details: [
      "AU Bank Altura artwork",
      "Visa Platinum credit card",
      "Issuer-defined rewards and benefits",
    ],
    compare: [
      "Joining and renewal fees",
      "Reward earning and redemption",
      "Interest and late-payment charges",
    ],
  },
  {
    id: 6,
    image: "/credit/cc6.png",
    bank: "Punjab National Bank",
    title: "Women Power Savings Platinum Debit Card",
    type: "Debit Card",
    highlights: "A PNB RuPay Platinum card associated with the Women Power Savings account",
    benefit: "Availability and features depend on PNB account eligibility and current terms",
    idealFor: "Eligible PNB Women Power Savings account holders",
    details: [
      "PNB Women Power Savings artwork",
      "RuPay Platinum debit card",
      "Account-linked card facilities",
    ],
    compare: ["Savings-account eligibility", "Card limits and charges", "Current RuPay benefits"],
  },
];

const typicalEligibility = [
  "Age and location under issuer policy",
  "Stable and verifiable income",
  "Acceptable credit history and existing obligations",
];
const typicalDocuments = [
  "PAN and accepted identity proof",
  "Current address proof",
  "Income or employment documents requested by the issuer",
];

function CreditCardItem({ card, onDetails, onApply }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#d7e9ed] bg-white shadow-[0_10px_26px_rgba(12,61,76,0.07)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(12,61,76,0.12)]">
      <div className="flex min-h-[310px] items-center justify-center bg-[radial-gradient(circle_at_center,#ffffff,#e1f3f7)] p-6">
        <Image
          src={card.image}
          alt={`${card.bank} ${card.title}`}
          width={300}
          height={190}
          className="h-auto w-[260px] rotate-90 object-contain drop-shadow-[0_18px_20px_rgba(12,61,76,.2)] transition duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#e3f4f7] px-3 py-1 text-xs font-bold text-[#027f9f]">
            {card.type}
          </span>
          <span className="text-sm font-extrabold text-[#0C3D4C]">{card.bank}</span>
        </div>
        <h3 className="mt-4 text-xl font-extrabold text-[#0C3D4C]">{card.title}</h3>
        <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-600">
          <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#0297bd]" />
          {card.highlights}
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-500">{card.benefit}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onApply(card)}
            className="inline-flex items-center gap-2 rounded-xl bg-[#026381] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
          >
            Apply <ArrowRight size={16} />
          </button>
          <button
            type="button"
            onClick={() => onDetails(card)}
            className="rounded-xl border border-[#b9dce4] px-5 py-3 text-sm font-bold text-[#026381] transition hover:bg-[#eef8fa]"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}

export default function CardGrid() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    const continueApply = new URLSearchParams(window.location.search).get("apply") === "1";
    if (!continueApply) return;
    getClientSession().then((session) => {
      if (session?.authenticated) {
        setShowDownload(true);
        window.history.replaceState({}, "", "/credit-card#credit-cards");
      }
    });
  }, []);

  useEffect(() => {
    if (!selectedCard && !showDownload) return undefined;
    const close = (event) => {
      if (event.key === "Escape") {
        setSelectedCard(null);
        setShowDownload(false);
      }
    };
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [selectedCard, showDownload]);

  const applyForCard = async (card) => {
    const session = await getClientSession({ force: true });
    if (!session?.authenticated) {
      const returnTo = `/credit-card?apply=1&card=${card.id}#credit-cards`;
      window.location.href = `/login?returnTo=${encodeURIComponent(returnTo)}`;
      return;
    }
    setShowDownload(true);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <style jsx global>{`
        .finunique-detail-scroll {
          scrollbar-width: thin;
          scrollbar-color: #0289ad #e8f5f7;
        }
        .finunique-detail-scroll::-webkit-scrollbar {
          width: 7px;
        }
        .finunique-detail-scroll::-webkit-scrollbar-track {
          background: #f1f8fa;
          border-radius: 999px;
          margin-block: 14px;
        }
        .finunique-detail-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00a8e8, #026381);
          border: 1px solid #f1f8fa;
          border-radius: 999px;
        }
        .finunique-detail-scroll::-webkit-scrollbar-button,
        .finunique-detail-scroll::-webkit-scrollbar-button:single-button {
          display: none;
          width: 0;
          height: 0;
        }
        .finunique-detail-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #0289ad, #0c3d4c);
        }
      `}</style>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
          Explore Cards
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
          Popular bank-card options
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Compare the credit and debit card artwork shown below, then confirm current fees,
          eligibility, account requirements and benefits directly with the issuing bank.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <CreditCardItem
            key={card.id}
            card={card}
            onDetails={setSelectedCard}
            onApply={applyForCard}
          />
        ))}
      </div>

      {selectedCard &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[1100] flex items-center justify-center bg-[#102c37]/75 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="card-details-title"
            onMouseDown={(event) => event.target === event.currentTarget && setSelectedCard(null)}
          >
            <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-[#cce4e9] bg-white p-3 shadow-[0_28px_80px_rgba(0,0,0,.3)]">
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                aria-label="Close card details"
                className="absolute right-7 top-7 z-20 grid h-9 w-9 place-items-center rounded-full bg-white text-slate-600 shadow-md"
              >
                <X size={18} />
              </button>
              <div className="finunique-detail-scroll grid max-h-[calc(92vh-24px)] overflow-y-auto overflow-x-hidden rounded-2xl bg-white lg:grid-cols-[360px_1fr]">
                <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,#fff,#dff3f7)] p-8 lg:min-h-full">
                  <span className="absolute left-6 top-6 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#026381] shadow-sm">
                    Card preview
                  </span>
                  <Image
                    src={selectedCard.image}
                    alt={`${selectedCard.bank} ${selectedCard.title}`}
                    width={320}
                    height={205}
                    className="w-[280px] rotate-90 object-contain drop-shadow-[0_22px_25px_rgba(12,61,76,.25)]"
                  />
                  <div className="mt-12 w-full rounded-2xl border border-white/80 bg-white/70 p-4 backdrop-blur">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#0289ad]">
                      Best suited for
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[#315a67]">
                      {selectedCard.idealFor}
                    </p>
                  </div>
                </div>
                <div className="p-6 sm:p-9">
                  <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#0289ad]">
                    {selectedCard.bank}
                  </p>
                  <h2
                    id="card-details-title"
                    className="mt-2 pr-10 text-2xl font-extrabold text-[#0C3D4C]"
                  >
                    {selectedCard.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{selectedCard.benefit}</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <DetailList title="Key features" items={selectedCard.details} tone="blue" />
                    <DetailList
                      title="Compare before applying"
                      items={selectedCard.compare}
                      tone="green"
                    />
                    <DetailList
                      title="Typical eligibility"
                      items={typicalEligibility}
                      tone="green"
                    />
                    <DetailList title="Documents to prepare" items={typicalDocuments} tone="blue" />
                  </div>
                  <p className="mt-5 rounded-xl border border-[#d8e9ed] bg-[#f3f8fa] p-4 text-xs leading-5 text-slate-500">
                    This is a product overview, not a guaranteed offer. Final fees, credit limit,
                    eligibility, rewards and approval are determined by the issuing bank. Review the
                    issuer’s current key-fact statement and terms before applying.
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {showDownload &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[1100] flex items-center justify-center bg-[#102c37]/75 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="card-app-title"
            onMouseDown={(event) => event.target === event.currentTarget && setShowDownload(false)}
          >
            <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 text-center shadow-[0_28px_80px_rgba(0,0,0,.3)] sm:p-9">
              <button
                type="button"
                onClick={() => setShowDownload(false)}
                aria-label="Close app download"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-600"
              >
                <X size={18} />
              </button>
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#e4f5f8] text-[#026381]">
                <Download size={30} />
              </span>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[.16em] text-[#0289ad]">
                Continue securely
              </p>
              <h2 id="card-app-title" className="mt-2 text-2xl font-extrabold text-[#0C3D4C]">
                Apply through the SaveDost app
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                You are signed in. Download or open the app to continue the credit-card application
                journey.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="https://apps.apple.com/in/app/finunique/id6760808229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-left text-white"
                >
                  <FaApple size={25} />
                  <span>
                    <span className="block text-[9px] leading-none">Download on the</span>
                    <span className="mt-1 block text-sm font-bold leading-none">App Store</span>
                  </span>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.utility.finunique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-left text-slate-900"
                >
                  <Image src="/image/playstorelogo.png" alt="" width={25} height={25} />
                  <span>
                    <span className="block text-[9px] leading-none">GET IT ON</span>
                    <span className="mt-1 block text-sm font-bold leading-none">Google Play</span>
                  </span>
                </Link>
              </div>
              <p className="mt-5 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <LockKeyhole size={13} /> Secure signed-in application journey
              </p>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

function DetailList({ title, items, tone }) {
  const green = tone === "green";
  return (
    <section
      className={`rounded-2xl border p-4 ${green ? "border-[#d6e8c9] bg-[#f4faef]" : "border-[#d5e9ed] bg-[#f3fafb]"}`}
    >
      <h3
        className={`text-xs font-extrabold uppercase tracking-wider ${green ? "text-[#57932d]" : "text-[#027f9f]"}`}
      >
        {title}
      </h3>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-xs leading-5 text-slate-600">
            <CheckCircle2
              size={15}
              className={`mt-0.5 shrink-0 ${green ? "text-[#69a83d]" : "text-[#0297bd]"}`}
            />{" "}
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

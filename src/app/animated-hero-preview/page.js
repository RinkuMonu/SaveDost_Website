"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  Bolt,
  Bus,
  CreditCard,
  Flame,
  Headphones,
  Play,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Users,
  Wifi,
} from "lucide-react";

const services = [
  { icon: Smartphone, label: "Mobile Recharge", className: "service-mobile" },
  { icon: Wifi, label: "Broadband Bill", className: "service-broadband" },
  { icon: Bolt, label: "Electricity Bill", className: "service-electricity" },
  { icon: CreditCard, label: "Credit Card", className: "service-card" },
  { icon: ShieldCheck, label: "Insurance", className: "service-insurance" },
  { icon: Flame, label: "Gas Booking", className: "service-gas" },
];

export default function AnimatedHeroPreview() {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [stylesReady, setStylesReady] = useState(false);

  useEffect(() => {
    setStylesReady(true);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    // The mobile hero is taller than the viewport, so an intersection ratio based on the
    // entire section can fail to reach the desktop threshold on short phone screens.
    if (window.matchMedia("(max-width: 650px)").matches) {
      setHeroVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), {
      threshold: 0.15,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const header = document.querySelector("body > header");
    if (!header) return undefined;
    const previous = {
      position: header.style.position,
      inset: header.style.inset,
      width: header.style.width,
      transform: header.style.transform,
      transition: header.style.transition,
      willChange: header.style.willChange,
    };
    header.style.position = "fixed";
    header.style.inset = "0 0 auto 0";
    header.style.width = "100%";
    header.style.transition = "transform 420ms cubic-bezier(.22,1,.36,1)";
    header.style.willChange = "transform";
    const update = () => {
      header.style.transform = window.scrollY > 90 ? "translateY(0)" : "translateY(-110%)";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      Object.assign(header.style, previous);
    };
  }, []);

  return (
    <main
      ref={heroRef}
      className="preview-hero"
      style={{
        visibility: stylesReady ? "visible" : "hidden",
        opacity: stylesReady ? 1 : 0,
        transition: "opacity 180ms ease",
      }}
    >
      <div className="preview-grid" aria-hidden="true" />
      <div className="preview-glow preview-glow-one" aria-hidden="true" />
      <div className="preview-glow preview-glow-two" aria-hidden="true" />
      <Link href="/" className="hero-corner-brand" aria-label="SaveDost home">
        <Image
          src="/image/SaveDost logo.png"
          alt="SaveDost"
          width={1686}
          height={933}
          priority
        />
      </Link>

      <div className="preview-layout">
        <section className="preview-copy">
          <div className="preview-pill">
            <span>✦</span> One platform. Everyday possibilities.
          </div>
          <h1>
            <span className="reveal-line line-one">Payments</span>
            <span className="reveal-line line-two">
              made <em>simple.</em>
            </span>
          </h1>
          <p className="preview-description">
            Recharge, pay bills, access financial services, and manage everyday needs through one
            trusted digital platform.
          </p>
          <div className="preview-actions">
            <button
              type="button"
              className="preview-primary"
              onClick={() =>
                document
                  .querySelector(".preview-hero")
                  ?.nextElementSibling?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Explore SaveDost <ArrowRight size={18} />
            </button>
            <Link
              href="https://www.youtube.com/@finuniques"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-watch"
            >
              <span>
                <Play size={15} fill="currentColor" />
              </span>{" "}
              Watch how it works
            </Link>
          </div>

          <div className="trust-strip">
            <div>
              <Users />
              <p>
                <strong>3.5 Lakh+</strong>
                <span>Happy users</span>
              </p>
            </div>
            <div>
              <ShieldCheck />
              <p>
                <strong>99.99%</strong>
                <span>Secure payments</span>
              </p>
            </div>
            <div>
              <Bolt />
              <p>
                <strong>50+</strong>
                <span>Services</span>
              </p>
            </div>
            <div>
              <Headphones />
              <p>
                <strong>24×7</strong>
                <span>Support</span>
              </p>
            </div>
          </div>
        </section>

        <section
          className={`visual-stage ${heroVisible ? "hero-visible" : ""}`}
          aria-label="SaveDost mobile application preview"
        >
          <div className="visual-halo" aria-hidden="true" />
          <div className="orbit orbit-a" aria-hidden="true" />
          <div className="orbit orbit-b" aria-hidden="true" />
          <div className="status-bubble rupee-bubble" aria-hidden="true">
            <BadgeIndianRupee />
          </div>
          <div className="status-bubble secure-bubble" aria-hidden="true">
            <ShieldCheck />
          </div>
          <span className="stage-dot dot-one" aria-hidden="true" />
          <span className="stage-dot dot-two" aria-hidden="true" />
          <span className="stage-dot dot-three" aria-hidden="true" />

          {services.map(({ icon: Icon, label, className }, index) => (
            <div
              key={label}
              className={`floating-service ${className}`}
              style={{ "--delay": `${index * -0.7}s` }}
            >
              <span>
                <Icon size={19} />
              </span>
              <strong>{label}</strong>
            </div>
          ))}

          <div className="phone-shadow" aria-hidden="true" />
          <div className="phone-wrap">
            <div className="phone-frame">
              <div className="phone-speaker" />
              <div className="phone-screen">
                <div className="app-topline">
                  <span>9:41</span>
                  <span>● ● ●</span>
                </div>
                <div className="app-brand">
                  <Image
                    src="/image/SaveDost logo.png"
                    alt="SaveDost"
                    width={1686}
                    height={933}
                  />
                  <span>◉</span>
                </div>
                <p className="app-greeting">Hello, User 👋</p>
                <p className="app-welcome">Welcome back!</p>
                <div className="balance-card">
                  <small>Total Balance</small>
                  <strong>₹12,450.75</strong>
                  <div>
                    <button>+ Add Money</button>
                    <span>View history ›</span>
                  </div>
                </div>
                <h3>Popular Services</h3>
                <div className="app-services">
                  <div>
                    <Smartphone />
                    <span>Mobile</span>
                  </div>
                  <div>
                    <ReceiptText />
                    <span>DTH</span>
                  </div>
                  <div>
                    <Bolt />
                    <span>Electricity</span>
                  </div>
                  <div>
                    <Wifi />
                    <span>FASTag</span>
                  </div>
                  <div>
                    <Flame />
                    <span>Gas</span>
                  </div>
                  <div>
                    <CreditCard />
                    <span>Cards</span>
                  </div>
                  <div>
                    <ShieldCheck />
                    <span>Insurance</span>
                  </div>
                  <div>
                    <Bus />
                    <span>Booking</span>
                  </div>
                </div>
                <div className="refer-card">
                  <div>
                    <b>Refer &amp; Earn</b>
                    <span>Invite friends and earn rewards</span>
                  </div>
                  <span className="gift">🎁</span>
                </div>
                <div className="app-nav">
                  <span>
                    ⌂<small>Home</small>
                  </span>
                  <span>
                    ⇄<small>History</small>
                  </span>
                  <span className="scan">▣</span>
                  <span>
                    ▦<small>Services</small>
                  </span>
                  <span>
                    ○<small>Profile</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="scroll-cue">
        <span>↓</span>
        <small>Scroll down</small>
      </div>

      <style jsx global>{`
        .preview-hero {
          position: relative;
          isolation: isolate;
          min-height: 100svh;
          overflow: hidden;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #fbfefe 0%, #f2fafb 52%, #e7f7fa 100%);
          color: #0c3d4c;
          padding: 64px 5vw 72px;
        }
        .preview-hero,
        .preview-hero *,
        .preview-hero *::before,
        .preview-hero *::after {
          box-sizing: border-box;
        }
        .hero-corner-brand {
          position: absolute;
          z-index: 10;
          left: 5vw;
          top: 24px;
          display: flex;
          align-items: center;
          gap: 11px;
          color: #0c3d4c;
          opacity: 0;
          transform: translateY(18px);
          animation: previewRise 0.65s ease 0.05s forwards;
        }
        .hero-corner-brand img {
          width: 180px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 8px 15px rgba(12, 61, 76, 0.12));
        }
        .hero-corner-brand span,
        .hero-corner-brand strong,
        .hero-corner-brand small {
          display: block;
        }
        .hero-corner-brand strong {
          font-size: 18px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.025em;
        }
        .hero-corner-brand small {
          margin-top: 4px;
          color: #56808a;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .preview-grid {
          position: absolute;
          inset: 38% -12% -38%;
          z-index: -4;
          background-image:
            linear-gradient(rgba(43, 115, 224, 0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(43, 115, 224, 0.09) 1px, transparent 1px);
          background-size: 62px 62px;
          transform: perspective(600px) rotateX(58deg);
          mask-image: linear-gradient(to bottom, transparent, #000 30%, transparent);
          animation: previewGrid 14s linear infinite;
        }
        .preview-glow {
          position: absolute;
          z-index: -5;
          border-radius: 50%;
          filter: blur(4px);
          animation: previewDrift 7s ease-in-out infinite alternate;
        }
        .preview-glow-one {
          width: 520px;
          height: 520px;
          right: 5%;
          top: 4%;
          background: radial-gradient(circle, rgba(0, 168, 232, 0.2), transparent 68%);
        }
        .preview-glow-two {
          width: 430px;
          height: 430px;
          left: -12%;
          bottom: -20%;
          background: radial-gradient(circle, rgba(12, 61, 76, 0.1), transparent 68%);
        }
        .preview-layout {
          width: min(1420px, 100%);
          margin: auto;
          display: grid;
          grid-template-columns: 0.88fr 1.12fr;
          align-items: center;
          gap: 28px;
        }
        .preview-copy {
          position: relative;
          z-index: 3;
        }
        .preview-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 16px;
          border: 1px solid #b8dff5;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.78);
          color: #17427c;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          box-shadow: 0 8px 25px rgba(25, 73, 132, 0.06);
          opacity: 0;
          animation: previewRise 0.6s ease 0.2s forwards;
        }
        .preview-pill span {
          color: #1688ef;
        }
        .preview-copy h1 {
          margin: 24px 0 0;
          font-size: clamp(3.4rem, 6vw, 6.5rem);
          line-height: 0.92;
          letter-spacing: -0.065em;
          font-weight: 900;
        }
        .reveal-line {
          display: block;
          opacity: 0;
          transform: translateY(80%);
          animation: previewWord 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .line-one {
          animation-delay: 0.35s;
        }
        .line-two {
          animation-delay: 0.58s;
        }
        .reveal-line em {
          font-style: normal;
          color: transparent;
          background: linear-gradient(100deg, #018ede, #00a8e8, #45b99d);
          background-clip: text;
          -webkit-background-clip: text;
          background-size: 180% auto;
          animation: previewShimmer 3s linear infinite;
        }
        .preview-description {
          max-width: 590px;
          margin-top: 24px;
          color: #56737a;
          font-size: clamp(1rem, 1.35vw, 1.16rem);
          line-height: 1.8;
          opacity: 0;
          animation: previewRise 0.75s ease 0.9s forwards;
        }
        .preview-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
          opacity: 0;
          animation: previewRise 0.75s ease 1.12s forwards;
        }
        .preview-primary,
        .preview-watch {
          min-height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-radius: 12px;
          padding: 0 24px;
          font-size: 14px;
          font-weight: 850;
          white-space: nowrap;
          transition: 0.25s;
        }
        .preview-primary {
          color: white;
          background: linear-gradient(110deg, #00a8e8 0%, #026381 52%, #0c3d4c 100%);
          box-shadow: 0 14px 28px rgba(12, 61, 76, 0.22);
          background-size: 150% 100%;
        }
        .preview-primary:hover {
          transform: translateY(-3px);
          background-position: 100% 0;
          box-shadow: 0 18px 34px rgba(12, 61, 76, 0.28);
        }
        .preview-watch {
          border: 1px solid #c7dfe4;
          background: rgba(255, 255, 255, 0.82);
          color: #0c3d4c;
        }
        .preview-watch span {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border: 1px solid #b8d7dd;
          border-radius: 50%;
          color: #0289ad;
        }
        .preview-watch:hover {
          transform: translateY(-3px);
          background: white;
        }
        .trust-strip {
          width: min(660px, 100%);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 54px;
          padding: 18px 22px;
          border: 1px solid #dbe8f4;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.88);
          box-shadow: 0 18px 45px rgba(45, 93, 148, 0.12);
          opacity: 0;
          animation: previewRise 0.75s ease 1.38s forwards;
        }
        .trust-strip > div {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-right: 1px solid #dbe6f0;
        }
        .trust-strip > div:last-child {
          border: 0;
        }
        .trust-strip svg {
          width: 25px;
          color: #158be5;
        }
        .trust-strip > div:nth-child(2) svg,
        .trust-strip > div:nth-child(4) svg {
          color: #54c94a;
        }
        .trust-strip p,
        .trust-strip strong,
        .trust-strip span {
          display: block;
          margin: 0;
        }
        .trust-strip strong {
          font-size: 16px;
        }
        .trust-strip span {
          margin-top: 2px;
          color: #718199;
          font-size: 9px;
        }
        .visual-stage {
          position: relative;
          height: min(710px, 78svh);
          min-height: 590px;
        }
        .visual-halo {
          position: absolute;
          left: 50%;
          top: 48%;
          width: 520px;
          height: 520px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(75, 190, 255, 0.2),
            rgba(111, 225, 194, 0.08) 46%,
            transparent 70%
          );
          filter: blur(2px);
          animation: haloPulse 4s ease-in-out infinite alternate;
        }
        .orbit {
          position: absolute;
          left: 7%;
          right: 3%;
          border: 1.5px dashed rgba(42, 136, 230, 0.28);
          border-radius: 50%;
          transform: rotate(-7deg);
        }
        .orbit::before,
        .orbit::after {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #55a9ee;
          box-shadow: 0 0 0 5px rgba(85, 169, 238, 0.1);
        }
        .orbit::before {
          left: 12%;
          top: 18%;
        }
        .orbit::after {
          right: 13%;
          bottom: 17%;
        }
        .orbit-a {
          top: 20%;
          height: 210px;
        }
        .orbit-b {
          top: 48%;
          height: 190px;
          transform: rotate(7deg);
        }
        .status-bubble {
          position: absolute;
          z-index: 4;
          display: grid;
          place-items: center;
          width: 50px;
          height: 50px;
          border: 7px solid rgba(255, 255, 255, 0.72);
          border-radius: 50%;
          background: white;
          color: #168ae4;
          box-shadow: 0 14px 32px rgba(36, 92, 150, 0.18);
          animation: bubbleFloat 3.5s ease-in-out infinite alternate;
        }
        .status-bubble svg {
          width: 20px;
        }
        .rupee-bubble {
          left: 25%;
          top: 3%;
          color: #16a982;
        }
        .secure-bubble {
          right: 2%;
          bottom: 29%;
          animation-delay: -1.6s;
        }
        .stage-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          filter: blur(0.5px);
          animation: dotPulse 2.4s ease-in-out infinite;
        }
        .dot-one {
          left: 5%;
          top: 27%;
          background: #28caa0;
        }
        .dot-two {
          right: 5%;
          top: 25%;
          background: #76d94f;
          animation-delay: -0.8s;
        }
        .dot-three {
          right: 13%;
          bottom: 8%;
          background: #3e94f5;
          animation-delay: -1.5s;
        }
        .phone-shadow {
          position: absolute;
          width: 370px;
          height: 92px;
          left: 53%;
          bottom: 2%;
          transform: translateX(-50%) rotate(-7deg);
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(25, 61, 111, 0.32), transparent 67%);
          filter: blur(20px);
        }
        .phone-wrap {
          position: absolute;
          left: 52%;
          top: 48%;
          transform: translate(-50%, -50%) rotate(8deg);
          animation:
            phoneEnter 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both,
            phoneFloat 5s ease-in-out 1.5s infinite alternate;
        }
        .phone-frame {
          position: relative;
          width: 310px;
          height: 625px;
          padding: 12px;
          border: 5px solid #e0e7ef;
          border-radius: 48px;
          background: linear-gradient(135deg, #fff, #bdcad8);
          box-shadow:
            18px 24px 45px rgba(32, 70, 120, 0.22),
            -8px -8px 28px rgba(255, 255, 255, 0.9),
            inset 0 0 0 2px white;
        }
        .phone-frame::after {
          content: "";
          position: absolute;
          inset: 7px;
          border-radius: 38px;
          pointer-events: none;
          box-shadow: inset 3px 0 5px rgba(255, 255, 255, 0.85);
        }
        .phone-speaker {
          position: absolute;
          z-index: 3;
          top: 18px;
          left: 50%;
          width: 88px;
          height: 22px;
          transform: translateX(-50%);
          border-radius: 20px;
          background: #0d2548;
        }
        .phone-screen {
          position: relative;
          height: 100%;
          overflow: hidden;
          border-radius: 34px;
          background: #f7faff;
          padding: 20px 17px 12px;
          color: #11294c;
        }
        .app-topline {
          display: flex;
          justify-content: space-between;
          font-size: 8px;
          font-weight: 900;
        }
        .app-brand {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 11px;
          font-size: 11px;
        }
        .app-brand img {
          width: 82px;
          height: auto;
          object-fit: contain;
        }
        .app-brand > span {
          margin-left: auto;
        }
        .app-greeting {
          margin: 13px 0 0;
          font-size: 15px;
          font-weight: 900;
        }
        .app-welcome {
          margin: 2px 0 10px;
          color: #7d8ca2;
          font-size: 8px;
        }
        .balance-card {
          padding: 15px;
          border-radius: 15px;
          background: linear-gradient(135deg, #092c60, #051a43);
          color: white;
          box-shadow: 0 12px 25px rgba(4, 28, 70, 0.18);
        }
        .balance-card small {
          font-size: 8px;
          opacity: 0.75;
        }
        .balance-card strong {
          display: block;
          margin-top: 4px;
          font-size: 22px;
        }
        .balance-card div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 12px;
          font-size: 7px;
        }
        .balance-card button {
          border: 0;
          border-radius: 7px;
          padding: 6px 8px;
          background: white;
          color: #0c2b58;
          font-size: 7px;
          font-weight: 800;
        }
        .phone-screen h3 {
          margin: 15px 0 9px;
          font-size: 10px;
        }
        .app-services {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 11px 6px;
          text-align: center;
        }
        .app-services div {
          display: grid;
          justify-items: center;
          gap: 4px;
          color: #284a7b;
          font-size: 7px;
        }
        .app-services svg {
          width: 17px;
          height: 17px;
          color: #188fe3;
        }
        .refer-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 15px;
          padding: 11px 13px;
          border-radius: 12px;
          background: linear-gradient(100deg, #e8f2ff, #eef8ff);
        }
        .refer-card b,
        .refer-card span {
          display: block;
        }
        .refer-card b {
          font-size: 9px;
        }
        .refer-card div span {
          margin-top: 3px;
          color: #6f8098;
          font-size: 6px;
        }
        .gift {
          font-size: 28px;
        }
        .app-nav {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          align-items: center;
          padding: 9px 8px;
          background: white;
          border-top: 1px solid #e6edf5;
          text-align: center;
          font-size: 12px;
        }
        .app-nav span {
          display: grid;
          justify-items: center;
        }
        .app-nav small {
          font-size: 5px;
        }
        .app-nav .scan {
          width: 34px;
          height: 34px;
          margin: auto;
          place-items: center;
          border-radius: 50%;
          background: #092d61;
          color: white;
        }
        .floating-service {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 9px;
          width: 145px;
          padding: 12px;
          border: 1px solid #d8e6f3;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 16px 35px rgba(43, 85, 133, 0.13);
          color: #16355f;
          font-size: 10px;
          animation: serviceFloat 4s ease-in-out var(--delay) infinite alternate;
        }
        .floating-service span {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          flex: none;
          border-radius: 10px;
          background: #e9f5ff;
          color: #1689e8;
        }
        .service-mobile {
          left: 5%;
          top: 9%;
        }
        .service-broadband {
          right: 1%;
          top: 13%;
        }
        .service-electricity {
          left: 2%;
          top: 36%;
        }
        .service-card {
          left: 4%;
          bottom: 14%;
        }
        .service-insurance {
          right: 0;
          top: 39%;
        }
        .service-gas {
          right: 4%;
          bottom: 15%;
        }
        .scroll-cue {
          position: absolute;
          bottom: 13px;
          left: 50%;
          display: grid;
          justify-items: center;
          gap: 4px;
          color: #7b8da5;
          font-size: 8px;
        }
        .scroll-cue span {
          display: grid;
          place-items: center;
          width: 26px;
          height: 38px;
          border: 1px solid #ccd9e8;
          border-radius: 18px;
          background: white;
          animation: scrollBounce 1.7s ease infinite;
        }
        @keyframes previewRise {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes previewWord {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes previewShimmer {
          to {
            background-position: -180% center;
          }
        }
        @keyframes previewGrid {
          to {
            background-position: 62px 62px;
          }
        }
        @keyframes previewDrift {
          to {
            transform: translate(38px, 25px) scale(1.08);
          }
        }
        @keyframes phoneEnter {
          from {
            opacity: 0;
            transform: translate(-48%, -42%) rotate(18deg) scale(0.72);
            filter: blur(12px);
          }
        }
        @keyframes phoneFloat {
          to {
            transform: translate(-50%, calc(-50% - 13px)) rotate(6deg);
          }
        }
        @keyframes serviceFloat {
          to {
            transform: translateY(-12px);
          }
        }
        @keyframes scrollBounce {
          50% {
            transform: translateY(5px);
          }
        }
        @keyframes haloPulse {
          to {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.72;
          }
        }
        @keyframes bubbleFloat {
          to {
            transform: translateY(-12px) rotate(5deg);
          }
        }
        @keyframes dotPulse {
          50% {
            transform: scale(1.8);
            opacity: 0.35;
          }
        }
        .phone-wrap {
          opacity: 0;
          animation: none;
          transform: translate(-48%, -42%) rotate(18deg) scale(0.72);
          filter: blur(12px);
        }
        .visual-stage.hero-visible .phone-wrap {
          animation:
            phoneZoomIn 1.15s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both,
            phoneGentleFloat 5s ease-in-out 1.35s infinite alternate;
        }
        @keyframes phoneZoomIn {
          from {
            opacity: 0;
            transform: translate(-48%, -42%) rotate(18deg) scale(0.72);
            filter: blur(12px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(8deg) scale(1);
            filter: blur(0);
          }
        }
        @keyframes phoneGentleFloat {
          from {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(8deg) scale(1);
            filter: blur(0);
          }
          to {
            opacity: 1;
            transform: translate(-50%, calc(-50% - 13px)) rotate(6deg) scale(1);
            filter: blur(0);
          }
        }
        .preview-pill,
        .preview-description,
        .preview-actions,
        .trust-strip {
          transform: translateY(22px);
        }
        @media (min-width: 1051px) and (max-height: 850px) {
          .preview-hero {
            height: 100svh;
            min-height: 650px;
            padding: 24px 5vw 34px;
          }
          .preview-copy h1 {
            margin-top: 16px;
            font-size: clamp(3rem, 5.2vw, 5.15rem);
          }
          .preview-pill {
            padding: 7px 14px;
            font-size: 9px;
          }
          .preview-description {
            margin-top: 16px;
            font-size: 1rem;
            line-height: 1.65;
          }
          .preview-actions {
            margin-top: 20px;
          }
          .preview-primary,
          .preview-watch {
            min-height: 48px;
            padding: 0 20px;
          }
          .trust-strip {
            margin-top: 27px;
            padding: 12px 16px;
          }
          .visual-stage {
            height: 560px;
            min-height: 520px;
            transform: scale(0.84);
            transform-origin: center;
          }
          .scroll-cue {
            bottom: 6px;
          }
        }
        @media (max-width: 1050px) {
          .preview-layout {
            min-width: 0;
            grid-template-columns: minmax(0, 1fr);
          }
          .preview-copy {
            min-width: 0;
            text-align: center;
          }
          .preview-description,
          .trust-strip {
            margin-left: auto;
            margin-right: auto;
          }
          .preview-actions {
            justify-content: center;
          }
          .visual-stage {
            height: 650px;
          }
          .preview-copy h1 {
            font-size: clamp(3.5rem, 11vw, 6rem);
          }
        }
        @media (max-width: 650px) {
          .preview-hero {
            min-height: auto;
            display: block;
            padding: 106px 16px 28px;
          }
          .hero-corner-brand {
            left: 18px;
            top: 18px;
            gap: 9px;
          }
          .hero-corner-brand img {
            width: 155px;
            height: auto;
          }
          .hero-corner-brand strong {
            font-size: 17px;
          }
          .preview-layout {
            left: auto;
            width: calc(100vw - 32px);
            max-width: calc(100vw - 32px);
            margin: 0;
            gap: 16px;
          }
          .preview-copy {
            width: calc(100vw - 32px);
            max-width: calc(100vw - 32px);
            overflow: hidden;
          }
          .preview-pill {
            max-width: 100%;
            gap: 7px;
            padding: 8px 11px;
            font-size: 8px;
            letter-spacing: 0.095em;
            white-space: nowrap;
          }
          .preview-copy h1 {
            width: 100%;
            margin-top: 18px;
            font-size: clamp(2.75rem, 13vw, 3.5rem);
            line-height: 0.94;
            letter-spacing: -0.055em;
          }
          .reveal-line {
            width: 100%;
            white-space: normal;
          }
          .preview-description {
            width: 100%;
            max-width: 340px;
            margin-top: 18px;
            font-size: 14px;
            line-height: 1.65;
          }
          .preview-actions {
            display: grid;
            width: 100%;
            max-width: 340px;
            margin: 22px auto 0;
            gap: 10px;
          }
          .preview-primary,
          .preview-watch {
            width: 100%;
            min-height: 50px;
            padding: 0 18px;
            border-radius: 13px;
            font-size: 13px;
          }
          .trust-strip {
            width: 100%;
            max-width: 358px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0;
            margin-top: 30px;
            padding: 8px;
            border-radius: 18px;
          }
          .trust-strip > div {
            min-width: 0;
            justify-content: flex-start;
            gap: 9px;
            padding: 11px 10px;
            border: 0;
          }
          .trust-strip > div:nth-child(odd) {
            border-right: 1px solid #e3edf5;
          }
          .trust-strip > div:nth-child(-n + 2) {
            border-bottom: 1px solid #e3edf5;
          }
          .trust-strip svg {
            width: 21px;
            height: 21px;
            flex: none;
          }
          .trust-strip strong {
            font-size: 14px;
          }
          .trust-strip span {
            font-size: 8px;
          }
          .visual-stage {
            width: 100%;
            height: 430px;
            min-height: 430px;
            margin: 0;
            transform: none;
          }
          .visual-halo {
            top: 54%;
            width: 330px;
            height: 330px;
          }
          .orbit {
            left: 2%;
            right: 2%;
          }
          .orbit-a {
            top: 28%;
            height: 125px;
          }
          .orbit-b {
            top: 55%;
            height: 115px;
          }
          .phone-wrap {
            left: 50%;
            top: 56%;
          }
          .visual-stage.hero-visible .phone-wrap {
            animation:
              phoneZoomInMobile 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both,
              phoneGentleFloatMobile 5s ease-in-out 1.3s infinite alternate;
          }
          .phone-frame {
            width: 238px;
            height: 480px;
            padding: 9px;
            border-width: 4px;
            border-radius: 38px;
          }
          .phone-frame::after {
            inset: 5px;
            border-radius: 30px;
          }
          .phone-screen {
            border-radius: 27px;
            padding: 16px 13px 10px;
          }
          .phone-speaker {
            top: 14px;
            width: 68px;
            height: 17px;
          }
          .floating-service {
            display: none;
          }
          .status-bubble {
            width: 40px;
            height: 40px;
            border-width: 5px;
          }
          .status-bubble svg {
            width: 17px;
          }
          .rupee-bubble {
            left: 7%;
            top: 20%;
          }
          .secure-bubble {
            right: 5%;
            bottom: 18%;
          }
          .phone-shadow {
            left: 50%;
            bottom: 0;
            width: 270px;
            height: 70px;
          }
          .scroll-cue {
            display: none;
          }
        }
        @keyframes phoneZoomInMobile {
          from {
            opacity: 0;
            transform: translate(-50%, -44%) rotate(10deg) scale(0.78);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(4deg) scale(1);
            filter: blur(0);
          }
        }
        @keyframes phoneGentleFloatMobile {
          from {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(4deg);
          }
          to {
            opacity: 1;
            transform: translate(-50%, calc(-50% - 8px)) rotate(2deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .preview-hero * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </main>
  );
}

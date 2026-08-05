import {
  BadgeCheck,
  Bolt,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Eye,
  Headphones,
  Heart,
  Lightbulb,
  ListChecks,
  LockKeyhole,
  MonitorSmartphone,
  RadioTower,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

export const statistics = [
  { icon: RefreshCcw, value: 10, suffix: " Lakh+", label: "Total Users" },
  { icon: Users, value: 3.5, suffix: " Lakh+", label: "Happy Users", decimals: 1 },
  { icon: MonitorSmartphone, value: 50, suffix: "+", label: "Digital Services" },
  { icon: Clock3, value: 99.9, suffix: "%", label: "Platform Availability", decimals: 1 },
];

export const services = [
  {
    icon: Smartphone,
    title: "Mobile Recharge",
    text: "Quick prepaid and postpaid mobile recharge services.",
    href: "/service-payment/mobile",
  },
  {
    icon: ReceiptText,
    title: "Utility Bill Payments",
    text: "Pay electricity, water, broadband and other essential bills.",
    href: "/bill-payments",
  },
  {
    icon: RadioTower,
    title: "DTH Recharge",
    text: "Recharge popular DTH providers through a simple process.",
    href: "/service-payment/dth",
  },
  {
    icon: CreditCard,
    title: "Credit Card Payments",
    text: "Manage supported credit card bill payments securely.",
    href: "/service-payment/credit-card",
  },
  {
    icon: BadgeCheck,
    title: "Insurance Payments",
    text: "Complete supported insurance premium payments conveniently.",
    href: "/insurance",
  },
  {
    icon: WalletCards,
    title: "Digital Payment Services",
    text: "Access reliable digital payment and transaction services.",
    href: "/financial-payments",
  },
];

export const benefits = [
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    text: "Modern security practices help protect user information and payment activity.",
  },
  {
    icon: MonitorSmartphone,
    title: "Easy-to-Use Platform",
    text: "Simple screens and clear steps make digital payments easier for everyone.",
  },
  {
    icon: ListChecks,
    title: "Multiple Services",
    text: "Access different payment and recharge services from a single platform.",
  },
  {
    icon: Zap,
    title: "Fast Payment Processing",
    text: "Complete supported transactions through a smooth and efficient process.",
  },
  {
    icon: Eye,
    title: "Transparent Experience",
    text: "Clear payment details, transaction updates and service information.",
  },
  {
    icon: Headphones,
    title: "Reliable Customer Support",
    text: "Get assistance whenever you face an issue while using the platform.",
  },
];

export const securityPoints = [
  { icon: LockKeyhole, text: "Secure data handling" },
  { icon: ShieldCheck, text: "Transaction monitoring" },
  { icon: CheckCircle2, text: "Protected payment experience" },
  { icon: ReceiptText, text: "Clear transaction records" },
];

export const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Trust",
    text: "We aim to build confidence through secure and transparent services.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Simplicity",
    text: "We remove unnecessary complexity from everyday financial tasks.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Innovation",
    text: "We continuously improve our platform and digital experiences.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Customer First",
    text: "Every feature should solve a meaningful customer need.",
  },
];

export const journey = [
  { title: "The Idea", text: "Identified the need for simpler digital financial services." },
  { title: "Platform Development", text: "Designed a secure and user-friendly fintech platform." },
  { title: "Service Expansion", text: "Added recharge, utility and payment-related services." },
  { title: "Growing Together", text: "Continuing to improve with users, partners and technology." },
];

export const faqs = [
  {
    question: "What is SaveDost?",
    answer:
      "SaveDost is a fintech platform that brings supported recharge, utility payment and everyday financial services together in one place.",
  },
  {
    question: "Which services are available on SaveDost?",
    answer:
      "Available services include mobile and DTH recharge, utility bill payments, credit card payments, insurance-related services and other supported digital payment services.",
  },
  {
    question: "Is SaveDost secure?",
    answer:
      "SaveDost uses secure account access and responsible technology practices designed to protect user information and payment activity.",
  },
  {
    question: "How can I check my transaction status?",
    answer:
      "After a supported transaction, review the confirmation shown on screen and any status information available in your account. Contact support if the status remains unclear.",
  },
  {
    question: "What should I do if a payment fails?",
    answer:
      "Do not immediately repeat the payment. First check your bank or payment method, note the transaction reference, and contact SaveDost support if the amount was deducted.",
  },
  {
    question: "How can I contact SaveDost support?",
    answer:
      "Visit the Contact Us page to find the current support details and send your question to the SaveDost team.",
  },
];

export const missionVision = [
  {
    icon: Target,
    eyebrow: "Our Mission",
    title: "Make digital finance easier to use",
    text: "To simplify digital finance by delivering secure, transparent and user-friendly payment experiences for individuals and businesses.",
  },
  {
    icon: CircleDollarSign,
    eyebrow: "Our Vision",
    title: "Useful financial access for every user",
    text: "To become a trusted digital finance platform that makes essential financial services accessible to every user.",
  },
];

export const storyPoints = [
  "Simple digital experiences",
  "Secure payment technology",
  "Services designed for everyday users",
];

export const decorativeIcons = [Bolt, CreditCard];

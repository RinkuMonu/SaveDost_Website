import PaymentServiceNavigation from "../../../../components/payments/PaymentServiceNavigation";
import ServiceProviderSelector from "../../../../components/ServiceProviderSelector";
import ServicePaymentForm from "../../../../components/payments/ServicePaymentForm";
import ServiceInformation from "../../../../components/payments/ServiceInformation";
import ServicePaymentIntro from "../../../../components/payments/ServicePaymentIntro";
import ServiceOffers from "../../../../components/payments/ServiceOffers";
import ScrollReveal from "../../../../components/ScrollReveal";
import {
  BadgeIndianRupee,
  CarFront,
  CircleEllipsis,
  Droplets,
  Fuel,
  Gift,
  Hotel,
  Landmark,
  Lightbulb,
  PlaneTakeoff,
  Router,
  SatelliteDish,
  ShieldCheck,
  Smartphone,
  TrainFront,
  BusFront,
} from "lucide-react";

const services = [
  {
    slug: "mobile",
    label: "Mobile",
    icon: Smartphone,
    title: "Recharge or Pay Mobile Bill",
    fields: ["Mobile Number", "Operator", "Amount"],
    action: "Proceed to Recharge",
    modes: ["Prepaid", "Postpaid"],
  },
  {
    slug: "fastag",
    label: "FASTag Recharge",
    icon: CarFront,
    title: "Recharge Your FASTag",
    fields: ["Vehicle Registration Number", "FASTag Issuer Bank", "Amount"],
    action: "Proceed to Recharge",
  },
  {
    slug: "dth",
    label: "DTH Recharge",
    icon: SatelliteDish,
    title: "Recharge Your DTH",
    fields: ["Subscriber ID", "DTH Operator", "Amount"],
    action: "Proceed to Recharge",
  },
  {
    slug: "electricity",
    label: "Electricity Bill",
    icon: Lightbulb,
    title: "Pay Electricity Bill",
    fields: ["State", "Electricity Board", "Consumer Number"],
    action: "Fetch Bill",
  },
  {
    slug: "loan-emi",
    label: "Loan EMI",
    icon: BadgeIndianRupee,
    title: "Pay Loan EMI",
    fields: ["Lender", "Loan Account Number", "Mobile Number"],
    action: "Fetch EMI",
  },
  {
    slug: "insurance",
    label: "Insurance / LIC",
    icon: ShieldCheck,
    title: "Pay Insurance Premium",
    fields: ["Insurance Provider", "Policy Number", "Date of Birth"],
    action: "Fetch Premium",
  },
  {
    slug: "piped-gas",
    label: "Piped Gas Bill",
    icon: Fuel,
    title: "Pay Piped Gas Bill",
    fields: ["Gas Provider", "Consumer Number", "Mobile Number"],
    action: "Fetch Bill",
  },
  {
    slug: "cylinder",
    label: "Book a Cylinder",
    icon: Fuel,
    title: "Book LPG Cylinder",
    fields: ["LPG Provider", "Consumer ID", "Mobile Number"],
    action: "Proceed to Booking",
  },
  {
    slug: "water",
    label: "Water",
    icon: Droplets,
    title: "Pay Water Bill",
    fields: ["Water Board", "Consumer Number", "Mobile Number"],
    action: "Fetch Bill",
  },
  {
    slug: "broadband",
    label: "Broadband/Landline",
    icon: Router,
    title: "Pay Broadband or Landline Bill",
    fields: ["Provider", "Account Number", "Mobile Number"],
    action: "Fetch Bill",
  },
  {
    slug: "challan",
    label: "Challan",
    icon: Landmark,
    title: "Pay Traffic Challan",
    fields: ["Vehicle Number", "Chassis Number", "Mobile Number"],
    action: "Fetch Challan",
  },
  {
    slug: "more",
    label: "More",
    icon: CircleEllipsis,
    title: "Explore More Services",
    fields: ["Select Service", "Customer ID", "Mobile Number"],
    action: "Continue",
  },
  {
    slug: "nps",
    title: "Make NPS Contribution",
    fields: ["PRAN Number", "Date of Birth", "Contribution Amount"],
    action: "Proceed to Pay",
  },
  {
    slug: "cable-tv",
    title: "Pay Cable TV Bill",
    fields: ["Cable Operator", "Subscriber ID", "Amount"],
    action: "Proceed to Pay",
  },
  {
    slug: "prepaid-meter",
    title: "Recharge Prepaid Meter",
    fields: ["Electricity Board", "Meter Number", "Amount"],
    action: "Proceed to Recharge",
  },
  {
    slug: "credit-card-bill",
    title: "Pay Credit Card Bill",
    fields: ["Card Issuer", "Credit Card Number", "Amount"],
    action: "Proceed to Pay",
  },
  {
    slug: "recurring-deposit",
    title: "Pay Recurring Deposit",
    fields: ["Bank or Institution", "RD Account Number", "Amount"],
    action: "Proceed to Pay",
  },
  {
    slug: "rental-payment",
    title: "Make Rental Payment",
    fields: ["Tenant Name", "Landlord Mobile Number", "Amount"],
    action: "Proceed to Pay",
  },
  {
    slug: "subscription",
    title: "Pay Subscription",
    fields: ["Subscription Provider", "Customer ID", "Amount"],
    action: "Proceed to Pay",
  },
  {
    slug: "education-fees",
    title: "Pay Education Fees",
    fields: ["Institution", "Student ID", "Amount"],
    action: "Proceed to Pay",
  },
  {
    slug: "ncmc",
    title: "Recharge NCMC Card",
    fields: ["Card Issuer", "NCMC Card Number", "Amount"],
    action: "Proceed to Recharge",
  },
  {
    slug: "housing-society",
    title: "Pay Housing Society Charges",
    fields: ["Housing Society", "Flat or Member ID", "Amount"],
    action: "Proceed to Pay",
  },
  {
    slug: "club-fees",
    title: "Pay Club or Association Fees",
    fields: ["Club or Association", "Membership ID", "Amount"],
    action: "Proceed to Pay",
  },
  {
    slug: "municipal",
    title: "Pay Municipal Bill",
    fields: ["Municipality", "Property or Consumer ID", "Mobile Number"],
    action: "Fetch Bill",
  },
  {
    slug: "donation",
    title: "Make a Donation",
    fields: ["Organisation", "Donor Name", "Amount"],
    action: "Proceed to Donate",
  },
  {
    slug: "gift-card",
    label: "Gift Cards",
    icon: Gift,
    title: "Buy a Gift Card",
    fields: ["Gift Card Brand", "Recipient Mobile or Email", "Amount"],
    action: "Proceed to Buy",
  },
  {
    slug: "car-insurance",
    label: "Car Insurance",
    icon: CarFront,
    title: "Pay Car Insurance Premium",
    fields: ["Insurance Provider", "Vehicle Registration Number", "Policy Number"],
    action: "Fetch Premium",
  },
  {
    slug: "bike-insurance",
    label: "Bike Insurance",
    icon: CarFront,
    title: "Pay Bike Insurance Premium",
    fields: ["Insurance Provider", "Vehicle Registration Number", "Policy Number"],
    action: "Fetch Premium",
  },
  {
    slug: "taxi-insurance",
    label: "Taxi Insurance",
    icon: CarFront,
    title: "Pay Taxi Insurance Premium",
    fields: ["Insurance Provider", "Taxi Registration Number", "Policy Number"],
    action: "Fetch Premium",
  },
  {
    slug: "commercial-vehicle-insurance",
    label: "Commercial Vehicle Insurance",
    icon: CarFront,
    title: "Pay Commercial Vehicle Insurance Premium",
    fields: ["Insurance Provider", "Vehicle Registration Number", "Policy Number"],
    action: "Fetch Premium",
  },
  {
    slug: "bus-booking",
    label: "Bus Booking",
    icon: BusFront,
    title: "Book a Bus Ticket",
    fields: ["Departure City", "Destination City", "Travel Date"],
    action: "Search Buses",
  },
  {
    slug: "train-booking",
    label: "Train Booking",
    icon: TrainFront,
    title: "Book a Train Ticket",
    fields: ["Departure Station", "Destination Station", "Travel Date"],
    action: "Search Trains",
  },
  {
    slug: "flight-booking",
    label: "Flight Booking",
    icon: PlaneTakeoff,
    title: "Book a Flight Ticket",
    fields: ["Departure Airport or City", "Destination Airport or City", "Travel Date"],
    action: "Search Flights",
  },
  {
    slug: "hotel-booking",
    label: "Hotel Booking",
    icon: Hotel,
    title: "Book a Hotel Stay",
    fields: ["Destination", "Check-in Date", "Check-out Date"],
    action: "Search Hotels",
  },
];

const remainingServices = [
  "Mobile Postpaid",
  "Prepaid Meter",
  "Cable TV",
  "Landline Postpaid",
  "Credit Card Bill",
  "Recurring Deposit",
  "Rental Payment",
  "Subscription Payment",
  "Education Fees",
  "NPS Contribution",
  "NCMC Recharge",
  "Housing Society",
  "Clubs & Association Fees",
  "Municipal Services",
  "Municipal Taxes",
  "Donation",
  "Gift Card",
  "Car Insurance",
  "Bike Insurance",
  "Taxi Insurance",
  "Commercial Vehicle Insurance",
  "Bus Booking",
  "Train Booking",
  "Flight Booking",
  "Hotel Booking",
];

export function generateStaticParams() {
  return services.map(({ slug }) => ({ service: slug }));
}

export default async function ServicePaymentPage({ params }) {
  const { service } = await params;
  const activeService = services.find((item) => item.slug === service) || services[0];

  return (
    <main className="min-h-[610px] bg-[linear-gradient(180deg,#f1f8fa_0%,#f4f7fb_28%,#f4f7fb_100%)]">
      <section className="bg-[#026381] px-4 pb-20 pt-5 text-white sm:px-6 lg:px-8">
        <PaymentServiceNavigation activeSlug={service} />
      </section>

      <section className="mx-auto -mt-14 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-[#cfe6eb] bg-[radial-gradient(circle_at_top_right,rgba(130,201,80,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(0,168,232,0.14),transparent_34%),linear-gradient(135deg,#e9f6f8,#f7fbfc)] p-4 shadow-[0_20px_55px_rgba(12,61,76,0.1)] sm:p-6 lg:grid lg:grid-cols-[450px_1fr] lg:gap-6 lg:p-7">
          <span className="pointer-events-none absolute left-[42%] top-8 h-3 w-3 rounded-full bg-[#82c950]" />
          <span className="pointer-events-none absolute bottom-10 right-[4%] h-5 w-5 rounded-full border-4 border-[#00a8e8]/30" />
          <ScrollReveal direction="left" className="relative z-10">
            <ServicePaymentForm
              slug={activeService.slug}
              title={activeService.title}
              fields={activeService.fields}
              action={activeService.action}
              modes={activeService.modes}
              remainingServices={remainingServices}
            />
          </ScrollReveal>
          <ServicePaymentIntro
            serviceSlug={activeService.slug}
            serviceTitle={activeService.label || activeService.title}
          />
        </div>
        <ServiceProviderSelector service={service} />
        <ServiceOffers
          serviceSlug={activeService.slug}
          serviceName={activeService.label || activeService.title}
        />
        <ServiceInformation service={activeService} />
      </section>
    </main>
  );
}

import Image from "next/image";
import {
  CheckCircle2,
  FileCheck2,
  Headphones,
  LayoutGrid,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const descriptions = {
  mobile:
    "A mobile recharge adds talk time, data or plan validity to a prepaid number, while a postpaid payment clears the amount billed by the operator.",
  fastag:
    "A FASTag recharge adds balance to the tag linked with your vehicle so eligible toll payments can continue without cash.",
  dth: "A DTH recharge renews or adds balance to your television subscription using the subscriber ID registered with the operator.",
  electricity:
    "Electricity bill payment clears the amount due against a consumer connection issued by your electricity distribution company.",
  "loan-emi":
    "A loan EMI payment helps you pay an eligible instalment using the lender and loan-account details associated with the borrowing.",
  insurance:
    "An insurance premium payment keeps an eligible policy active according to the schedule and conditions set by the insurer.",
  "piped-gas":
    "A piped-gas bill records charges for gas supplied to a registered household or business connection.",
  cylinder:
    "LPG cylinder booking places a refill request against an eligible consumer account with the selected gas provider.",
  water:
    "A water bill payment clears charges raised by the supported water board or municipal utility for a consumer connection.",
  broadband:
    "Broadband and landline payments clear eligible invoices raised by supported internet and telephone service providers.",
  challan:
    "An e-challan payment clears an eligible traffic penalty associated with a vehicle after the challan details are verified.",
  more: "SaveDost brings supported recharge, bill-payment and recurring-payment categories together in one convenient service directory.",
  nps: "An NPS contribution adds an eligible voluntary amount to a National Pension System account using the subscriber's PRAN.",
  "cable-tv":
    "A cable TV payment renews or clears charges for a supported local or national cable television subscription.",
  "prepaid-meter":
    "A prepaid meter recharge purchases eligible electricity credit for a supported meter before the available balance runs out.",
  "credit-card-bill":
    "A credit-card bill payment helps clear an eligible outstanding amount for a supported card issuer.",
  "recurring-deposit":
    "A recurring-deposit payment contributes the scheduled amount to an eligible RD account with a supported institution.",
  "rental-payment":
    "A rental payment records an eligible transfer for rent using the tenant, landlord and amount details supplied.",
  subscription:
    "A subscription payment renews an eligible digital or recurring service offered by a supported provider.",
  "education-fees":
    "An education-fee payment clears an eligible amount for a supported institution using the student's registered details.",
  ncmc: "An NCMC recharge adds eligible travel value to a supported National Common Mobility Card.",
  "housing-society":
    "A housing-society payment clears eligible maintenance or member charges for a supported residential community.",
  "club-fees":
    "A club or association payment clears eligible membership charges using the member details registered with the organisation.",
  municipal:
    "A municipal payment clears an eligible civic-service or property-related bill issued by a supported local authority.",
  donation:
    "A donation payment lets a user contribute an entered amount to a supported charitable organisation.",
  "gift-card":
    "A digital gift card lets you send stored value for an eligible brand or category to a recipient using their mobile number or email address.",
  "car-insurance":
    "A car insurance premium payment helps renew an eligible motor policy associated with a private car and its registration details.",
  "bike-insurance":
    "A bike insurance premium payment helps renew an eligible motor policy associated with a two-wheeler and its registration details.",
  "taxi-insurance":
    "A taxi insurance premium payment helps renew an eligible policy for a passenger vehicle registered for commercial use.",
  "commercial-vehicle-insurance":
    "A commercial vehicle insurance premium payment helps renew an eligible policy for a goods or business vehicle.",
  "bus-booking":
    "Bus booking helps you search eligible routes by departure city, destination and travel date before choosing an available operator and seat.",
  "train-booking":
    "Train booking helps you search eligible rail journeys by station and date before reviewing available travel options.",
  "flight-booking":
    "Flight booking helps you search domestic or international journeys by origin, destination and travel date.",
  "hotel-booking":
    "Hotel booking helps you search eligible stays by destination and travel dates before reviewing available properties and rooms.",
};

const serviceImages = {
  mobile: "/image/mobile-vec.jpg",
  fastag: "/fastag/fastag-banner.jpg",
  dth: "/home/dth3d.png",
  electricity: "/image/electricity-vect.webp",
  "loan-emi": "/loan/loan53d.png",
  insurance: "/insurance/about.jpg",
  "piped-gas": "/allservices/mahanagar-gas.jpeg",
  cylinder: "/image/lpg-cylinder.jpg",
  water: "/home/water3d.png",
  broadband: "/image/broadband-vec.jpg",
  challan: "/service-providers/challan/parivahan-echallan.png",
  more: "/bbps/billpayment.png",
  nps: "/allservices/NPS_trust.jpg",
  "cable-tv": "/allservices/dishtv.webp",
  "prepaid-meter": "/home/bulb3d.png",
  "credit-card-bill": "/credit/creditcard.png",
  "recurring-deposit": "/about/Money3d.png",
  "rental-payment": "/service-providers/rental/housing.png",
  subscription: "/service-providers/subscription/netflix.svg",
  "education-fees": "/service-providers/education/delhi-university-hd.png",
  ncmc: "/icons/ncmc.png",
  "housing-society": "/service-providers/housing/mygate-hd.webp",
  "club-fees": "/service-providers/clubs/rotary.png",
  municipal: "/service-providers/municipal/jaipur-municipal.png",
  donation: "/service-providers/donation/akshaya-patra-hd.png",
  "gift-card": "/about/gift.jpg",
  "car-insurance": "/image/car-insurance.jpg",
  "bike-insurance": "/image/bike-ins-banner.JPG",
  "taxi-insurance": "/image/taxi.png",
  "commercial-vehicle-insurance": "/image/truck.png",
  "bus-booking": "/booking/bus1.png",
  "train-booking": "/booking/train1.png",
  "flight-booking": "/booking/air1.png",
  "hotel-booking": "/booking/hotel1.png",
};

const capabilities = {
  mobile: [
    ["Prepaid recharge", "Recharge an eligible prepaid number with an available operator plan."],
    [
      "Postpaid bill payment",
      "Clear an eligible postpaid mobile bill using the registered number.",
    ],
    [
      "Data and talk-time top-up",
      "Choose an available data, talk-time or validity option for the number.",
    ],
    ["Operator selection", "Review the operator and circle details before continuing."],
  ],
  fastag: [
    ["Add FASTag balance", "Recharge an eligible tag linked with your vehicle."],
    ["Choose the issuer", "Select the supported bank or FASTag issuer."],
    ["Use vehicle details", "Find the eligible tag using the registration number."],
    ["Prepare for toll travel", "Maintain sufficient balance for supported toll transactions."],
  ],
  dth: [
    ["Recharge DTH balance", "Add an entered amount to an eligible subscriber account."],
    ["Renew viewing access", "Continue an available television subscription or package."],
    ["Select your operator", "Choose the supported DTH provider connected to the account."],
    ["Use subscriber details", "Pay using the registered subscriber or customer ID."],
  ],
  electricity: [
    ["Fetch an eligible bill", "Use the consumer number to retrieve available bill details."],
    ["Choose state and board", "Select the relevant location and electricity provider."],
    ["Review the amount due", "Check the fetched customer and billing information."],
    ["Pay utility charges", "Continue with an eligible current electricity bill."],
  ],
  "loan-emi": [
    ["Find an eligible loan", "Select the supported lender and enter the loan-account details."],
    ["Fetch EMI information", "Review an available instalment before payment."],
    ["Pay a scheduled EMI", "Continue with an eligible amount due to the lender."],
    ["Keep a payment record", "Save the transaction reference after completion."],
  ],
  insurance: [
    ["Select an insurer", "Choose an available insurance or LIC provider."],
    ["Fetch premium details", "Use the policy details requested by the insurer."],
    ["Review the policy payment", "Confirm the policy holder and premium information."],
    ["Pay an eligible premium", "Continue with a premium currently accepted by the provider."],
  ],
  "piped-gas": [
    ["Choose a gas provider", "Select the supported utility serving the connection."],
    ["Fetch the gas bill", "Use the consumer number to retrieve eligible charges."],
    ["Review connection details", "Verify the customer and payable amount."],
    ["Pay an eligible bill", "Continue with the available piped-gas payment."],
  ],
  cylinder: [
    ["Choose an LPG provider", "Select the supported provider linked with the consumer account."],
    ["Use your consumer ID", "Enter the registered LPG customer details."],
    ["Request a refill", "Continue with an eligible cylinder booking request."],
    ["Keep booking details", "Save the confirmation or reference supplied after booking."],
  ],
  water: [
    ["Select a water board", "Choose the supported board or municipal water provider."],
    ["Fetch bill details", "Use the registered consumer number to retrieve an eligible bill."],
    ["Check the amount due", "Review the connection and billing information."],
    ["Pay water charges", "Continue with the supported current bill."],
  ],
  broadband: [
    ["Pay broadband bills", "Clear an eligible internet-service invoice."],
    ["Pay landline bills", "Continue with a supported telephone account payment."],
    ["Choose the provider", "Select the ISP or telecom company serving the account."],
    ["Use account details", "Fetch or pay using the registered customer number."],
  ],
  challan: [
    ["Search eligible challans", "Use the requested vehicle details to fetch available records."],
    ["Review violation details", "Check the challan and vehicle information carefully."],
    ["Pay an eligible penalty", "Continue with a challan currently available for online payment."],
    ["Save the receipt", "Keep the payment reference for future verification."],
  ],
  nps: [
    ["Use your PRAN", "Identify an eligible NPS account with the subscriber number."],
    ["Enter a contribution", "Choose the amount you want to contribute."],
    ["Verify subscriber details", "Check the information shown before payment."],
    ["Keep the reference", "Save the contribution transaction details."],
  ],
  "cable-tv": [
    ["Choose a cable operator", "Select an available provider serving your connection."],
    ["Use subscriber details", "Enter the registered customer or subscriber ID."],
    ["Pay cable charges", "Continue with an eligible bill or entered amount."],
    [
      "Maintain viewing access",
      "Keep the supported cable service active after successful payment.",
    ],
  ],
  "prepaid-meter": [
    ["Select the electricity board", "Choose the supported provider for your meter."],
    ["Identify the meter", "Enter the registered prepaid meter number."],
    ["Buy electricity credit", "Recharge with an eligible entered amount."],
    ["Retain recharge details", "Save the token or reference supplied after success."],
  ],
  "credit-card-bill": [
    ["Choose the card issuer", "Select a supported bank or card provider."],
    ["Enter card details", "Use the requested card-account information carefully."],
    ["Choose a payment amount", "Enter an eligible amount toward the outstanding bill."],
    ["Keep the reference", "Save proof of the completed payment."],
  ],
  "recurring-deposit": [
    ["Select the institution", "Choose the supported bank or deposit provider."],
    ["Identify the RD account", "Enter the registered recurring-deposit details."],
    ["Pay an instalment", "Continue with an eligible scheduled deposit amount."],
    ["Track the transaction", "Keep the payment reference for your records."],
  ],
  "rental-payment": [
    ["Enter tenant details", "Identify the person making the rental payment."],
    ["Add landlord information", "Provide the requested recipient mobile details."],
    ["Enter the rent amount", "Review the intended amount before continuing."],
    ["Save a digital record", "Keep the successful transaction reference."],
  ],
  subscription: [
    ["Select a provider", "Choose the supported subscription service."],
    ["Identify the account", "Use the registered customer or subscription ID."],
    ["Renew a subscription", "Continue with an eligible recurring-service payment."],
    ["Keep payment details", "Save the confirmation for your records."],
  ],
  "education-fees": [
    ["Choose an institution", "Select the supported school, college or education provider."],
    ["Identify the student", "Enter the requested enrolment or student ID."],
    ["Pay eligible fees", "Continue with an available institutional charge."],
    ["Retain the receipt", "Keep the transaction reference as payment evidence."],
  ],
  ncmc: [
    ["Select the card issuer", "Choose the supported NCMC provider."],
    ["Identify the card", "Enter the requested mobility-card details."],
    ["Add travel value", "Recharge with an eligible amount."],
    ["Save recharge details", "Keep the reference after a successful transaction."],
  ],
  "housing-society": [
    ["Choose the society", "Select the supported residential community."],
    ["Identify the property", "Use the registered flat or member ID."],
    ["Pay society charges", "Continue with eligible maintenance or member fees."],
    ["Maintain a record", "Save the transaction confirmation."],
  ],
  "club-fees": [
    ["Choose the organisation", "Select the supported club or association."],
    ["Identify the member", "Enter the registered membership details."],
    ["Pay eligible fees", "Continue with available membership charges."],
    ["Keep the receipt", "Save the payment reference for the organisation."],
  ],
  municipal: [
    ["Select the municipality", "Choose the supported local authority."],
    ["Identify the account", "Use the property or consumer ID requested."],
    ["Fetch available charges", "Review an eligible municipal bill or tax."],
    ["Pay civic dues", "Continue with the supported amount due."],
  ],
  donation: [
    ["Choose an organisation", "Select a supported charitable organisation."],
    ["Enter donor details", "Provide the name requested for the contribution."],
    ["Choose a donation amount", "Review the amount before continuing."],
    ["Keep the acknowledgement", "Save the transaction reference after success."],
  ],
  "gift-card": [
    [
      "Choose a gift category",
      "Explore available shopping, dining, entertainment or experience options.",
    ],
    ["Select the value", "Choose or enter an eligible gift-card amount."],
    ["Add recipient details", "Provide the mobile number or email address requested for delivery."],
    [
      "Send a digital gift",
      "Review the details and continue with the eligible gift-card purchase.",
    ],
  ],
  "car-insurance": [
    ["Choose an insurer", "Select the supported motor-insurance provider linked with the policy."],
    ["Identify the car", "Enter the private-car registration number requested by the insurer."],
    ["Fetch premium details", "Use the policy information to retrieve an eligible renewal amount."],
    ["Pay an eligible premium", "Review the policy details before continuing with payment."],
  ],
  "bike-insurance": [
    ["Choose an insurer", "Select the supported motor-insurance provider linked with the policy."],
    ["Identify the two-wheeler", "Enter the bike or scooter registration number."],
    ["Fetch premium details", "Use the policy information to retrieve an eligible renewal amount."],
    ["Pay an eligible premium", "Review the policy details before continuing with payment."],
  ],
  "taxi-insurance": [
    ["Choose an insurer", "Select the supported insurer for the commercial passenger vehicle."],
    ["Identify the taxi", "Enter the registered taxi or cab number carefully."],
    ["Fetch premium details", "Use the policy number to retrieve an eligible renewal amount."],
    ["Pay an eligible premium", "Confirm the commercial-use policy before continuing."],
  ],
  "commercial-vehicle-insurance": [
    ["Choose an insurer", "Select the supported insurer linked with the business vehicle."],
    ["Identify the vehicle", "Enter the registered goods or commercial vehicle number."],
    ["Fetch premium details", "Use the policy number to retrieve an eligible renewal amount."],
    ["Pay an eligible premium", "Check the vehicle class and policy before continuing."],
  ],
  "bus-booking": [
    [
      "Search bus routes",
      "Enter departure, destination and travel date to explore eligible journeys.",
    ],
    ["Compare available options", "Review operators, departure times and available fare choices."],
    ["Choose a seat", "Select an available seat and boarding option where supported."],
    ["Continue to booking", "Review traveller and journey details before confirming."],
  ],
  "train-booking": [
    ["Search rail journeys", "Enter departure station, destination and travel date."],
    ["Review availability", "Explore available trains, classes and schedule information."],
    ["Add traveller details", "Provide the passenger information requested for the journey."],
    ["Continue to booking", "Review the selected train and fare before confirming."],
  ],
  "flight-booking": [
    ["Search flights", "Enter origin, destination and travel date for eligible journeys."],
    ["Compare travel options", "Review available airlines, times and fare choices."],
    ["Add passenger details", "Provide the traveller information requested for the ticket."],
    ["Continue to booking", "Check the itinerary and fare conditions before confirming."],
  ],
  "hotel-booking": [
    ["Search destinations", "Enter the city and check-in/check-out dates for the stay."],
    ["Compare properties", "Review available hotels, room types and displayed prices."],
    ["Choose a room", "Select an eligible room option that suits the trip."],
    ["Continue to booking", "Check guest details and property conditions before confirming."],
  ],
  more: [
    ["Explore categories", "Browse supported recharge, utility and recurring-payment services."],
    ["Choose a provider", "Select the biller or organisation relevant to your payment."],
    ["Enter customer details", "Provide the information required for the selected category."],
    ["Continue in one app", "Use SaveDost for an eligible service request."],
  ],
};

export default function ServiceInformation({ service }) {
  const description =
    descriptions[service.slug] ||
    `This service helps you complete an eligible ${service.title.toLowerCase()} request through supported providers on SaveDost.`;
  const image = serviceImages[service.slug] || "/bbps/billpayment.png";
  const availableActions = capabilities[service.slug] || capabilities.more;

  return (
    <div className="mt-16 overflow-hidden rounded-[28px] border border-[#d9e9ec] bg-white shadow-[0_18px_45px_rgba(12,61,76,.07)]">
      <section className="grid items-center gap-10 bg-[#eef8fa] px-6 py-12 sm:px-10 lg:grid-cols-[1fr_.8fr] lg:px-14 lg:py-16">
        <ScrollReveal direction="left">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#0289ad]">
            About this service
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Understanding {service.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{description}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            SaveDost provides a clear digital journey for selecting a supported provider, entering
            the required details, reviewing the request and continuing securely.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.1} className="mx-auto w-full max-w-md">
          <div className="relative h-64 overflow-hidden sm:h-72">
            <Image
              src={image}
              alt={`${service.title} service with SaveDost`}
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-contain mix-blend-multiply"
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="border-t border-[#dcebed] bg-white px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#0289ad]">
            Service possibilities
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0C3D4C] sm:text-4xl">
            What you can do
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Explore the main actions available for {service.title.toLowerCase()} through supported
            SaveDost providers.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {availableActions.map(([title, text], index) => (
            <ScrollReveal key={title} delay={index * 0.07} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-[#dcebed] bg-[#f8fbfc] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#9bd3de] hover:shadow-[0_16px_34px_rgba(12,61,76,.09)]">
                <span className="absolute right-4 top-3 text-5xl font-black text-[#e3f1f4]">
                  0{index + 1}
                </span>
                <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-[#e5f5f8] text-[#026381]">
                  <CheckCircle2 size={20} />
                </span>
                <h3 className="relative mt-5 text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        <ScrollReveal className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#0289ad]">
            Simple process
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0C3D4C]">
            How to continue with SaveDost
          </h2>
        </ScrollReveal>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {[
            [
              Smartphone,
              "Enter service details",
              `Provide ${service.fields.map((field) => field.toLowerCase()).join(", ")} as requested.`,
            ],
            [
              FileCheck2,
              "Review carefully",
              "Confirm the provider, customer details and payable amount before proceeding.",
            ],
            [
              CheckCircle2,
              "Complete securely",
              "Continue through the SaveDost app and retain the transaction reference for your records.",
            ],
          ].map(([StepIcon, title, text], index) => (
            <ScrollReveal key={title} delay={index * 0.08} className="h-full">
              <article className="h-full rounded-2xl border border-[#dcebed] bg-[#fbfdfe] p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e5f5f8] text-[#026381]">
                  <StepIcon size={21} />
                </span>
                <p className="mt-5 text-xs font-black text-[#82b956]">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e1edef] bg-[#0C3D4C] px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-18">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#9de4ef]">
            The SaveDost advantage
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            A clearer way to manage everyday payments
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/65">
            Useful tools, supported services and helpful guidance come together in one convenient
            digital experience.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              LayoutGrid,
              "Services in one place",
              "Move between supported recharges and bill categories without a complicated journey.",
            ],
            [
              Zap,
              "Simple digital steps",
              "Clear service fields help you enter the required customer and provider information.",
            ],
            [
              RefreshCw,
              "Convenient access",
              "Use the SaveDost app to continue eligible payment requests when it suits you.",
            ],
            [
              Headphones,
              "Helpful support",
              "Reach SaveDost support when you need guidance about an account or transaction.",
            ],
          ].map(([BenefitIcon, title, text], index) => (
            <ScrollReveal key={title} delay={index * 0.07} className="h-full">
              <article className="h-full rounded-2xl border border-white/10 bg-white/7 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-[#91d05a]">
                  <BenefitIcon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-[#e1edef] px-6 py-14 sm:px-10 lg:grid-cols-[.9fr_1.1fr] lg:px-14 lg:py-16">
        <ScrollReveal direction="left">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#0289ad]">
            Before you continue
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0C3D4C]">A quick payment checklist</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            A minute spent checking the information can help prevent payments to an incorrect
            account or provider.
          </p>
        </ScrollReveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Select the correct provider or biller.",
            `Keep your ${service.fields[0].toLowerCase()} ready.`,
            "Verify the customer name and payable amount.",
            "Save the receipt or transaction reference.",
          ].map((text, index) => (
            <ScrollReveal key={text} delay={index * 0.06}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-[#dcebed] bg-[#f8fbfc] p-4 text-sm font-semibold leading-6 text-[#315a67]">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#65ae31]" /> {text}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e1edef] bg-[#f6fafb] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
        <ScrollReveal className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#0289ad]">
            Helpful answers
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0C3D4C]">
            Questions about {service.title}
          </h2>
        </ScrollReveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            [
              "What details will I need?",
              `Keep ${service.fields.map((field) => field.toLowerCase()).join(", ")} available before you begin.`,
            ],
            [
              "When is a payment complete?",
              "Treat the request as complete only after you receive a successful status and transaction reference.",
            ],
            [
              "What if the status is pending?",
              "Avoid paying again immediately. Keep the reference and contact SaveDost support if the status does not update.",
            ],
          ].map(([question, answer], index) => (
            <ScrollReveal key={question} delay={index * 0.07} className="h-full">
              <article className="h-full rounded-2xl border border-[#dcebed] bg-white p-6">
                <h3 className="font-extrabold text-[#0C3D4C]">{question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-8">
          <div className="flex flex-col gap-4 rounded-2xl bg-[#eaf7f9] p-6 sm:flex-row sm:items-center">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-[#026381]">
              <ShieldCheck size={24} />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-[#0C3D4C]">
                Protect your payment information
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Check every number before confirming, and never share an OTP, password or payment
                credential with another person.
              </p>
            </div>
            <p className="flex shrink-0 items-center gap-2 text-xs font-bold text-[#026381] sm:ml-auto">
              <LockKeyhole size={15} /> Stay secure
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

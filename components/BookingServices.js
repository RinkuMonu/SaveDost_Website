"use client";
import Image from "next/image";
import Link from "next/link";

const bookingServices = [
  {
    id: "bus-booking",
    title: "Bus Booking",
    href: "/service-payment/bus-booking",
    desc: "Explore bus services across multiple routes and operators.",
    img: "/aeps/bus.png",
    points: [
      "Multiple bus operators & routes",
      "Affordable fares with seat selection",
      "Instant booking confirmation",
      "Comfortable & hassle-free travel",
    ],
  },
  {
    id: "flight-booking",
    title: "Flight Booking",
    href: "/service-payment/flight-booking",
    desc: "Explore domestic and international flight options with ease.",
    img: "/aeps/flight-booking.png",
    points: [
      "Domestic & international flight bookings",
      "Best fare comparison across airlines",
      "Fast, safe & secure online payments",
      "Instant ticket confirmation",
    ],
  },
  {
    id: "train-booking",
    title: "Train Booking",
    href: "/service-payment/train-booking",
    desc: "Review train routes and available travel options.",
    img: "/aeps/train-booking.png",
    points: [
      "Live seat & train availability",
      "Quick and easy ticket booking",
      "PNR generation & confirmation",
      "Secure and reliable payments",
    ],
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    href: "/service-payment/hotel-booking",
    desc: "Discover hotel options across destinations and budgets.",
    img: "/aeps/hotel-booking.png",
    points: [
      "Budget to luxury hotel options",
      "Verified hotels & safe booking",
      "Easy reservations anytime",
      "Comfortable stays worldwide",
    ],
  },
];

export default function BookingServicesSection() {
  return (
    <section className="bg-[#f3f9fb] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
            Booking Categories
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Choose how you want to travel
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Explore each category and continue to SaveDost&apos;s booking platform for available
            options.
          </p>
        </div>
        <div className="space-y-6">
          {bookingServices.map((item, i) => (
            <div
              key={i}
              id={item.id}
              className="scroll-mt-24 overflow-hidden rounded-[26px] border border-[#d7e9ed] bg-white p-6 shadow-[0_10px_26px_rgba(12,61,76,0.07)] sm:p-8 lg:p-10"
            >
              <div className="mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
                {/* Image */}
                <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                  <div className="relative h-[220px] w-full overflow-hidden rounded-2xl bg-[#eaf6f9] md:h-[300px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
                    Travel Service
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold text-[#0C3D4C] md:text-4xl">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-base leading-7 text-slate-600">{item.desc}</p>

                  <ul className="mt-5 space-y-3">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0297bd]"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Link
                      href={item.href}
                      className="inline-flex rounded-xl bg-[#026381] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0C3D4C]"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

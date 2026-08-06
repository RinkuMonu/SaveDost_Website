"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BookingFeatures from "../../../components/BookingFeatures";
import PromotionSlider from "../../../components/PromotionSlider";
import ServicesSection3 from "../../../components/ServicesSection3";
import TravelAssured from "../../../components/TravelAssured";
import BenefitsSection2 from "../../../components/BenefitsSection2";
import PartnersSection from "../../../components/PartnersSection";
import TestimonialSlider from "../../../components/TestimonialSlider";
import ContactBanner from "../../../components/ContactBanner";
import BookingServicesSection from "../../../components/BookingServices";
import FAQ from "../../../components/Bike Insurance/FAQ";
import { BusFront, Hotel, Plane, TrainFront } from "lucide-react";

function Page() {
  const tabs = [
    {
      id: "airlines",
      label: "Airlines",
      icon: "/booking/ait.png",
      data: {
        sliderImages: [
          {
            id: 1,
            url: "/booking/s4.png",
            alt: "Black Friday travel sale with an airplane on a red and blue background.",
          },
          {
            id: 2,
            url: "/booking/s2.png",
            alt: 'A woman on vacation with text "Holiday Season!" and "50% Off".',
          },
          {
            id: 3,
            url: "/booking/s3.png",
            alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window.",
          },
          {
            id: 4,
            url: "/booking/s1.png",
            alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window.",
          },
        ],
        booking: {
          title: "Travel Smart,\nTravel SaveDost",
          features: [
            {
              cardBgImageUrl: "/booking/c1.png",
              iconUrl: "/booking/i1.png",
              text: "Best Deals, Best Service\nsirf SaveDost par",
              boldWords: [],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c2.png",
              iconUrl: "/booking/i2.png",
              text: "Fast, Easy aur\nReliable Booking",
              boldWords: ["Reliable"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c3.png",
              iconUrl: "/booking/i3.png",
              text: "Har Booking Par Trust,\nHar Journey Par Comfort",
              boldWords: ["Trust,", "Comfort"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c4.png",
              iconUrl: "/booking/i4.png",
              text: "SaveDost Jahan Har \nBooking Ho Assured",
              boldWords: ["Assured"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c5.png",
              iconUrl: "/booking/i5.png",
              text: "24x7 \nCustomer support",
              boldWords: ["24x7"],
              textColor: "text-white",
            },
          ],
        },
        aeps: {
          subheading: "BOOKING",
          heading: "Easy Travelling with SaveDost",
          description:
            "Book your flights effortlessly with SaveDost, whether for domestic or international journeys. Enjoy a smooth, hassle-free booking experience with just a few clicks. ",
          features: [
            "Search, select, and secure your flights instantly. With flexible options, real-time support, and reliable service, your trips whether business or leisure are always stress-free and on time. ",
            "Fly smart, travel confidently, and make every journey seamless with SaveDost.",
          ],
        },
        travel: {
          title: "Air Travel Made Easy",
          cards: [
            {
              title: "Instant Booking Confirmation",
              description:
                "Reserve your tickets online quickly, safely, and without any queues or hassle.",
            },
            {
              title: "Flexible Rescheduling",
              description: "Change your plans effortlessly with no extra fees or penalties.",
            },
            {
              title: "24/7 Customer Support",
              description: "Enjoy worry-free travel with round-the-clock assistance.",
            },
            {
              title: "Safe & Secure Payments",
              description: "Book flights conveniently with our secure online payment system.",
            },
          ],
          imageUrl: "/booking/air1.png",
        },
        info: [
          {
            title: "Bus Booking",
            description: [
              "Planning your next trip has never been easier. With SaveDost, you can book flights instantly and receive confirmed tickets within minutes. Enjoy a stress-free journey, whether it’s for business or leisure.",
              "Our platform offers fast, secure booking on both mobile and desktop. Compare fares, select convenient timings, and confirm your flights in just a few simple steps.",
              "At SaveDost, we prioritize quality service and prompt support, ensuring your travel experience is smooth, comfortable, and hassle-free from start to finish.",
            ],
          },
          {
            title: "Train Booking",
            description: [
              "SaveDost makes booking your flights faster and easier than ever. Whether it’s a domestic or international journey, enjoy instant confirmation and travel without worries.",
              "We help you find the best flights that match your schedule and budget, providing a platform with secure payments, easy booking, and reliable support anytime, anywhere.",
              "Travel smart, travel comfortably, and make every trip a memorable experience with SaveDost.",
            ],
          },
          {
            title: "Hotel Booking",
            description: [
              "Book your flights in just a few clicks, whether it’s a domestic or international journey. Find the best options quickly and travel with peace of mind.",
              "Compare airlines, choose convenient timings and fares, and make secure online payments. Our booking process is fast, simple, and available anytime, anywhere.",
              "With SaveDost, enjoy a hassle-free travel experience from start to finish. Fly comfortably, conveniently, and stress-free.",
            ],
          },
          {
            title: "Flight Booking",
            description: [
              "Book your flights in just a few clicks, whether it’s a domestic or international journey. Find the best options quickly and travel with peace of mind.",
              "Compare airlines, choose convenient timings and fares, and make secure online payments. Our booking process is fast, simple, and available anytime, anywhere.",
              "With SaveDost, enjoy a hassle-free travel experience from start to finish. Fly comfortably, conveniently, and stress-free.",
            ],
          },
        ],
      },
    },
    {
      id: "hotels",
      label: "Hotels",
      icon: "/booking/hotel.png",
      data: {
        sliderImages: [
          {
            id: 1,
            url: "/booking/h3.png",
            alt: "Black Friday travel sale with an airplane on a red and blue background.",
          },
          {
            id: 2,
            url: "/booking/h2.png",
            alt: 'A woman on vacation with text "Holiday Season!" and "50% Off".',
          },
          {
            id: 3,
            url: "/booking/h3.png",
            alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window.",
          },
          {
            id: 4,
            url: "/booking/h4.png",
            alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window.",
          },
        ],
        booking: {
          title: "Book Smart,\nBook SaveDost",
          features: [
            {
              cardBgImageUrl: "/booking/c1.png",
              iconUrl: "/booking/i1.png",
              text: "Best Deals, Best Service\nsirf SaveDost par",
              boldWords: [],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c2.png",
              iconUrl: "/booking/i2.png",
              text: "Fast, Easy aur\nReliable Booking",
              boldWords: ["Reliable"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c3.png",
              iconUrl: "/booking/i3.png",
              text: "Har Booking Par Trust,\nHar Journey Par Comfort",
              boldWords: ["Trust,", "Comfort"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c4.png",
              iconUrl: "/booking/i4.png",
              text: "SaveDost Jahan Har \nBooking Ho Assured",
              boldWords: ["Assured"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c5.png",
              iconUrl: "/booking/i5.png",
              text: "24x7 \nCustomer support",
              boldWords: ["24x7"],
              textColor: "text-white",
            },
          ],
        },
        aeps: {
          subheading: "HOTEL BOOKING",
          heading: "Turant Confirmation, Aasaan Booking.",
          description:
            "It has never been so easy to book your hotel stay. While booking with SaveDost, one can search, compare, and book a room just by clicking a few times. From budget rooms to luxurious suites, we make booking a smooth and easy process for travellers.",
          features: [
            "All our reservations are instantly confirmed. You do not have to wait until email arrives or fear about the hotel being overbooked. You can arrange your travel at your own time because of flexible check-in and check-out, which will provide you with the maximum freedom.",
            "We also provide the best deals and 24/7 customer service. Compare various hotels, get competitive prices, and be sure that our team is always at your service. Travel without the worry that you have a place to stay and be with you throughout the journey   .",
          ],
        },
        travel: {
          title: "Hotel Stay Assured",
          cards: [
            {
              title: "Instant Confirmation",
              description: " Book a hotel immediately and avoid waiting, no doubt.",
            },
            {
              title: "Flexible Cancellation",
              description:
                "Book or cancel or make changes to your stay in minutes, and have refunds within hours according to the policy.",
            },
            {
              title: "Best Price Guarantee",
              description:
                "Book and be sure that you are getting the best rates at your selected hotel.",
            },
            {
              title: "24/7 Customer Support",
              description:
                " You can always contact our group to help with booking problems or amendments.",
            },
          ],
          imageUrl: "/booking/hotel1.png",
        },
        info: [
          {
            title: "Fast and easy hotel reservation",
            description: [
              "Reserve a hotel in real time with SaveDost. Whether it is a budget accommodation or luxury suites, search and book the ideal accommodation in a few clicks.",
              "Book at several hotels, compare prices, and make the final decision in the shortest time possible. Make a booking in a secure, comfortable, and convenient way at any time and place.",
              "Travel worry free and make your stay worry free with 24/7 support and flexibility in the check-in/check-out.",
            ],
          },

          {
            title: "Your Perfect Stay, Just a Click Away",
            description: [
              "Booking a hotel has never been easier. With SaveDost, you can find the ideal room in seconds whether it’s a cozy budget option or a luxurious suite.",
              "Compare deals, choose your favorite, and get instant confirmation. Enjoy hassle-free payments, flexible check-in and check-out, and worry-free reservations.",
              "Our friendly 24/7 support team ensures your trip is smooth, relaxing, and memorable from start to finish.",
            ],
          },
          {
            title: "Fast and stress-free hotel reservation.",
            description: [
              " Reserve your hotel within a few clicks with SaveDost. Whether it is budget accommodations or luxury suites, book the best accommodation to enjoy your trip immediately.",
              "Check and compare hotels, select the most attractive deals, and receive confirmation. Have a comfortable, safe, and convenient booking process anywhere, anytime.",
              "Travel without stress and make it a comfortable and stress-free stay with flexible check-in /check-out schedules and 24/7 customer care.",
            ],
          },
        ],
      },
    },

    {
      id: "trains",
      label: "Trains",
      icon: "/booking/train.png",
      data: {
        sliderImages: [
          {
            id: 1,
            url: "/booking/t1.png",
            alt: "Black Friday travel sale with an airplane on a red and blue background.",
          },
          {
            id: 2,
            url: "/booking/t2.png",
            alt: 'A woman on vacation with text "Holiday Season!" and "50% Off".',
          },
          {
            id: 3,
            url: "/booking/t3.png",
            alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window.",
          },
          {
            id: 4,
            url: "/booking/t4.png",
            alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window.",
          },
        ],
        booking: {
          title: "Book Smart,\nBook SaveDost",
          features: [
            {
              cardBgImageUrl: "/booking/c1.png",
              iconUrl: "/booking/i1.png",
              text: "Best Deals, Best Service\nsirf SaveDost par",
              boldWords: [],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c2.png",
              iconUrl: "/booking/i2.png",
              text: "Fast, Easy aur\nReliable Booking",
              boldWords: ["Reliable"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c3.png",
              iconUrl: "/booking/i3.png",
              text: "Har Booking Par Trust,\nHar Journey Par Comfort",
              boldWords: ["Trust,", "Comfort"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c4.png",
              iconUrl: "/booking/i4.png",
              text: "SaveDost Jahan Har \nBooking Ho Assured",
              boldWords: ["Assured"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c5.png",
              iconUrl: "/booking/i5.png",
              text: "24x7 \nCustomer support",
              boldWords: ["24x7"],
              textColor: "text-white",
            },
          ],
        },
        aeps: {
          subheading: "TRAINS BOOKING",
          heading: "Turant Confirmation, Aasaan Booking.",
          description:
            "With SaveDost, booking your train tickets has become a simple affair. Local trains or long-distance trains: discover the best routes and seats in the shortest time possible with a few clicks.",
          features: [
            "Travel when you want and choose your coach to suit your schedule. Real-time confirmations make you travel without worries and on time.",
            "Compare trains, best fares, and 24/7 customer support. You can travel without worrying that you will never see a face because help will always be there when you need it.",
          ],
        },
        travel: {
          title: "Train Travel Assured",
          cards: [
            {
              title: "Instant Confirmation",
              description: "Confirm your train tickets instantly no waiting, no uncertainty.",
            },
            {
              title: "Flexible Cancellation",
              description:
                " Easy cancellation or modification of booking and prompt refunds according to policy.",
            },
            {
              title: "On-Time Travel Guarantee",
              description:
                "We make certain to provide the schedule and train delays in time to have a smooth ride.",
            },
            {
              title: "24/7 Customer Support",
              description:
                "Our team will never fail to help you in case of any booking changes or travelling issues.",
            },
          ],
          imageUrl: "/booking/train1.png",
        },
        info: [
          {
            title: "Fast and Convenient Train ticket booking.",
            description: [
              "Book tickets instantly with SaveDost. Whether it is a regional trip or long-distance travel, book your seat within a few clicks.",
              "Compare trains, select the most suitable coach, and receive instant confirmation. Book smoothly, safely, and conveniently anywhere around the clock.",
              "Flexible travel dates, 24/7 customer support, plan your trip without any stress, and travel with confidence.",
            ],
          },
          {
            title: "Fast & Reliable Train Tickets",
            description: [
              "Make your train reservations fast with SaveDost. Select among all the existing trains, classes, and times that will best fit your plans.",
              "Get real-time seat availability, and bookings are confirmed. The waiting time is now over, and there is no doubt that your travel is booked in a few clicks.",
              "Flexible cancellations, best fare offers, and 24/7 customer service. Always travel with confidence, stress-free, and smart enough whenever you get to the tracks.",
            ],
          },
          {
            title: "Fast & Easy Train Booking",
            description: [
              "SaveDost allows you to book your train tickets in a few clicks. Whether it is a local train or a long-distance ride, reserve your seat immediately.",
              "Compare trains, choose a coach of your choice and timing, and get immediate confirmation to have a hassle-free ride",
              "Bring your own dates, cancel without any difficulties, and with 24/7 customer service, you can plan your trip and travel without any worries.",
            ],
          },
        ],
      },
    },
    {
      id: "buses",
      label: "Buses",
      icon: "/booking/bus.png",
      data: {
        sliderImages: [
          {
            id: 1,
            url: "/booking/b1.png",
            alt: "Black Friday travel sale with an airplane on a red and blue background.",
          },
          {
            id: 2,
            url: "/booking/b2.png",
            alt: 'A woman on vacation with text "Holiday Season!" and "50% Off".',
          },
          {
            id: 3,
            url: "/booking/b3.png",
            alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window.",
          },
          {
            id: 4,
            url: "/booking/b4.png",
            alt: "A year-end travel promotion banner showing a hand holding a ticket through an airplane window.",
          },
        ],
        booking: {
          title: "Book Smart,\nBook SaveDost",
          features: [
            {
              cardBgImageUrl: "/booking/c1.png",
              iconUrl: "/booking/i1.png",
              text: "Best Deals, Best Service\nsirf SaveDost par",
              boldWords: [],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c2.png",
              iconUrl: "/booking/i2.png",
              text: "Fast, Easy aur\nReliable Booking",
              boldWords: ["Reliable"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c3.png",
              iconUrl: "/booking/i3.png",
              text: "Har Booking Par Trust,\nHar Journey Par Comfort",
              boldWords: ["Trust,", "Comfort"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c4.png",
              iconUrl: "/booking/i4.png",
              text: "SaveDost Jahan Har \nBooking Ho Assured",
              boldWords: ["Assured"],
              textColor: "text-white",
            },
            {
              cardBgImageUrl: "/booking/c5.png",
              iconUrl: "/booking/i5.png",
              text: "24x7 \nCustomer support",
              boldWords: ["24x7"],
              textColor: "text-white",
            },
          ],
        },
        aeps: {
          subheading: "BUS BOOKING",
          heading: "Turant Confirmation, Aasaan Booking.",
          description:
            "Get your bus tickets with SaveDost. From local routes to intercity travels, book your seat within a few clicks and travel without any hassles. Travel When You Want To",
          features: [
            "Enjoy the opportunity to travel at your time and in the seat or coach of your choice. Schedule your trip with quick bookings that will give you confidence in your travels.",
            "Get real-time seat availability, and bookings are confirmed. The waiting time is now over, and there is no doubt that your travel is booked in a few clicks.",
          ],
        },
        travel: {
          title: "Bus Travel Guaranteed",
          cards: [
            {
              title: "Instant Confirmation",
              description: "Instantly confirm your bus tickets with no waiting or second-guessing.",
            },
            {
              title: "Adaptable Cancellation",
              description:
                "Instead of rescheduling, bookings can be canceled with simple refunds issued back through the app within the week.",
            },
            {
              title: "On-time Transit Alerts",
              description:
                "Real-time routing of bus schedules will be easily available to help you maximize your time.",
            },
            {
              title: "Prioritize Customer Support",
              description:
                "Staff is available at any hour of the day to assist you with booking changes or travel issues.",
            },
          ],
          imageUrl: "/booking/bus1.png",
        },
        info: [
          {
            title: "The Right Price, Always Here For You",
            description:
              "Compare buses, get offered the greatest price, and count on us 24/7 for customer care. Enjoy the freedom of travel knowing we are there to support you anytime.",
          },
          {
            title: "Fast & Hassle-Free Bus Booking",
            description: [
              "SaveDost provides the quickest experience with your bus booking. Reserve your bus tickets quickly and easily. If you are booking a local route or intercity travel, your tickets can be bought in 3-clicks or less, and travel without the stress of long wait times.",
              "Compare buses, select your ideal premium seat and time, and receive immediate confirmation for your bus ticket. Enjoy personalized, convenient bus booking no matter where you go.",
              "Plan your trip with confidence, and travel easily with flexible cancellations, easy refunds, and 24/7 customer care.",
            ],
          },
          {
            title: "Your Journey, Our Priority",
            description: [
              "At any time you travel, SaveDost is there to get you there. Book your bus ticket now ,so that you can sit back and enjoy the ride, whether it is local or an intercity trip you'll stay relaxed on your journey.",
              "Choose from several bus companies, select your seat and time of departure, and receive an instant confirmation to help provide you a pleasurable journey.",
              "Flexible cancellations, secure payment processing, and customer support 24/7, all add to the comfort, peace of mind and stress-free travel that a SaveDost traveler is accustomed to!",
            ],
          },
        ],
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeData = tabs.find((tab) => tab.id === activeTab);

  // Static top-section data
  const data = {
    subheading: "TRAVEL & BOOKING",
    heading: "Plan Every Journey in One Place",
    description:
      "Explore convenient options for flights, hotels, trains, and buses with a simple booking experience and dependable assistance.",
    bgImage: "/booking/bookingbg.png",
    centerImage: "/booking/book1.png",
  };
  const faqs = [
    {
      question: "What can I book on SaveDost?",
      answer: "You can explore booking options for flights, trains, buses, and hotels.",
    },
    {
      question: "How do I make a booking?",
      answer:
        "Select a travel category, review the available choices, and continue to the booking platform to complete your reservation.",
    },
    {
      question: "Is the booking process secure?",
      answer:
        "Payments are completed through the booking platform's available payment methods and security process.",
    },
    {
      question: "Will I get instant confirmation?",
      answer: "Confirmation timing depends on the travel provider and selected booking option.",
    },
    {
      question: "Can I cancel or change my booking?",
      answer:
        "Cancellation and changes depend on the provider’s policy check details before confirming.",
    },
    {
      question: "What support is available if I face issues?",
      answer: "Our support team is available Monday to Saturday, 9:30 AM to 6:30 PM.",
    },
  ];
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#fbfafc]">
        <Image
          src={data.bgImage}
          alt=""
          fill
          priority
          aria-hidden="true"
          className="pointer-events-none -z-10 object-cover object-center opacity-80"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 hidden h-56 overflow-visible lg:block"
          aria-hidden="true"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1440 224"
            fill="none"
            preserveAspectRatio="none"
          >
            <ellipse
              cx="720"
              cy="112"
              rx="790"
              ry="86"
              stroke="#0289ad"
              strokeWidth="2.25"
              strokeDasharray="8 10"
              opacity=".42"
            />
          </svg>
          <Image
            src="/booking/plane.png"
            alt=""
            width={1382}
            height={403}
            priority
            className="booking-hero-plane absolute left-0 top-0 z-10 w-40 object-contain drop-shadow-[0_8px_8px_rgba(12,61,76,0.25)]"
          />
        </div>
        <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-0">
          <div className="relative z-30 max-w-xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#027f9f]">
              {data.subheading}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0C3D4C] sm:text-5xl lg:text-6xl">
              {data.heading}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              {data.description}
            </p>
            <Link href="/login" className="pan-hero-button mt-8">
              Start Booking
            </Link>
          </div>

          <div className="relative mx-auto h-[390px] w-full max-w-[650px] sm:h-[470px] lg:h-[520px]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/booking/book4.png"
                alt="Traveller planning a journey on her phone"
                width={566}
                height={617}
                className="absolute bottom-[-3%] right-[-4%] z-30 h-[96%] w-auto object-contain sm:right-0"
              />
              <div
                className="absolute bottom-[3%] left-0 z-20 h-[39%] w-[49%] overflow-hidden"
                aria-label="Bus travel"
              >
                <Image
                  src={data.centerImage}
                  alt="Bus travel"
                  width={957}
                  height={279}
                  className="absolute left-0 top-0 h-full w-auto max-w-none object-contain drop-shadow-[0_10px_9px_rgba(12,61,76,0.22)]"
                />
              </div>
              <div
                className="absolute right-0 top-[7%] z-20 h-[34%] w-[57%] overflow-hidden"
                aria-label="Train travel"
              >
                <Image
                  src={data.centerImage}
                  alt="Train travel"
                  width={957}
                  height={279}
                  className="absolute right-0 top-0 h-full w-auto max-w-none object-contain drop-shadow-[0_10px_9px_rgba(12,61,76,0.22)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ServicesSection3 data={activeData?.data.aeps} /> */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0289ad]">
              Travel With SaveDost
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
              Everything you need to plan your trip
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Choose a travel category, review available options, and continue to the booking
              platform when you are ready.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Plane,
                title: "Flights",
                text: "Explore domestic and international flight options.",
                href: "/service-payment/flight-booking",
              },
              {
                icon: Hotel,
                title: "Hotels",
                text: "Find stays across different destinations and budgets.",
                href: "/service-payment/hotel-booking",
              },
              {
                icon: TrainFront,
                title: "Trains",
                text: "Review routes and train travel information.",
                href: "/service-payment/train-booking",
              },
              {
                icon: BusFront,
                title: "Buses",
                text: "Explore operators, routes, timings, and seats.",
                href: "/service-payment/bus-booking",
              },
            ].map(({ icon: Icon, title, text, href }) => (
              <Link
                key={title}
                href={href}
                className="group rounded-2xl border border-[#d7e9ed] bg-[#f7fbfc] p-6 transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(12,61,76,0.1)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#dff3f7] text-[#027f9f]">
                  <Icon size={23} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-[#0C3D4C]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Tabs Section */}
      <section className="">
        <div className="">
          {/* Tab Buttons */}
          {/* <div className="flex gap-8 mb-10 max-w-6xl mx-auto px-4 lg:px-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex flex-col items-center transition-transform hover:scale-105 ${activeTab === tab.id ? "text-[#018EDE]" : "text-[#0C3D4C]"}`}
                            >
                                <div className={`w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-full ${activeTab === tab.id ? "border-2 border-[#018EDE] shadow-md" : "border border-gray-300"}`}>
                              <Image
  src={tab.icon}
  width={tab.id === "airlines" || tab.id === "buses" ? 64 : 48}
  height={tab.id === "airlines" || tab.id === "buses" ? 64 : 20}
  alt={tab.label}
  className="object-cover"
/>

                                </div>
                                {activeTab === tab.id && <span className="absolute -bottom-3 w-12 h-[3px] bg-[#018EDE] rounded-full"></span>}
                                <p className="mt-3 text-sm font-medium">{tab.label}</p>
                            </button>
                        ))}
                    </div> */}

          {/* Active Tab Content */}
          {/* <PromotionSlider sliderImages={activeData?.data.sliderImages} /> */}
          {/* <BookingFeatures title={activeData?.data.booking.title} features={activeData?.data.booking.features} /> */}
          {/* <BenefitsSection2 /> */}

          {/* Info Sections + Travel Assured */}
          {/* <section className=" mt-10 mb-16">
                        <div>
                            {activeData?.data.info.slice(0, 2).map((item, index) => (
                                <div
                                    key={index}
                                    className={`bg-[#E6F6FE] rounded-2xl p-5 lg:p-16 max-w-6xl my-10 ${index % 2 === 0 ? "" : "ms-auto"
                                        }`}
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#043C5C] mb-4">
                                        {item.title}
                                    </h2>

                                    {Array.isArray(item.description) ? (
                                        item.description.map((para, i) => (
                                            <p key={i} className="text-gray-600 leading-relaxed mb-4">
                                                {para}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    )}
                                </div>
                            ))}

                        </div>

                        <TravelAssured data={activeData?.data.travel} />

                        <div className="mt-24">
                            {activeData?.data.info.slice(2, 6).map((item, index) => (
                                <div
                                    key={index}
                                    className={`bg-[#E6F6FE] rounded-2xl p-5 lg:p-16 max-w-5xl my-10 ${index % 2 !== 0 ? "" : "ms-auto"
                                        }`}
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#043C5C] mb-4">
                                        {item.title}
                                    </h2>

                                    {Array.isArray(item.description) ? (
                                        item.description.map((para, i) => (
                                            <p key={i} className="text-gray-600 leading-relaxed mb-4">
                                                {para}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                    </section> */}
        </div>
      </section>
      <BookingServicesSection />

      <PartnersSection />
      {/* <TestimonialSlider /> */}
      <FAQ
        faqs={faqs}
        subheading="Find answers to common questions about travel booking and support."
      />
      <ContactBanner />
    </>
  );
}

export default Page;

import React from "react";
import { UsersRound, IndianRupee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Main Banner Component
const StatsBanner = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-10"
      style={{ backgroundImage: "url('/loan/statbg.png')" }}
    >
      <div className="max-w-7xl  mx-auto flex flex-col items-center justify-between gap-8 rounded-lg px-4 lg:px-0 md:flex-row md:gap-4">
        <div className="lg:flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
          <div className="flex gap-3 items-center mb-3 lg:mb-0">
            <Image src="/loan/loan10.png" alt="logo-bbps" width={80} height={80} />
            <div>
              <p className="text-2xl md:text-3xl font-bold">6 Crore</p>
              <p className="text-sm text-gray-600">Total eligible users</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <Image src="/loan/loan11.png" alt="logo-bbps" width={80} height={80} />
            <div>
              <p className="text-2xl md:text-3xl font-bold">₹58,23,69,780</p>
              <p className="text-sm text-gray-600">Total credit given</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://apps.apple.com/in/app/finunique/id6760808229"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download SaveDost on the App Store"
          >
            <Image src="/loan/image7.png" alt="logo-bbps" width={200} height={200} />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.utility.finunique"
            target="blank"
            aria-label="Get it on Google Play"
          >
            <Image src="/loan/image8.png" alt="logo-bbps" width={200} height={200} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;

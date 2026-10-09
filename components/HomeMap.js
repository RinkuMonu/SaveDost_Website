import React from "react";
import Image from "next/image";

/* ---------- Pin ---------- */
const LocationPin = ({ top, left, name }) => (
  <div
    className="absolute flex flex-col items-center group z-10"
    style={{ top, left, transform: "translate(-50%, -50%)" }}
  >
    <Image
      src="/image/location-pin.png"
      alt={name}
      width={24}
      height={24}
      className="drop-shadow-lg animate-pulse sm:w-[18px] sm:h-[20px] md:h-[30px] md:w-[30px]"
    />
    <span className="mt-1 px-2 py-0.5 text-[10px] sm:text-[11px] rounded-md bg-black/70 text-white opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
      {name}
    </span>
  </div>
);

/* ---------- Icon ---------- */
const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-yellow-400 shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-6.05a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

/* ---------- Stats Card ---------- */
const StatCard = ({ value, label }) => (
  <div className="flex items-start gap-2.5 bg-white/10 p-3 sm:gap-3 sm:p-5">
    <MapPinIcon />
    <div>
      <p className="text-lg font-bold text-gray-200 text-start sm:text-2xl">{value}</p>
      <p className="text-xs sm:text-sm text-gray-300 leading-snug text-start">{label}</p>
    </div>
  </div>
);

/* ---------- Main Component ---------- */
const HomeMap = () => {
  const stats = [
    { value: "3.5 Lakh+", label: "Happy users across India" },
    { value: "50+", label: "Digital and financial services in one place" },
    { value: "24/7", label: "Convenient access to essential services" },
  ];

  const locations = [
    { name: "Itawah", top: "28%", left: "34%" },
    { name: "Lucknow", top: "32%", left: "38%" },
    { name: "Bihar", top: "43%", left: "53%" },

    { name: "Bhilwara", top: "38%", left: "24%" },
    { name: "Jaipur", top: "32%", left: "28%" },

    { name: "Ahmedabad", top: "44%", left: "16%" },
    { name: "Vadodara", top: "47%", left: "20%" },
    { name: "Valsad", top: "51%", left: "22%" },
    { name: "Anand", top: "48%", left: "18%" },
    { name: "Vapi", top: "48%", left: "14%" },
    { name: "Dhoraji", top: "43%", left: "14%" },

    { name: "Ratlam", top: "44%", left: "30%" },
    { name: "Satna", top: "50%", left: "27%" },
    { name: "Morena", top: "40%", left: "35%" },

    { name: "Madurai", top: "86%", left: "33%" },
    { name: "Vellore", top: "84%", left: "36%" },
    { name: "Palani", top: "87%", left: "29%" },

    { name: "Ranchi", top: "43%", left: "49%" },
    { name: "Ramgarh", top: "48%", left: "47%" },

    { name: "Bilaspur", top: "56%", left: "42%" },
    { name: "Santipur", top: "46%", left: "56%" },

    { name: "Jagtial", top: "76%", left: "35%" },
    { name: "Palwancha", top: "75%", left: "30%" },
  ];

  return (
    <section className="relative w-full overflow-hidden py-9 sm:py-12">
      <Image src="/home/map.png" alt="Network Background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-7 px-4 sm:gap-10 md:grid-cols-2 lg:px-10">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Serving Users Across India
          </h2>

          <p className="mx-auto mb-6 max-w-lg text-sm leading-6 text-gray-200 sm:mb-8 sm:text-base md:mx-0">
            SaveDost gives users convenient access to secure digital payments, utility services,
            recharges, and financial solutions across India.
          </p>

          <div className="max-w-md mx-auto md:mx-0 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Right Map (IMPORTANT PART) */}
        <div className="relative mx-auto w-full max-w-[310px] sm:max-w-xl">
          {/* Aspect ratio keeps pins aligned on all devices */}
          <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5]">
            <Image
              src="/image/india-mapp.PNG"
              alt="SaveDost services available to users across India"
              fill
              sizes="(max-width: 640px) 310px, (max-width: 1024px) 576px, 50vw"
              className="object-contain"
              priority
            />

            {/* Pins */}
            {locations.map((loc, i) => (
              <LocationPin key={i} {...loc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMap;

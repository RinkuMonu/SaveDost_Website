import Image from "next/image";

export default function IntegrationSection() {
  return (
    <div className="bg-[#fcfeffc9]">
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Powerful Integrations <br /> Built for Scale
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Connect with leading banking and payment platforms seamlessly. Our ecosystem enables
              fast onboarding, secure transactions, and enterprise-grade reliability.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Instant API integrations
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Secure & compliant infrastructure
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Scalable partner network
              </li>
            </ul>
          </div>

          <div className="">
            <IntegrationOrbit />
          </div>
        </div>
      </section>
    </div>
  );
}
function IntegrationOrbit() {
  return (
    <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden sm:min-h-[400px] lg:py-52">
      <div className="absolute h-[300px] w-[300px] rounded-full border-2 border-[#136091] sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]"></div>
      <div className="absolute h-[220px] w-[220px] rounded-full border-2 border-[#136091] sm:h-[280px] sm:w-[280px] lg:h-[300px] lg:w-[300px]"></div>
      <div className="absolute h-[135px] w-[135px] rounded-full border-2 border-[#136091] sm:h-[165px] sm:w-[165px] lg:h-[180px] lg:w-[180px]"></div>

      <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md">
        <Image src="/image/SaveDost-initial.png" alt="SaveDost" width={40} height={47} />
      </div>

      <OrbitIcon top="10%" left="60%" src="/bank/instantpay.png" />
      <OrbitIcon top="25%" left="30%" src="/bank/nsdl.png" />
      <OrbitIcon top="75%" left="73%" src="/bank/irctc.png" />
      <OrbitIcon top="45%" left="85%" src="/bank/ISERVEU-MAIN-LOGO.png" />
      <OrbitIcon top="79%" left="33%" src="/bank/paysprint.png" />
      <OrbitIcon top="55%" left="16%" src="/bank/surepass.png" />
    </section>
  );
}

function OrbitIcon({ src, top, left, size = "sm" }) {
  const sizes = {
    sm: "w-20 h-20",
    md: "w-14 h-14",
  };

  return (
    <div
      className={`absolute ${sizes[size]} flex scale-75 items-center justify-center rounded-full bg-white shadow-md sm:scale-90 lg:scale-100`}
      style={{ top, left, transform: "translate(-50%, -50%)" }}
    >
      <Image
        src={src}
        alt="Partner service"
        width={56}
        height={56}
        className="w-14 h-14 object-contain"
      />
    </div>
  );
}

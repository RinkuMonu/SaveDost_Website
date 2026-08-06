import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeSecurity() {
  const features = ["Privacy", "Security", "Trust"];
  return (
    <div
      className="w-full bg-gray-50"
      style={{
        background:
          "linear-gradient(90deg, #0E6A8F 0%, #0B4051 30%, #01202A 60%, #01161D 85%, #000D12 100%)",
      }}
    >
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto px-4 lg:px-0">
        <div className=" text-gray-200 flex items-center justify-center ">
          <div className="container mx-auto py-12 max-w-4xl md:pl-12">
            <div className="text-left mb-12">
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                Guarding Your Data,
                <br />
                Securing Your Future
              </h3>
              <p className="mt-6 max-w-2xl text-gray-300">
                Protecting Your Data, Empowering Your Business With strong encryption and reliable
                security systems, we make sure your business data remains secure while you focus on
                building success.
              </p>
            </div>
            <div className="mb-12">
              <Link
                href="/signup"
                className=" text-gray-200 rounded-full border-4 font-bold py-3 px-8  transition-colors duration-300 "
              >
                Register now
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((featureName) => (
                <div
                  key={featureName}
                  className="border border-[#b3e2f8] rounded-lg py-3 px-1 lg:px-6 w-full text-center hover:bg-cyan-900/40 hover:border-cyan-400 transition-colors duration-300"
                >
                  <h3 className="text-[#b3e2f8] text-xl font-semibold">{featureName}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src="/banner/homesecurity3d.png"
            width={400}
            height={400}
            alt="Home security"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
export default HomeSecurity;

import Image from "next/image";
import React from "react";

function AepsFeatures() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h3 className="mt-2 pb-7 text-3xl font-bold text-[#0C3D4C] sm:pb-10 sm:text-4xl">
        Easy Banking for Cities, Towns, and Villages
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F0ECFB] py-6 rounded-xl flex flex-col items-start">
          <p className="text-[#0C3D4C] text-lg font-semibold mb-4 px-6">Financial Inclusion</p>
          <Image
            src="/aeps/f1.png"
            alt="Financial Inclusion"
            width={400}
            height={400}
            className="rounded-lg mb-4 ms-auto"
          />
          <p className="text-[#5D5D5D] text-base px-6">
            We help bring banking services to every Indian through our wide network of AePS agents
            in both cities and villages.
          </p>
        </div>
        <div>
          <div className="bg-[#FADDE1] px-6 rounded-xl flex flex-col md:flex-row items-center ">
            <div className="md:w-1/2">
              <p className="text-[#0C3D4C] text-lg font-semibold ">Secure Transactions</p>
              <p className="text-[#5D5D5D] text-base">
                Your payments are safe and secure with Aadhaar-based verification and trusted
                banking protection.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/aeps/f23d.png"
                alt="Secure Transactions"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#F1F6E4] pt-6 px-6 rounded-xl">
              <p className="text-[#0C3D4C] text-lg font-semibold mb-2">Real-Time Verification</p>
              <p className="text-[#5D5D5D] text-base mb-4">
                Fingerprint verification allows fast, accurate, and real-time transactions.
              </p>
              <Image
                src="/aeps/f3.png"
                alt="Real-Time Verification"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="bg-[#FFE9DE] relative rounded-xl">
              <div className="md:max-w-[150px] px-2 md:px-0 pt-6 ms-auto pr-4">
                <p className="text-[#0C3D4C] text-lg font-semibold mb-2 ">Easy Access</p>
                <p className="text-[#5D5D5D] text-base mb-4">
                  Banking services are available conveniently at shops within your neighborhood.
                </p>
              </div>
              <Image
                src="/aeps/f43d.png"
                alt="Cash Withdrawal"
                width={160}
                height={160}
                className="hidden md:block absolute top-27 left-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6">
        <div className="md:col-span-3 bg-[#FFF7E9] pt-6 px-6 rounded-xl flex items-center justify-center">
          <div className="md:w-3/5">
            <p className="text-[#0C3D4C] text-lg font-semibold mb-2">No Need for Cards or PINs</p>
            <p className="text-[#5D5D5D] text-base">
              Pay securely with Aadhaar and biometric authentication, without cards or PINs.
            </p>
          </div>
          <div className="md:w-2/5">
            <Image
              src="/aeps/f5.png"
              alt="Secure Transactions"
              width={300}
              height={300}
              className=""
            />
          </div>
        </div>
        <div className="md:col-span-2 bg-[#E6F6FF] px-6 pt-6 rounded-xl flex flex-col items-start">
          <p className="text-[#0C3D4C] text-lg font-semibold mb-2">Customer Support</p>
          <p className="text-[#5D5D5D] text-base mb-4">
            We offer 24/7 customer assistance to ensure smooth and worry-free banking.
          </p>
          <Image
            src="/aeps/f63d.png"
            alt="Customer Support"
            width={400}
            height={400}
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}

export default AepsFeatures;

import React from "react";
import BenefitsSection2 from "./BenefitsSection2";

const RechargeInfo = () => {
  const infoData = [
    {
      title: "Safe and Fast Mobile Recharge with SaveDost Your Reliable Digital Ally.",
      description:
        "The best convenience of instantaneous mobile recharge is experienced in the highly secure and technologically advanced platform of SaveDost. Quickly and dependably recharge 24/7 with the most competitive plans and special deals from all major telecom operators such as Jio, Airtel, Vi, and BSNL. On our platform, transactions are flawless with instant activation and full transparency of transactions.",
    },
    {
      title: "Why is SaveDost your choice for a recharge destination?",
      description:
        "The most effective mobile recharge service with an unmatched 99.9% success rate is discovered at Discover India. We also offer various safe payment options such as UPI, credit/debit cards, popular digital wallets, and net banking services. We have an impressive security system that is bank-level encrypted and fraud protection systems, and this guarantees your financial security and complete privacy during all transactions.",
    },
    {
      title: "Our Complete Suite of Recharge Services.",
      description:
        "Get full prepaid and postpaid management solutions to all the large telecom service providers. Select between data packs of specific content, unlimited calling, and special offers of validity with immediate activation. Utilize our live notification system that provides real-time confirmations and detailed status updates on your recharge, bill payments, and plan migrations right away.",
    },
    {
      title: "More Benefits and Perks for Our Best Customers.",
      description:
        "Enjoy discounted rates on preferred purchases, great cashback rates, and exclusive promotions on every transaction.   Our highly skilled customer support team is available 24/7 to provide customer service and support along your journey—at the moment you need them.  The application is configured to have intuitive navigation that includes personalized providers to help you effectively recharge in a seamless and organized way.",
    },
    {
      title: "The New SaveDost App. ",
      description:
        "Use our all-inclusive, fully-fledged mobile application to have a completely smooth digital recharge experience. Do all your banking and financial needs in one, unified platform with military-level security mechanisms and the fastest processing speeds. Feel the freedom to charge your mobile services at any time and at any place with a few simple gestures on your smartphone!",
    },
  ];

  return (
    <section className=" mt-10 mb-16 ">
      <div className=" ">
        {infoData.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className={`bg-[#E6F6FE] rounded-2xl p-8 lg:p-16 max-w-6xl  my-10 ${index % 2 == 0 ? "" : "ms-auto"}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#043C5C] mb-4">{item.title}</h2>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/* <BenefitsSection2/> */}

      {/* Bottom 3 Cards */}
      <div className="mt-24">
        {infoData.slice(3, 6).map((item, index) => (
          <div
            key={index}
            className={`bg-[#E6F6FE] rounded-2xl p-5 lg:p-16 max-w-5xl  my-10 ${index % 2 !== 0 ? "" : "ms-auto"}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#043C5C] mb-4">{item.title}</h2>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RechargeInfo;

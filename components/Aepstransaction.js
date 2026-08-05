"use client";
import React from "react";

const transactions = [
  {
    id: 1,
    level: "USFBL & Other Bank Terminal",
    type: "Withdrawal Transactions",
    limit: "Maximum 5/Aadhaar/Terminal/Day",
  },
  {
    id: 2,
    level: "Other Banks Terminal",
    type: "Withdrawal Transactions",
    limit: "Maximum 10 Txn or ₹50,000 per month value whichever is breached earlier.",
  },
  {
    id: 3,
    level: "USFBL Bank Terminal",
    type: "Withdrawal Transactions",
    limit: "Maximum 10 Txn or ₹50,000 per month value whichever is breached earlier.",
  },
  {
    id: 4,
    level: "Other Banks Terminal",
    type: "Offus Mini Statement",
    limit: "Maximum 5 Txn per Month",
  },
  {
    id: 5,
    level: "USFBL Bank Terminal",
    type: "Offus Mini Statement",
    limit: "Maximum 5 Txn per Month",
  },
  {
    id: 6,
    level: "USFBL & Other Bank Terminal",
    type: "Cash Withdrawal",
    limit: "Maximum ₹10,000/Transaction",
  },
  {
    id: 7,
    level: "USFBL & Other Bank Terminal",
    type: "Cash Deposit",
    limit: "Maximum ₹10,000/Transaction",
  },
];

const Aepstransaction = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <h2 className="text-3xl font-bold text-[#0C3D4C] mb-8 text-center">
          AePS Transactional Limits
        </h2>

        <div className="overflow-x-auto rounded-xl p-6 shadow-md">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="bg-[#0d475c]  text-left  rounded-3xl text-gray-200 text-sm md:text-base">
                <th className="px-6 py-3 font-semibold rounded-l-3xl">Sr.no</th>
                <th className="px-6 py-3 font-semibold">Level</th>
                <th className="px-6 py-3 font-semibold">Transaction Type</th>
                <th className="px-6 py-3 font-semibold rounded-r-3xl">USFBL Transactional Limit</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((row) => (
                <tr
                  key={row.id}
                  className="bg-[#f1f4f5] shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 rounded-3xl"
                >
                  <td className="px-6 py-4 text-gray-700 rounded-l-3xl">{row.id}</td>
                  <td className="px-6 py-4 text-gray-700">{row.level}</td>
                  <td className="px-6 py-4 text-gray-700">{row.type}</td>
                  <td className="px-6 py-4 text-gray-700 rounded-r-3xl">{row.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Aepstransaction;

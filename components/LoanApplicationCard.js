// "use client";
// import React, { useRef } from "react";
// import { ArrowRight } from "lucide-react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// const customerImage =
//   "https://i.ibb.co/L5k9XQ9/loan-customer-transparent.png";

// const cardData = [
//   {
//     step: 1,
//     title: "Apply Online",
//     details: [
//       "Visit The Bank, NBFC, Or Loan App.",
//       "Enter Basic Personal Details Like Name, Mobile, Aadhaar, PAN, Income, And Loan Amount Required.",
//       "Select The Loan Type (Personal Loan, Instant Loan, Etc.).",
//     ],
//   },
//   {
//     step: 2,
//     title: "Document Verification",
//     details: [
//       "Upload required documents like PAN, Aadhaar, and income proof.",
//       "The lender will verify the authenticity of the submitted documents.",
//       "This process is usually quick and completed online.",
//     ],
//   },
//   {
//     step: 3,
//     title: "Receive Funds",
//     details: [
//       "Upon successful verification and approval of your application.",
//       "The loan amount is disbursed directly to your bank account.",
//       "You will receive a notification once the funds are transferred.",
//     ],
//   },
// ];

// const InfoCard = ({ step, title, details, progress }) => {
//   const animationRange = [0, 0.4];

//   const y = useTransform(progress, animationRange, [20, 0]);
//   const opacity = useTransform(progress, animationRange, [0, 1]);

//   return (
//     <div className="flex w-full max-w-md flex-col justify-between py-18 px-8 bg-white">
//       <div>
//         <motion.div
//           style={{ y, opacity }}
//           className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#007bff] text-2xl font-bold text-white shadow-md"
//         >
//           {step}
//         </motion.div>

//         <motion.h3
//           style={{ y, opacity }}
//           className="mt-6 mb-4 text-3xl font-bold text-gray-800"
//         >
//           {title}
//         </motion.h3>

//         <motion.ul
//           style={{ y, opacity }}
//           className="min-h-[120px] list-inside list-disc space-y-2 text-gray-600"
//         >
//           {details.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </motion.ul>
//       </div>
//       <motion.div
//         style={{ y, opacity }}
//         className="mt-8 text-right"
//       >
//         <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#007bff] px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-[#0056b3]">
//           <span>Request Calculations</span>
//           <ArrowRight size={20} />
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// const LoanApplicationCard = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end end"],
//   });

//   // --- CHANGE IS HERE: Added a spring to smooth the scrollYProgress value ---
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <div className="bg-[#e0f2ff] py-16">
//       <div className="mx-auto w-full max-w-7xl md:grid md:grid-cols-2 md:gap-16">
//         <div className="md:sticky md:top-0 md:h-[75vh] p-8">
//             <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-[#1DADFF] to-[#014D78] p-8 text-white">
//                 <div className="z-10">
//                     <h2 className="text-3xl font-bold leading-tight text-[#A0DCFF] md:text-4xl">
//                         Apply Karo Abhi, <br />
//                         Paisa Milega <br />
//                         Turant <span className="font-extrabold text-white">Account</span>{" "}
//                         <br />
//                         Mein
//                     </h2>
//                 </div>
//                 <div className="relative mt-8 h-64 md:h-auto">
//                     <img
//                         src={customerImage}
//                         alt="Happy customer giving thumbs up"
//                         className="absolute bottom-[-2rem] right-[-2rem] w-[280px] object-contain md:w-[350px]"
//                     />
//                 </div>
//             </div>
//         </div>

//         <div ref={targetRef} className="relative h-[300vh]">
//           <div className="sticky top-10">
//             {cardData.map((card, index) => {
//               const numCards = cardData.length;
//               const start = index / numCards;
//               const end = (index + 1) / numCards;

//               // --- CHANGE IS HERE: Using the smoothed progress value ---
//               const cardProgress = useTransform(smoothProgress, [start, end], [0, 1]);
//               const containerOpacity = useTransform(
//                 smoothProgress,
//                 [start, start + 0.1, end - 0.1, end],
//                 [0, 1, 1, 0]
//               );

//               return (
//                 <motion.div
//                   key={card.step}
//                   style={{ opacity: containerOpacity }}
//                   className="absolute inset-0 flex items-start justify-center"
//                 >
//                   <InfoCard {...card} progress={cardProgress} />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoanApplicationCard;

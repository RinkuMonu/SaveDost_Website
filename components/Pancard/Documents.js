// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// export default function Documents({ items }) {
//   const router = useRouter();

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#eaf5fb] to-[#fcfbf5] flex flex-col items-center py-10 px-4 md:px-8 relative">

//       <div className="max-w-7xl w-full mx-auto">
//         <h1 className="text-3xl md:text-5xl font-bold text-[#176B87] mb-3 text-center tracking-tight">
//           Documents Required
//         </h1>
//         <p className="text-gray-600 text-lg text-center mb-10">
//           To maintain a friendly and organized process, please ensure you have the following documents ready.
//         </p>

//         {/* Vertical Timeline/Stepper */}
//         <div className="relative py-6">
//           {/* Timeline line */}
//           <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-[#45b0c1] to-[#fffaf0] z-0 rounded"></div>
//           <ul>
//             {items.map((item, index) => (
//               <li key={index} className="relative flex items-start mb-12 last:mb-0">
//                 {/* Step/Document Number */}
//                 <span
//                   className={`z-10 mt-1 w-10 h-10 flex items-center justify-center rounded-full border-4 border-white shadow-lg text-white font-semibold text-lg transition
//                     ${
//                       index % 3 === 0
//                         ? "bg-[#176B87]"
//                         : index % 3 === 1
//                         ? "bg-[#29b6c2]"
//                         : "bg-[#73c5d9]"
//                     }`}
//                 >
//                   {index + 1}
//                 </span>
//                 {/* Card Content */}
//                 <div className="ml-8 flex-1 p-5 rounded-xl shadow-lg border border-[#E6F0F7] bg-white">
//                   <h3 className="text-xl md:text-2xl font-semibold text-[#176B87] mb-1">{item.title}</h3>
//                   <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </main>
//   );
// }

import React from "react";
import PanInfoLayout from "./PanInfoLayout";

export default function Documents({ items }) {
  return (
    <PanInfoLayout
      eyebrow="Form 49AA · Foreign Citizens"
      title="Documents Required"
      description="Keep clear, valid copies of the applicable identity and address documents ready before you apply."
      items={items}
    />
  );
}

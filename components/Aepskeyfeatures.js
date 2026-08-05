"use client";
import React from "react";
import Image from "next/image";
import { Shield, Users, Award, CheckCircle, Headphones, Rocket } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Shield className="text-orange-400 w-8 h-8" />,
    title: "Strong Security",
    description: "Your business data is always protected.",
  },
  {
    id: 2,
    icon: <Users className="text-pink-400 w-8 h-8" />,
    title: "Trusted by Many Businesses",
    description: "Thousands of businesses use and trust our services.",
  },
  {
    id: 3,
    icon: <Award className="text-blue-400 w-8 h-8" />,
    title: "Recognized Industry Experts",
    description: "Known for innovation and smart solutions.",
  },
  {
    id: 4,
    icon: <CheckCircle className="text-green-400 w-8 h-8" />,
    title: "Proven Results",
    description: "Helping businesses grow across different industries.",
  },
  {
    id: 5,
    icon: <Headphones className="text-purple-400 w-8 h-8" />,
    title: "24/7 Customer Support",
    description: "Help is always available whenever you need it.",
  },
  {
    id: 6,
    icon: <Rocket className="text-red-400 w-8 h-8" />,
    title: "Quick and Easy Setup",
    description: "Get started fast without any delays.",
  },
];

const Aepskeyfeatures = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-12 sm:py-16 lg:py-20"
      style={{ backgroundImage: "url('/image/aeps-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-0 text-center text-white">
        <h3 className="text-4xl md:text-5xl font-bold mb-4">Key Benefits</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left flex items-start space-x-4 shadow-lg hover:bg-white/20 transition"
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aepskeyfeatures;

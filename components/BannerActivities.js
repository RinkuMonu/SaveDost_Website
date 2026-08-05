"use client";
import Image from "next/image";
import React from "react";

const ActivityItem = ({ activity }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center">
      <Image
        width={200}
        height={200}
        className="w-12 h-12 rounded-full object-cover"
        src={activity.imageUrl}
        alt={`Transaction for ${activity.name}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/48x48/e2e8f0/64748b?text=U`;
        }}
      />
      <div className="ml-4  text-left">
        <p className="font-semibold text-[#24576C]">{activity.name}</p>
        <p className="text-sm  text-gray-500">{activity.date}</p>
      </div>
    </div>
    <p className="font-bold text-[#24576C] text-lg">
      {activity.currency}
      {activity.amount}
    </p>
  </div>
);

const BannerActivities = ({ activities }) => {
  return (
    <div className="w-full max-w-sm p-6 space-y-2 bg-white rounded-2xl shadow-lg">
      <h2 className="text-left text-2xl font-bold text-gray-800">Activities</h2>
      {/* <button className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
            See All
          </button> */}

      <div className="">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default BannerActivities;

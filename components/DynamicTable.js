"use client";
import React, { useState, useEffect } from "react";

const Avatar = ({ name }) => (
  <div className="w-9 h-9 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-semibold text-sm  flex-shrink-0">
    {name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
      : "?"}
  </div>
);

const StatusBadge = ({ status }) => {
  const statusClasses = {
    Paid: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
    Unpaid: "bg-rose-50 text-rose-700 ring-rose-600/20",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full ring-1 ring-inset ${statusClasses[status] || "bg-gray-50 text-gray-600 ring-gray-500/10"}`}
    >
      {status}
    </span>
  );
};

const TableSkeleton = () => (
  <div className="animate-pulse p-2">
    <div className="h-10 bg-slate-200 rounded-md w-full mb-4"></div>
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex items-center p-4 space-x-4 border-b border-slate-100">
        <div className="h-9 w-9 rounded-full bg-slate-200"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
        </div>
        <div className="h-4 bg-slate-200 rounded w-1/4"></div>
        <div className="h-4 bg-slate-200 rounded w-1/4"></div>
      </div>
    ))}
  </div>
);

const App = ({ headers, rows }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="mt-0 border-0 bg-[#f6fafb] px-4 py-12 sm:px-5 sm:py-16 lg:py-22">
      <div className="w-full max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b4f] mb-4 text-balance">
            Commission Payouts
          </h2>
          <p className="text-slate-500 mt-2">A summary of recent sales commissions.</p>
        </header>

        <div className="bg-white shadow-sm rounded-2xl border border-slate-200/60 overflow-hidden">
          {isLoading ? (
            <TableSkeleton />
          ) : (
            // 👇 Added wrapper for horizontal scroll + min width for visibility
            <div className="overflow-x-auto w-full">
              <div className="min-w-[900px]">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#0c3d4c] border-b border-[#0c3d4c] text-md text-white font-semibold">
                    <tr>
                      {headers.map((header) => (
                        <th key={header.key} scope="col" className="px-6 py-4">
                          {header.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, rowIndex) => (
                      <tr
                        key={row.id}
                        className=" hover:bg-slate-50/70 transition-colors duration-150 border-b border-[#0d3b4f]/50 last:border-b-0"
                      >
                        {headers.map((header) => (
                          <td
                            key={`${row.id}-${header.key}`}
                            className="px-3 md:px-6 py-5 whitespace-nowrap"
                          >
                            {header.key === "rep" ? (
                              <div className="flex items-center gap-4">
                                <Avatar name={row.rep} />
                                <span className="font-semibold text-slate-800 bg-transparent w-full block px-2 py-1 rounded-md">
                                  {row[header.key] || "-"}
                                </span>
                              </div>
                            ) : header.key === "status" ? (
                              <StatusBadge status={row[header.key]} />
                            ) : (
                              <span className="text-slate-600 bg-transparent w-full block px-2 py-1 rounded-md">
                                {row[header.key] || "-"}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

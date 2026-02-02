"use client";

import React from "react";
import {
  TrendingUp,
  DollarSign,
  Package,
  BarChart3,
  TrendingDown,
} from "lucide-react";

const MarketsSection = () => {
  const markets = [
    {
      icon: TrendingUp,
      count: "7,000+",
      label: "STOCKS",
      description:
        "Explore 7,000+ stocks with real-time pricing and fast execution, directly from your KIRA account.",
      color: "#00468e",
    },
    {
      icon: DollarSign,
      count: "330+",
      label: "FOREX PAIRS",
      description: "Major, minor and exotic currency pairs",
      color: "#00468e",
    },
    {
      icon: Package,
      count: "110+",
      label: "COMMODITIES",
      description: "Energy, metals, and agricultural products",
      color: "#00468e",
    },
    {
      icon: BarChart3,
      count: "90+",
      label: "INDICES",
      description: "Track major market benchmarks worldwide",
      color: "#00468e",
    },
    {
      icon: TrendingDown,
      count: "2,000+",
      label: "ETFS",
      description: "Diversified exchange-traded funds",
      color: "#00468e",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003870] mb-2">
            Trade 10,000+ Markets as CFDs
          </h2>
        </div>

        {/* Markets Grid */}
        <div className="max-w-6xl mx-auto">
          {/* First Row - 3 Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {markets.slice(0, 3).map((market, index) => (
              <MarketCard key={index} market={market} />
            ))}
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {markets.slice(3, 5).map((market, index) => (
              <MarketCard key={index} market={market} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Market Card Component
const MarketCard = ({ market }:any) => {
  const Icon = market.icon;
  
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#8ca1c4]">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: market.color }}
        >
          <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* Count */}
      <div className="text-center mb-2">
        <div className="text-4xl font-black text-gray-900 mb-2">
          {market.count}
        </div>
        <div className="text-sm font-bold text-[#00468e] tracking-wider">
          {market.label}
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-sm text-gray-600 leading-relaxed mt-4">
        {market.description}
      </p>

      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-[#d1dae7]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default MarketsSection;
"use client";

import React from "react";
import { Shield, TrendingUp, MapPin, Lock, Scale } from "lucide-react";

const WhyKiraSection = () => {
  const features = [
    {
      icon: Shield,
      title: "SCA Licensed & Regulated",
      description:
        "We're a Category 1 broker licensed by the UAE Securities & Commodities Authority (SCA). Your funds are held in fully segregated accounts for your protection.",
      color: "#00468e",
    },
    {
      icon: TrendingUp,
      title: "MT5 + CQG on One Account",
      description:
        "Trade 10,000+ CFDs across all major asset classes, on the region's most powerful platforms.",
      color: "#00468e",
    },
    {
      icon: MapPin,
      title: "Built for GCC Traders",
      description:
        "We're based in Dubai, offer Arabic support, and provide Islamic account options designed for the needs of serious traders across the region.",
      color: "#00468e",
    },
    {
      icon: Lock,
      title: "Your Funds Stay Safe",
      description:
        "Every deposit goes into a secure UAE bank account, kept away from company operations, protected by law, and backed by clear accountability.",
      color: "#00468e",
    },
  ];

  return (
    <section className="relative py-12 lg:py-16 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d1dae7]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8ca1c4]/20 rounded-full blur-3xl"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-[#d1dae7] text-[#00468e] border border-[#8ca1c4]">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
            WHY KIRA?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Trusted Broker Behind Every Successful Trade
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-[#8ca1c4]"
              >
                {/* Icon Container */}
                <div className="mb-4">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: feature.color }}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00468e] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-[#d1dae7]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Islamic Accounts Feature  */}
        <div className="relative bg-linear-to-br from-[#003870] via-[#00468e] to-[#0056b3] rounded-2xl p-8 lg:p-10 shadow-xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            ></div>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-6">
            {/* Icon */}
            <div className="shrink-0">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Scale className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
            </div>

            {/* Content */}
            <div className="grow text-center lg:text-left">
              <h3 className="text-xl lg:text-2xl font-black text-white mb-2">
                Islamic Accounts
              </h3>
              <p className="text-base text-white/90 font-light leading-relaxed">
                We offer swap-free Islamic trading accounts built for serious
                traders who follow Sharia principles and don't want to
                compromise.
              </p>
            </div>

            {/* Optional CTA */}
            <div className="shrink-0">
              <button className="px-6 py-3 bg-white text-[#00468e] rounded-lg font-bold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Learn More
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          {/* <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div> */}
        </div>
      </div>
    </section>
  );
};

export default WhyKiraSection;
"use client";

import React from "react";
import Link from "next/link";
import TradingViewTicker from "./ui/TradingViewTicker";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/Hero.webp")`,
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative min-h-[60vh] flex items-center justify-center py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Content */}
          <div className="text-center space-y-5 z-10">
            {/* SCA Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 animate-fadeInUp">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-bold text-white tracking-wide">
                SCA CAT-1 Licensed Broker
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1
                className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight animate-fadeInUp"
                style={{ animationDelay: "0.1s" }}
              >
                Trade CFDs With A{" "}
                <span className="block text-white/95 mt-2">
                  UAE-Based SCA-Licensed Broker
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto font-medium tracking-wide animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              10,000+ Instruments On MT5 & CQG. Transparent Pricing. Local
              Support.
              <span className="block mt-2 text-white/85">
                Funds Protected In Segregated Accounts. Islamic Accounts
                Available.
              </span>
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center animate-fadeInUp pt-2"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/open-account"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-[#00468e] bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Open a Live Account</span>
                <div className="absolute inset-0 bg-linear-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/demo-account"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-xl"
              >
                <span className="relative z-10">Try a Demo</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            {/* <div className="grid grid-cols-3 gap-4 pt-5 max-w-2xl mx-auto border-t border-white/20 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">10K+</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">Instruments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">24/5</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">100%</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">Regulated</div>
              </div>
            </div> */}

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
            <div
              className="absolute bottom-1/4 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse pointer-events-none"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* TradingView Ticker - */}
      <div className="relative z-20">
        <TradingViewTicker />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

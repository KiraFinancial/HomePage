"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

const PlatformsSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00468e] mb-3">
            Trade Your Way
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Choose from industry-leading platforms designed for professional
            traders
          </p>
        </div>

        {/* Platforms */}
        <div className="space-y-12">
          {/* MetaTrader 5 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-10">
              {/* Left: Content */}
              <div className="order-2 lg:order-1 space-y-6">
                {/* Logo */}
                <div className="mb-4">
                  <Image
                    src="/metatrader5.webp"
                    alt="MetaTrader 5"
                    width={200}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <Feature text="Advanced multi-asset trading platform" />
                  <Feature text="Real-time market analysis" />
                  <Feature text="Powerful charting tools" />
                  <Feature text="Automated trading support" />
                  <Feature text="Secure and high-performance execution" />
                </div>

                {/* Download Buttons */}
                <div className="pt-4 space-y-4">
                  <Link
                    href="https://download.terminal.free/cdn/web/kira.financial.brokers/mt5/kirafinancialbrokers5setup.exe"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#00468e] text-white rounded-lg font-semibold hover:bg-[#003870] transition-all duration-300 hover:shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download MT5
                  </Link>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en&referrer=ref_id%3d5190077058232019571%26server%3dKiraFinancialBrokers-Live"
                      target="_blank"
                      className="transition-transform hover:scale-105"
                    >
                      <Image
                        src="/play_store.svg"
                        alt="Get it on Google Play"
                        width={135}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </Link>
                    <Link
                      href="https://apps.apple.com/us/app/metatrader-5/id413251709"
                      target="_blank"
                      className="transition-transform hover:scale-105"
                    >
                      <Image
                        src="/app_store.svg"
                        alt="Download on App Store"
                        width={135}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="order-1 lg:order-2">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/mt5.webp"
                    alt="MetaTrader 5 Platform"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CQG Trading Platform */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-10">
              {/* Left: Image */}
              <div className="order-1">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/cqg_mobile.webp"
                    alt="CQG Trading Platform"
                    width={520}
                    height={360}
                    className="w-full h-auto max-h-85 object-contain"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-2 space-y-6">
                {/* Logo */}
                <div className="mb-4">
                  <Image
                    src="/CQG-Platform.webp"
                    alt="CQG"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <Feature text="Advanced multi-asset trading platform" />
                  <Feature text="Real-time market data and analysis" />
                  <Feature text="Professional-grade charting tools" />
                  <Feature text="Advanced order types and execution" />
                  <Feature text="API and automated trading support" />
                </div>

                {/* Download Buttons */}
                <div className="pt-4 space-y-4">
                  <Link
                    href="https://m.cqg.com/cqg/desktop/logon"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#00468e] text-white rounded-lg font-semibold hover:bg-[#003870] transition-all duration-300 hover:shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download CQG
                  </Link>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.cqg.cqgm2.prod"
                      target="_blank"
                      className="transition-transform hover:scale-105"
                    >
                      <Image
                        src="/play_store.svg"
                        alt="Get it on Google Play"
                        width={135}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </Link>
                    <Link
                      href="https://apps.apple.com/us/app/cqg/id1084408963"
                      target="_blank"
                      className="transition-transform hover:scale-105"
                    >
                      <Image
                        src="/app_store.svg"
                        alt="Download on App Store"
                        width={135}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Component
const Feature = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <div className="shrink-0 mt-0.5">
      <div className="w-5 h-5 rounded-full bg-[#00468e] flex items-center justify-center">
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
    <p className="text-gray-700 leading-relaxed text-sm">{text}</p>
  </div>
);

export default PlatformsSection;

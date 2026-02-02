"use client";

import React, { useState, useEffect } from "react";

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 400);
  };

  if (!isVisible) return null;

  return (
    <div
      data-top-banner
      style={{ backgroundColor: "#00468e" }}
      className={`fixed top-0 left-0 right-0 z-50 text-white shadow-2xl transition-all duration-400 ease-out ${
        isClosing
          ? "opacity-0 -translate-y-full scale-95"
          : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[#00468e]" />

      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center py-2">
          {/* responsive text block */}
          <div className="w-full max-w-8xl mx-auto text-center px-6 sm:px-12">
            <p className="text-xs md:text-sm leading-tight text-white/95 font-light tracking-wide">
              Kira Financial Brokers L.L.C does not provide any investment
              advisory services or portfolio management services, and neither
              does it guarantee any returns. We do not accept any form of
              cryptocurrency or any digital currency in payments. Our website is
              www.kirafinancial.com, and we urge you to be wary of those fake
              companies or websites that claim to be KIRA. We are not
              responsible for losses resulting from the use of unauthorized
              sites or entities. Trading on financial markets is involved with a
              high risk of losses exceeding the initial investment, which might
              not be suitable for all investors. You should not start trading
              unless you fully understand the true extent of the risks involved.
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:rotate-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 group"
            aria-label="Close warning banner"
          >
            <svg
              className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export default TopBanner;
"use client";

import React from 'react';
import Image from 'next/image';

const PaymentMethodsSection = () => {
  const paymentMethods = [
    {
      name: "Visa",
      logo: "/visa-svg.svg",
      alt: "Visa Card"
    },
    {
      name: "Mastercard",
      logo: "/mastercard-svg.svg",
      alt: "Mastercard"
    },
    {
      name: "Bank Transfer",
      logo: "/bank-transfer.png",
      alt: "Bank Transfer"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-[#00468e] mb-2">
            Trusted Payment Methods
          </h2>
          <p className="text-base text-gray-600">
            We support secure, fast, and hassle-free deposits
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8ca1c4] flex items-center justify-center h-28"
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <Image
                  src={method.logo}
                  alt={method.alt}
                  width={140}
                  height={60}
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PaymentMethodsSection;
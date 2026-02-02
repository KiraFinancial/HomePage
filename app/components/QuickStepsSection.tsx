"use client";

import React from 'react';
import Link from 'next/link';
import { UserCheck, CreditCard, LineChart, ArrowRight, Clock } from 'lucide-react';

const QuickStepsSection = () => {
  const steps = [
    {
      icon: UserCheck,
      number: "1",
      title: "CREATE YOUR ACCOUNT",
      description: "Sign up with your email and ID in minutes",
    },
    {
      icon: CreditCard,
      number: "2",
      title: "MAKE YOUR FIRST DEPOSIT",
      description: "Add funds securely with your preferred method",
    },
    {
      icon: LineChart,
      number: "3",
      title: "START TRADING",
      description: "Access 10,000+ markets instantly",
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#00468e] mb-2">
            Start in 3 Quick Steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#8ca1c4] transition-all duration-300 hover:shadow-lg">
                  
                  {/* Icon and Number */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-[#00468e] flex items-center justify-center shadow-md">
                        <Icon className="w-9 h-9 text-white" strokeWidth={2} />
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-[#00468e] flex items-center justify-center">
                        <span className="text-[#00468e] font-black text-sm">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-[#00468e] mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 z-10">
                    <ArrowRight className="w-6 h-6 text-[#8ca1c4]" strokeWidth={2.5} />
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/open-account"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00468e] text-white rounded-lg font-semibold hover:bg-[#003870] transition-all duration-300 hover:shadow-lg"
          >
            <Clock className="w-5 h-5" />
            <span>Takes under 5 minutes</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default QuickStepsSection;
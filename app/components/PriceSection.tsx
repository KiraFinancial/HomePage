"use client";

import React from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  Globe, 
  User, 
  Monitor, 
  Smartphone, 
  Headphones,
  UserCheck,
  Shield,
  Users,
  Award,
  Zap
} from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Standard",
      subtitle: "For beginners ready to access live markets with full tools.",
      headerBg: "#00468e",
      iconBg: "#00468e",
      buttonBg: "#00468e",
      buttonHover: "#003870",
      popular: false,
      features: [
        { icon: TrendingUp, title: "Leverage", desc: "Up to 1:400" },
        { icon: Globe, title: "Live Market Access", desc: "Real-time trading with global markets" },
        { icon: User, title: "Suitable For", desc: "New traders starting their journey" },
        { icon: Monitor, title: "Platform Access", desc: "MT5 & CQG WebTrader" },
        { icon: Smartphone, title: "Device Compatibility", desc: "Mobile, desktop, and tablet" },
        { icon: Headphones, title: "Support", desc: "24×5 customer support" },
      ],
      buttonText: "Start with Standard",
      link: "https://login.kirafinancial.com/register/"
    },
    {
      name: "Pro",
      subtitle: "For full-time traders who want more control, tools, and speed.",
      headerBg: "#8ca1c4",
      iconBg: "#00468e",
      buttonBg: "#00468e",
      buttonHover: "#003870",
      popular: true,
      features: [
        { icon: TrendingUp, title: "Leverage", desc: "Up to 1:400" },
        { icon: Globe, title: "Live Market Access", desc: "Real-time trading with global markets" },
        { icon: UserCheck, title: "Suitable For", desc: "Professional full-time traders" },
        { icon: Monitor, title: "Platform Access", desc: "MT5 & CQG WebTrader" },
        { icon: Smartphone, title: "Device Compatibility", desc: "Mobile, desktop, and tablet" },
        { icon: Shield, title: "Premium Support", desc: "Dedicated RM & 24×5 Support" },
      ],
      buttonText: "Go Pro Now",
      link: "https://login.kirafinancial.com/register/"
    },
    {
      name: "Premium",
      subtitle: "For pros needing speed, volume handling, and personal support.",
      headerBg: "#1a1a1a",
      iconBg: "#1a1a1a",
      buttonBg: "#1a1a1a",
      buttonHover: "#00468e",
      popular: false,
      features: [
        { icon: TrendingUp, title: "Leverage", desc: "Up to 1:400" },
        { icon: Globe, title: "Live Market Access", desc: "Real-time trading with global markets" },
        { icon: Award, title: "Suitable For", desc: "High volume institutional traders" },
        { icon: Monitor, title: "Platform Access", desc: "MT5 & CQG WebTrader" },
        { icon: Smartphone, title: "Device Compatibility", desc: "Mobile, desktop, and tablet" },
        { icon: Users, title: "Elite Support", desc: "Dedicated RM & Sales Trader — 24×5 Support" },
      ],
      buttonText: "Unlock Premium Access",
      link: "https://login.kirafinancial.com/register/"
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00468e] mb-3">
            Choose Your Account Type
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the account that matches your trading style and experience level
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#8ca1c4]"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-8 -right-10 rotate-45 bg-[#00468e] text-white px-12 py-2 text-xs font-bold shadow-lg z-10">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div
                className="text-center pt-8 px-6 pb-6 text-white"
                style={{ backgroundColor: plan.headerBg }}
              >
                <h3 className="text-2xl font-black mb-3">{plan.name}</h3>
                <p className="text-sm leading-relaxed opacity-95">
                  {plan.subtitle}
                </p>
              </div>

              {/* Features */}
              <div className="p-6 grow space-y-4">
                {plan.features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex gap-4 pb-4 border-b border-gray-100 last:border-none last:pb-0">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: plan.iconBg }}
                      >
                        <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="grow">
                        <div className="font-bold text-gray-900 text-sm mb-1">
                          {feature.title}
                        </div>
                        <div className="text-gray-600 text-xs leading-relaxed">
                          {feature.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="p-6 pt-0">
                <Link
                  href={plan.link}
                  className="block w-full py-4 rounded-xl text-white font-bold text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ backgroundColor: plan.buttonBg }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = plan.buttonHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = plan.buttonBg;
                  }}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default PricingSection;
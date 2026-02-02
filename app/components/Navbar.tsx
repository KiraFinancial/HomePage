'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [topBannerHeight, setTopBannerHeight] = useState(0);
  
  // Timers for delayed close to prevent flickering
  const [productsCloseTimer, setProductsCloseTimer] = useState<NodeJS.Timeout | null>(null);
  const [aboutCloseTimer, setAboutCloseTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check if top banner exists and get its height
    const checkTopBanner = () => {
      const banner = document.querySelector('[data-top-banner]');
      if (banner) {
        setTopBannerHeight(banner.clientHeight);
      } else {
        setTopBannerHeight(0);
      }
    };

    checkTopBanner();
    window.addEventListener('scroll', handleScroll);
    
    // Re-check banner height periodically in case it changes
    const interval = setInterval(checkTopBanner, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Improved dropdown handlers with delay
  const handleProductsEnter = () => {
    if (productsCloseTimer) {
      clearTimeout(productsCloseTimer);
      setProductsCloseTimer(null);
    }
    setIsProductsOpen(true);
  };

  const handleProductsLeave = () => {
    const timer = setTimeout(() => {
      setIsProductsOpen(false);
    }, 150);
    setProductsCloseTimer(timer);
  };

  const handleAboutEnter = () => {
    if (aboutCloseTimer) {
      clearTimeout(aboutCloseTimer);
      setAboutCloseTimer(null);
    }
    setIsAboutOpen(true);
  };

  const handleAboutLeave = () => {
    const timer = setTimeout(() => {
      setIsAboutOpen(false);
    }, 150);
    setAboutCloseTimer(timer);
  };

  return (
    <>
      {/* SCA CAT-1 compliance banner*/}
      <div 
className="fixed left-0 right-0 z-40 bg-[#00468e]  border-b border-white/10"
        style={{ top: `${topBannerHeight}px` }}
        data-sca-banner
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-xs md:text-sm font-bold text-white tracking-wide">
                SCA CAT-1 Licensed & Regulated Broker – United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#00468e] shadow-xl'
            : 'bg-white shadow-md'
        }`}
        style={{ 
          top: topBannerHeight > 0 ? `${topBannerHeight + 36}px` : '36px' // 36px is approximate SCA banner height
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0 relative group">
              <div className="relative w-32 h-12 md:w-40 md:h-14">
                {/* White logo for scrolled state */}
                <Image
                  src="/kira_logo_white.svg"
                  alt="KIRA Logo"
                  fill
                  className={`object-contain transition-opacity duration-300 ${
                    isScrolled ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority
                />
                {/* Colored logo for default state */}
                <Image
                  src="/kira_logo.svg"
                  alt="KIRA Logo"
                  fill
                  className={`object-contain transition-opacity duration-300 ${
                    isScrolled ? 'opacity-0' : 'opacity-100'
                  }`}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Products & Tools Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleProductsEnter}
                onMouseLeave={handleProductsLeave}
              >
                <button
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                    isScrolled
                      ? 'text-white hover:bg-white/15 hover:shadow-lg'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-[#00468e]'
                  }`}
                >
                  Products & Tools
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isProductsOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu with improved animation */}
                {isProductsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-137.5 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                    style={{
                      animation: 'dropdownSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                    }}
                  >
                    <div className="grid grid-cols-2 gap-0">
                      {/* Market Instruments */}
                      <div className="p-6 border-r border-gray-100 bg-linear-to-br from-gray-50 to-white">
                        <h3 className="text-xs font-bold text-[#00468e] uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 bg-[#00468e] rounded-full"></span>
                          Market Instruments
                        </h3>
                        <ul className="space-y-1">
                          <li>
                            <Link href="/forex" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#00468e] transition-colors py-2 px-2 rounded-md hover:bg-blue-50 group">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                              Forex
                            </Link>
                          </li>
                          <li>
                            <Link href="/indices" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#00468e] transition-colors py-2 px-2 rounded-md hover:bg-blue-50 group">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                              Indices
                            </Link>
                          </li>
                          <li>
                            <Link href="/commodities" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#00468e] transition-colors py-2 px-2 rounded-md hover:bg-blue-50 group">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                              Commodities
                            </Link>
                          </li>
                          <li>
                            <Link href="/stocks" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#00468e] transition-colors py-2 px-2 rounded-md hover:bg-blue-50 group">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                              Stocks
                            </Link>
                          </li>
                          <li>
                            <Link href="/etf" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#00468e] transition-colors py-2 px-2 rounded-md hover:bg-blue-50 group">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                              ETF
                            </Link>
                          </li>
                          <li>
                            <Link href="/futures" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#00468e] transition-colors py-2 px-2 rounded-md hover:bg-blue-50 group">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                              Futures
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Market Information */}
                      <div className="p-6 bg-white">
                        <h3 className="text-xs font-bold text-[#00468e] uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 bg-[#00468e] rounded-full"></span>
                          Market Information
                        </h3>
                        <ul className="space-y-1">
                          <li>
                            <Link href="/deposits-withdrawals" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#00468e] transition-colors py-2 px-2 rounded-md hover:bg-blue-50 group">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                              Deposit & Withdrawals
                            </Link>
                          </li>
                          <li>
                            <Link href="/economic-calendar" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#00468e] transition-colors py-2 px-2 rounded-md hover:bg-blue-50 group">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                              Economic Calendar
                            </Link>
                          </li>
                          <li>
                            <Link href="/holiday-hours" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#00468e] transition-colors py-2 px-2 rounded-md hover:bg-blue-50 group">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                              Holiday Hours
                            </Link>
                          </li>
                          <li>
                            <Link href="/expiry-dates" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#00468e] transition-colors py-2 px-2 rounded-md hover:bg-blue-50 group">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                              Expiry Dates
                            </Link>
                          </li>
                          <li>
                            <Link href="/financing-fees" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#00468e] transition-colors py-2 px-2 rounded-md hover:bg-blue-50 group">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                              Financing Fees
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Regular Links */}
              <Link
                href="/account"
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? 'text-white hover:bg-white/15 hover:shadow-lg'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-[#00468e]'
                }`}
              >
                Account
              </Link>

              <Link
                href="/institutional"
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? 'text-white hover:bg-white/15 hover:shadow-lg'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-[#00468e]'
                }`}
              >
                Institutional
              </Link>

              <Link
                href="/platform"
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? 'text-white hover:bg-white/15 hover:shadow-lg'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-[#00468e]'
                }`}
              >
                Platform
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleAboutEnter}
                onMouseLeave={handleAboutLeave}
              >
                <button
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                    isScrolled
                      ? 'text-white hover:bg-white/15 hover:shadow-lg'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-[#00468e]'
                  }`}
                >
                  About
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isAboutOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isAboutOpen && (
                  <div 
                    className="absolute top-full right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                    style={{
                      animation: 'dropdownSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                    }}
                  >
                    <div className="py-2">
                      <Link href="/news" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#00468e] transition-colors group">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#00468e] transition-colors"></span>
                        News
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="https://login.kirafinancial.com/login" target='_blank'
                className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 border-2 ${
                  isScrolled
                    ? 'text-white border-white/30 hover:bg-white hover:text-[#00468e] shadow-lg hover:shadow-xl'
                    : 'text-[#00468e] border-[#00468e] hover:bg-[#00468e] hover:text-white shadow-md hover:shadow-lg'
                }`}
              >
                LOGIN
              </Link>
              <Link
                href="https://login.kirafinancial.com/register/" target='_blank'
                className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  isScrolled
                    ? 'text-[#00468e] bg-white hover:bg-gray-100'
                    : 'text-white bg-linear-to-r from-[#00468e] to-[#0056b3] hover:from-[#003870] hover:to-[#00468e]'
                }`}
              >
                LIVE TRADING
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className={`w-6 h-6 transition-colors ${isScrolled ? 'text-white' : 'text-gray-700'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl" style={{
            animation: 'mobileSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}>
            <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-180px)] overflow-y-auto">
              <Link href="/account" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#00468e] rounded-lg transition-colors">
                Account
              </Link>
              <Link href="/institutional" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#00468e] rounded-lg transition-colors">
                Institutional
              </Link>
              <Link href="/platform" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#00468e] rounded-lg transition-colors">
                Platform
              </Link>
              <Link href="/news" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#00468e] rounded-lg transition-colors">
                News
              </Link>
              
              <div className="pt-4 space-y-2 border-t border-gray-200">
                <Link href="/login" className="block px-4 py-3 text-sm font-bold text-center text-[#00468e] border-2 border-[#00468e] rounded-lg hover:bg-[#00468e] hover:text-white transition-all">
                  LOGIN
                </Link>
                <Link href="/live-trading" className="block px-4 py-3 text-sm font-bold text-center text-white bg-linear-to-r from-[#00468e] to-[#0056b3] rounded-lg hover:from-[#003870] hover:to-[#00468e] transition-all">
                  LIVE TRADING
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Dynamic spacer based on banner heights */}
      <div style={{ height: topBannerHeight > 0 ? `${topBannerHeight + 116}px` : '116px' }} />

      <style jsx>{`
        @keyframes dropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(-12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes mobileSlideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
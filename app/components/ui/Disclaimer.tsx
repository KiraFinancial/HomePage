import React from "react";

const Disclaimer = () => {
  return (
    <>
      {/* Legal Information */}
      <div className="mt-12 pt-8 border-t border-white/20">
        <div className="space-y-6 text-sm text-white/80 leading-relaxed">
          {/* Company Registration */}
          <p>
            <strong className="text-white">
              KIRA Financial Brokers LLC ("KIRA")
            </strong>{" "}
            is a limited liability company duly incorporated under the laws of
            the United Arab Emirates and regulated by the Securities and
            Commodities Authority (SCA) of the UAE under License No.
            20200000244. This license authorizes KIRA to conduct activities
            related to Trading in Global Markets and Trading in Non-Regulated
            Derivative Contracts and Currencies in the Spot Market, in
            accordance with applicable UAE laws and SCA regulations.
          </p>

          <p>
            KIRA is registered with the Dubai Department of Economy and Tourism
            (formerly the Department of Economic Development) under License No.
            1386998. The Company's registered office is located at Suite 112,
            Building No. 4, Gold & Diamond Park, Sheikh Zayed Road, Dubai,
            United Arab Emirates.
          </p>

          {/* Confidentiality Notice */}
          <div>
            <h4 className="text-white font-bold mb-2">
              Confidentiality Notice
            </h4>
            <p>
              All content available on this website, including but not limited
              to text, graphics, downloads, and other materials, is the property
              of KIRA and may contain proprietary, confidential, or legally
              protected information. Unauthorized access, use, reproduction,
              modification, or distribution of any content is strictly
              prohibited and may result in civil or criminal liability under
              applicable laws.
            </p>
            <p className="mt-2">
              By accessing or using this website, you agree to use the
              information solely for lawful purposes and to refrain from any
              misuse, misrepresentation, or unauthorized exploitation of the
              content.
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="text-white font-bold mb-2">Disclaimer</h4>
            <p>
              The information, views, data, and opinions made available on this
              website are provided solely for general informational,
              educational, and research purposes. Nothing on this website
              constitutes, or should be construed as, investment advice,
              financial advice, legal advice, tax advice, a solicitation, an
              endorsement, or a recommendation to buy, sell, hold, or engage in
              any investment or financial transaction.
            </p>
            <p className="mt-2">
              KIRA does not assess the suitability, appropriateness, or quality
              of any investment, strategy, product, or service for any
              individual or entity.
            </p>
            <p className="mt-2">
              The information provided is not tailored to your personal
              financial circumstances, objectives, or risk profile. Before
              making any investment decision or opening an account, you should
              seek advice from independent and qualified professional advisors,
              including financial, legal, and tax advisors, and conduct your own
              due diligence.
            </p>
            <p className="mt-2">
              KIRA accepts no responsibility or liability for any decisions
              made, actions taken, or results obtained by you or any third party
              based on, or in reliance upon, the information contained on this
              website.
            </p>
            <p className="mt-2">
              KIRA shall not be responsible for the content, advice, services,
              or conduct of any third party, including but not limited to
              brokers, analysts, introducing brokers, marketing partners, or
              other financial professionals.
            </p>
            <p className="mt-2">
              Internet-based communications and electronic systems are subject
              to risks, including interruptions, delays, data corruption,
              unauthorized access, and cyber-security threats. KIRA does not
              warrant the accuracy, completeness, or timeliness of the
              information provided and shall not be liable for any losses or
              damages arising from reliance on website content or system-related
              issues.
            </p>
          </div>

          {/* Risk Warning */}
          <div>
            <h4 className="text-white font-bold mb-2">Risk Warning</h4>
            <p>
              Trading in Contracts for Difference (CFDs), foreign exchange
              (Forex), commodities, and other leveraged financial instruments
              involves a high degree of risk and may result in the loss of all
              or more than your invested capital. Such products are complex and
              may not be suitable for all investors.
            </p>
            <p className="mt-2">
              You should ensure that you fully understand the nature of these
              products and the risks involved before engaging in any trading
              activity and seek independent professional advice where necessary.
            </p>
            <p className="mt-2">
              KIRA does not provide trading education, investment training, or
              portfolio management services. Clients are solely responsible for
              acquiring sufficient knowledge, experience, and professional
              guidance prior to undertaking any trading or investment decisions.
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Disclaimer;

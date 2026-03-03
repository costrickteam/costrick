import { Link } from "react-router-dom";

export default function TermsConditions() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>
            <span className="mx-2">/</span>Terms &amp; Conditions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Costrick Terms and Conditions
          </h1>
          <p className="mt-4 text-gray-400">Last updated: 24 August 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-gray max-w-none space-y-10">
          <p className="text-gray-700 leading-relaxed text-lg">
            We invite you to carefully read these General Terms and Conditions
            of Use ("Terms") for the Costrick platform, including our website
            (www.costrick.com) and upcoming mobile application ("Platform").
            These Terms govern the relationship between Costrick Ltd
            ("Costrick", "we", "us", "our"), a company registered in Scotland
            (company number SC806470) at 6 Ristol Road, Glasgow, G13 1UY, and
            users of the Platform ("User", "you"). By accessing or using the
            Platform, you agree to be bound by these Terms.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Purpose of the Platform
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Costrick Platform is a business-to-business (B2B) service
              designed to connect convenience stores with wholesalers, enabling
              retailers to compare products, check availability, and place
              orders efficiently. The Platform supports account registration,
              order processing, and access to promotional offers. Additional
              policies, such as our{" "}
              <Link
                to="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                to="/cookie-policy"
                className="text-blue-600 hover:underline"
              >
                Cookie Policy
              </Link>
              , are incorporated by reference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Modification of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to amend these Terms at our discretion.
              Changes will be posted on the Platform with the updated date. Your
              continued use of the Platform after changes are posted constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Definitions and Interpretation
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Platform:</strong> Refers to www.costrick.com and the
                upcoming Costrick mobile app.
              </li>
              <li>
                <strong>User:</strong> An individual or entity accessing the
                Platform.
              </li>
              <li>
                <strong>Personal Data:</strong> Information relating to an
                identified or identifiable individual.
              </li>
              <li>
                <strong>Content:</strong> All materials on the Platform,
                including text, graphics, logos, and software.
              </li>
              <li>
                <strong>Wholesaler:</strong> A supplier partnered with Costrick
                to provide products via the Platform.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Eligibility and Access
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Platform is intended for UK-based convenience store owners,
              managers, or authorised staff aged 18 or over. We grant you a
              limited, non-exclusive, revocable licence to access the Platform
              for business purposes. This licence does not permit:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Resale or commercial use of Platform Content without permission.
              </li>
              <li>
                Copying, modifying, or reverse-engineering any Content or
                software.
              </li>
              <li>
                Using data mining tools, bots, or similar technologies to
                extract data.
              </li>
              <li>
                Reproducing, distributing, or publishing Content without our
                consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Account Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To use the Platform, you must register an account with accurate
              details. You are responsible for maintaining the confidentiality
              of your account credentials and restricting access to your device.
              If your account is compromised, notify us immediately at{" "}
              <a
                href="mailto:contact@costrick.com"
                className="text-blue-600 hover:underline"
              >
                contact@costrick.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All Content on the Platform, including trademarks, designs, text,
              and software, is owned by Costrick or its licensors and protected
              by UK and international intellectual property laws. The "Costrick"
              name and logo are our trademarks and may not be used without prior
              written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Your Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to provide accurate, current, and complete information
              when registering or using the Platform. You must not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Engage in unlawful activities or breach others' rights.</li>
              <li>Impersonate others or misrepresent your affiliation.</li>
              <li>Upload harmful content, such as viruses or malware.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Contract Formation and Payment
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Platform facilitates orders between you and wholesalers. Your
              order constitutes an offer to purchase, which the wholesaler
              accepts upon confirming the order. We accept major debit/credit
              cards and digital payment methods (e.g., PayPal). Payments are
              processed at order placement, subject to authorisation by your
              payment provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Delivery and Risk
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Delivery is handled by wholesalers or their logistics partners.
              Risk of loss or damage passes to you upon delivery, as per the
              wholesaler's terms. We are not liable for delays or failures
              caused by circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of Scotland. If you are a
              Consumer, you may bring proceedings in Scotland, England, Wales,
              or Northern Ireland, depending on your residence. Non-Consumers
              agree to the exclusive jurisdiction of Scottish courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are not liable for losses arising from your use of the
              Platform, except where caused by our negligence or breach of these
              Terms. We do not exclude liability for death, personal injury,
              fraud, or defective services under the Consumer Rights Act 2015.
              For non-Consumers, our liability is limited to the price of
              services purchased.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Disclaimers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Platform and its Content are provided "as is" without
              warranties, express or implied, to the extent permitted by law. We
              do not guarantee that the Platform will be uninterrupted,
              error-free, or free from viruses. You use the Platform at your own
              risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may suspend or terminate your access to the Platform without
              notice if you breach these Terms or applicable law. Upon
              termination, these Terms continue to apply to prior actions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Consumer Statutory Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you are a Consumer, your statutory rights, including
              cancellation and refund rights, are unaffected. For details, visit{" "}
              <a
                href="https://www.citizensadvice.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.citizensadvice.org.uk
              </a>
              .
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 rounded-2xl p-8 mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@costrick.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@costrick.com
                </a>
              </p>
              <p>
                <strong>Post:</strong> Costrick Ltd, 6 Ristol Road, Glasgow, G13
                1UY, Scotland
              </p>
              <p>
                <strong>Phone:</strong> 0141 959 1098
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

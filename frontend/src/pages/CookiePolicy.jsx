import { Link } from "react-router-dom";

export default function CookiePolicy() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>
            <span className="mx-2">/</span>Cookie Policy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Costrick Cookie Policy
          </h1>
          <p className="mt-4 text-gray-400">
            Version 1.0 / August 2025 / Business-to-Business Platform
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-gray max-w-none space-y-10">
          <p className="text-gray-700 leading-relaxed text-lg">
            At Costrick Ltd, a company registered in Scotland (company number
            SC806470) at 6 Ristol Road, Glasgow, G13 1UY, we strive to make your
            experience on our website (www.costrick.com) and upcoming mobile
            application as seamless and user-friendly as possible. This Cookie
            Policy explains how we use cookies and similar technologies to
            enhance your interaction with our Platform.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files stored on your device (e.g.,
              computer, smartphone, or tablet) when you visit our Platform. They
              contain information about your browsing activity, such as the
              pages you visit or preferences you select, helping us improve
              functionality and tailor your experience. Cookies do not typically
              store personally identifiable information, but they may link to
              other data we hold.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We also use similar technologies, such as pixel tags or local
              storage, which serve comparable purposes. Cookies may be set by us
              ("first-party cookies") or by trusted third-party providers
              ("third-party cookies").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Why We Use Cookies
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Power Essential Functions:</strong> Enable core features
                like account login, order placement, and secure navigation.
              </li>
              <li>
                <strong>Personalize Your Experience:</strong> Remember your
                preferences, such as language or region settings.
              </li>
              <li>
                <strong>Improve Our Services:</strong> Analyze how users
                interact with our Platform to enhance design, speed, and
                functionality.
              </li>
              <li>
                <strong>Deliver Relevant Promotions:</strong> Provide targeted
                offers or advertisements to keep you informed about products and
                services matching your interests.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              How Long Do Cookies Last?
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Session Cookies:</strong> Temporary files stored only
                until you close your browser, used for immediate functions like
                maintaining your login session.
              </li>
              <li>
                <strong>Persistent Cookies:</strong> Stored for a set period or
                until you delete them, used to remember preferences or track
                usage over time.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Types of Cookies We Use
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Strictly Necessary Cookies:</strong> Essential for the
                Platform's core operations. These cannot be disabled.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Gather anonymized data on
                how users navigate our Platform to help optimize performance.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Enhance your experience by
                saving preferences for a more personalized visit.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Enable targeted promotions
                and ads by tracking your interests and interactions.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              How to Manage Your Cookie Preferences
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have full control over how cookies are used on our Platform:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Cookie Settings Tool:</strong> Located at the bottom of
                www.costrick.com, this tool allows you to accept or reject
                cookies. You can update your preferences at any time.
              </li>
              <li>
                <strong>Browser Settings:</strong> Most browsers let you block
                or delete cookies. Instructions vary by browser — check your
                browser's help section for guidance.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Disabling cookies may limit some Platform features, such as
              personalized recommendations or order tracking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Your Data Protection Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under UK GDPR, you have rights over your personal data, including
              data linked to cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Access:</strong> Request a copy of your data.
              </li>
              <li>
                <strong>Rectification:</strong> Correct inaccurate or incomplete
                data.
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your data.
              </li>
              <li>
                <strong>Restriction:</strong> Limit how we process your data.
              </li>
              <li>
                <strong>Objection:</strong> Object to processing for marketing
                or other purposes.
              </li>
              <li>
                <strong>Data Portability:</strong> Receive your data in a
                structured, machine-readable format.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you believe our data practices infringe your rights, you can
              lodge a complaint with the UK Information Commissioner's Office
              (ICO) at{" "}
              <a
                href="https://www.ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.ico.org.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Updates to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy to reflect changes in our
              services, technology, or legal requirements. Updates will be
              posted on our website with the revised date.
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

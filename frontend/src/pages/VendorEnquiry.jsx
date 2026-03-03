import { Link } from "react-router-dom";

export default function VendorEnquiry() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>
            <span className="mx-2">/</span>Vendor Enquiry
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Costrick Vendor Enquiry
          </h1>
          <p className="mt-4 text-gray-400">
            Version 1.0 / August 2025 / Business-to-Business Platform
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Become a Costrick Supplier
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Costrick Ltd, a company registered in Scotland (company number
              SC806470) at 6 Ristol Road, Glasgow, G13 1UY, invites suppliers
              and creditors to join our B2B platform, connecting convenience
              store retailers and wholesalers across the UK. Our platform
              (www.costrick.com) and upcoming mobile application streamline
              transactions, inventory management, and supplier partnerships,
              fostering efficient and ethical business practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Why Partner with Costrick?
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Access to a Growing Network:</strong> Connect with
                convenience stores and wholesalers across the UK, expanding your
                market reach.
              </li>
              <li>
                <strong>Streamlined Operations:</strong> Use our digital
                platform for efficient order processing, invoicing, and
                inventory management.
              </li>
              <li>
                <strong>Ethical Standards:</strong> Align with our commitment to
                fair labour practices, transparency, and compliance with UK
                regulations.
              </li>
              <li>
                <strong>Support for Diverse Suppliers:</strong> We encourage
                applications from businesses led by women, BAME, LGBT, disabled
                individuals, charities, social enterprises, and community
                organizations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Onboarding Process
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact Us</h3>
                  <p className="text-gray-700">
                    Email{" "}
                    <a
                      href="mailto:vendors@costrick.com"
                      className="text-blue-600 hover:underline"
                    >
                      vendors@costrick.com
                    </a>{" "}
                    to express interest. Specify whether you are a supplier of
                    goods/services or a creditor.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Complete the Vendor Enquiry Form
                  </h3>
                  <p className="text-gray-700">
                    We will provide an electronic form to collect your business
                    details, payment information, and anti-slavery compliance
                    confirmation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Anti-Slavery Verification
                  </h3>
                  <p className="text-gray-700">
                    Submit evidence of your commitment to preventing modern
                    slavery, such as a Modern Slavery Statement or outline of
                    your policies.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Due Diligence and Approval
                  </h3>
                  <p className="text-gray-700">
                    Our team will review your submission, verify compliance with
                    our Supplier Code of Conduct, and conduct checks to prevent
                    fraud.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Payment Setup</h3>
                  <p className="text-gray-700">
                    Payments are made via BACS for security and efficiency,
                    requiring your bank or building society details.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Our Expectations
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Compliance with Anti-Slavery Laws:</strong> Adhere to
                our Supplier Code of Conduct, which prohibits forced labour,
                child labour, worker-paid recruitment fees, and document
                retention.
              </li>
              <li>
                <strong>Data Protection:</strong> Provide accurate business and
                payment details, treated as 'Personal Data' under the Data
                Protection Act 2018 and UK GDPR.
              </li>
              <li>
                <strong>Transparency:</strong> Maintain clear records of labour
                practices and supply chain due diligence.
              </li>
              <li>
                <strong>Diverse Supplier Support:</strong> We encourage
                businesses owned or led by underrepresented groups to join.
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 rounded-2xl p-8 mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:vendors@costrick.com"
                  className="text-blue-600 hover:underline"
                >
                  vendors@costrick.com
                </a>
              </p>
              <p>
                <strong>Post:</strong> Costrick Ltd, 6 Ristol Road, Glasgow, G13
                1UY, Scotland
              </p>
              <p>
                <strong>Phone:</strong> 0141 959 1098
              </p>
              <p>
                <strong>Anonymous Reporting:</strong>{" "}
                <a
                  href="https://www.costrick.com/speak-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  www.costrick.com/speak-up
                </a>
              </p>
            </div>
          </section>

          {/* Learn More */}
          <section className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Learn More
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link
                  to="/modern-slavery"
                  className="text-blue-600 hover:underline"
                >
                  Modern Slavery Statement
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-blue-600 hover:underline"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

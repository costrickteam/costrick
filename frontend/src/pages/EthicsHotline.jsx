import { Link } from "react-router-dom";

export default function EthicsHotline() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>
            <span className="mx-2">/</span>Ethics Hotline for Suppliers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Confidential Ethics Hotline for Suppliers
          </h1>
          <p className="mt-4 text-gray-400">
            Version 1.1 / August 2025 / Business-to-Business Platform
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Welcome to Our Ethics Hotline
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Costrick Ltd, a company registered in Scotland (company number
              SC806470) at 6 Ristol Road, Glasgow, G13 1UY, we are dedicated to
              upholding the highest standards of ethics and integrity in all our
              operations. As a B2B platform connecting convenience store
              retailers and wholesalers across the UK, we recognize the
              importance of a transparent and accountable supply chain.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This hotline is a secure, independent tool available exclusively
              for suppliers who have reason to believe that a Costrick employee
              or another supplier is in violation of these policies. Reports
              submitted through the hotline are handled with the utmost
              confidentiality and anonymity, ensuring you can raise concerns
              without fear of retaliation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Why Use the Ethics Hotline?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The hotline is particularly useful for addressing:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Policy Violations:</strong> Breaches of our Code of
                Ethics or Supplier Code of Conduct, including conflicts of
                interest, improper gifts, or misuse of confidential information.
              </li>
              <li>
                <strong>Legal and Regulatory Issues:</strong> Suspected
                non-compliance with antitrust laws, anti-bribery regulations
                (e.g., UK Bribery Act), insider trading restrictions, accounting
                irregularities, or health, safety, and environmental standards.
              </li>
              <li>
                <strong>Human Rights Concerns:</strong> Instances of modern
                slavery, forced labour, child labour, discrimination,
                harassment, or unsafe working conditions.
              </li>
              <li>
                <strong>Personal Misconduct:</strong> Issues involving Costrick
                employees or supplier staff, such as discrimination, sexual
                harassment, or unethical business practices.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              How to Report
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The platform is accessible 24/7 and supports multiple languages.
              You can report via:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Online Form
                </h3>
                <p className="text-sm text-gray-600">
                  User-friendly web interface with file uploads
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Telephone</h3>
                <p className="text-sm text-gray-600">
                  UK Toll-Free: 0800 123 4567
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.953 5.469a1.5 1.5 0 0 1-1.594 0L2.25 6.75"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Email / Post
                </h3>
                <p className="text-sm text-gray-600">contact@costrick.com</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              What Happens After a Report?
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Initial Review
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Reports are reviewed by our independent Ethics Committee to
                    determine validity and assign to the appropriate team.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Investigation</h3>
                  <p className="text-gray-700 text-sm">
                    We conduct thorough, unbiased investigations, interviewing
                    relevant parties and gathering evidence as needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Resolution and Remediation
                  </h3>
                  <p className="text-gray-700 text-sm">
                    If a violation is confirmed, we take corrective action,
                    which may include disciplinary measures, policy updates, or
                    supplier termination.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Follow-Up</h3>
                  <p className="text-gray-700 text-sm">
                    We track trends from reports to improve our policies and
                    training, ensuring continuous enhancement of our ethical
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 rounded-2xl p-8 mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Telephone (UK Toll-Free):</strong> 0800 123 4567
              </p>
              <p>
                <strong>International:</strong> +44 141 123 4567
              </p>
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
                <strong>Post:</strong> Costrick Ltd, Ethics Hotline, 6 Ristol
                Road, Glasgow, G13 1UY, Scotland
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
                  to="/vendor-code-of-conduct"
                  className="text-blue-600 hover:underline"
                >
                  Vendor Code of Conduct
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

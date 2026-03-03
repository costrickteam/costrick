import { Link } from "react-router-dom";

export default function VendorCodeOfConduct() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>
            <span className="mx-2">/</span>Vendor Code of Conduct
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Costrick Vendor Code of Conduct
          </h1>
          <p className="mt-4 text-gray-400">
            Version 1.0 / February 2026 / Business-to-Business Platform
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Costrick Vendor Code of Conduct ("Code") outlines Costrick
              Ltd's expectations for how its current and prospective suppliers
              conduct business. Costrick Ltd, a company registered in Scotland
              (company number SC806470) at 6 Ristol Road, Glasgow, G13 1UY,
              operates a B2B platform (www.costrick.com) connecting convenience
              store retailers and wholesalers across the UK. All suppliers
              providing goods or services to Costrick are required to understand
              and adhere to this Code, including aligning their policies,
              practices, and supply chains with these standards.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Suppliers must act with integrity, demonstrating a commitment to
              legal, ethical, safe, fair, and environmentally responsible
              business practices. Where this Code sets higher standards than
              local laws, suppliers must adhere to these standards within the
              framework of applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Ethical Business Practices
            </h2>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Anti-Bribery and Anti-Corruption
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Costrick has zero tolerance for bribery or corruption. Suppliers
              must comply with all applicable anti-bribery and anti-corruption
              laws, including the UK Bribery Act 2010. Suppliers are prohibited
              from offering, providing, authorizing, soliciting, or receiving
              "anything of value" to obtain or retain business, secure improper
              advantages, or influence improper performance.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Conflicts of Interest
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Suppliers must avoid conflicts of interest or the appearance
              thereof. Suppliers must disclose any potential conflicts to{" "}
              <a
                href="mailto:contact@costrick.com"
                className="text-blue-600 hover:underline"
              >
                contact@costrick.com
              </a>{" "}
              immediately.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Confidentiality, Privacy, and Data Protection
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Suppliers must protect confidential information and personal data
              accessed on behalf of Costrick. This includes adopting robust
              technical and organizational measures to comply with UK GDPR and
              the Data Protection Act 2018. Suppliers must report any data
              breaches promptly.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Responsible Sourcing of Minerals
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Suppliers providing products containing minerals (e.g., tantalum,
              tin, tungsten, or gold) must ensure these are not sourced from
              conflict-affected areas. Sourcing must align with the OECD Due
              Diligence Guidance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Labour and Human Rights
            </h2>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Wages and Benefits
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Suppliers must provide wages and benefits meeting or exceeding
              local legal requirements, including minimum wage, overtime pay,
              and legally mandated benefits. Suppliers are encouraged to pay a
              living wage where higher than the legal minimum.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Slavery, Forced Labour, and Human Trafficking
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Costrick does not tolerate slavery, forced labour, or human
              trafficking. Suppliers must comply with the UK Modern Slavery Act
              2015 and ensure no involuntary labour is used. Practices such as
              wage withholding, identity document retention, or movement
              restrictions are prohibited.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Child Labour
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Suppliers must not employ anyone under the legal minimum age for
              employment (typically 15, or higher if required by local law), per
              ILO Conventions 138 and 182. Suppliers must implement age
              verification and training to prevent child labour.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Freedom of Association
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Suppliers must respect workers' rights to freedom of association
              and collective bargaining, complying with local laws and ensuring
              workers can engage without fear of retaliation.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Respect, Inclusion, and Non-Discrimination
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Suppliers must treat workers with respect and dignity, maintaining
              a workplace free from discrimination, harassment, or abuse based
              on age, disability, ethnicity, gender, gender identity,
              nationality, race, sexual orientation, religion, or other
              protected characteristics.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Safe and Healthy Work Environment
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Suppliers must provide a safe and healthy workplace, complying
              with all applicable health and safety laws and providing free
              personal protective equipment. If accommodation is provided, it
              must be clean, safe, and equipped with emergency exits, fire
              safety measures, hot water, adequate ventilation, and reasonable
              access privileges.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Environmental Stewardship
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Energy and Emissions:</strong> Suppliers should track
                and mitigate energy use and greenhouse gas emissions. Adopt
                energy-efficient technologies and disclose emissions data upon
                request.
              </li>
              <li>
                <strong>Water:</strong> Suppliers should conserve and reuse
                water, ensuring operations do not restrict access to safe water
                for surrounding communities.
              </li>
              <li>
                <strong>Waste:</strong> Suppliers must minimize waste,
                particularly hazardous waste, and ensure safe handling, storage,
                and disposal.
              </li>
              <li>
                <strong>Material Restrictions:</strong> Suppliers must comply
                with laws restricting specific substances, ensuring safe
                handling and disposal.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Business Continuity and Emergency Preparedness
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Suppliers must maintain business continuity plans to ensure
              service resilience during emergencies (e.g., natural disasters,
              pandemics, or system outages). These plans should minimize
              disruptions to Costrick's operations and be shared upon request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Reporting and Compliance
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Suppliers must immediately report any inability to meet this
              Code's requirements. Violations must be remedied promptly, or
              Costrick may review or terminate the relationship. Suppliers can
              report concerns anonymously via our Ethics Hotline at{" "}
              <a
                href="https://www.costrick.ethicspoint.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.costrick.ethicspoint.com
              </a>{" "}
              or by calling 0800 123 4567 (UK). Retaliation against good-faith
              reporters is strictly prohibited.
            </p>
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
                <strong>Post:</strong> Costrick Ltd, 6 Ristol Road, Glasgow, G13
                1UY, Scotland
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
              <li>
                <Link
                  to="/ethics-hotline"
                  className="text-blue-600 hover:underline"
                >
                  Ethics Hotline for Suppliers
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

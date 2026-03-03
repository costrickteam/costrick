import { Link } from "react-router-dom";

export default function ModernSlavery() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>
            <span className="mx-2">/</span>Modern Slavery Statement
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Costrick Modern Slavery Statement 2026
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
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Costrick Ltd, a company registered in Scotland (company number
              SC806470) at 6 Ristol Road, Glasgow, G13 1UY, is committed to
              combating modern slavery and human trafficking in all its forms,
              including forced labour, bonded labour, child labour, and
              exploitation for personal or commercial gain. As a B2B platform
              connecting convenience store retailers and wholesalers, we
              recognize our responsibility to uphold human rights across our
              operations and supply chain, in line with the UK Modern Slavery
              Act 2015, the UN Guiding Principles on Business and Human Rights,
              and the International Labour Organization (ILO) Core Conventions.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This statement outlines the steps Costrick Ltd has taken during
              the financial year 2025–2026 to identify, prevent, and mitigate
              modern slavery risks within our operations and supply chain.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Our Business
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Costrick Ltd operates a digital platform (www.costrick.com) and an
              upcoming mobile application, facilitating efficient transactions
              and inventory management for convenience stores and wholesalers
              across the UK. Headquartered in Glasgow, Scotland, we employ a
              small team dedicated to supporting our platform's operations. Our
              supply chain involves partnerships with wholesalers, distributors,
              and logistics providers, primarily in the UK, with some sourcing
              from international suppliers in sectors such as food and
              beverages, consumer goods, and technology.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Our Policies
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Human Rights Policy:</strong> We adhere to the UN
                Guiding Principles, prohibiting forced labour, child labour, and
                discrimination.
              </li>
              <li>
                <strong>Supplier Code of Conduct:</strong> All suppliers must
                sign our Code of Conduct, which mandates compliance with
                anti-slavery laws.
              </li>
              <li>
                <strong>Responsible Sourcing Policy:</strong> This outlines
                requirements for ethical sourcing, including regular audits and
                due diligence.
              </li>
              <li>
                <strong>Whistleblowing Policy:</strong> We provide an anonymous
                reporting channel for employees, suppliers, and stakeholders.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Risk Assessment and Due Diligence
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Based on our 2025–2026 risk assessment, key modern slavery risks
              include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Supply Chain Risks:</strong> Potential for forced labour
                or exploitative practices in tier 1 and tier 2 suppliers.
              </li>
              <li>
                <strong>Vulnerable Groups:</strong> Migrant workers and
                temporary workers in logistics or distribution may face risks
                such as recruitment fees or wage withholding.
              </li>
              <li>
                <strong>Local Operations:</strong> While our UK-based operations
                have lower risk, we remain vigilant about agency workers or
                subcontractors.
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Due Diligence Processes
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Supplier Mapping:</strong> We maintain a list of tier 1
                suppliers and are working to map tier 2 suppliers.
              </li>
              <li>
                <strong>Supplier Onboarding:</strong> All new suppliers undergo
                due diligence, including signing our Supplier Code of Conduct.
              </li>
              <li>
                <strong>Risk-Based Audits:</strong> We conduct annual audits of
                high-risk suppliers, focusing on working conditions and
                recruitment practices.
              </li>
              <li>
                <strong>Contractual Requirements:</strong> Contracts include
                clauses mandating compliance with anti-slavery laws.
              </li>
              <li>
                <strong>Grievance Mechanisms:</strong> Our anonymous
                whistleblowing channel allows workers and stakeholders to report
                concerns.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Training and Capacity Building
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Employee Training:</strong> All staff complete annual
                e-learning modules on modern slavery. In 2025, 100% of our team
                completed this training.
              </li>
              <li>
                <strong>Supplier Training:</strong> New suppliers receive
                training on our Supplier Code of Conduct during onboarding. In
                2025, we trained 10 tier 1 suppliers.
              </li>
              <li>
                <strong>External Collaboration:</strong> We engage with industry
                bodies, such as the Ethical Trading Initiative, to stay informed
                on best practices.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Progress and Key Performance Indicators (KPIs)
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 font-semibold border-b">KPI</th>
                    <th className="px-4 py-3 font-semibold border-b">
                      2025–2026
                    </th>
                    <th className="px-4 py-3 font-semibold border-b">Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3">Forced Labour Cases</td>
                    <td className="px-4 py-3">0 confirmed</td>
                    <td className="px-4 py-3">Maintain 0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Non-Conformities</td>
                    <td className="px-4 py-3">1 (remediated)</td>
                    <td className="px-4 py-3">0 by 2026</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Supplier Training</td>
                    <td className="px-4 py-3">10 tier 1 suppliers</td>
                    <td className="px-4 py-3">15 by 2026</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Employee Training</td>
                    <td className="px-4 py-3">100% completion</td>
                    <td className="px-4 py-3">Maintain 100%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Grievances Reported</td>
                    <td className="px-4 py-3">0</td>
                    <td className="px-4 py-3">Maintain robust channels</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Looking Ahead
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For 2026–2027, we aim to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Expand supplier training to include all tier 1 and select tier 2
                suppliers.
              </li>
              <li>
                Enhance supply chain mapping to cover 100% of tier 2 suppliers.
              </li>
              <li>
                Strengthen partnerships with industry bodies to improve
                traceability and risk mitigation.
              </li>
              <li>Introduce quarterly reviews of high-risk suppliers.</li>
              <li>Maintain our commitment to zero recruitment fees by 2027.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Approval
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This statement has been approved by the Board of Directors of
              Costrick Ltd on 26 August 2025, reflecting our ongoing commitment
              to preventing modern slavery and ensuring ethical practices across
              our operations and supply chain.
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

import { Link } from "react-router-dom";

export default function CompanyInfo() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>
            <span className="mx-2">/</span>Company Information
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Company Information
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* What We Offer */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            What products or services we offer
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Costrick operates as a business-to-business (B2B) digital platform
              designed to revolutionize the way convenience stores interact with
              wholesalers and manufacturers. At its core, the company provides a
              Comparison-Shopping Engine (CSE) that serves as a centralised hub
              for convenience stores to access real-time information on products
              from various wholesalers. This includes comparing options,
              checking availability, discovering new items, and viewing
              promotions and offers, all within a single, user-friendly
              interface.
            </p>
            <p>
              The current platform is accessible via Chrome, Microsoft Edge, and
              Safari. Mobile applications will be available on both the App
              Store for Apple devices and Google Play for Android devices by
              2026. Website management and hosting services are outsourced
              through Costrick's developer team, ensuring seamless performance
              with features like 24/7 support, customisable payment gateways,
              and tools for creating online newsletters. The mobile app
              development and maintenance are handled internally by Costrick's
              technical and software teams.
            </p>
            <p>
              Beyond the core CSE, Costrick offers data monetisation services
              where anonymised insights on order patterns, popular products, and
              sales trends are collected and provided to wholesalers and
              manufacturers to inform their business decisions. Future
              expansions include advanced features powered by artificial
              intelligence (AI) and machine learning (ML), such as waste
              management features and systems for tracking expiration dates and
              reducing food and packaging waste, as well as image processing for
              product recognition.
            </p>
            <p>
              These services aim to digitise traditional processes, eliminating
              the need for physical leaflets and multiple browser tabs, thereby
              streamlining stock purchasing for small retailers. Costrick's
              offerings are geared toward creating an eco-friendly, efficient
              ecosystem that connects wholesalers, manufacturers, and
              convenience stores, fostering better communication and operational
              efficiency in the retail sector.
            </p>
          </div>
        </section>

        {/* Milestones */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            When the company was established and its significant milestones
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Born in mid-2023 when founders Dhanraj Solanki and Hemant Thapa
              spotted a need for better digital tools for Glasgow's convenience
              stores. Officially launched as Costrick Ltd in spring 2024, we
              started helping local shops streamline stock ordering.
            </p>
            <p>
              From 2023–2024, we built a prototype, partnered with wholesalers,
              and saw strong early interest from stores, all while growing with
              support from Glasgow's uHatch. By 2024–2025, we expanded across
              Scotland with a new website, added delivery options, and hired key
              team members to push for a bigger market share.
            </p>
            <p>
              Looking to 2025–2026, we plan to launch a mobile app and grow into
              other UK regions. As of mid-2025, Costrick is moving forward,
              focused on innovation and empowering small retailers.
            </p>
          </div>
        </section>

        {/* Where We Operate */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            Where we operate
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Headquartered at 6 Ristol Road, Glasgow, G13 1UY, United Kingdom,
              with its office incubated at uHatch in Glasgow for the initial two
              years of trading. This location in Scotland's largest city
              provides a strategic base, given Glasgow's vibrant retail scene
              and proximity to numerous convenience stores and wholesalers.
            </p>
            <p>
              Operations began locally in Glasgow, focusing on a small niche
              within the convenience store segment to test and refine the
              platform. The company initially targets convenience stores in
              Scotland, merging data from local wholesalers to create a service
              that addresses regional needs.
            </p>
            <p>
              As part of its expansion strategy, Costrick plans to scale
              nationally across the United Kingdom, starting with full coverage
              in Scotland and then extending to England, Wales, and Northern
              Ireland. This phased approach allows the business to build a
              market reputation before broader rollout. The digital nature of
              the platform enables remote access, making it operable from
              anywhere in the UK, but the core team and incubation remain rooted
              in Glasgow to leverage local talent and networks.
            </p>
          </div>
        </section>

        {/* Employees */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            Number of employees and leadership
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Co-Founder Dhanraj Solanki and Hemant Thapa bring a wealth of
              expertise in business and technology. Based in Glasgow, Scotland,
              their vision powers a platform that streamlines operations for
              convenience stores. The compact founding team established a robust
              foundation, combining skills in innovation and strategy.
            </p>
            <p>
              In 2024, Costrick bolstered its capabilities with a software
              engineer to enhance the platform's functionality and a part-time
              marketer to expand outreach. These efforts ensure the platform
              remains intuitive and reaches more retailers, helping small
              businesses manage operations efficiently.
            </p>
            <p>
              By 2025, Costrick plans to further refine its platform, focusing
              on new features and a broader market presence. The team
              prioritises technical excellence and customer engagement,
              delivering tools tailored to the retail sector's needs. The
              founders' leadership fosters a collaborative environment, steering
              efforts to create value for users.
            </p>
            <p>
              Costrick's small team is dedicated to empowering convenience
              stores with practical, innovative solutions. The focus remains on
              delivering a reliable platform that helps retailers thrive in a
              competitive landscape. As of mid-2025, Costrick's tight-knit team
              continues to drive progress, supporting local retailers, helping
              them overcome challenges and grow.
            </p>
          </div>
        </section>

        {/* Mission, Values, Vision */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            Company's core purpose, values, and long-term vision
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Our mission is to provide a user-friendly communication path
              between wholesalers, manufacturers, and convenience stores,
              bridging gaps in the supply chain through digital innovation. This
              core purpose is rooted in empowering small retailers by
              simplifying their daily operations and fostering stronger
              connections within the retail ecosystem.
            </p>
            <p>
              The company's values emphasize sustainability, efficiency, and
              community support, with a strong commitment to serving the common
              good. This includes creating an eco-friendly interface that
              reduces reliance on paper leaflets, promotes waste management
              through AI and ML algorithms for expiration tracking, and
              contributes to broader environmental goals like tackling climate
              change and improving human sustainability.
            </p>
            <p>
              In the long term, Costrick's vision is to empower sales growth and
              profits for convenience stores, enabling them to serve local
              communities more efficiently. This vision extends to becoming
              Scotland's foremost B2B service provider for wholesalers and
              convenience retailers, and eventually establishing itself as a
              single, unified wholesaler platform across the United Kingdom. By
              digitizing stock ordering processes, the company aims to boost
              productivity and growth in the retail industry.
            </p>
            <p>
              Ultimately, Costrick envisions a future where its platform not
              only saves time but also drives positive change, such as reducing
              food and packaging waste and advertising promotions digitally to
              align with governmental sustainability initiatives in Scotland and
              the UK.
            </p>
          </div>
        </section>

        {/* USP */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            Our unique selling proposition (USP)
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Conceived to tackle the challenges faced by convenience stores,
              particularly the time-intensive task of comparing prices across
              multiple wholesalers. Our innovative B2B platform, tailored
              specifically for the retail sector, delivers real-time,
              location-specific product and pricing insights, streamlining stock
              ordering for small businesses.
            </p>
            <p>
              Unlike broader comparison platforms, Costrick focuses exclusively
              on the needs of convenience stores and their wholesale partners.
              By integrating artificial intelligence and machine learning, we
              offer predictive analytics for pricing trends and tools for waste
              management, going beyond simple comparisons to promote
              sustainability.
            </p>
            <p>
              Our unique selling proposition lies in its free-to-use
              comparison-shopping engine, empowering retailers with instant
              access to product availability, promotions, and planning tools.
              Wholesalers benefit from anonymised data insights, enabling
              smarter decision-making. This dual-value approach — saving time
              for retailers and optimising operations for suppliers — sets us
              apart in a market reliant on outdated, fragmented methods.
            </p>
            <p>
              Our platform's eco-friendly focus, including digital promotions
              and waste reduction features, aligns with environmental goals,
              helping retailers and wholesalers operate more sustainably. Strong
              local partnerships ensure reliable data, while our scalable model
              supports growth from Glasgow to a national level.
            </p>
          </div>
        </section>

        {/* Detailed Offerings */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            A detailed description of our offerings
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Our primary offering is a digital Comparison-Shopping Engine (CSE)
              platform that functions as a price comparison tool for convenience
              stores, similar to established sites but specialized for the
              wholesale retail sector. The platform aggregates data from various
              local wholesalers, allowing users to search for products, compare
              options, view promotions and offers, and check availability in
              real time.
            </p>
            <p>
              Upon logging in, convenience stores can access a dashboard that
              pulls up relevant wholesaler products and enables order placement
              directly through the system, with wholesalers handling
              fulfillment. Mobile application development ensures the service is
              accessible on the go. Key features include structure for
              registration, where store owners sign up with details like name,
              designation, shop address, and contact, choosing wholesalers based
              on location.
            </p>
            <p>
              For wholesalers, the app structure allows product listing and
              promotion advertising. Future enhancements involve AI-driven tools
              for analyzing price trends, predicting changes using historical
              data, and managing waste through expiration tracking and data
              management systems. The service also includes data collection on
              best-selling and least-selling products, helping manufacturers
              monitor performance and market new items.
            </p>
            <p>
              Intellectual property protections, such as trademarks for the
              platform, ensure uniqueness, while compliance with data protection
              regulations safeguards user information. Overall, Costrick's
              offerings create a holistic digital ecosystem that streamlines the
              stock ordering process from discovery to decision-making.
            </p>
          </div>
        </section>

        {/* Customer Benefits */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            How these offerings benefit your target customers
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Our platform benefits convenience stores by saving significant
              time on stock ordering, allowing owners to focus on growing their
              businesses rather than manually checking multiple sources. By
              providing real-time comparisons and availability checks, stores
              can make informed purchasing decisions, ensuring they stock
              popular items and take advantage of promotions, which enhances
              their competitiveness against larger chains.
            </p>
            <p>
              Wholesalers and manufacturers gain from anonymized data insights
              that reveal trends in orders and product performance, enabling
              them to optimize inventories and marketing strategies. The
              eco-friendly aspects, like digital promotions reducing paper
              waste, align with sustainability goals, helping customers
              contribute to environmental efforts without additional effort.
            </p>
            <p>
              AI features for waste management minimize losses from expired
              goods, promoting efficiency and reducing operational waste.
              Overall, these offerings boost productivity, foster better supply
              chain relationships, and support community-oriented retail by
              empowering local stores to serve efficiently.
            </p>
          </div>
        </section>

        {/* Ideal Customer */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            A clear definition of our ideal customer
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Our ideal customers are primarily owners and operators of
              convenience stores in Scotland and the broader UK, typically small
              business entrepreneurs aged 25 to 60 who manage local shops
              serving communities with everyday essentials. These users are
              often independent retailers facing challenges from national
              brands, interested in digital tools that enhance efficiency and
              competitiveness.
            </p>
            <p>
              Demographics include urban and suburban locations in Glasgow and
              beyond, with a focus on those in the retail sector who value
              cost-saving technologies and sustainability. Wholesalers and
              manufacturers form another segment, consisting of mid-sized
              suppliers interested in data-driven insights to improve sales
              strategies.
            </p>
            <p>
              Interests revolve around streamlining operations, reducing waste,
              accessing promotions easily, and adopting eco-friendly practices.
              Early adopters are tech-savvy store owners open to digital
              platforms, while buyer personas include "Busy Bob," a 40-year-old
              Glasgow shop owner seeking quick stock solutions, and "Eco Emma,"
              a wholesaler focused on sustainable marketing.
            </p>
          </div>
        </section>

        {/* Marketing & Brand */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
            Current marketing efforts and brand identity
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Our marketing efforts leverage online channels like the website,
              social media, and the mobile app to reach target users. The brand
              identity is modern and eco-friendly, embodied in the slogan "Shop
              Smart" and visuals emphasizing simplicity and sustainability.
            </p>
            <p>
              Efforts include content marketing through newsletters and social
              posts highlighting platform features, as well as partnerships for
              cross-promotion. Public relations focus on positioning Costrick as
              an innovator in retail digitization.
            </p>
            <p>
              The website conveys messages like "No more leaflets, no more
              multiple tabs," underscoring ease of use, time savings, real-time
              insights, and eco-friendliness. It emphasizes empowerment for
              local stores, seamless wholesaler connections, and contributions
              to sustainability and community growth.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 font-semibold">Email:</span>
              <a
                href="mailto:contact@costrick.com"
                className="hover:text-blue-600 transition"
              >
                contact@costrick.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 font-semibold">Website:</span>
              <a
                href="https://www.costrick.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                www.costrick.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 font-semibold">Phone:</span>
              <span>0141 959 1098</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 font-semibold">Address:</span>
              <span>6 Ristol Road, Glasgow, G13 1UY, Scotland</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

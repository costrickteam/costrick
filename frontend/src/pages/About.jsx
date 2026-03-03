import { useState, useEffect } from "react";
import {
  Users,
  ShoppingCart,
  Globe,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Target,
  Lightbulb,
  Leaf,
  BarChart3,
  Clock,
  Shield,
  Sparkles,
  Building2,
  Calendar,
} from "lucide-react";

import harryProfile from "../assets/profiles/harry.png";
import dhanjProfile from "../assets/profiles/dhanraj.jpg";
import aboutVideo1 from "../assets/videos/about-1.mp4";
import aboutVideo2 from "../assets/videos/about-2.mp4";
import aboutVideo3 from "../assets/videos/about-3.mp4";
import aboutVideo4 from "../assets/videos/about-4.mp4";

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    const timer2 = setInterval(() => {
      setActiveSlide2((prev) => (prev + 1) % 2);
    }, 6000);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  const team = [
    {
      name: "Hemant Thapa",
      role: "Co-Founder, CTO & CFO",
      img: harryProfile,
      linkedin: "https://www.linkedin.com/in/thapahemant/",
    },
    {
      name: "Dhanraj Solanki",
      role: "Co-Founder, CEO & CMO",
      img: dhanjProfile,
      linkedin: "https://www.linkedin.com/in/dhanraj-solanki-07b66387/",
    },
  ];

  const usps = [
    {
      icon: ShoppingCart,
      title: "Free Comparison Engine",
      desc: "Our free-to-use CSE gives retailers instant access to product availability, promotions, and planning tools across all wholesalers.",
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      desc: "Predictive analytics for pricing trends and waste management go beyond simple comparisons to promote efficiency.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Platform",
      desc: "Digital promotions and waste reduction features align with environmental goals — no more leaflets or paper catalogues.",
    },
    {
      icon: Globe,
      title: "Dual-Value Approach",
      desc: "Save time for retailers and optimise operations for suppliers with anonymised data insights for smarter decision-making.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMHY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-blue-200 uppercase tracking-widest text-sm font-semibold mb-4">
            Company Information
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            COMPANY INFORMATION
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto text-blue-100">
            Shopkeeper, Wholesaler & Manufacturer — Connected on one platform.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                What Products & Services We Offer
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Costrick operates as a{" "}
                <strong>business-to-business (B2B) digital platform</strong>{" "}
                designed to revolutionise the way convenience stores interact
                with wholesalers and manufacturers. At its core, the company
                provides a <strong>Comparison-Shopping Engine (CSE)</strong>{" "}
                that serves as a centralised hub for convenience stores to
                access real-time information on products from various
                wholesalers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This includes comparing options, checking availability,
                discovering new items, and viewing promotions and offers — all
                within a single, user-friendly interface. The current platform
                is accessible via Chrome, Microsoft Edge, and Safari. Mobile
                applications will be available on both the App Store and Google
                Play.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond the core CSE, Costrick offers{" "}
                <strong>data monetisation services</strong> where anonymised
                insights on order patterns, popular products, and sales trends
                are provided to wholesalers and manufacturers. Future expansions
                include advanced features powered by{" "}
                <strong>AI and machine learning</strong>, such as waste
                management, expiration date tracking, and image processing for
                product recognition.
              </p>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/costrickteam/costrick/refs/heads/main/frontend/src/assets/images/office.webp"
                alt="Costrick Platform"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where We Operate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://raw.githubusercontent.com/costrickteam/costrick/refs/heads/main/frontend/src/assets/images/img_2.webp"
                alt="Glasgow Office"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
                  Where We Operate
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Headquartered at{" "}
                <strong>6 Ristol Road, Glasgow, G13 1UY</strong>, with our
                office incubated at <strong>uHatch in Glasgow</strong> for the
                initial two years of trading. Glasgow's vibrant retail scene and
                proximity to numerous convenience stores and wholesalers
                provides a strategic base.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Operations began locally in Glasgow, focusing on a small niche
                within the convenience store segment to test and refine the
                platform. As part of our expansion strategy, Costrick plans to{" "}
                <strong>scale nationally across the United Kingdom</strong>,
                starting with full coverage in Scotland and then extending to
                England, Wales, and Northern Ireland.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This phased approach allows us to build a market reputation
                before broader rollout. The digital nature of the platform
                enables remote access from anywhere in the UK, but the core team
                remains rooted in Glasgow to leverage local talent and networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 tracking-tight">
            Our Team
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed">
            Co-Founded by Dhanraj Solanki and Hemant Thapa, who bring a wealth
            of expertise in business and technology. Based in Glasgow, Scotland,
            their vision powers a platform that streamlines operations for
            convenience stores.
          </p>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-14 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="group relative text-left">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full aspect-square object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Social Icon Badge */}
                <a
                  href={member.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-0 bg-gray-900 hover:bg-blue-600 transition-colors px-5 py-4 inline-block"
                  style={{ top: "auto", marginTop: "-56px", zIndex: 10 }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Content Panel — offset right */}
                <div className="ml-auto w-[90%] relative -mt-1">
                  <div className="group-hover:bg-blue-600 bg-white transition-all duration-500 pt-16 pb-6 px-8 flex items-end justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-white capitalize transition-colors duration-500">
                        {member.name}
                      </h3>
                      <p className="text-gray-500 group-hover:text-blue-100 text-sm capitalize transition-colors duration-500">
                        {member.role}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-5 text-blue-600 group-hover:text-white transition-colors duration-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-gray-500 leading-relaxed">
              In 2024, Costrick bolstered its capabilities with a software
              engineer to enhance the platform's functionality and a part-time
              marketer to expand outreach. By 2025, the team prioritises
              technical excellence and customer engagement, delivering tools
              tailored to the retail sector's needs. The founders' leadership
              fosters a collaborative environment, steering efforts to create
              value for users.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Video Slider Background — 3 videos */}
        {[aboutVideo1, aboutVideo2, aboutVideo3].map((vid, idx) => (
          <video
            key={idx}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={vid} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeSlide
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Mission, Values & Vision
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/15 hover:bg-white/15 transition">
              <Target className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To provide a user-friendly communication path between
                wholesalers, manufacturers, and convenience stores, bridging
                gaps in the supply chain through digital innovation. Empowering
                small retailers by simplifying their daily operations and
                fostering stronger connections within the retail ecosystem.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/15 hover:bg-white/15 transition">
              <Shield className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Values</h3>
              <p className="text-blue-100 leading-relaxed">
                Sustainability, efficiency, and community support. We are
                committed to serving the common good — creating an eco-friendly
                interface that reduces reliance on paper leaflets, promotes
                waste management through AI and ML algorithms, and contributes
                to broader environmental goals.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/15 hover:bg-white/15 transition">
              <Lightbulb className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                To become Scotland's foremost B2B service provider for
                wholesalers and convenience retailers, and eventually a single,
                unified wholesaler platform across the United Kingdom. Driving
                positive change by reducing food and packaging waste and
                advertising promotions digitally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - USP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Conceived to tackle the challenges faced by convenience stores —
            particularly the time-intensive task of comparing prices across
            multiple wholesalers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-gray-50 hover:bg-blue-50 p-6 rounded-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 text-center"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">
            A Detailed Look at Our Offerings
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Creating a holistic digital ecosystem that streamlines the stock
            ordering process from discovery to decision-making.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <ShoppingCart className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Comparison-Shopping Engine
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our CSE aggregates data from various local wholesalers, allowing
                users to search for products, compare options, view promotions
                and offers, and check availability in real time. Upon logging
                in, convenience stores access a dashboard that pulls up relevant
                wholesaler products and enables order placement directly through
                the system.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                AI-Driven Insights
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Future enhancements involve AI-driven tools for analysing price
                trends, predicting changes using historical data, and managing
                waste through expiration tracking and data management systems.
                Data collection on best-selling and least-selling products helps
                manufacturers monitor performance and market new items.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                How This Benefits Retailers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our platform saves significant time on stock ordering, allowing
                owners to focus on growing their businesses. Real-time
                comparisons and availability checks mean stores can make
                informed purchasing decisions, ensuring they stock popular items
                and take advantage of promotions to compete with larger chains.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <Leaf className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                How This Benefits Wholesalers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Wholesalers and manufacturers gain from anonymised data insights
                that reveal trends in orders and product performance, enabling
                them to optimise inventories and marketing strategies. The
                eco-friendly aspects like digital promotions reduce paper waste
                while aligning with sustainability goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="relative py-20 text-white overflow-hidden min-h-[550px] flex items-center">
        {/* Video Slider Background — 2 videos */}
        {[aboutVideo3, aboutVideo4].map((vid, idx) => (
          <video
            key={`serve-${idx}`}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === activeSlide2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={vid} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {[0, 1].map((i) => (
            <button
              key={`s2-${i}`}
              onClick={() => setActiveSlide2(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeSlide2
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/15 hover:bg-white/15 transition">
              <Users className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Convenience Stores</h3>
              <p className="text-blue-100 leading-relaxed">
                Primarily owners and operators of convenience stores in Scotland
                and the broader UK — small business entrepreneurs aged 25 to 60
                who manage local shops serving communities with everyday
                essentials.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/15 hover:bg-white/15 transition">
              <Globe className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Wholesalers & Manufacturers
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Mid-sized suppliers interested in data-driven insights to
                improve sales strategies. Streamlining operations, reducing
                waste, accessing promotions easily, and adopting eco-friendly
                practices.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/15 hover:bg-white/15 transition">
              <Sparkles className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Early Adopters</h3>
              <p className="text-blue-100 leading-relaxed">
                Tech-savvy store owners open to digital platforms. Our key
                message: "No more leaflets, no more multiple tabs" — ease of
                use, time savings, real-time insights, and eco-friendliness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-16">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="mailto:contact@costrick.com"
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center border border-gray-100 group"
            >
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="font-bold text-gray-800 mb-1">Email</h3>
              <p className="text-gray-600 text-sm">contact@costrick.com</p>
            </a>
            <a
              href="https://www.costrick.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center border border-gray-100 group"
            >
              <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="font-bold text-gray-800 mb-1">Website</h3>
              <p className="text-gray-600 text-sm">www.costrick.com</p>
            </a>
            <a
              href="tel:01419591098"
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center border border-gray-100 group"
            >
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
              <p className="text-gray-600 text-sm">0141 959 1098</p>
            </a>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-1">Address</h3>
              <p className="text-gray-600 text-sm">
                6 Ristol Road, Glasgow
                <br />
                G13 1UY, Scotland
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="mailto:contact@costrick.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import {
  Users,
  ShoppingCart,
  Globe,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Hemant Thapa",
      role: "CTO & CFO",
      img: "https://costrick.click/wp-content/uploads/2025/06/pexels-zahid-15392542-scaled.webp",
    },
    {
      name: "Dhanraj Solanki",
      role: "CEO & Founder",
      img: "https://costrick.click/wp-content/uploads/2025/10/pexels-elgolovchenko-12319481.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            WE PROVIDE SOLUTIONS FOR B2B SERVICES
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto">
            Shopkeeper, Wholesaler & Manufacturer
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-indigo-800 mb-6">
                Welcome to Costrick
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in{" "}
                <strong>2023 by Dhanraj Solanki and Hemant Thapa</strong>,
                Costrick is headquartered in
                <strong> Glasgow</strong> and is set to transform the retail
                industry by providing a
                <strong>
                  {" "}
                  free, user-friendly Comparison Shopping Engine (CSE)
                </strong>{" "}
                specifically made for convenience stores.
              </p>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                Our mission is to <strong>empower small businesses</strong> by
                simplifying purchasing decisions, saving time and money, and
                fostering sustainable practices that benefit both the
                environment and the local economy.
              </p>
            </div>
            <div>
              <img
                src="https://costrick.click/wp-content/uploads/2022/02/business5-about-pic2.webp"
                alt="Costrick Team"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free CSE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-indigo-800">
              Free Comparison Shopping Engine
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://costrick.click/wp-content/uploads/2025/06/glasgow-horse.webp"
                alt="Glasgow Retail"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Costrick’s core offering is a <strong>free CSE</strong> designed
                specifically for convenience stores, providing a{" "}
                <strong>one-stop solution</strong> to compare prices, check
                stock availability, and access promotions from multiple local
                wholesalers.
              </p>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                Our platform streamlines the stock ordering process, addressing
                inefficiencies faced by store owners. By leveraging{" "}
                <strong>cutting-edge technology</strong> and strategic
                partnerships, Costrick delivers an{" "}
                <strong>innovative and practical service</strong> tailored to
                small retailers in Scotland and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Creation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-800 mb-12">
            Value Creation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl">
              <ShoppingCart className="w-12 h-12 text-indigo-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-indigo-800 mb-2">
                Real-Time Data
              </h3>
              <p className="text-gray-700">
                Access pricing, availability, and promotions from Bookers,
                United Wholesale, and more.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
              <TrendingUp className="w-12 h-12 text-purple-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-800 mb-2">
                AI Predictions
              </h3>
              <p className="text-gray-700">
                Our ML engineers analyze trends to help you buy at the best
                time.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-red-100 p-8 rounded-2xl">
              <Globe className="w-12 h-12 text-pink-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pink-800 mb-2">
                Stay Competitive
              </h3>
              <p className="text-gray-700">
                Reduce costs and compete with big chains — all for free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-16">
            OUR TEAM
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-indigo-700">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <MapPin className="w-10 h-10" />
                In the Heart of Glasgow
              </h2>
              <div className="space-y-6 text-lg">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Product Development Office
                  </h3>
                  <p>6 Ristol Road, Glasgow, G13 1UY</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Business Center</h3>
                  <p>50 – 60 Union St, Glasgow G1 3QX</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">Reach Us</h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <a
                    href="mailto:contact@costrick.com"
                    className="hover:underline"
                  >
                    contact@costrick.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <a href="tel:+441234567890" className="hover:underline">
                    +44 123 456 7890
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  24/7 Support Available
                </p>
              </div>
              <a
                href="/register"
                className="mt-8 inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition"
              >
                Join Our Community <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NO FOOTER — Layout.jsx has it */}
    </div>
  );
}

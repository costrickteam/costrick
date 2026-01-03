import {
  ShoppingCart,
  Package,
  Tag,
  Truck,
  TrendingUp,
  BarChart3,
  Megaphone,
  Recycle,
} from "lucide-react";

export default function Home() {
  const services = [
    { name: "Price Comparison Engine (CSE)", icon: ShoppingCart },
    { name: "Product Availability Checking", icon: Package },
    { name: "Promotion and Offer Tracking", icon: Tag },
    { name: "Order Placement Facilitation", icon: Truck },
    { name: "Smart Inventory Forecasting", icon: TrendingUp },
    { name: "AI-Driven Analytics", icon: BarChart3 },
    { name: "Digital Marketing for Wholesalers", icon: Megaphone },
    { name: "Waste Management Solutions", icon: Recycle },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      {/* Floating CTA */}
      <a
        href="/register"
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105"
      >
        SIGN UP
      </a>

      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-900 mb-6 leading-tight">
            Next-Gen Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              For Forward Thinking Firms
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto font-light">
            Streamline stock ordering, compare prices in real-time, and boost
            profitability with our innovative platform.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="http://www.costrick.com/"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition transform hover:-translate-y-1"
            >
              GET STARTED FREE
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-indigo-700 font-bold px-8 py-4 rounded-full shadow-lg border-2 border-indigo-600 transition"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-8">
            SUSTAINABLE RETAIL
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Costrick, founded in 2023, revolutionizes stock ordering for
            convenience stores. Our free-to-use
            <span className="font-bold text-indigo-600">
              {" "}
              Comparison Shopping Engine (CSE)
            </span>{" "}
            connects stores with wholesalers like Bookers, offering real-time
            price comparisons. Save time, reduce costs, and compete with larger
            retailers. Our AI-driven platform predicts pricing trends, ensuring
            informed decisions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-6xl font-extrabold">550+</h3>
              <p className="text-xl mt-2">Total Shop Sign Up</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-6xl font-extrabold">24/7</h3>
              <p className="text-xl mt-2">Support Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-6xl font-extrabold">100%</h3>
              <p className="text-xl mt-2">Free Platform</p>
            </div>
          </div>
          <p className="text-center mt-10 text-lg font-light">
            Join <strong>550+ Glasgow stores</strong> already saving with
            Costrick.
          </p>
        </div>
      </section>

      {/* Our Services - WITH ICONS */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
                    {service.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company & Offices */}
      <section id="company" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-16">
            Company
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-indigo-700 mb-6">
                Glasgow Based B2B Services
              </h3>
              <p className="text-lg text-gray-700">
                Costrick provides service-based infrastructure & channel for B2B
                Services. We’re building the best price comparison application
                you’d be proud to use.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-indigo-800 mb-4">
                Business Center Corporate
              </h4>
              <p className="text-gray-700">
                <strong>Phone:</strong> 0141 959 1098 61
                <br />
                <strong>Email:</strong> contact@costrick.com
                <br />
                <strong>Address:</strong> 50 – 60 Union St, Glasgow G1 3QX
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1">
              <img
                src="https://costrick.click/wp-content/uploads/2025/06/glasgow-horse.webp"
                alt="Glasgow Office"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Product Development Office
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                <strong>6 Ristol Rd, Glasgow, G13 1UY</strong>
              </p>
              <img
                src="https://costrick.click/wp-content/uploads/2025/06/pexels-jopwell-2422294-1200x848.webp"
                alt="Costrick Team"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Team */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-indigo-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-16">
            Get in Touch
          </h2>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Hemant Thapa
              </h3>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> team@costrick.click
                <br />
                <strong>Role:</strong> Co-Founder, CFO & CTO
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Dhanraj Solanki
              </h3>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> contact@costrick.com
                <br />
                <strong>Role:</strong> Co-Founder, CEO, & CMO
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-800 mb-6">
              Want to put your Business in our Center?
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Any question? Let’s talk! We’re here 24/7.
            </p>
            <a
              href="mailto:contact@costrick.com"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              CONTACT US!
            </a>
          </div>
        </div>
      </section>

      {/* NO FOOTER HERE — Your Layout.jsx has it */}
    </div>
  );
}

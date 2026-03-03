import { useState, useEffect, useCallback } from "react";
import {
  ShoppingCart,
  Package,
  Tag,
  Truck,
  TrendingUp,
  BarChart3,
  Megaphone,
  Recycle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroVideo from "../assets/videos/hero-bg.mp4";

export default function Home() {
  const services = [
    {
      name: "Price Comparison Engine",
      desc: "Compare wholesale prices across multiple suppliers instantly to secure the best deals for your store.",
      icon: ShoppingCart,
      color: "#3B82F6",
    },
    {
      name: "Product Availability",
      desc: "Check real-time stock levels from verified wholesalers — never miss an order due to out-of-stock items.",
      icon: Package,
      color: "#8B5CF6",
    },
    {
      name: "Promotion Tracking",
      desc: "Stay on top of the latest deals, seasonal offers, and exclusive discounts from all your suppliers.",
      icon: Tag,
      color: "#EC4899",
    },
    {
      name: "Order Placement",
      desc: "Place orders directly through Costrick — streamlined checkout, consolidated deliveries, less hassle.",
      icon: Truck,
      color: "#F59E0B",
    },
    {
      name: "Inventory Forecasting",
      desc: "AI-powered demand predictions help you stock smart, reduce waste, and maximise shelf turnover.",
      icon: TrendingUp,
      color: "#10B981",
    },
    {
      name: "AI-Driven Analytics",
      desc: "Actionable insights on sales trends, margins, and customer preferences powered by machine learning.",
      icon: BarChart3,
      color: "#6366F1",
    },
    {
      name: "Digital Marketing",
      desc: "Help wholesalers promote products digitally — no more leaflets. Targeted, eco-friendly, effective.",
      icon: Megaphone,
      color: "#0EA5E9",
    },
    {
      name: "Waste Management",
      desc: "Reduce food and packaging waste with smart algorithms that optimise ordering and shelf life.",
      icon: Recycle,
      color: "#22C55E",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const move = useCallback(
    (dir) => {
      setCurrentIndex(
        (prev) => (prev + dir + services.length) % services.length,
      );
    },
    [services.length],
  );

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => move(1), 4000);
    return () => clearInterval(timer);
  }, [move]);

  // Mouse wheel
  useEffect(() => {
    let timeout = null;
    const handleWheel = (e) => {
      const section = document.getElementById("services");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      if (timeout) return;
      if (Math.abs(e.deltaY) > 30) {
        move(e.deltaY > 0 ? 1 : -1);
        timeout = setTimeout(() => (timeout = null), 600);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [move]);

  // Touch support
  useEffect(() => {
    let startX = 0;
    const handleTouchStart = (e) => (startX = e.touches[0].clientX);
    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) move(1);
      if (endX - startX > 50) move(-1);
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [move]);

  const getCardStyle = (i) => {
    let relIndex = i - currentIndex;
    if (relIndex > services.length / 2) relIndex -= services.length;
    if (relIndex < -services.length / 2) relIndex += services.length;

    const isActive = i === currentIndex;
    const isAdjacent = Math.abs(relIndex) === 1;
    const isSecond = Math.abs(relIndex) === 2;

    if (isActive) {
      return {
        transform: "translate3d(0, 0, 200px) scale(1)",
        opacity: 1,
        zIndex: 100,
        filter: "blur(0px)",
      };
    } else if (isAdjacent) {
      const dir = relIndex > 0 ? 1 : -1;
      return {
        transform: `translate3d(${dir * 320}px, 0, -50px) scale(0.8) rotateY(${dir * -12}deg)`,
        opacity: 0.7,
        zIndex: 10,
        filter: "blur(1px)",
      };
    } else if (isSecond) {
      const dir = relIndex > 0 ? 1 : -1;
      return {
        transform: `translate3d(${dir * 560}px, 0, -200px) scale(0.6) rotateY(${dir * -20}deg)`,
        opacity: 0.35,
        zIndex: 5,
        filter: "blur(3px)",
      };
    } else {
      return {
        transform: "translate3d(0, 0, -600px) scale(0)",
        opacity: 0,
        zIndex: 0,
        filter: "blur(5px)",
      };
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Floating CTA */}
      {/* <a
        href="/register"
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105"
      >
        SIGN UP
      </a> */}

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 py-24">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Next-Gen Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              For Forward Thinking Firms
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto font-light drop-shadow">
            Streamline stock ordering, compare prices in real-time, and boost
            profitability with our innovative platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="http://www.costrick.com/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:shadow-blue-500/40"
            >
              GET STARTED FREE
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full shadow-lg border-2 border-white/30 transition hover:-translate-y-1"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8">
            SUSTAINABLE RETAIL
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Costrick, founded in 2023, revolutionizes stock ordering for
            convenience stores. Our free-to-use
            <span className="font-bold text-blue-600">
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
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
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

      {/* Our Services - 3D Carousel */}
      <section id="services" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
            Everything convenience retailers and wholesalers need — in one
            platform.
          </p>
        </div>

        {/* 3D Carousel Scene */}
        <div
          className="relative w-full flex justify-center items-center"
          style={{ perspective: "1500px", height: "420px" }}
        >
          {/* Cards */}
          <div
            className="absolute w-full h-full flex justify-center items-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              const style = getCardStyle(i);
              const isActive = i === currentIndex;
              return (
                <div
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="absolute cursor-pointer"
                  style={{
                    ...style,
                    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    width: isActive ? "300px" : "240px",
                  }}
                >
                  <div
                    className={`rounded-3xl p-8 h-full flex flex-col items-center text-center shadow-xl ${
                      isActive ? "shadow-2xl" : "shadow-lg"
                    }`}
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${service.color}15, white, ${service.color}08)`
                        : "white",
                      border: isActive
                        ? `2px solid ${service.color}30`
                        : "1px solid #f1f5f9",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`,
                        boxShadow: isActive
                          ? `0 8px 30px ${service.color}40`
                          : "none",
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ color: isActive ? service.color : "#1e293b" }}
                    >
                      {service.name}
                    </h3>
                    {isActive && (
                      <p className="text-gray-500 text-sm leading-relaxed animate-fade-in">
                        {service.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav Buttons */}
          <button
            onClick={() => move(-1)}
            className="absolute left-4 md:left-[8%] top-1/2 -translate-y-1/2 z-[200] w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-blue-700" />
          </button>
          <button
            onClick={() => move(1)}
            className="absolute right-4 md:right-[8%] top-1/2 -translate-y-1/2 z-[200] w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-blue-700" />
          </button>
        </div>

        {/* Info Panel & Indicators */}
        <div className="flex flex-col items-center mt-8">
          <div
            className="px-8 py-4 rounded-2xl text-center"
            style={{
              background: `linear-gradient(135deg, ${services[currentIndex].color}10, ${services[currentIndex].color}05)`,
              border: `1px solid ${services[currentIndex].color}20`,
              transition: "all 0.5s ease",
            }}
          >
            <p
              className="text-lg font-bold"
              style={{ color: services[currentIndex].color }}
            >
              {services[currentIndex].name}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-6">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === currentIndex ? "32px" : "8px",
                  background: i === currentIndex ? s.color : "#cbd5e1",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company & Offices */}
      <section id="company" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-16">
            Company
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-blue-700 mb-6">
                Glasgow Based B2B Services
              </h3>
              <p className="text-lg text-gray-700">
                Costrick provides service-based infrastructure & channel for B2B
                Services. We’re building the best price comparison application
                you’d be proud to use.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-blue-800 mb-4">
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
                src="https://raw.githubusercontent.com/costrickteam/costrick/refs/heads/main/frontend/src/assets/images/img_2.webp"
                alt="Glasgow Office"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Product Development Office
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                <strong>6 Ristol Rd, Glasgow, G13 1UY</strong>
              </p>
              <img
                src="https://raw.githubusercontent.com/costrickteam/costrick/refs/heads/main/frontend/src/assets/images/img_1.webp"
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
        className="py-24 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-16">
            Get in Touch
          </h2>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Hemant Thapa
              </h3>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> team@costrick.click
                <br />
                <strong>Role:</strong> Co-Founder, CFO & CTO
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
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
            <h3 className="text-3xl font-bold text-blue-800 mb-6">
              Want to put your Business in our Center?
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Any question? Let’s talk! We’re here 24/7.
            </p>
            <a
              href="mailto:contact@costrick.com"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition transform hover:scale-105"
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

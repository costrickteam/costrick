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

import harryProfile from "../assets/profiles/harry.png";

export default function About() {
  const team = [
    {
      name: "Hemant Thapa",
      role: "CTO & CFO",
      img: harryProfile,
    },
        // {
    //   name: "Hemant Thapa",
    //   role: "CTO & CFO",
    //   img: "https://costrick.click/wp-content/uploads/2025/06/pexels-zahid-15392542-scaled.webp",
    // },
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
    </div>
  );
}


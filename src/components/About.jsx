import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Package,
  Award,
  Users,
  MapPin,
  Clock,
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Reliable & Trusted",
      description:
        "Safe delivery with insurance coverage and professional logistics support.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Fast Transport",
      description:
        "Express railway cargo services with quick delivery options.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Package,
      title: "Secure Handling",
      description:
        "Professional packaging with real-time tracking systems.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Quality Service",
      description:
        "Industry excellence with high customer satisfaction.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Clients" },
    { icon: Package, value: "50,000+", label: "Deliveries" },
    { icon: MapPin, value: "500+", label: "Cities" },
    { icon: Clock, value: "24/7", label: "Support" },
  ];

  return (
    <section
      id="about"
      className="w-full py-24 lg:py-32 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold">
            About Us
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Trusted Partner
            </span>{" "}
            in Logistics
          </h2>

          <p className="mt-6 text-slate-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            G.S Cargo Service is a railway parcel booking and logistics
            provider based in Moradabad delivering cargo safely across India.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="bg-slate-900 border border-slate-800 p-6 lg:p-8 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-orange-400" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {stat.value}
              </h3>

              <p className="text-slate-400 text-base lg:text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-slate-900 border border-slate-800 p-6 lg:p-8 rounded-xl hover:border-orange-500/40 transition min-h-[240px] flex flex-col"
            >
              <div
                className={`w-14 h-14 lg:w-16 lg:h-16 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5`}
              >
                <feature.icon className="text-white w-7 h-7 lg:w-8 lg:h-8" />
              </div>

              <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400 text-base lg:text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Train, Package, Clock, Shield, TrendingUp, Globe } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Train,
      title: "Railway Parcel Booking",
      description:
        "Fast and secure railway cargo booking services across India with real-time tracking.",
      color: "from-blue-500 to-cyan-500",
      features: ["Online Booking", "Live Tracking", "Door Pickup"],
    },
    {
      icon: Package,
      title: "Freight Forwarding",
      description:
        "Comprehensive freight forwarding solutions for businesses of all sizes with competitive rates.",
      color: "from-purple-500 to-pink-500",
      features: ["Bulk Shipping", "Custom Solutions", "Insurance"],
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description:
        "Time-sensitive deliveries with guaranteed express service and priority handling.",
      color: "from-orange-500 to-red-500",
      features: ["Same-Day Delivery", "Priority Handling", "24/7 Support"],
    },
    {
      icon: Shield,
      title: "Secure Packaging",
      description:
        "Professional packaging services ensuring your cargo arrives safely and intact.",
      color: "from-green-500 to-emerald-500",
      features: ["Custom Packaging", "Fragile Handling", "Quality Assurance"],
    },
    {
      icon: TrendingUp,
      title: "Business Logistics",
      description:
        "Complete logistics solutions for businesses with dedicated account management.",
      color: "from-yellow-500 to-orange-500",
      features: ["B2B Solutions", "Volume Discounts", "Account Manager"],
    },
    {
      icon: Globe,
      title: "Pan-India Network",
      description:
        "Extensive network covering 500+ cities across India for seamless delivery.",
      color: "from-indigo-500 to-blue-500",
      features: ["500+ Cities", "Remote Areas", "Fast Transit"],
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-24 lg:py-32 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold">
            Our Services
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Logistics Solutions
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            From railway parcel booking to complete logistics management, we
            offer a full range of services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-slate-900 border border-slate-800 p-8 lg:p-10 rounded-xl hover:border-orange-500/40 transition-all duration-300 min-h-[420px] flex flex-col"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="text-white w-8 h-8 lg:w-10 lg:h-10" />
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-slate-300 text-base"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="mt-auto pt-6 border-t border-slate-800 group-hover:border-orange-500/40 transition-colors">
                <span className="text-orange-400 text-sm font-semibold flex items-center gap-2">
                  Learn more
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-2xl p-10 lg:p-16">
            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h3>
            <p className="text-slate-400 text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              We offer tailored logistics solutions for businesses with unique
              requirements. Contact us to discuss your needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-5 text-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/50"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
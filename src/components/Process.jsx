import { motion } from "framer-motion";
import { Phone, Package, Truck, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Phone,
      title: "Book Your Shipment",
      description:
        "Contact us via phone, email, or our online form to book your cargo shipment.",
      color: "from-blue-500 to-cyan-500",
      step: "01",
    },
    {
      icon: Package,
      title: "Package & Pickup",
      description:
        "We provide professional packaging services and arrange pickup from your location.",
      color: "from-purple-500 to-pink-500",
      step: "02",
    },
    {
      icon: Truck,
      title: "Safe Transit",
      description:
        "Your cargo is transported via railway with real-time tracking and insurance coverage.",
      color: "from-orange-500 to-red-500",
      step: "03",
    },
    {
      icon: CheckCircle,
      title: "Delivery Confirmation",
      description:
        "Secure delivery to the destination with proof of delivery and confirmation.",
      color: "from-green-500 to-emerald-500",
      step: "04",
    },
  ];

  return (
    <section
      id="process"
      className="w-full py-24 lg:py-32 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold">
            How It Works
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Simple{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              4-Step Process
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            From booking to delivery, we've streamlined our process to ensure
            your cargo reaches its destination safely and on time.
          </p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 opacity-20" />
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-6 right-4 text-7xl font-bold text-slate-800/50">
                  {step.step}
                </div>

                {/* Card */}
                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-orange-500/40 transition-all duration-300 group min-h-[340px] flex flex-col">
                  {/* Icon */}
                  <div
                    className={`relative z-10 w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="text-white w-10 h-10" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-base leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-slate-700 to-transparent ml-[-0.5px]" />
              )}

              <div className="flex gap-5">
                {/* Icon & Step Number */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center relative z-10`}
                  >
                    <step.icon className="text-white w-8 h-8" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 border-2 border-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-orange-400">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-900 border border-slate-800 p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-5 text-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/50"
          >
            Start Your Shipment
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
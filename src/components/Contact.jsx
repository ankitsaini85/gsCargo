import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 90459 00900, 8881075655, 7217510000",
      link: "tel:+919045900900",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: "gurdeepsethi60@gmail.com",
      link: "mailto:gurdeepsethi60@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Guru Niwas, Sagar Sarai, G.M.D. Road, Moradabad, India",
      link: "#",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon-Sat: 9AM - 6PM",
      link: "#",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-24 lg:py-32 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold">
            Contact Us
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Touch
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to ship your cargo? Contact us today and let's discuss how we
            can help with your logistics needs.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-slate-900 border border-slate-800 p-6 lg:p-8 rounded-xl hover:border-orange-500/40 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 lg:w-16 lg:h-16 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <info.icon className="text-white w-7 h-7 lg:w-8 lg:h-8" />
              </div>

              <h3 className="text-sm font-semibold text-slate-400 mb-2">
                {info.title}
              </h3>

              <p className="text-white font-medium text-base lg:text-lg">{info.content}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 border border-slate-800 p-8 lg:p-10 rounded-xl"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-slate-300 mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 text-base bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-slate-300 mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 text-base bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-base font-medium text-slate-300 mb-3"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 text-base bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-base font-medium text-slate-300 mb-3"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 text-base bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="railway">Railway Parcel Booking</option>
                  <option value="freight">Freight Forwarding</option>
                  <option value="express">Express Delivery</option>
                  <option value="packaging">Secure Packaging</option>
                  <option value="business">Business Logistics</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-slate-300 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-5 py-4 text-base bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell us about your cargo requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-5 text-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/50 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-6 h-6" />
              </button>
            </form>
          </motion.div>

          {/* Map/Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.2889667892166!2d78.77665!3d28.83862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDUwJzE5LjAiTiA3OMKwNDYnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="G.S Cargo Service Location"
              />
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-xl p-8 lg:p-10">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                {[ 
                  "Real-time Tracking",
                  "Competitive Pricing",
                  "Pan-India Network",
                  "100% Insured Cargo",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300 text-base lg:text-lg">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
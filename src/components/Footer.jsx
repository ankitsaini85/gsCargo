import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Process", href: "#process" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Railway Parcel Booking", href: "#services" },
      { name: "Freight Forwarding", href: "#services" },
      { name: "Express Delivery", href: "#services" },
      { name: "Secure Packaging", href: "#services" },
    ],
    support: [
      { name: "Track Shipment", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Insurance", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-[#020617] to-[#000000] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14 mb-12 lg:mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-5">
              G.S Cargo Service
            </h3>
            <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-6">
              Your trusted partner for railway parcel booking and logistics in
              Moradabad. Safe, fast, and reliable cargo delivery across India.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:info@gscargo.com"
                className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors group"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-base">gurdeepsethi60@gmail.com</span>
              </a>

              <a
                href="tel:+919045900900, 8881075655, 7217510000"
                className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors group"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-base">+91 90459 00900, 8881075655, 7217510000</span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-base">Moradabad, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold text-base lg:text-lg mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold text-base lg:text-lg mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold text-base lg:text-lg mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} G.S Cargo Service. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-orange-500/20 hover:text-orange-400 text-slate-400 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-slate-500 hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
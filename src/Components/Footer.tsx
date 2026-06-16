// import { NavLink, Link } from "react-router-dom";
// import {
//   FaHome,
//   FaInfoCircle,
//   FaServicestack,
//   FaPhone,
//   FaUniversity,
//   FaBuilding,
//   FaChartLine,
//   FaShieldAlt,
//   FaLinkedinIn,
//   FaTwitter,
//   FaInstagram,
//   FaFacebookF,
// } from "react-icons/fa";
// import { MapPin, Phone, Mail } from "lucide-react";

// const Footer = () => (
//   <footer className="bg-slate-900 text-white py-16">
//     <div className="max-w-7xl mx-auto px-6">
//       <div className="grid md:grid-cols-4 gap-8">
//         <div className="max-w-xs">
//           <span className="flex flex-row items-center gap-3 sm:gap-4">
//             {/* RESPONSIVE IMAGE: Scales down on mobile, reaches full size on tablet/desktop */}
//             <img
//               src="public/favicon.png"
//               alt="Doksanlarb-Finance Logo"
//               className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg rounded-full bg-gradient-to-tr p-1"
//             />

//             {/* CRYSTAL GRADIENT LOGO: Dynamic text sizing and removed vertical margins for perfect centering */}
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter italic bg-linear-to-tr from-white via-blue-400 to-white bg-clip-text text-transparent drop-shadow-sm line-clamp-1">
//               Doksanlarb-
//               <span className="text-blue-600 not-italic font-light block sm:inline">
//                 Finance
//               </span>
//             </h3>
//           </span>

//           <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
//             Combining traditional values with cutting-edge financial technology.
//             Governed by Swiss-grade security and global excellence.
//           </p>

//           {/* Social Media Grid with Authentic Brand Colors */}
//           <div className="flex items-center gap-4">
//             {[
//               {
//                 icon: <FaLinkedinIn />,
//                 path: "/login",
//                 label: "LinkedIn",
//                 brandBg: "bg-[#0077B5] border-[#0077B5]/50",
//               },
//               {
//                 icon: <FaTwitter />,
//                 path: "/signup",
//                 label: "Twitter",
//                 brandBg: "bg-[#1DA1F2] border-[#1DA1F2]/50",
//               },
//               {
//                 icon: <FaInstagram />,
//                 path: "/login",
//                 label: "Instagram",
//                 brandBg:
//                   "bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border-transparent",
//               },
//               {
//                 icon: <FaFacebookF />,
//                 path: "/signup",
//                 label: "Facebook",
//                 brandBg: "bg-[#1877F2] border-[#1877F2]/50",
//               },
//             ].map((social, idx) => (
//               <Link
//                 key={idx}
//                 to={social.path}
//                 aria-label={social.label}
//                 className={`w-11 h-11 flex items-center justify-center rounded-xl border text-white shadow-lg shadow-black/40 hover:-translate-y-1.5 hover:brightness-110 transition-all duration-500 ${social.brandBg}`}
//               >
//                 <span className="text-lg drop-shadow-md">{social.icon}</span>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="font-bold mb-4">Quick Links</h4>
//           <ul className="space-y-2">
//             <li>
//               <NavLink
//                 to="/"
//                 className="flex items-center gap-2 text-slate-400 hover:text-white transition"
//               >
//                 <FaHome /> Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 className="flex items-center gap-2 text-slate-400 hover:text-white transition"
//               >
//                 <FaInfoCircle /> About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/services"
//                 className="flex items-center gap-2 text-slate-400 hover:text-white transition"
//               >
//                 <FaServicestack /> Services
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact"
//                 className="flex items-center gap-2 text-slate-400 hover:text-white transition"
//               >
//                 <FaPhone /> Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h4 className="font-bold mb-4">Services</h4>
//           <ul className="space-y-2">
//             <li>
//               <NavLink
//                 to="/login"
//                 className="flex items-center gap-2 text-slate-400 hover:text-white transition"
//               >
//                 <FaUniversity /> Personal Banking
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/corporate"
//                 className="flex items-center gap-2 text-slate-400 hover:text-white transition"
//               >
//                 <FaBuilding /> Corporate Banking
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/wealth-management"
//                 className="flex items-center gap-2 text-slate-400 hover:text-white transition"
//               >
//                 <FaChartLine /> Wealth Management
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/insurance-services"
//                 className="flex items-center gap-2 text-slate-400 hover:text-white transition"
//               >
//                 <FaShieldAlt /> Insurance Services
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="font-bold mb-4 text-white">Contact Us</h4>
//           <address className="not-italic text-slate-400 space-y-3">
//             {/* Address */}
//             <div className="flex items-start gap-3">
//               <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
//               <span>
//                 Ziya Gökalp, Süleyman Demirel Blv No:75B, 34490 Başakşehir{" "}
//                 <br />
//                 İstanbul, Türkiye{" "}
//               </span>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-3">
//               <Phone className="w-5 h-5 text-blue-500 shrink-0" />
//               <a
//                 href="tel:+905349534720"
//                 className="hover:text-white transition-colors"
//               >
//                 +90 534 393 88 40{" "}
//               </a>
//             </div>

//             {/* Email */}
//             <div className="flex items-center gap-3">
//               <Mail className="w-5 h-5 text-blue-500 shrink-0" />
//               <a
//                 href="mailto:support@nexussaving.com"
//                 className="hover:text-white transition-colors"
//               >
//                 info@doksanlarb.com
//               </a>
//             </div>
//           </address>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="border-t border-slate-600 mt-12 pt-8 text-center text-slate-400">
//         <p>
//           &copy; {new Date().getFullYear()} Doksanlarb-Finance. All rights
//           reserved
//         </p>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;

import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaUniversity,
  FaBuilding,
  FaChartLine,
  FaShieldAlt,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-200 border-t border-slate-800/60 overflow-hidden">
      {/* Subtle background ambient glow for a modern fintech aesthetic */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        {/* Main Grid structure - Fully responsive stack to 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-slate-800/60">
          {/* Brand Identity Segment */}
          <div className="flex flex-col space-y-6 sm:col-span-2 md:col-span-1">
            <span className="flex flex-row items-center gap-3">
              <img
                src="favicon.png"
                alt="Doksanlarb-Finance Logo"
                className="w-10 h-10 drop-shadow-xl rounded-full bg-linear-to-tr from-blue-500 to-indigo-500 p-0.5"
              />
              <h3 className="text-xl font-black tracking-tight italic bg-linear-to-tr from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-sm">
                Doksanlarb-
                <span className="text-blue-500 not-italic font-light block sm:inline">
                  Finance
                </span>
              </h3>
            </span>

            <p className="text-slate-400 text-sm leading-relaxed font-normal max-w-sm">
              Combining traditional values with cutting-edge financial
              technology. Governed by Swiss-grade security and global
              excellence.
            </p>

            {/* Social Media Grid */}
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  icon: <FaLinkedinIn />,
                  path: "/login",
                  label: "LinkedIn",
                  brand: "hover:bg-[#0077B5] hover:border-[#0077B5]",
                },
                {
                  icon: <FaTwitter />,
                  path: "/signup",
                  label: "Twitter",
                  brand: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]",
                },
                {
                  icon: <FaInstagram />,
                  path: "/login",
                  label: "Instagram",
                  brand:
                    "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent",
                },
                {
                  icon: <FaFacebookF />,
                  path: "/signup",
                  label: "Facebook",
                  brand: "hover:bg-[#1877F2] hover:border-[#1877F2]",
                },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  to={social.path}
                  aria-label={social.label}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white shadow-sm transition-all duration-300 group ${social.brand}`}
                >
                  <span className="text-base group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-100 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", icon: <FaHome />, label: "Home" },
                { to: "/about", icon: <FaInfoCircle />, label: "About Us" },
                {
                  to: "/services",
                  icon: <FaServicestack />,
                  label: "Services",
                },
                { to: "/contact", icon: <FaPhone />, label: "Contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `group flex items-center gap-2.5 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-400 hover:text-white"
                      }`
                    }
                  >
                    <span className="text-slate-500 group-hover:text-blue-400 transition-colors duration-200">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-100 uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                {
                  to: "/login",
                  icon: <FaUniversity />,
                  label: "Personal Banking",
                },
                {
                  to: "/corporate",
                  icon: <FaBuilding />,
                  label: "Corporate Banking",
                },
                {
                  to: "/wealth-management",
                  icon: <FaChartLine />,
                  label: "Wealth Management",
                },
                {
                  to: "/insurance-services",
                  icon: <FaShieldAlt />,
                  label: "Insurance Services",
                },
              ].map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `group flex items-center gap-2.5 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-400 hover:text-white"
                      }`
                    }
                  >
                    <span className="text-slate-500 group-hover:text-blue-400 transition-colors duration-200">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-100 uppercase">
              Contact Us
            </h4>
            <address className="not-italic text-sm text-slate-400 space-y-4">
              {/* Interactive Address Map Link */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 group hover:text-slate-200 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">
                  Ziya Gökalp, Süleyman Demirel Blv No:75B, 34490 Başakşehir
                  <span className="text-xs text-slate-500 group-hover:text-blue-400 flex items-center gap-1 mt-0.5">
                    İstanbul, Türkiye <ArrowUpRight className="w-3 h-3" />
                  </span>
                </span>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a
                  href="tel:+905343938840"
                  className="hover:text-slate-200 transition-colors duration-200"
                >
                  +90 534 393 88 40
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a
                  href="mailto:info@doksanlarb.com"
                  className="hover:text-slate-200 transition-colors duration-200 break-all"
                >
                  info@doksanlarb.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Utility Bar / Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 text-xs text-slate-500">
          <p>&copy; {currentYear} Doksanlarb-Finance. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms&service"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookie-settings"
              className="hover:text-slate-300 transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

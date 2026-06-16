"use client";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  // Landmark,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Phone,
  Globe,
  Lock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../i18n/TranslationProvider";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Centralized navigation links for easy management
  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav_home"), path: "/" },
    { name: t("nav_about"), path: "/about" },
    { name: t("nav_services"), path: "/services" },
    { name: t("nav_corporate"), path: "/corporate" },
    { name: t("nav_contact"), path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-100">
      <div className="w-full bg-slate-950 text-slate-100 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-10 sm:h-12 px-4 sm:px-6 md:px-12 text-xs sm:text-sm">
          {/* Email Link Section */}
          <a
            href="mailto:info@doksanlarb.com"
            className="flex items-center font-bold uppercase tracking-wider sm:tracking-widest hover:text-blue-400 transition-colors py-1 h-full"
            title="Email us at info@doksanlarb.com"
          >
            {/* Container for Mobile View: Shown as a compact, touch-friendly badge */}
            <div className="flex sm:hidden items-center bg-slate-900 border border-slate-800 rounded-full p-2 text-blue-400 hover:bg-slate-800 transition-colors">
              <MdEmail size={16} />
            </div>

            {/* Container for Tablet, Laptop, and Desktop: Shows full professional link */}
            <div className="hidden sm:flex items-center">
              <MdEmail size={14} className="mr-2 text-blue-400 shrink-0" />
              <span className="text-gray-400">info@doksanlarb.com</span>
            </div>
          </a>

          {/* Language Switcher Container */}
          <div className="flex items-center justify-end h-full py-10">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-100 h-16 md:h-20 shadow-sm"
            : "bg-white h-20 md:h-28"
        }`}
      >
        <div className="max-w-450 mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 z-130">
            <img
              src="favicon.png"
              alt="Doksanlarb-Finance Logo"
              className="w-15 h-18 sm:w-12 sm:h-12 md:w-25 md:h-20 object-contain"
            />
            {/* <div className="bg-blue-700 p-1.5 rounded-lg shadow-lg shadow-blue-700/20">
            <Landmark className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div> */}
            {/* <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-900 uppercase">
            Doksanlar<span className="text-blue-700 italic">Bank</span>
          </span> */}
            <div className="flex items-center gap-2 group cursor-pointer">
              {/* The Logo Text */}
              <span className="relative text-xl md:text-3xl font-black tracking-tighter uppercase italic transition-all duration-500">
                {/* PRIMARY GRADIENT LAYER: Polished Silver to Deep Navy */}
                <span className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-950 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  Doksanlarb-
                </span>

                {/* SECONDARY GRADIENT LAYER: Electric Blue Sapphire */}
                <span className="bg-linear-to-tr from-blue-600 via-blue-400 to-blue-800 bg-clip-text text-transparent ml-1 drop-shadow-[0_2px_8px_rgba(37,99,235,0.3)]">
                  Finance
                </span>

                {/* UNDER-GLOW EFFECT: Appears on hover for "Active" banking feel */}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 rounded-full transition-all duration-500 group-hover:w-full shadow-[0_0_15px_rgba(37,99,235,0.6)]" />
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name} className="">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-md font-bold uppercase tracking-[0.2em] transition-all ${
                        isActive
                          ? "text-blue-700 border-b-2 border-blue-700"
                          : "text-slate-600 hover:text-slate-900"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/login"
              className="px-8 py-3 bg-slate-950 text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <Lock size={14} /> Account Login
            </Link>
            {/* <Link
            to="/admin"
            className="px-8 py-3 bg-red-600 text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            <Lock size={14} /> Admin demo
          </Link> */}
          </div>

          {/* MOBILE TOGGLE - Positioned on top of overlay when open */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-130 p-2 text-slate-900"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-110 lg:hidden"
            />

            {/* The Menu Card */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[85%] sm:w-100 h-screen bg-white z-120 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-8 pt-24 flex-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8 block border-b border-slate-100 pb-2">
                  Navigation
                </span>

                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `group flex items-center justify-between py-4 border-b border-slate-50 transition-all ${
                            isActive ? "text-blue-700" : "text-slate-900"
                          }`
                        }
                      >
                        <span className="text-xl font-black uppercase tracking-tight text-slate-900">
                          {link.name}
                        </span>

                        <ChevronRight
                          size={18}
                          className="text-slate-300 group-hover:translate-x-1 transition-transform"
                        />
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info for Professionalism */}
                <div className="mt-12 space-y-6">
                  <div className="flex items-center gap-4 text-slate-500">
                    <Phone size={18} className="text-blue-600" />
                    <span className="text-sm font-bold">
                      +1 (800) Doksanlarb-Finance - VIP
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <Globe size={18} className="text-blue-600" />
                    <span className="text-sm font-bold">
                      Global Support (EN/TR)
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Footer Area */}
              <div className="p-8 bg-slate-50 border-t border-slate-100">
                <div className="flex flex-row gap-4">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-5 bg-blue-700 text-white font-black rounded-xl shadow-lg shadow-blue-700/30 flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
                  >
                    <ShieldCheck size={18} />
                    Login Access
                  </Link>
                  {/* <Link
                    to="/admin"
                    className="px-8 py-3 bg-red-600 text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2"
                  >
                    <Lock size={14} /> Admin demo
                  </Link> */}
                </div>
                <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest mt-6">
                  Regulated by the Financial Authority
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

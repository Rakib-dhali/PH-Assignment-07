"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Clock, LineChart, Menu, X } from "lucide-react";
import Image from "next/image";
import { NavItem } from "@/types";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname: string = usePathname();

  const navItems: NavItem[] = [
    { href: "/", label: "Home", icon: Home },
    { href: "/timeline", label: "Timeline", icon: Clock },
    { href: "/stats", label: "Stats", icon: LineChart },
  ];

  const linkClass = (href: string) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      pathname === href
        ? "bg-[#244D3F] text-white"
        : "text-[#64748B] hover:text-gray-900 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white w-full relative border-b border-[#E9E9E9] ">
      <div className="max-w-7xl flex items-center justify-between mx-auto px-4 py-3">
        <Link href="/" className="text-xl">
          <Image
            src="/assets/logo.png"
            alt="Keen Keeper"
            width={141}
            height={40}
          />
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link href={href} className={linkClass(href)}>
                <Icon size={15} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-md z-50">
          <ul className="flex flex-col p-3 gap-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={linkClass(href)}
                >
                  <Icon size={15} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

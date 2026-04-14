import { SocialLink } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const socialLinks: SocialLink[] = [
  { icon: "facebook", href: "/assets/facebook.png" },
  { icon: "twitter", href: "/assets/twitter.png" },
  { icon: "instagram", href: "/assets/instagram.png" },
];

const legalLinks: string[] = ["Privacy Policy", "Terms of Service", "Cookies"];

export default function Footer() {
  return (
    <footer className="bg-[#1e4a38] w-full">
      <div className="text-center max-w-277.5 mx-auto px-6 pt-15 border-b border-white/10 space-y-5">
      <div className="flex items-center justify-center">
        <Image src="/assets/logo-xl.png" alt="KeenKeeper Logo" className="h-auto w-auto" width={412} height={61} />
      </div>  <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto  leading-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="text-xl text-white font-medium tracking-7 ">Social Links</p>

        <div className="flex justify-center gap-3">
            {socialLinks.map((link: SocialLink, i: number) => (   
                <Link key={i} href="#" className="hover:opacity-80 transition-opacity">
                    <Image src={link.href} alt={`${link.icon} icon`} width={24} height={24} />
                </Link>
            ))}
        </div>
          
          <hr className="border-white/10" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 px-8 md:px-12 py-5 text-sm text-white/50">
        <span>© 2026 KeenKeeper. All rights reserved.</span>
        <div className="flex gap-6 flex-wrap">
          {legalLinks.map((link: string, i: number) => (
            <Link key={i} href="#" className="hover:text-white text-center transition-colors">
              {link}
            </Link>
          ))}
        </div>
      </div>
      </div>
    </footer>
  );
}
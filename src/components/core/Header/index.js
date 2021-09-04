import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/core/Header/Navigation";
import MobileNavigation from "@/components/core/Header/MobileNavigation";

const Header = () => (
  <header className="relative border-b border-gray-100">
    <section className="bg-red-500 text-white">
      <div className="h-12 container items-center flex justify-center lg:justify-between">
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com/AksPro55/" target="_blank" rel="noreferrer">
            <Image src="/icons/facebook.svg" alt="Facebook Logo" width={24} height={24} />
          </a>
          <a href="https://twitter.com/AksPro55" target="_blank" rel="noreferrer">
            <Image src="/icons/twitter.svg" alt="Twitter Logo" width={24} height={24} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+905333736155" target="_blank" rel="noreferrer">
            <Image src="/icons/whatsapp.svg" alt="WhatsApp Logo" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/akspro55/" target="_blank" rel="noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram Logo" width={24} height={24} />
          </a>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-8 ml-4">
          <a className="flex items-center space-x-2" href="mailto:info@akspro.com.tr">
            <div className="lg:flex">
              <Image src="/icons/mail.svg" alt="Mail Icon" width={24} height={24} />
            </div>
            <span className="hidden lg:block">info@akspro.com.tr</span>
          </a>
          <a className="flex items-center space-x-2" href="tel:+903622385858">
            <div className="lg:flex">
              <Image src="/icons/phone.svg" alt="Phone Icon" width={24} height={24} />
            </div>
            <span className="hidden lg:block">+90 362 238 5858</span>
          </a>
        </div>
      </div>
    </section>
    <section className="container h-24 flex items-center justify-between">
      <Link href="/">
        <a className="relative w-[190.44px] h-14 lg:w-[217.65px] lg:h-16">
          <Image src="/logo-text.png" alt="Aks &amp; Pro Logo" layout="fill" />
        </a>
      </Link>
      <MobileNavigation />
      <Navigation />
    </section>
  </header>
);

export default Header;

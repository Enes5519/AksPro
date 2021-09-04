import Link from 'next/link';
import Navigation from '@/components/core/Header/Navigation';

const Header = () => (
  <header>
    <section className="bg-red-500 text-white">
      <div className="h-12 container items-center flex justify-center lg:justify-between">
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com/AksPro55/" target="_blank" rel="noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook Logo" />
          </a>
          <a href="https://twitter.com/AksPro55" target="_blank" rel="noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter Logo" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+905333736155" target="_blank" rel="noreferrer">
            <img src="/icons/whatsapp.svg" alt="WhatsApp Logo" />
          </a>
          <a href="https://www.instagram.com/akspro55/" target="_blank" rel="noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram Logo" />
          </a>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-8 ml-4">
          <a className="flex items-center space-x-2" href="mailto:info@akspro.com.tr">
            <img src="/icons/mail.svg" alt="Mail Icon" />
            <span className="hidden lg:block">info@akspro.com.tr</span>
          </a>
          <a className="flex items-center space-x-2" href="tel:+903622385858">
            <img src="/icons/mail.svg" alt="Phone Icon" />
            <span className="hidden lg:block">+90 362 238 5858</span>
          </a>
        </div>
      </div>
    </section>
    <section className="container h-24 flex items-center justify-between border-b-1 border-grey-500">
      <Link href="/">
        <img src="/logo-text.png" alt="Aks &amp; Pro Logo" className="h-14 lg:h-16" />
      </Link>
      <div className="lg:hidden">
        <img src="/icons/hamburger-menu.svg" alt="Menu Icon" />
      </div>
      <Navigation />
    </section>
  </header>
);

export default Header;

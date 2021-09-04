import Image from 'next/image';

const Footer = () => (
  <footer className="bg-gray-900 py-8">
    <div className="container text-white flex justify-between items-start text-right">
      <span>Aks &amp; Pro - &copy; 2021</span>
      <div>
        <div className="flex items-center gap-4">
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
          <a href="mailto:info@akspro.com.tr">
            <Image src="/icons/mail.svg" alt="Mail Icon" width={24} height={24} />
          </a>
          <a href="tel:+903622385858">
            <Image src="/icons/phone.svg" alt="Phone Icon" width={24} height={24} />
          </a>
        </div>
        <div>Yenimahalle, 16. Sk. No:8,</div>
        <div>55080 Canik/Samsun</div>
      </div>
    </div>
  </footer>
);

export default Footer;

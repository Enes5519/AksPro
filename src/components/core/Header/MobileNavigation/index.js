import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import navigationItems from "../Navigation/navigation-items.json";
import MobileNavigationDropdown from "@/components/core/Header/MobileNavigation/MobileNavigationDropdown";

const MobileNavigation = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button className="lg:hidden" onClick={() => setActive((prev) => !prev)} type="button">
        <Image src="/icons/hamburger-menu.svg" alt="Menu Icon" width={24} height={24} />
      </button>
      <nav
        className={clsx(
          "lg:hidden fixed top-36 z-40 w-full h-full left-0 bg-white flex flex-col items-center gap-4 py-4",
          !active && "hidden"
        )}
      >
        <Link href="/">
          <a className="hover:text-red-500">Anasayfa</a>
        </Link>
        {navigationItems.map((navItem) => (
          <MobileNavigationDropdown key={navItem.id} item={navItem} />
        ))}
      </nav>
    </>
  );
};

export default MobileNavigation;

import { useState } from "react";
import Link from "next/link";
import IconChevronDown from "@/icons/chevron_down.svg";

const MobileNavigationDropdown = ({ item }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button className="flex items-center gap-2" type="button" onClick={() => setActive((p) => !p)}>
        {item.name}
        <IconChevronDown className="w-4 h-4" />
      </button>
      {active && (
        <div className="flex flex-col items-center gap-4 text-gray-700">
          {item.subPages.map((subPage) => (
            <>
              {subPage.links.map((link) => (
                <Link href={`${subPage.path}/${link.to}`} key={link.to}>
                  <a>{link.name}</a>
                </Link>
              ))}
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileNavigationDropdown;

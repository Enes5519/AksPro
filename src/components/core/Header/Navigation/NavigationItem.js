import Link from 'next/link';
import Dropdown from './Dropdown';

const NavigationItem = ({ navigationItem }) => (
  <Dropdown id={navigationItem.id} title={navigationItem.name}>
    {navigationItem.subPages.map((subPage) => (
      <div key={subPage.path} className="flex-shrink-0 flex flex-col items-start p-6 gap-2 min-w-[200px] text-gray-700">
        <Link href={subPage.path}>
          <a
            className="self-center"
            target={subPage.newTab ? '_blank' : undefined}
            rel={subPage.newTab ? 'noreferrer' : undefined}
          >
            <img src={subPage.image.path} alt={subPage.image.alt} className="h-10 max-w-none" />
          </a>
        </Link>
        {subPage.links.map((link) => (
          <Link
            key={link.to}
            href={subPage.path + link.to}
          >
            <a
              className="whitespace-nowrap hover:text-red-500"
              target={subPage.newTab ? '_blank' : undefined}
              rel={subPage.newTab ? 'noreferrer' : undefined}
            >
              {link.name}
            </a>
          </Link>
        ))}
      </div>
    ))}
  </Dropdown>
);

export default NavigationItem;

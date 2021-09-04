import Link from 'next/link';
import navigationItems from './navigation-items.json';
import NavigationItem from '@/components/core/Header/Navigation/NavigationItem';

const Navigation = () => (
  <nav className="hidden lg:flex items-center gap-8 h-full text-xl min-w-0">
    <Link href="/">
      <a className="hover:text-red-500">
        Anasayfa
      </a>
    </Link>
    {navigationItems.map((navigationItem) => <NavigationItem key={navigationItem.id} navigationItem={navigationItem} />)}
  </nav>
);

export default Navigation;

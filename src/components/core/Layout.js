import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col min-w-0 min-h-screen">
    <Header />
    <div className="flex-grow">
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;

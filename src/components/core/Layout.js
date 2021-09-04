import clsx from "clsx";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, className }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className={clsx("flex-grow", className)}>{children}</div>
    <Footer />
  </div>
);

export default Layout;

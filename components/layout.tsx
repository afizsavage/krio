import { Footer } from './Footer';
import { Navbar } from './Navbar';

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  const pathWithOutLayout = ["/"];
  const hideLayout = pathWithOutLayout.includes(location.pathname);

  return (
    <div key={location.pathname} className="grid grid-rows-[7vh,87vh,6vh]">
      {!hideLayout && (
        <header className="">
          <Header />
        </header>
      )}
      <main>
        <Outlet />
      </main>
      {!hideLayout && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default RootLayout;

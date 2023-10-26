import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  const pathWithOutLayout = ["/"];
  const hideLayout = pathWithOutLayout.includes(location.pathname);

  return (
    <div key={location.pathname} className="grid grid-rows-layout min-h-screen">
      {!hideLayout && (
        <header className="row-start-1">
          <Header />
        </header>
      )}
      <main className="row-start-2">
        <Outlet />
      </main>
      {!hideLayout && (
        <footer className="row-start-3">
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default RootLayout;

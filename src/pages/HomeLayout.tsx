import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollToTop } from "../components";

// Topbar component right here for simplicity
const Topbar = () => (
  <div
    style={{
      width: "100%",
      background: "#294143",
      color: "#fff",
      textAlign: "center",
      padding: "7px 0",
      fontSize: "16px",
      letterSpacing: "1px",
      fontWeight: 500,
      zIndex: 999,
    }}
  >
    COD Available | Express Shipping (PAN INDIA)
  </div>
);

const HomeLayout = () => {
  return (
    <>
      <Topbar />
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;

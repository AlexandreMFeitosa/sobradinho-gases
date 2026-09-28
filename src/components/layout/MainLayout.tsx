import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Footer from "../../components/sections/Footer";
import ScrollToTop from "../common/ScrollToTop";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
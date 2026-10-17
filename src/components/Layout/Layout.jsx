import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

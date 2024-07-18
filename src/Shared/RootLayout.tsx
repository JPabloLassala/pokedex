import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Hero } from "./Hero";

export function RootLayout() {
  return (
    <div className="flex flex-col">
      <Header>
        <Hero />
        <Navbar />
        <div></div>
      </Header>
      <Outlet />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Header } from "./Header";

export function RootLayout() {
  return (
    <div className="flex flex-col items-center bg-sky-50 w-full h-full">
      <div className="w-3/4">
        <Header>
          <Navbar />
        </Header>
        <Outlet />
      </div>
    </div>
  );
}

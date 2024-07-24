import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Header } from "./Header";

export function RootLayout() {
  return (
    <div className="flex flex-col items-center bg-sky-50 w-full max-h-screen">
      <div className="w-3/4">
        <Header>
          <Navbar />
        </Header>
      </div>
      <Outlet />
    </div>
  );
}

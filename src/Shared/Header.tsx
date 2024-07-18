import { ReactNode } from "react";

export function Header({ children }: { children: ReactNode }) {
  return (
    <header className="flex flex-row justify-between h-12 bg-red-400 items-center">
      {children}
    </header>
  );
}

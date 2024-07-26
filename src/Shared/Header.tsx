import { ReactNode } from "react";

export function Header({ children }: { children: ReactNode }) {
  return (
    <header className="flex flex-row justify-center h-12 md:h-24 items-center md:mt-8">
      {children}
    </header>
  );
}

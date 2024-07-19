import { ReactNode } from "react";

export function Header({ children }: { children: ReactNode }) {
  return (
    <header className="flex flex-row justify-center h-24 items-center mt-8">{children}</header>
  );
}

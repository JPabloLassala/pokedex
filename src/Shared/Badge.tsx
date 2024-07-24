import { ReactNode } from "react";

export function Badge({
  bgColor,
  textColor,
  children,
  className = "",
}: {
  bgColor: string;
  textColor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`py-1 ${bgColor} ${textColor} text-xs font-bold font-header ${className}`}>
      {children}
    </div>
  );
}

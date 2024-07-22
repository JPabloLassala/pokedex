export function Paragraph({
  children,
  bold = false,
  gray = false,
  size = "md",
}: {
  children: React.ReactNode;
  bold?: boolean;
  gray?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const boldClass = bold && "font-bold";
  const sizeclass = size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base";
  const grayClass = gray && "text-gray-500";

  return <p className={`${boldClass} ${sizeclass} ${grayClass}`}> {children}</p>;
}

export function Container({
  className,
  children,
  element = "div",
}: {
  className?: string;
  children?: React.ReactNode;
  element?: "div" | "section" | "main" | "nav";
}) {
  const Element = element;
  return (
    <Element className={`bg-white rounded-2xl drop-shadow-md ${className}`}>{children}</Element>
  );
}

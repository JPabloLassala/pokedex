export function Container({
  className,
  children,
  element = "div",
  hidden = false,
}: {
  className?: string;
  children?: React.ReactNode;
  element?: "div" | "section" | "main" | "nav";
  hidden?: boolean;
}) {
  const Element = element;
  const hiddenClasses = hidden ? "" : "drop-shadow-md";
  return (
    <Element className={`bg-white md:rounded-2xl ${hiddenClasses} ${className}`}>
      {children}
    </Element>
  );
}

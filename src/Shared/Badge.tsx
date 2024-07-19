export function Badge({
  label,
  bgColor,
  textColor,
  className = "",
}: {
  label: string;
  bgColor: string;
  textColor: string;
  className?: string;
}) {
  return (
    <p
      className={`inline px-2 py-1 ${bgColor} ${textColor} rounded-lg text-xs font-bold font-header ${className}`}
    >
      <span>{label}</span>
    </p>
  );
}

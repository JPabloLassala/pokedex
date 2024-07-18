export function Badge({
  label,
  bgColor,
  textColor,
}: {
  label: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <p className={`inline px-2 py-1 ${bgColor} text-${textColor} rounded-full text-xs`}>
      <span>{label}</span>
    </p>
  );
}

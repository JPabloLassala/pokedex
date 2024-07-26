import { Badge } from "../Shared";

export function PokemonDescriptionBadge({
  isHidden,
  children,
}: {
  isHidden: boolean;
  children: React.ReactNode;
}) {
  const bgClass = isHidden ? "bg-hiddenAbility" : "bg-ability";
  const borderClass = isHidden ? "border-hiddenAbilityBorder" : "border-abilityBorder";

  return (
    <Badge
      bgColor={bgClass}
      textColor="text-slate-800"
      className={`px-6 py-2 break-keep uppercase border rounded-full min-w-36 flex flex-row justify-between items-center text-xs ${borderClass}`}
    >
      {children}
    </Badge>
  );
}

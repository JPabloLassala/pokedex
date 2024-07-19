export function PokeballSvg({
  className,
  props,
}: {
  className: string;
  props?: React.SVGProps<SVGSVGElement>;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12.0003 22.8332C17.9836 22.8332 22.8337 17.9831 22.8337 11.9998C22.8337 6.01659 17.9836 1.1665 12.0003 1.1665C6.01708 1.1665 1.16699 6.01659 1.16699 11.9998C1.16699 17.9831 6.01708 22.8332 12.0003 22.8332Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.25C12.862 15.25 13.6886 14.9076 14.2981 14.2981C14.9076 13.6886 15.25 12.862 15.25 12C15.25 11.138 14.9076 10.3114 14.2981 9.7019C13.6886 9.09241 12.862 8.75 12 8.75C11.138 8.75 10.3114 9.09241 9.7019 9.7019C9.09241 10.3114 8.75 11.138 8.75 12C8.75 12.862 9.09241 13.6886 9.7019 14.2981C10.3114 14.9076 11.138 15.25 12 15.25V15.25Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1.16699 12H8.75033M15.2503 12H22.8337" />
    </svg>
  );
}

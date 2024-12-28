interface LinksProps {
  label: string;
  icon?: React.ReactNode;
  url: string;
}

export function Links({ label, icon, url }: LinksProps) {
  return (
    <a
      href={url}
      className="flex cursor-pointer items-center gap-2 text-xs font-bold leading-[1.6] text-blue duration-300 hover:underline hover:underline-offset-4"
      target="_blank"
    >
      {label}
      {icon}
    </a>
  );
}

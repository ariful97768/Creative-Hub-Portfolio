import { ReactNode } from "react";

export default function Button({
  children,
  variant,
  className,
}: {
  children: Readonly<ReactNode>;
  variant: "primary" | "secondary" | "rounded" | "action";
  className?: string;
}) {
  const classNames = {
    primary:
      "flex items-center gap-2 text-sm lg:text-base lg:px-4.5 lg:py-4 px-3.5 py-2.5 rounded-lg font-bold bg-accent text-white",
    secondary:
      "flex items-center gap-2 text-sm lg:text-base lg:px-4.5 lg:py-4 px-3.5 py-2.5 rounded-lg font-bold bg-white text-[#6D6565]",
    rounded:
      "flex items-center gap-2 px-10 py-3.5 rounded-full font-bold bg-accent text-white",
    action:
      "flex items-center gap-2 px-4 py-1 text-sm lg:px-9 lg:py-3 rounded-full text-lg font-semibold bg-[#03255A] text-white",
  };
  return (
    <button
      className={
        `${classNames[variant]} group hover:cursor-pointer active:scale-97 transition duration-300 ` +
        className
      }
    >
      {children}
    </button>
  );
}

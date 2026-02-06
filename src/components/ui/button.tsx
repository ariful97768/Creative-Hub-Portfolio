import { ReactNode } from "react";

export default function Button({
  children,
  variant,
}: {
  children: Readonly<ReactNode>;
  variant: "primary" | "secondary" | "rounded" | "action";
}) {
  const classNames = {
    primary:
      "flex items-center gap-2 px-4.5 py-4 rounded-lg font-bold bg-accent text-white",
    secondary:
      "flex items-center gap-2 px-4.5 py-4 rounded-lg font-bold bg-white text-[#6D6565]",
    rounded:
      "flex items-center gap-2 px-10 py-3.5 rounded-full font-bold bg-accent text-white",
    action:
      "flex items-center gap-2 px-9 py-3 rounded-full text-lg font-semibold bg-[#03255A] text-white",
  };
  return (
    <button
      className={`${classNames[variant]}  group hover:cursor-pointer active:scale-97 transition duration-300`}
    >
      {children}
    </button>
  );
}

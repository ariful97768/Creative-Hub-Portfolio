import { LucideIcon } from "lucide-react";

export default function Input({
  required,
  label,
  name,
  type,
  placeholder,
  defaultValue,
  value,
  max,
  min,
  onChange,
  icon: Icon,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  defaultValue?: string;
  value?: string;
  required?: boolean;
  max?: number;
  min?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: LucideIcon;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={name}
        className="flex items-center gap-2 text-sm font-semibold text-gray-700"
      >
        {Icon && <Icon size={15} className="text-primary" />}
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        required={required}
        max={max}
        min={min}
        onChange={onChange}
        className="w-full border border-gray-200 bg-gray-50 px-4 py-2.5 rounded-lg outline-none text-sm text-dark placeholder:text-gray-400 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all duration-200 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer"
      />
    </div>
  );
}

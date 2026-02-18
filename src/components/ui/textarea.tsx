import { LucideIcon } from "lucide-react";

export default function Textarea({
  required,
  label,
  name,
  placeholder,
  defaultValue,
  value,
  onChange,
  icon: Icon,
}: {
  label: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
  value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  icon?: LucideIcon;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={name}
        className="flex items-center gap-2 text-sm font-semibold text-gray-700"
      >
        {Icon && <Icon size={15} className="text-primary" />} {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={3}
        required={required}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-200 bg-gray-50 px-4 py-2.5 rounded-lg outline-none text-sm text-dark placeholder:text-gray-400 resize-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all duration-200"
      />
    </div>
  );
}

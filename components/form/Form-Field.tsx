import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function FormField({
  id,
  label,
  labelRight,
  register,
  name,
  type,
  placeholder,
  error,
  className,
  disabled,
}: {
  id: string;
  label: string;
  labelRight?: React.ReactNode;
  register: any;
  name: string;
  type: string;
  placeholder: string;
  error: string;
  className: string;
  disabled: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor={id} className="text-[#b0b0b0]">
          {label}
        </Label>
        {labelRight}
      </div>
      <Input
        id={id}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={cn(
          "bg-transparent rounded-sm h-12 border-2 border-white/10 text-white placeholder:text-white/50",
          error ? "border-red-500" : "",
          className
        )}
        disabled={disabled}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
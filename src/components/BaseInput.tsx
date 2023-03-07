type BaseInputProps = {
  type: React.HTMLInputTypeAttribute;
  display: "block" | "inline" | "inline-block";
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  size: { height: string; width: string };
  validationRegex?: string;
  placeholder: string;
  statusIcons?: string[];
  statusMessage: React.ReactNode;
  isVerifiable: boolean;
  isShaded: boolean;
  isTrimmable: boolean;
  className: string;
};

const INTERNAL_CLASSES = "base-input";

export default function BaseInput({
  type = "text",
  display = "block",
  onChange,
  value,
  size,
  placeholder = "",
  statusMessage,
  isVerifiable = false,
  isShaded = false,
  isTrimmable = false,
  className,
}: BaseInputProps) {
  return (
    <>
      <input
        className={INTERNAL_CLASSES + ` ` + className}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ width: size.width, height: size.height, display: display }}
      />
    </>
  );
}

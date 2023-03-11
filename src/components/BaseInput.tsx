type BaseInputProps = {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  value: string | number;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  willSubmit?: boolean;
  // if willSubmit is supplied, you may supply another button text
  submitButtonText?: string;
  placeholder: string;
  errorObj: Record<string, string>;
};

const INTERNAL_CLASSES = "base-input";

export default function BaseInput({
  type = "text",
  name,
  value,
  label,
  onChange,
  onBlur,
  willSubmit,
  submitButtonText = "verify",
  placeholder = "",
  errorObj,
}: BaseInputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          className={INTERNAL_CLASSES}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        {willSubmit ? <button type="submit">{submitButtonText}</button> : null}
      </div>
      {errorObj[name] ? <div>{errorObj[name]}</div> : null}
    </div>
  );
}

type optionsProps = {
  minPayoutLimit?: number | string;
  maxPayoutLimit?: number | string;
  balance?: number | string;
};

type BaseInputProps = {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  value: string | number;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  willSubmit?: boolean;
  isOptional?: boolean;
  // if willSubmit is supplied, you may supply another button text
  submitButtonText?: string;
  placeholder: string;
  errorObj: Record<string, string>;
  highlightError?: boolean;
  options?: optionsProps;
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
  isOptional,
  submitButtonText = "verify",
  placeholder = "",
  errorObj,
  highlightError = false,
  options,
}: BaseInputProps) {
  return (
    <div>
      <div className="input-header">
        <label htmlFor={name}>
          {label}{" "}
          {isOptional ? (
            <span style={{ opacity: 0.4 }}>&nbsp;{`(Optional)`}</span>
          ) : null}
        </label>
        {options?.maxPayoutLimit ? (
          <span className={`${errorObj[name] ? `red` : ""}`}>
            Max. amount: {options?.maxPayoutLimit}NGN
          </span>
        ) : null}
      </div>
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
      <div className="input-footer">
        {options?.minPayoutLimit && options?.balance ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Minimum Amount: {options?.minPayoutLimit}</span>{" "}
            <span>Available Balance{options?.balance}</span>
          </div>
        ) : null}
        {errorObj[name] ? (
          <div className={highlightError ? `highlight-error` : ``}>
            {errorObj[name]}
          </div>
        ) : null}
      </div>
    </div>
  );
}

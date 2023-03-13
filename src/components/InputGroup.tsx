type dataProps = {
  currency?: "NGN" | "USD" | "KES" | "GHC";
  minPayoutLimit?: number | string;
  maxPayoutLimit?: number | string;
  balance?: number | string;
};

type InputGroupProps = {
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
  data?: dataProps;
};

const INTERNAL_CLASSES = "base-input";

export default function InputGroup({
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
  data,
}: InputGroupProps) {
  return (
    <div className="stack-s input-group">
      <div
        className="input-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label htmlFor={name} style={{ margin: 0 }}>
          {label}{" "}
          {isOptional ? (
            <span style={{ opacity: 0.4 }}>&nbsp;{`(Optional)`}</span>
          ) : null}
        </label>
        {data?.maxPayoutLimit ? (
          <span className={`${errorObj[name] ? `color:red` : ""}`}>
            Max. amount:
            <span className="bold">
              &nbsp;{data?.maxPayoutLimit}
              {data?.currency}
            </span>
          </span>
        ) : null}
      </div>
      <div className="input-body">
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
        {data?.minPayoutLimit && data?.balance ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              Minimum Amount:
              <span className="bold">
                &nbsp;{data?.minPayoutLimit}
                {data?.currency}
              </span>
            </span>
            <span>
              Available Balance:
              <span className="bold">
                &nbsp;{data?.balance}
                {data?.currency}
              </span>
            </span>
          </div>
        ) : null}
      </div>
      {errorObj[name] ? (
        <div
          style={{ color: "red" }}
          className={highlightError ? `highlight-error` : ``}
        >
          {errorObj[name]}
        </div>
      ) : null}
    </div>
  );
}

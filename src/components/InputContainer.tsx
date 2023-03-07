type InputContainerProps = {
  children: React.ReactNode;
  props?: React.ReactNode;
};

export default function InputContainer({
  children,
  ...props
}: InputContainerProps) {
  return <div {...props}>{children}</div>;
}

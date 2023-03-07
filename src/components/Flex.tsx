type FlexProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  props?: React.ReactNode;
  gap?: string | number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?: string;
  align?: string;
  width?: number | string;
  className?: string;
};

const INTERNAL_CLASSES = "flex";

export default function Flex({
  as: Element = "div",
  children,
  props,
  gap,
  wrap,
  direction,
  justify,
  align,
  width,
  className,
}: FlexProps) {
  return (
    <Element
      className={INTERNAL_CLASSES + ` ` + className}
      style={{
        gap: gap,
        flexWrap: wrap,
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        width: width,
      }}
    >
      {children}
    </Element>
  );
}

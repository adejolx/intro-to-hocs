import React from "react";
import Flex from "../Flex";
import Footer from "../Footer";

type withFlexboxProps = {
  children: React.ReactNode;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  props?: React.ReactNode;
};

function withFlexbox(WrapperComponent: React.ElementType) {
  return ({ children, wrap, ...props }: withFlexboxProps) => {
    return (
      <WrapperComponent>
        <Flex wrap={wrap} {...props}>
          {children}
        </Flex>
      </WrapperComponent>
    );
  };
}

export const FlexFooter = withFlexbox(Footer);

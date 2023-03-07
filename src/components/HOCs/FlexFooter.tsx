import React from "react";
import Flex from "../Flex";
import Footer from "../Footer";

type withFlexboxProps = {
  children: React.ReactNode;
  props?: React.ReactNode;
};

function withFlexbox(WrapperComponent: React.ElementType) {
  return ({ children, ...props }: withFlexboxProps) => {
    return (
      <WrapperComponent>
        <Flex {...props}>{children}</Flex>
      </WrapperComponent>
    );
  };
}

export const FlexFooter = withFlexbox(Footer);

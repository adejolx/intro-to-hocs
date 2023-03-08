import React from "react";
import Flex, { FlexProps } from "../Flex";
import Footer from "../Footer";

function withFlexbox(WrapperComponent: React.ElementType) {
  return ({ children, ...props }: FlexProps) => {
    return (
      <WrapperComponent>
        <Flex {...props}>{children}</Flex>
      </WrapperComponent>
    );
  };
}

export const FlexFooter = withFlexbox(Footer);

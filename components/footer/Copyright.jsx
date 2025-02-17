import { Text, TextProps } from "@chakra-ui/layout";
import * as React from "react";

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Radiant Gaming, All rights reserved.
  </Text>
);

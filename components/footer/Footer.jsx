import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  VStack,
  Heading,
  Text,
  Link,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { Copyright } from "./Copyright";
import { LinkGrid } from "./LinkGrid";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { SubscribeForm } from "./SubscribeForm";

const Main = () => (
  <Box bg="gray.700">
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="8xl"
      py="12"
      px={{ base: "4", md: "8" }}
      mt="5%"
    >
      <Stack spacing="10" divider={<StackDivider />}>
        
      </Stack>
    </Box>
  </Box>
);

export default Main;

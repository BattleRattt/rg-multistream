import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaReddit, FaTwitter, FaDiscord } from "react-icons/fa";

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="discord.gg/awVqQxVpJC"
      aria-label="Discord"
      icon={<FaDiscord fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://twitter.com/RadiantGaming"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    />
  </ButtonGroup>
);

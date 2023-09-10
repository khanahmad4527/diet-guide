import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Flex
        bg="#7ACA25"
        color={"white"}
        alignItems={"center"}
        justifyContent={"space-around"}
        padding={"20px"}
        fontSize={"20px"}
      >
        <Link href="/recipe">Recipe</Link>
        <Link href="/calorie">Calorie</Link>
        <Link href="/diet">Diet</Link>
      </Flex>
    </Box>
  );
};

export default Footer;

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";

const RecipeCard = ({ recipe }) => {
  const toast = useToast();
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          objectFit={"contain"}
          src={recipe?.recipe?.image}
          alt={recipe?.recipe?.label}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{recipe?.recipe?.label}</Heading>
          <VStack align={"left"} spacing={"10px"} fontSize={"20px"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Flex alignItems={"center"} gap={"10px"}>
                <Icon viewBox="0 0 200 200" color="green.500">
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                <Text>Protein</Text>
              </Flex>

              <Text>{Math.floor(recipe?.recipe?.digest[2].total)}g</Text>
            </Flex>

            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Flex alignItems={"center"} gap={"10px"}>
                <Icon viewBox="0 0 200 200" color="yellow.500">
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                <Text>Fat</Text>
              </Flex>

              <Text>{Math.floor(recipe?.recipe?.digest[0].total)}g</Text>
            </Flex>
          </VStack>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() =>
            toast({
              title: "Order Placed",
              position: "top",
              status: "success",
              duration: 2000,
              isClosable: true,
            })
          }
        >
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;

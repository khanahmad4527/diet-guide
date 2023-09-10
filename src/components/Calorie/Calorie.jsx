import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import LogoutButton from "../Auth/LogoutButton";
import RecipeCard from "../Recipe/RecipeCard";
import axios from "axios";

const Calorie = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [calorieValue, setCalorieValue] = useState(100);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadMoviesData = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://api.edamam.com/api/recipes/v2?calories=${calorieValue}&type=public&app_id=${process.env.REACT_APP_EDAMAM_appId}&app_key=${process.env.REACT_APP_EDAMAM_appKey}&cuisineType=Indian`
      );
      setRecipeData(data?.data?.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    //page load at top
    window.scrollTo(0, 0);

    loadMoviesData();
  }, []);

  const handleSearch = () => {
    loadMoviesData();
  };

  return (
    <>
      <LogoutButton />

      <Box width={"90%"} margin={"auto"}>
        <Text>
          Input maximum desired calories per serving. For food database results
          default serving is 100g.
        </Text>
        <Flex
          alignItems={"center"}
          gap={"20px"}
          mt={"20px"}
          width={{ sm: "50%", md: "50%" }}
        >
          <NumberInput
            defaultValue={100}
            value={calorieValue}
            onChange={(value) => setCalorieValue(value)}
            min={0}
            max={10000}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button colorScheme="green" onClick={handleSearch}>
            Search
          </Button>
        </Flex>
      </Box>

      <Box minH={"100vh"} width={"80%"} m={"50px auto"}>
        {loading ? (
          <Heading>loading...</Heading>
        ) : error ? (
          <Heading>Error...</Heading>
        ) : (
          <Grid
            templateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
            padding={"10px"}
          >
            {recipeData && recipeData.length === 0 ? (
              <Heading>No data found...</Heading>
            ) : (
              recipeData.map((recipe, index) => {
                return <RecipeCard key={index} recipe={recipe} />;
              })
            )}
          </Grid>
        )}
      </Box>

      <Footer />
    </>
  );
};

export default Calorie;

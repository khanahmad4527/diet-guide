import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  Heading,
  useToast,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import LogoutButton from "../Auth/LogoutButton";
import RecipeCard from "../Recipe/RecipeCard";
import axios from "axios";

const Diet = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [selectedDiet, setSelectedDiet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const toast = useToast();

  const calorieCheckBoxData = [
    { name: "Balanced", value: "diet=balanced" },
    { name: "High Fiber", value: "diet=high-fiber" },
    { name: "High Protein", value: "diet=high-protein" },
    { name: "Low Carb", value: "diet=low-carb" },
    { name: "Low Fat", value: "diet=low-fat" },
    { name: "Low Sodium", value: "diet=low-sodium" },
    { name: "Alcohol Cocktail", value: "health=alcohol-cocktail" },
    { name: "Alcohol Free", value: "health=alcohol-free" },
    { name: "Celery Free", value: "health=celery-free" },
    { name: "Crustacean Free", value: "health=crustacean-free" },
    { name: "Dairy Free", value: "health=dairy-free" },
    { name: "DASH", value: "health=DASH" },
    { name: "Egg Free", value: "health=egg-free" },
    { name: "Fish Free", value: "health=fish-free" },
    { name: "FODMAP Free", value: "health=fodmap-free" },
    { name: "Gluten Free", value: "health=gluten-free" },
    { name: "Immuno Supportive", value: "health=immuno-supportive" },
    { name: "Keto Friendly", value: "health=keto-friendly" },
    { name: "Kidney Friendly", value: "health=kidney-friendly" },
    { name: "Kosher", value: "health=kosher" },
    { name: "Low Fat Abs", value: "health=low-fat-abs" },
    { name: "Low Potassium", value: "health=low-potassium" },
    { name: "Low Sugar", value: "health=low-sugar" },
    { name: "Lupine Free", value: "health=lupine-free" },
    { name: "Mediterranean", value: "health=Mediterranean" },
    { name: "Mollusk Free", value: "health=mollusk-free" },
    { name: "Mustard Free", value: "health=mustard-free" },
    { name: "No Oil Added", value: "health=no-oil-added" },
    { name: "Paleo", value: "health=paleo" },
    { name: "Peanut Free", value: "health=peanut-free" },
    { name: "Pescatarian", value: "health=pescatarian" },
    { name: "Pork Free", value: "health=pork-free" },
    { name: "Red Meat Free", value: "health=red-meat-free" },
    { name: "Sesame Free", value: "health=sesame-free" },
    { name: "Shellfish Free", value: "health=shellfish-free" },
    { name: "Soy Free", value: "health=soy-free" },
    { name: "Sugar Conscious", value: "health=sugar-conscious" },
    { name: "Sulfite Free", value: "health=sulfite-free" },
    { name: "Tree Nut Free", value: "health=tree-nut-free" },
    { name: "Vegan", value: "health=vegan" },
    { name: "Vegetarian", value: "health=vegetarian" },
    { name: "Wheat Free", value: "health=wheat-free" },
  ];

  const loadMoviesData = async (diet = "") => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_EDAMAM_appId}&app_key=${process.env.REACT_APP_EDAMAM_appKey}&${diet}&cuisineType=Indian`
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
    if (selectedDiet.length) {
      loadMoviesData(selectedDiet.join("&"));
    } else {
      toast({
        title: "Please select diet",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <LogoutButton />

      <Box
        width={"90%"}
        margin={"auto"}
        bg="whitesmoke"
        padding={"20px"}
        borderRadius={"20px"}
      >
        <CheckboxGroup
          colorScheme="green"
          value={selectedDiet}
          onChange={setSelectedDiet}
        >
          <Flex
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={"20px"}
            width={"100%"}
          >
            {calorieCheckBoxData.map((item, index) => {
              return (
                <Checkbox key={index} value={item.value}>
                  {item.name}
                </Checkbox>
              );
            })}
            <Button colorScheme="green" onClick={handleSearch}>
              Search
            </Button>
          </Flex>
        </CheckboxGroup>
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
            {recipeData &&
              recipeData.map((recipe, index) => {
                return <RecipeCard key={index} recipe={recipe} />;
              })}
          </Grid>
        )}
      </Box>

      <Footer />
    </>
  );
};

export default Diet;

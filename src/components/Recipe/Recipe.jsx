import React, { useEffect, useState } from "react";
import LogoutButton from "../Auth/LogoutButton";
import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const Recipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadMoviesData = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://api.edamam.com/api/recipes/v2?q=${searchQuery}&type=public&app_id=${process.env.REACT_APP_EDAMAM_appId}&app_key=${process.env.REACT_APP_EDAMAM_appKey}&cuisineType=Indian`
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
      <Box>
        <Box
          bgImage="URL('https://unsplash.com/photos/0PPw3nsbinQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHJlY2lwZXxlbnwwfDB8fHwxNjk0MzQwMDcyfDA&force=true&w=640')"
          bgSize={"contain"}
          width={"90%"}
          margin={"auto"}
          color={"white"}
          padding={"50px 40px"}
        >
          <Heading textAlign={"center"} color={"#BC7240"}>
            Search your recipe
          </Heading>

          <Box mt={"50px"}>
            <InputGroup>
              <Input
                type="text"
                placeholder="Search your recipe"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="white"
                color={"gray"}
              />
              <InputRightElement width="4.5rem">
                <Button
                  colorScheme="orange"
                  h="1.75rem"
                  size="sm"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>

        <Box width={"80%"} m={"50px auto"}>
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
      </Box>
      <Footer />
    </>
  );
};

export default Recipe;

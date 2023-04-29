import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Spinner from "../../components/Spinner";
import axios from "axios";

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import RecipeIngredients from "./RecipeIngredients";
import RecipeDetails from "./RecipeDetails";
import RecipeCook from "./RecipeCook";

const RecipeSide = ({ recipeId }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (recipeId) {
      async function fetchData() {
        const response = await axios.get(
          `/api/recipes/${recipeId}`
        );
        const allData = response.data;
        setData(allData.recipe);
        setIsLoading(false);
      }

      fetchData();
    }
  }, [recipeId]);

  return (
    <Stack flexBasis="70%">
      {!isLoading && recipeId && (
        <>
          <RecipeDetails data={data} isLoading={isLoading} />
          <RecipeIngredients data={data}  />
          <RecipeCook data={data} />
        </>
      )}

      {isLoading && recipeId && (
        <Stack marginTop="50px">
          <Spinner />
        </Stack>
      )}

      {!recipeId && (
        <Stack marginTop='50px' direction='row' justifyContent='center' alignItems='center'>
          <InsertEmoticonIcon sx={{color: '#f38e82', marginRight: '15px', width: '30px', height: '30px'}} />
          <Typography variant='h6' component='h6'>Start by searching for a recipe or <br /> an ingredient. Have fun!</Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default RecipeSide;

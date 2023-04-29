import { Stack, Typography } from '@mui/material'
import React from 'react'

import CheckIcon from "@mui/icons-material/Check";

const RecipeIngredients = ({data}) => {

  return (
    <Stack backgroundColor="#f2efee" padding="60px 0">
        <Typography
          variant="h5"
          component="h6"
          fontWeight={600}
          color="#f38e82"
          align="center"
          marginBottom="30px"
        >
          RECIPE INGREDIENTS
        </Typography>
        <Stack
          flexWrap="wrap"
          direction="row"
          padding="0 20px"
          justifyContent="start"
        >
          {data && data.ingredients && data.ingredients.map((ingredient, index) => (
            <Stack key={index} direction="row" flexBasis="50%" marginBottom="15px">
              <CheckIcon sx={{ color: "#f38e82", marginRight: "8px" }} />
              <Typography variant="subtitle2" component="h6" fontWeight={400}>
                {ingredient}
              </Typography>
            </Stack>
          ))}
          
        </Stack>
        
      </Stack>
  )
}

export default RecipeIngredients
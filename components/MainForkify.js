import React, { useState } from 'react'
import { Stack } from '@mui/material'
import TopForkify from './TopForkify'
import RecipeSide from './RecipeSide/RecipeSide'
import ResultSide from './ResultSide/ResultSide'

const MainForkify = () => {
  const [recipeId, setRecipeId] = useState('');

  return (
    <section id="hero" style={{height: '100%'}}>
        <Stack height='100%' paddingY='50px' sx={{backgroundImage: 'linear-gradient(to right bottom, #fbdb89, #f48982)'}}>
          <Stack backgroundColor='#F9F5F3' width='1200px' borderRadius='10px' margin='auto' >
            <TopForkify setRecipeId={setRecipeId} />
            <Stack direction='row' height='100%'>
              <ResultSide setRecipeId={setRecipeId} />
              <RecipeSide recipeId={recipeId} />
            </Stack>
          </Stack>
        </Stack>
    </section>
  )
}

export default MainForkify
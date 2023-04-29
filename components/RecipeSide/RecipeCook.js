import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RecipeCook = ({data}) => {
  return (
    <Stack padding="40px 0" alignItems='center'>
        <Typography
          variant="h5"
          component="h6"
          fontWeight={600}
          color="#f38e82"
          align="center"
          marginBottom="30px"
        >
          HOW TO COOK IT
        </Typography>
        <Typography
          variant="subtitle1"
          component="h6"
          fontWeight={500}
          color="#918581"
          align="center"
          padding='0 60px'
          marginBottom="20px"
        >
          This recipe was carefully designed and tested by <span style={{fontWeight: 700}}>{data?.publisher}</span>. Please check out directions at their website.
        </Typography>
        <Stack
            direction="row"
            justifyContent="space-between"
          >
            <a href={data.source_url} target="_blank" rel="noreferrer">
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "12px 55px 12px 35px",
                borderRadius: "10rem",
                backgroundImage:
                  "linear-gradient(to right bottom, #FBDB89, #F48982)",
              }}
            >
              <ArrowForwardIcon
                sx={{
                  position: "absolute",
                  top: "21%",
                  right: "13%",
                  color: "#fff",
                }}
              />
              Directions
            </Button>
            </a>
          </Stack>
      </Stack>
  )
}

export default RecipeCook
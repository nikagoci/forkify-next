import { Box, Skeleton, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


const RecipeDetails = ({ data, isLoading }) => {
  const [serving, setServing] = useState(4);
  const [isClicked, setIsClicked] = useState(false);
  const ctx = useContext(Context);

  let timeCalculator;

  if (data.ingredients.length >= 0 && data.ingredients.length <= 10) {
    timeCalculator = 30;
  } else if (data.ingredients.length >= 10 && data.ingredients.length <= 15) {
    timeCalculator = 45;
  } else if (data.ingredients.length >= 15 && data.ingredients.length <= 25) {
    timeCalculator = 60;
  } else if (data.ingredients.length >= 25 && data.ingredients.length <= 35) {
    timeCalculator = 75;
  }

  useEffect(() => {
    setServing(4);

    for (let i = 0; i < ctx.items.length; i++) {
      const item = ctx.items[i];

      if (item._id === data._id) {
        setIsClicked(true)
        break;
      } else {
        setIsClicked(false)
      }
    }
  }, [data, ctx.items]);

  const handleAdd = () => {
    setServing((prev) => prev + 1);
    if (serving === 20) {
      setServing(20);
    }
  };

  const handleRemove = () => {
    setServing((prev) => prev - 1);
    if (serving === 1) {
      setServing(1);
    }
  };


  const handleClick = () => {
    setIsClicked(prev => !prev);
   
    if(!isClicked){
      ctx.addToFavorites(data)
    } else{
      ctx.removeFromFavorites(data._id)
    }
  }

  return (
    <Stack marginBottom="20px">
      <Box
        width="100%"
        height="350px"
        position="relative"
        marginBottom="70px"
        top={0}
        left={0}
        className="img-container"
      >
        {isLoading && (
          <Skeleton variant="rect" width="100%" height="100%">
            <img
              width="100%"
              height="100%"
              src={data?.image_url}
              alt="random"
            />
          </Skeleton>
        )}

        {!isLoading && (
          <img width="100%" height="100%" src={data?.image_url} alt="random" />
        )}

        <Stack
          position="absolute"
          alignItems="center"
          left="25%"
          bottom="-20px"
          width="300px"
          sx={{
            backgroundImage:
              "linear-gradient(to right bottom, #FBDB89, #F48982)",
            padding: "15px 0",
            transform: "skewY(-6deg)",
          }}
        >
          <Typography
            variant="h5"
            component="span"
            color="#fff"
            fontWeight={700}
            textTransform="uppercase"
            textAlign="center"
          >
            {data?.title}
          </Typography>
        </Stack>
      </Box>
      <Stack direction="row" justifyContent="space-around" padding="0 30px">
        <Stack direction="row">
          <Stack direction="row" alignItems="center" marginRight="35px">
            <AccessTimeIcon
              sx={{ color: "#f38e82", fontSize: "25px", marginRight: "10px" }}
            />
            <Typography variant="h6" component="p" fontWeight={300}>
              <span style={{ fontWeight: 500 }}>{timeCalculator}</span> Minutes
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" marginRight="25px">
            <PeopleOutlineIcon
              sx={{ color: "#f38e82", fontSize: "25px", marginRight: "10px" }}
            />
            <Typography variant="h6" component="p" fontWeight={300}>
              <span style={{ fontWeight: 500 }}>{serving}</span> Servings
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" marginRight="85px">
          <RemoveCircleOutlineIcon
            sx={{
              color: "#f38e82",
              fontSize: "25px",
              cursor: "pointer",
              ":hover": {
                transform: "translateY(-3px)",
                transition: "all 0.3s ease-in-out",
              },
            }}
            onClick={handleRemove}
          />
          <AddCircleOutlineIcon
            sx={{
              color: "#f38e82",
              fontSize: "25px",
              cursor: "pointer",
              ":hover": {
                transform: "translateY(-3px)",
                transition: "all 0.3s ease-in-out",
              },
            }}
            onClick={handleAdd}
          />
        </Stack>
        <Stack
          sx={{
            backgroundImage: "linear-gradient(to right bottom,#fbdb89,#f48982)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            ":hover": {
              transform: "scale(1.1)",
              transition: "all .3s ease-in-out",
            },
          }}
          alignItems="center"
          justifyContent="center"
          onClick={handleClick}
        >
         {!isClicked ? <BookmarkBorderIcon sx={{color: '#fff'}} /> :  <BookmarkIcon sx={{ color: "#fff" }} /> }
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RecipeDetails;

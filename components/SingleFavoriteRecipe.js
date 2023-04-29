import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const SingleFavoriteRecipe = ({ item, setRecipeId, setHover }) => {
  const handleClick = () => {
    setRecipeId(item._id);
    setHover(false)
  }

  const convertTitle = (title) => {
    let newTitle = [];

    if (title.length > 25) {
      title.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= 25) {
          newTitle.push(cur);
        }
        return acc + cur.length;
      }, 0);

      return `${newTitle.join(" ")}...`;
    }

    return title;
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      padding="30px"
      sx={{
        cursor: "pointer",
        transition: "all .3s ease-in-out",
        borderBottom: '1px solid #F59A83' ,
        ":hover": { backgroundColor: "#F9F5F3" }
      }}
      onClick={handleClick}
    >
      <Stack width="50px" height="50px" marginRight="15px">
        <img
          width="100%"
          height="100%"
          style={{ borderRadius: "50%" }}
          src={item.image_url}
          alt={item.title}
        />
      </Stack>
      <Stack>
        <Typography
          variant="body1"
          component="h5"
          color="#f38e82"
          textTransform="uppercase"
        >
          {convertTitle(item.title)}
        </Typography>
        <Typography variant="subtitle2" component="p">
            {item.publisher}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SingleFavoriteRecipe;

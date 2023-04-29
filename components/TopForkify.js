import Input from "../utils/Input";
import { Stack } from "@mui/system";
import React, { useContext, useState } from "react";
import Context from "../context/Context";
import AddRecipe from './AddRecipe'

import FavoriteIcon from "@mui/icons-material/Favorite";
import SingleFavoriteRecipe from "./SingleFavoriteRecipe";

const TopForkify = ({setRecipeId}) => {
  const [hover, setHover] = useState(false);
  const ctx = useContext(Context);

  return (
    <>
      <Stack direction="row" justifyContent="space-between" padding="30px 40px">
        <Stack width="150px">
          <img src='/images/logo.png' alt="logo" width="100%" height="100%" />
        </Stack>
          <Input />
        <Stack>
        </Stack>
        <Stack direction="row" position="relative" top={0} left={0} alignItems='center'>
          <AddRecipe setRecipeId={setRecipeId} />
          {ctx.items.length > 0 && (
            <FavoriteIcon
              sx={{ color: "#F59A83", fontSize: "40px", cursor: "pointer" }}
              onClick={() => setHover((prev) => !prev)}
            />
          )}

          {hover && (
            <Stack
              position="absolute"
              top="60px"
              right="-20px"
              zIndex={10}
              width="400px"
              sx={{ backgroundColor: "#fff" }}
            >
              {ctx.items.map(item => (
                <SingleFavoriteRecipe key={item._id} item={item} setRecipeId={setRecipeId} setHover={setHover} />
              ))}
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default TopForkify;

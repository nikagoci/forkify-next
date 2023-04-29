import { Stack } from "@mui/system";
import React, { useContext } from "react";

import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Typography } from "@mui/material";

import Modal from './Modal'
import Context from "../context/Context";

const AddRecipe = ({setRecipeId}) => {
  const ctx = useContext(Context);

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        cursor: "pointer",
        transition: "all .3s ease-in-out",
        marginRight: "20px",
        ":hover": { transform: "translateY(-5px)" },
      }}
      onClick={() => ctx.openModal()}
    >
      <ControlPointIcon sx={{ color: "#f38e82", marginRight: "5px" }} />
      <Typography variant="h6" component="h5" color="grey">
        ADD RECIPE
      </Typography>
      {ctx.modal && (
        <Modal setRecipeId={setRecipeId} close={() => ctx.closeModal()} />
      )}
    </Stack>
  );
};

export default AddRecipe;

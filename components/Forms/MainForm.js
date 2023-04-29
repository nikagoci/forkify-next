import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useContext, useState } from "react";
import FormData from "./FormData";
import FormIngredients from "./FormIngredients";

import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Context from "../../context/Context";

const MainForm = ({setRecipeId}) => {
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [createdId, setCreatedId] = useState(null);

  const ctx = useContext(Context)

  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    source_url: yup.string().required("Source is required"),
    image_url: yup.string().required("Image is required"),
    publisher: yup.string().required("Publisher is required"),
    publisher_url: yup.string().required("Publisher image is required"),
    social_rank: yup
      .number()
      .positive("Social rank should be positive")
      .integer("Social rank should be integer")
      .min(1, "Social rank should be more than 1")
      .max(100, "Socail rank should be less than 100")
      .typeError("Social rank should be a number"),
    ingredient1: yup.string().required("ingredient1 is required"),
    ingredient2: yup.string(),
    ingredient3: yup.string(),
    ingredient4: yup.string(),
    ingredient5: yup.string(),
    ingredient6: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const completedData = (data) => {
    let ingredients = [];

    for (let i = 1; i <= 6; i++) {
      const ingredient = data[`ingredient${i}`];

      delete data[`ingredient${i}`];

      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    data.ingredients = ingredients;

    return data;
  };

  const addRecipe = async (data) => {
    try {
      const response = await axios.post(
        "/api/recipes",
        data
      );
      return response;
    } catch (error) {
      if(error.response.data.message.includes('duplicate key error')){
        setErrorMessage('Same title already exists, try rename your recipe')
      }
    }
  };

  const onSubmit = (data) => {
    const fullData = completedData(data);

    addRecipe(fullData)
      .then((res) => {
        if (res.status === 201) {
          setIsSent(true);
          setCreatedId(res.data.recipe._id)
        }
      })
      .catch((err) => {
        if (err) {
          setIsError(true);
        }
      });
  };
  
  const handleRecipeShow = () => {
    setRecipeId(createdId);
    setTimeout(() => {
      ctx.closeModal()
    }, 10)
  }

  return (
    <>
      {!isError && !isSent && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="row" columnGap={10}>
            <FormData register={register} errors={errors} />
            <FormIngredients register={register} errors={errors} />
          </Stack>
          <Stack direction="row" justifyContent="center" position="relative">
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "10px 25px 10px 70px",
                borderRadius: "10rem",
                backgroundImage:
                  "linear-gradient(to right bottom, #FBDB89, #F48982)",
              }}
              type="submit"
            >
              <CloudUploadIcon
                sx={{
                  position: "absolute",
                  top: "25%",
                  left: "20%",
                  color: "#fff",
                }}
                type="submit"
              />
              Upload
            </Button>
          </Stack>
        </form>
      )}
      {isSent && (
        <Stack justifyContent="center" alignItems="center">
          <Typography
            variant="h3"
            component="h2"
            marginTop="120px"
            color="#346019"
          >
            Data Successfuly sent
          </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "10px 50px",
                borderRadius: "10rem",
                backgroundImage:
                  "linear-gradient(to right bottom, #FBDB89, #F48982)",
                marginTop: '120px'
              }}
              type="submit"
              onClick={handleRecipeShow}
            >
              See Added Recipe
            </Button>
        </Stack>
      )}
      {isError && (
        <Stack justifyContent="center" alignItems="center">
        <Typography
          variant="h3"
          component="h2"
          marginTop="120px"
          marginBottom='30px'
          color="red"
        >
          Data Send Failed
        </Typography>
        {errorMessage ? 
          <Typography variant='h5' component='h5' textTransform="capitalize" color='#b87754'>{errorMessage}</Typography>
         : <Typography variant='h5' component='h5' color='#b87754'>Please Try Again Later</Typography>
        } 
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 50px",
              borderRadius: "10rem",
              backgroundImage:
                "linear-gradient(to right bottom, #FBDB89, #F48982)",
              marginTop: '70px'
            }}
            type="submit"
            onClick={() => {
              setIsError(false)
              reset()
            }}
          >
            Go Back 
          </Button>
      </Stack>
      )}
    </>
  );
};

export default MainForm;

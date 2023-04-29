import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const FormData = ({register, errors}) => {
  return (
    <Stack>
      <Typography
        variant="h5"
        component="h2"
        marginBottom="40px"
        fontWeight={700}
        textTransform="uppercase"
      >
        Recipe Data
      </Typography>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="title" style={style.label}>
          Title
        </label>
        <input
          type="text"
          placeholder={`${errors.title ? errors.title.message : "Type title"}`}
          name="title"
          id="title"
          className={`input-data ${errors.title && "error-input"}`}
          style={style.input}
          {...register("title")}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="URL" style={style.label}>
          URL
        </label>
        <input
          type="text"
          placeholder={`${errors.source_url ? errors.source_url.message : "Type URL"}`}
          name="URL"
          id="URL"
          className={`input-data ${errors.source_url && "error-input"}`}
          style={style.input}
          {...register("source_url")}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="image url" style={style.label}>
          image url
        </label>
        <input
          type="text"
          placeholder={`${errors.image_url ? errors.image_url.message : "Type image URL"}`}
          name="image url"
          id="image url"
          className={`input-data ${errors.image_url && "error-input"}`}
          style={style.input}
          {...register("image_url")}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="publisher" style={style.label}>
          publisher
        </label>
        <input
          type="text"
          placeholder={`${errors.publisher ? errors.publisher.message : "Type publisher"}`}
          name="publisher"
          id="publisher"
          className={`input-data ${errors.publisher && "error-input"}`}
          style={style.input}
          {...register("publisher")}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="prep time" style={style.label}>
          publisher URL
        </label>
        <input
          type="text"
          placeholder={`${errors.publisher_url ? errors.publisher_url.message : "Type publisher Url"}`}
          name="prep time"
          id="prep time"
          className={`input-data ${errors.publisher_url && "error-input"}`}
          style={style.input}
          {...register("publisher_url")}
        />
      </Stack>
      <Stack direction="row" marginBottom="30px" alignItems="center">
        <label htmlFor="servings" style={style.label}>
          social rank
        </label>
        <input
          type="number"
          placeholder={`${errors.social_rank ? errors.social_rank.message : "Type social rank"}`}
          name="servings"
          id="servings"
          className={`input-data ${errors.social_rank && "error-input"}`}
          style={style.input}
          {...register("social_rank")}
        />
      </Stack>
    </Stack>
  );
};

const style = {
  label: { textTransform: "capitalize", width: "100px" },
  input: {
    width: "300px",
    height: "35px",
    borderRadius: "10px",
    paddingLeft: "10px",
    border: "1px solid #ddd",
  },
};

export default FormData;

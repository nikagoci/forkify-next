import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Skeleton } from "@mui/material";
import React, { useState } from "react";

const SingleResult = ({ title, publisher, img, id, setRecipeId }) => {
  const [isLoading, setIsLoading] = useState(true);

  const convertTitle = (title) => {
    let newTitle = [];

    if (title.length > 15) {
      title.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= 15) {
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
      paddingY="15px"
      paddingLeft="35px"
      sx={{
        cursor: "pointer",
        ":hover": {
          backgroundColor: "#F9F5F3",
          transform: "translateY(-5px)",
          transition: "0.3s all ease-in-out",
        },
      }}
      onClick={() => setRecipeId(id)}
      >
      <Stack width="50px" height="50px" marginRight="20px">
        {isLoading && (
          <Skeleton variant="rect" width="100%" height="100%" style={{borderRadius: '50%'}}>
            <img
              width="100%"
              height="100%"
              style={{ borderRadius: "50%" }}
              src={img}
              alt={title}
              onLoad={() => setIsLoading(false)}
            />
          </Skeleton>
        )}
        {!isLoading && (
          <img
          width="100%"
          height="100%"
          style={{ borderRadius: "50%" }}
          src={img}
          alt={title}
        />
        )}
      </Stack>
      <Stack>
        <Typography
          variant="subtitle1"
          component="h6"
          fontSize="1.1rem"
          color="#F59A83"
          textTransform="capitalize"
        >
          {convertTitle(title)}
        </Typography>
        <Typography
          variant="subtitle2"
          component="h6"
          fontSize=".8rem"
          color="#968B87"
          textTransform="capitalize"
        >
          {publisher}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SingleResult;

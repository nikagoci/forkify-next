import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import Context from "../context/Context";

const Input = () => {
  const [value, setValue] = useState("");
  const [outline, setOutline] = useState("none");
  const ctx = useContext(Context);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.addQuery(value);
    if (value === "pizza" || value === "burger" || value === "salad") {
      setOutline("none");
    } else {
      setOutline("1px solid red");
    }
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" position="relative" width="500px" height="55px">
        <input
          placeholder="Search over 1,000,000 recipes"
          style={{
            width: "100%",
            fontSize: "1rem",
            border: "none",
            outline: outline,
            borderRadius: "10rem",
            paddingLeft: "30px",
          }}
          value={value}
          onChange={handleInputChange}
        />
        <Stack
          direction="row"
          position="absolute"
          top={0}
          right={0}
          height="100%"
          justifyContent="space-between"
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              padding: "15px 35px 15px 45px",
              borderRadius: "10rem",
              backgroundImage:
                "linear-gradient(to right bottom, #FBDB89, #F48982)",
            }}
          >
            <SearchIcon
              sx={{
                position: "absolute",
                top: "25%",
                left: "10%",
                color: "#fff",
              }}
            />
            Search
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default Input;

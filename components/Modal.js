import React, { useContext, useEffect, useState } from "react";
import ReactDom from "react-dom";

import { Stack } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import Context from "../context/Context";
import MainForm from "./Forms/MainForm";

const Modal = ({setRecipeId}) => {
  const [isClicked, setIsClicked] = useState(false);

  const ctx = useContext(Context)

  useEffect(() => {
    if(isClicked) {
      ctx.closeModal()
    }
  }, [isClicked, ctx])



  return ReactDom.createPortal(
    <>
      <Stack sx={style.overlay} onClick={() => setIsClicked(true)} />
      <Stack sx={style.modal}>
        <Stack direction="row">
          <Stack flex={1}>
            <MainForm setRecipeId={setRecipeId} />
          </Stack>
        </Stack>
        <CloseIcon
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
          onClick={() => setIsClicked(true)}
        />
      </Stack>
    </>,
    document.getElementById("portal")
  );
};

const style = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000,
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    backgroundColor: "#fff",
    transform: "translate(-50%, -50%)",
    width: "1000px",
    height: "600px",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "19px 17px 4px 3px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },
};

export default Modal;
import React, { useContext } from "react";
import { BackgroundTheme } from "../context/theme";

export default function NoImgFound({title}) {

  const {backgroundTheme} = useContext(BackgroundTheme);
  
  return (
    <img
      src={backgroundTheme? "https://i.ibb.co/hHsccZg/imgnot-found.png":"https://i.ibb.co/SJ3Sqsm/image.png"}
      style={{ width: "100%", height: "100%", borderRadius: "27px" }}
      alt={title}
    />
  );
}

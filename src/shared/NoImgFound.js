import React from "react";

export default function NoImgFound({title}) {
  return (
    <img
      src="https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg"
      style={{ width: "100%", height: "100%", borderRadius: "27px" }}
      alt={title}
    />
  );
}

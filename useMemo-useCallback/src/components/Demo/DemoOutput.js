import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  return <MyParagraph>{props.show ? "this is new" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);

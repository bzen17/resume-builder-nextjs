import React from "react";
import FinalTemplate from "../components/HtmlTemplate/FinalTemplate";
import renderHTML from "react-render-html";

const Generate = () => {
  return <div>{renderHTML(FinalTemplate())}</div>;
};

export default Generate;

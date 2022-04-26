
import React from "react";
import PreviewTemplate from "../components/HtmlTemplate/PreviewTemplate";
import renderHTML from "react-render-html";

const htmlResume = () => {
  return <div>{renderHTML(PreviewTemplate())}</div>;
};

export default htmlResume;

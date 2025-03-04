import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BackGround } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="bg-cover h-fit" src={BackGround} alt="logo" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;

import React from "react";
import "./styles.scss";
import Favicon from './favicon.ico';

export const App = () => {
  return (
    <div className="container">
      <img src={Favicon} alt="" />
      <h1>Hello....</h1>
    </div>
  );
};

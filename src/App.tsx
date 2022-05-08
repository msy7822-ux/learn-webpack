import React from "react";
import "./styles.scss";
import './favicon.ico';

export const App = (): JSX.Element => {
  return (
    <div className="container">
      <img src={'asset/favicon.ico'} alt="" />
      <h1>Hello....</h1>
    </div>
  );
};

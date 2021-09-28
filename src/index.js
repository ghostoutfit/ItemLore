import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Display from './ReactDisplay';
//import  {Query} from './Query';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Display />
  </React.StrictMode>,
  document.getElementById("root")
);

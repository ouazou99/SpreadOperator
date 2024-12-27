import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

const one = ["moha", "hana"];
const two = ["areejm", "adam"];

const three = one.concat(two);
const four = ["coco", ...three];
// console.log(four);
const momo = { one: "hello", two: "moha" };

const other = {
  ...momo,
  id: "23432",
  num: "billo",
};

console.log(other);

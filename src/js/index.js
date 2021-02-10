//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
//
import TrafficLinght from "./component/trafficLinght.js";

//render your react application
ReactDOM.render(<TrafficLinght />, document.querySelector("#app"));

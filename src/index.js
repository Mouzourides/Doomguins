import React from "react";
import { render } from "react-dom";
import Home from "./Components/Home/Home";
import registerServiceWorker from "./Config/Store.js";

import "sanitize.css/sanitize.css";
import "./index.css";

render(<Home />, document.getElementById("root"));
registerServiceWorker();

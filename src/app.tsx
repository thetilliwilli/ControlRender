import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles.css";

import { IntegerControl } from "./control/integer-control";
import { IntegerView } from "./view/integer-view";

var integerControl = new IntegerControl();

const rootElement = document.getElementById("root");
ReactDOM.render(<IntegerView control={integerControl} />, rootElement);

import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles.css";

import { PropertyGridControl } from "./property-grid/property-grid-control";
import { PropertyGridView } from "./property-grid/property-grid-view";
import { properties } from "./properties";


var gridControl = new PropertyGridControl();
gridControl.bind(properties);

const rootElement = document.getElementById("root");
ReactDOM.render(<PropertyGridView control={gridControl} />, rootElement);

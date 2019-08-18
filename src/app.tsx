import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles.css";

import { IntegerControl } from "./control/integer-control";
import { IntegerView } from "./view/integer-view";
import { StringControl } from "./control/string-control";
import { StringView } from "./view/string-view";
import { BoolControl } from "./control/bool-control";
import { BoolView } from "./view/bool-view";
import { SubsetControl } from "./control/subset-control";
import { SingeSubsetView } from "./view/single-subset-view";
import { ObjectControl } from "./control/object-control";
import { ObjectView } from "./view/object-view";


import { properties } from "./properties";

function withLabel(text: string, node: React.ReactNode): React.ReactNode {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "12px" }}
    >
      <label style={{ color: "grey" }}> {text} </label>
      {node}
    </div>
  );
}

function propertyToRenderer([propertyKey, propertyValue]: [
  string,
  any
]): React.ReactNode {
  switch (typeof propertyValue) {
    case "number":
      return <IntegerView control={new IntegerControl(propertyValue)} />;
    case "string":
      return <StringView control={new StringControl(propertyValue)} />;
    case "boolean":
      return <BoolView control={new BoolControl(propertyValue)} />;
    case "object": 
      return <ObjectView control={new ObjectControl(propertyValue)} />;
    default:
      return <StringView control={new StringControl(propertyValue)} />;
  }
}

function PropertyGrid() {
  var renderedProps = Object.entries(properties).map((x: [string, any]) =>
    withLabel(x[0], propertyToRenderer(x))
  );
  return (
    <div>
      <div>
        <div style={{ color: "grey" }}>PropertyGrid</div>
        <SingeSubsetView control={new SubsetControl({set:["DarkTheme","LightTheme"],subset:["DarkTheme"]})}/>
      </div>
      <div>{renderedProps}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<PropertyGrid />, rootElement);

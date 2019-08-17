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
import { SubsetView } from "./view/single-subset-view";

import { properties } from "./properties";

function withLabel(text: string, node: React.ReactNode): React.ReactNode {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{color:"grey"}}> {text} </label>
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
    case "object": return <StringView control={new StringControl(""+propertyValue)} />;
    default:
      return <StringView control={new StringControl(propertyValue)} />;
  }
}

function PropertyGrid() {
  var renderedProps = Object.entries(properties).map((x:[string,any]) =>
    withLabel(x[0], propertyToRenderer(x))
  );
  return (
    <div>
      <div>PropertyGrid</div>
      <div>{renderedProps}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<PropertyGrid />, rootElement);

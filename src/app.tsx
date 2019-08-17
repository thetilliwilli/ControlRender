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

var integerControl = new IntegerControl();
var stringControl = new StringControl();
var boolControl = new BoolControl();
var subsetControl = new SubsetControl<string>([...Array(5)].map((_,i)=>""+i));


function PropertyGrid(){
  return (
    <div>
      <div>PropertyGrid</div>
      <IntegerView control={integerControl} />
      <StringView control={stringControl} />
      <BoolView control={boolControl} />
      <SubsetView control={subsetControl} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<PropertyGrid />, rootElement);

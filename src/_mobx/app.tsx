import * as React from "react";
import { render } from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";
import {properties} from "../properties";
import { IntegerView } from "./view/integer-view";

import "../styles.css";
import { IntegerControl } from "./control/integer-control";
import { ValueType } from "./value-type/value-type";


function KeyValue({k, v, children}){
  return <div style={{color:"white"}}><span>{""+k}: </span><span>{children?children:""+v}</span></div>;
}

function KeyValueList({ list }) {
  console.log(list)
  return (
    <React.Fragment>
      {
        list.map((x, i) => typeof (x.value.value) === "number"
          ? <KeyValue key={i} k={x.key} v={x.value}><IntegerView control={new IntegerControl(x.value)} /></KeyValue>
          : <KeyValue key={i} k={x.key} v={x.value} />)
      }

    </React.Fragment>
  );
}

@observer
class ObjectRender extends React.Component
{
  render(){
    console.log(this.props.object);
    return <KeyValueList list={Object.entries(this.props.object).map(x=>({key:x[0],value:x[1]}))}/>;
  }
}

// properties = Object.entries(properties).map()
var observableProperties = {};
for(var prop in properties)
  observableProperties[prop] = observable.box((properties[prop]));

// var observableProperties = properties.map(prop => observable(new ValueType(prop)));//observable(properties);

var objectRenderNode = <ObjectRender object={observableProperties}/>;


render(objectRenderNode, document.getElementById("root") );

// setTimeout(()=>{observableProperties.guid = "x"},1000);
// setInterval(()=>{observableProperties.zIndex += 1},80);
// setTimeout(()=>{observableProperties.zIndex = 100},1000);
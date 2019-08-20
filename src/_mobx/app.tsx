import * as React from "react";
import { render } from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";
import {properties} from "../properties";

import "../styles.css";


function KeyValue({k, v}){
  return <div style={{color:"white"}}><span>{""+k}: </span><span>{""+v}</span></div>;
}

function KeyValueList({list}){
  return (
    <React.Fragment>
      {list.filter(x=>typeof(x.value) === "number").map((x,i)=><KeyValue key={i} k={x.key} v={x.value} />)}
    </React.Fragment>
  );
}

@observer
class ObjectRender extends React.Component
{
  render(){
    return <KeyValueList list={Object.entries(this.props.object).map(x=>({key:x[0],value:x[1]}))}/>;
  }
}

var observableProperties = observable(properties);

var objectRenderNode = <ObjectRender object={observableProperties}/>;


render(objectRenderNode, document.getElementById("root") );

// setTimeout(()=>{observableProperties.guid = "x"},1000);
// setInterval(()=>{observableProperties.zIndex += 1},80);
setTimeout(()=>{observableProperties.zIndex = 100},1000);
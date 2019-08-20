import * as React from "react";
import { KeyValueControl } from "../control/key-value-control";
import { BaseView } from "./base-view";


export class KeyValueView extends BaseView<{ key: string; value: any }, KeyValueControl> {
  render(){
    const {key, value} = this.state;
    return <div style={{color:"white"}}><span>{""+key}: </span><span>{""+value}</span><span onClick={()=>this.action.setValue("new value")}>+</span></div>;
  }
}
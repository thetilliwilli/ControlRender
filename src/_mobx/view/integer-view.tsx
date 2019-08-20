import * as React from "react";
import { BaseView } from "./base-view";
import {IntegerControl} from "../control/integer-control";
import { ValueType } from "../value-type/value-type";
import { observer } from "mobx-react";

@observer
export class IntegerView extends BaseView<ValueType<number>, IntegerControl>{
  render(){
    const value = this.state;
    return (
      <span style={{ display: "flex", boxSizing: "border-box", color:"white" }}>
        <div>{value.value}</div>
        <div onClick={this.action.up} > + </div>
        <div onClick={this.action.down} > - </div>
      </span>
    );
  }
}
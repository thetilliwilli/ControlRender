import * as React from "react";
import { BaseView } from "./base-view";
import { IntegerControl } from "../control/integer-control";
import { observer } from "mobx-react";

@observer
export class IntegerView extends BaseView<number, IntegerControl> {
  render() {
    return (
      <span>
        <span>{this.control.value}</span>
        <span onClick={this.action.up}> + </span>
        <span onClick={this.action.down}> - </span>
      </span>
    );
  }
}

import * as React from "react";
import { BaseView } from "./base-view";
import { IntegerControl } from "../control/integer-control";
import { observer } from "mobx-react";

@observer
export class IntegerView extends BaseView<number, IntegerControl> {

  //new way 
  rerender(value: number, action: IntegerControl) {
    return (
      <span>
        <span>{value}</span>
        <span onClick={action.up}> + </span>
        <span onClick={action.down}> - </span>
      </span>
    );
  }

  //old school

  // render() {
  //   return (
  //     <span>
  //       <span>{this.control.value}</span>
  //       <span onClick={this.action.up}> + </span>
  //       <span onClick={this.action.down}> - </span>
  //     </span>
  //   );
  // }
}

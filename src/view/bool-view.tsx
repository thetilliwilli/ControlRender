import * as React from "react";

import { BaseView } from "./base-view";
import { BoolControl } from "../control/bool-control";

export class BoolView extends BaseView<boolean, BoolControl> {
  render() {
    const inputStyle = {
      ...this.inputStyle,
      ...{ flex: "1", cursor: "pointer", userSelect: "none" }
    };

    return (
      <div style={{ display: "flex", boxSizing: "border-box" }}>
        <div style={inputStyle} onClick={this.props.control.invert}>
          {this.state.value.toString()}
        </div>
      </div>
    );
  }
}
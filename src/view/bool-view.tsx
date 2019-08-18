import * as React from "react";

import { BaseView } from "./base-view";
import { BoolControl } from "../control/bool-control";

interface BoolViewProps {
  control: BoolControl;
}

interface BoolViewState {
  value: boolean;
}

export class BoolView extends BaseView<BoolViewProps, BoolViewState> {
  state: BoolViewState;

  constructor(props: BoolViewProps) {
    super(props);
    this.state = { value: props.control.value };
    props.control.on("changed", this.onControlValueChanged.bind(this));
  }

  public onControlValueChanged(value: boolean): void {
    this.setState({ value });
  }

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

import * as React from "react";

import { BoolControl } from "../control/bool-control";

interface BoolViewProps {
  control: BoolControl;
}

interface BoolViewState {
  value: boolean;
}

export class BoolView extends React.Component<BoolViewProps, BoolViewState> {
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
      backgroundColor: "lightgrey",
      color: "white",
      borderRadius: "2px",
      border: "1px solid darkgrey",
      flex: "14",
      cursor: "pointer",
      userSelect: "none"
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

import * as React from "react";

import { IntegerControl } from "../control/integer-control";
import { BaseView } from "./base-view";

interface IntegerViewProps {
  control: IntegerControl;
}

interface IntegerViewState {
  value: number;
}

export class IntegerView extends BaseView<IntegerViewProps, IntegerViewState> {

  constructor(props: IntegerViewProps) {
    super(props);
    this.state = { value: props.control.value };
    props.control.on("changed", this.onControlValueChanged.bind(this));
  }

  public onControlValueChanged(value: number): void {
    this.setState({ value });
  }

  render() {
    const inputStyle = { ...this.inputStyle, ...{ flex: "14" } };
    const buttonStyle = {
      ...this.inputStyle,
      ...{
        flex: "1",
        marginLeft: "4px",
        textAlign: "center",
        cursor: "pointer",
        userSelect: "none"
      }
    };
    return (
      <div style={{ display: "flex", boxSizing: "border-box" }}>
        <div style={inputStyle}>{this.state.value}</div>
        <div
          onClick={this.props.control.up}
          style={buttonStyle}
          className="button"
        >
          +
        </div>
        <div
          onClick={this.props.control.down}
          style={buttonStyle}
          className="button"
        >
          -
        </div>
      </div>
    );
  }
}

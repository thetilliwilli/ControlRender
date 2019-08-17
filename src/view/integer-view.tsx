import * as React from "react";

import { IntegerControl } from "../control/integer-control";

interface IntegerViewProps {
  control: IntegerControl;
}

interface IntegerViewState {
  value: number;
}

export class IntegerView extends React.Component<
  IntegerViewProps,
  IntegerViewState
> {
  state: IntegerViewState;

  constructor(props: IntegerViewProps) {
    super(props);
    this.state = { value: props.control.value };
    props.control.on("changed", this.onControlValueChanged.bind(this));
  }

  public onControlValueChanged(value: number): void {
    this.setState({ value });
  }

  render() {
    const inputStyle = {
      backgroundColor: "lightgrey",
      color: "white",
      borderRadius: "2px",
      border: "1px solid darkgrey",
      flex:"14"
    };
    const buttonStyle = {
      backgroundColor: "lightgrey",
      color: "white",
      borderRadius: "2px",
      border: "1px solid darkgrey",
      flex:"1",
      marginLeft:"4px",
      textAlign:"center",
      cursor:"pointer",
      userSelect:"none",
    };
    return (
      <div style={{display:"flex",boxSizing:"border-box"}}>
        <div style={inputStyle}>{this.state.value}</div>
        <div onClick={this.props.control.up} style={buttonStyle}>
          +
        </div>
        <div onClick={this.props.control.down} style={buttonStyle}>
          -
        </div>
      </div>
    );
  }
}

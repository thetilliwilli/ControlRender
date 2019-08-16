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
    props.control.subscribe(this.onControlValueChanged);
  }

  public onControlValueChanged(...args:any[]) : void {
    console.log("onControlValueChanged");
    // this.setState({ value:args[0] });
  }

  render() {
    const buttonStyle = {
      backgroundColor: "lightgrey",
      color: "white",
      borderRadius: "4px",
      border: "1px solid darkgrey"
    };
    return (
      <div>
        <div>{this.state.value}</div>
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

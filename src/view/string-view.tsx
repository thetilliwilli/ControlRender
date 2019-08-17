import * as React from "react";

import { StringControl } from "../control/string-control";

interface StringViewProps {
  control: StringControl;
}

interface StringViewState {
  value: string;
}

export class StringView extends React.Component<
  StringViewProps,
  StringViewState
> {
  state: StringViewState;

  constructor(props: StringViewProps) {
    super(props);
    this.state = { value: props.control.value };
    props.control.on("changed", this.onControlValueChanged.bind(this));
    this.onChange = this.onChange.bind(this);
  }

  public onChange(event: any) {
    this.props.control.change(event.target.value);
  }

  public onControlValueChanged(value: string): void {
    this.setState({ value });
  }

  render() {
    const inputStyle = {
      backgroundColor: "lightgrey",
      color: "white",
      borderRadius: "2px",
      border: "1px solid darkgrey",
      flex: "14",
      outline: "none"
    };
    return (
      <div style={{ display: "flex", boxSizing: "border-box" }}>
        <input
          type="text"
          value={this.state.value}
          style={inputStyle}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

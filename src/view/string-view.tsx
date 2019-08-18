import * as React from "react";

import { StringControl } from "../control/string-control";
import { BaseView } from "./base-view";

interface StringViewProps {
  control: StringControl;
}

interface StringViewState {
  value: string;
}

export class StringView extends BaseView<StringViewProps, StringViewState> {
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
      ...this.inputStyle,
      ...{ flex: "14", outline: "none" }
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

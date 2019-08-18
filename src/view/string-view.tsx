import * as React from "react";

import { StringControl } from "../control/string-control";
import { BaseView } from "./base-view";


export class StringView extends BaseView<string, StringControl> {

  protected bindDelegateMethods(){
    super.bindDelegateMethods();
    this.onChange = this.onChange.bind(this);
  }

  public onChange(event: any) {
    this.props.control.change(event.target.value);
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
import * as React from "react";
import { ObjectControl } from "../control/object-control";
import { StringControl } from "../control/string-control";
import { BaseView } from "./base-view";
import { StringView } from "./string-view";

export class ObjectView extends BaseView<object, ObjectControl> {
  render() {
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

    const prop = Array.isArray(this.state.value)
      ? `Array<${typeof this.state.value[0]}>(${this.state.value.length})`
      : "" + this.state.value;

    return (
      <div style={{ display: "flex", boxSizing: "border-box" }}>
        <div style={{ flex: "15" }}>
          <StringView control={new StringControl(prop)} />
        </div>
        <div
          onClick={this.props.control.dive}
          style={buttonStyle}
          className="button"
        >
          ...
        </div>
      </div>
    );
  }
}

import * as React from "react";

import { SubsetControl } from "../control/subset-control";
import { BaseView } from "./base-view";

export class SingeSubsetView extends BaseView<
  { set: string[]; subset: string[] },
  SubsetControl<string>
> {

  protected bindDelegateMethods() {
    super.bindDelegateMethods();
    this.onChange = this.onChange.bind(this);
  }

  public onChange(event: any) {
    const newValue = {
      set: this.state.value.set,
      subset: [event.target.value]
    };
    console.log("SingeSubsetView.onChange", newValue);
    this.props.control.replace(newValue);
  }

  render() {
    console.log("SingeSubsetView.render");
    const inputStyle = { ...this.inputStyle, ...{ flex: "14" } };

    const options = this.state.value.set.map(x => (
      <option key={x} value={x}>{x}</option>
    ));

    const selectedValue = this.state.value.subset[0];


    return (
      <div style={{ display: "flex", boxSizing: "border-box" }}>
        <select
          style={inputStyle}
          value={selectedValue}
          onChange={this.onChange}
        >
          {options}
        </select>
      </div>
    );
  }
}

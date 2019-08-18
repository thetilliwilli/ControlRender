import * as React from "react";

import { SubsetControl } from "../control/subset-control";
import { BaseView } from "./base-view";

interface SubsetViewProps {
  control: SubsetControl<string>;
}

interface SubsetViewState {
  subset: string[];
}

export class SubsetView extends BaseView<SubsetViewProps, SubsetViewState> {
  state: SubsetViewState;
  set: string[];

  constructor(props: SubsetViewProps) {
    super(props);
    this.set = props.control.set;
    this.state = { subset: props.control.subset };
    props.control.on("changed", this.onControlValueChanged.bind(this));
    this.onChange = this.onChange.bind(this);
  }

  public onControlValueChanged(subset: string[]): void {
    this.setState({ subset });
  }

  public onChange(event: any) {
    this.props.control.replace([event.target.value]);
  }

  render() {
    const inputStyle = { ...this.inputStyle, ...{ flex: "14" } };

    const options = this.set.map(x => <option value={x}>{x}</option>);
    return (
      <div style={{ display: "flex", boxSizing: "border-box" }}>
        <select
          style={inputStyle}
          value={this.state.subset[0]}
          onChange={this.onChange}
        >
          {options}
        </select>
      </div>
    );
  }
}
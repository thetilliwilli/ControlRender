import * as React from "react";
import { IViewProps } from "../interface/i-view-props";
import { IViewState } from "../interface/i-view-state";
import { BaseControl } from "../control/base";

export class BaseView<TValue, TControl extends BaseControl<TValue>> extends React.Component<IViewProps<TControl>, IViewState<TValue>> {
  
  constructor(props : IViewProps<TControl>) {
    super(props);
    this.bindDelegateMethods();
    this.state = { value: props.control.value };
    props.control.on("changed", this.onControlValueChanged);
  }

  protected bindDelegateMethods(){
    this.onControlValueChanged = this.onControlValueChanged.bind(this)
  }

  protected onControlValueChanged(value: TValue): void {
    this.setState({ value });
  }

  protected get inputStyle(): any {
    return {
      backgroundColor: "rgb(28, 32, 34)",
      color: "rgb(102, 185, 244)",
      borderRadius: "1px",
      border: "2px solid rgb(102, 185, 244, 0.3)"
    };
    //rgb(102, 185, 244)
  }
}

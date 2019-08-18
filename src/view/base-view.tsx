import * as React from "react";
import { IViewProps } from "../interface/i-view-props";
import { IViewState } from "../interface/i-view-state";
import { IControl } from "../interface/i-control";

export class BaseView<TValue, TControl extends IControl<TValue>> extends React.Component<IViewProps<TControl>, IViewState<TValue>> {
  
  constructor(props : IViewProps<TControl>) {
    super(props);
    this.state = { value: props.control.value };
    props.control.on("changed", this.onControlValueChanged.bind(this));
  }

  protected onControlValueChanged(value : any) : void{
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

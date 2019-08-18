import * as React from "react";
import { IViewProps } from "../interface/i-view-props";
import { IViewState } from "../interface/i-view-state";

export class BaseView<TValue, TViewProps extends IViewProps<TValue>=IViewProps<TValue>> extends React.Component<TViewProps, IViewState<TValue>> {
  
  constructor(props : TViewProps) {
    super(props);
    this.state = { value: props.control.value };
    props.control.on("changed", this.onControlValueChanged.bind(this));
  }

  protected onControlValueChanged(value : TValue) : void{
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

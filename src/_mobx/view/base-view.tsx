import * as React from "react";
import { BaseControl } from "../control/base-control";

export class BaseView<TValue, TControl extends BaseControl<TValue>> extends React.Component<{ control: TControl }, TValue> {

  protected action: TControl;
  protected control: TControl;

  constructor(props: { control: TControl }) {
    super(props);
    this.action = props.control;
    this.control = props.control;
  }

  //new way
  rerender(value: TValue, action: TControl): React.ReactNode {
    return super.render();
  }

  //old way
  render() {
    return this.rerender(this.control.value, this.action);
  }
}

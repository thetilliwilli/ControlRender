import * as React from "react";
import { BaseControl } from "../control/base-control";
import { observer } from "mobx-react";

@observer
export class BaseView<TValue, TControl extends BaseControl<TValue>> extends React.Component<{ control: TControl }, TValue> {

  protected action: TControl;

  constructor(props: { control: TControl }) {
    super(props);
    this.state = props.control.getValue();
    this.action = props.control;
  }
}

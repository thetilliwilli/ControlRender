import React from "react";
import { BaseControl } from "../control/base-control";
import {observer} from "mobx-react";

@observer
export class BaseView<TValue, TControl extends BaseControl<TValue>> extends React.Component<, TValue> {
  constructor(props: {control : TControl}) {
    super(props);
    this.state = props.control.getValue();
  }
}

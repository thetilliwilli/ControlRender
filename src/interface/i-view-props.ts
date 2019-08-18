import { IControl } from "./i-control";

export interface IViewProps<TValue> {
  control: IControl<TValue>;
}
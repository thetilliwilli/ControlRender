import { BoolControl } from "./bool-control";
import { StringControl } from "./string-control";
import { IntegerControl } from "./integer-control";
import { SubsetControl } from "./subset-control";
import { ObjectControl } from "./object-control";

export type ControlType = BoolControl | StringControl | IntegerControl  | ObjectControl | SubsetControl<string>;
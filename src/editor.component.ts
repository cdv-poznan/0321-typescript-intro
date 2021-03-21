import { Component } from "./component";
import { OnChanges } from "./hooks";

export class EditorComponent extends Component implements OnChanges {
  constructor(public title: string, public format: string) {
    super(title);
  }

  public ngOnChanges(changes: any) {
    console.log(changes);
  }
}

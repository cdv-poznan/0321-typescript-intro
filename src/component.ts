import * as Hooks from "./hooks";

export class Component implements Hooks.OnInit, Hooks.OnDestroy {
  constructor(public title: string) {}

  public ngOnInit() {
    console.log("Init");
  }

  public ngOnDestroy() {
    console.log("Destroy");
  }
}

import { OnDestroy, OnInit } from "./hooks";

export class Component implements OnInit, OnDestroy {
  constructor(public title: string) {}

  public ngOnInit() {
    console.log("Init");
  }

  public ngOnDestroy() {
    console.log("Destroy");
  }
}

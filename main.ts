/** adnotacje typów **/
function sayHello(person: string): string {
  return `Hello ${person}`;
}

let user = "Adrian";

sayHello(user);

sayHello("Ala");

function isLong(value: string): boolean {
  return value.length > 1000;
}

isLong("asd");

/** typy danych **/

/** boolean **/
let value1: boolean = true;
value1 = false;
value1 = true;

/** number **/
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

/** string **/
let color: string = "red";
color = "green";

/** array **/
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: Array<boolean | string> = [true, "hello"];

/** typle **/
let tuple1: [string, number];
tuple1 = ["hello", 1];

/** enum **/

enum Color {
  Red = "rgba(255, 0, 0, 0.5)",
  Green = "#00ff00",
  Blue = "#0000ff",
}

let color1: Color = Color.Green;
let colo2 = Color.Red;

/** any **/
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

/** unknown **/
let u1: unknown = 4;
u1 = "asd";
u1 = false;

if (typeof u1 === "string") {
  if (u1.length) {
  }
}

function print(args: string[]): void {
  console.log(...args);
}

print(["a", "b"]);

/** null **/
let n1: null = null;
n1 = null;


/** undefined **/
let undef1: undefined = undefined;

/** never **/

function infiniteLoop(): never {
  while(true) {

  }
}

function error(message: string): never {
  throw new Error(message);
}

/** object **/
const obj1: object = {};

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

/** const enum **/
const enum Color2 {
  Red = "rgba(255, 0, 0, 0.5)",
  Green = "#00ff00",
  Blue = "#0000ff",
}
const color3 = Color2.Blue;

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

function print2(args: string[]): void {
  console.log(...args);
}

print2(["a", "b"]);

/** null **/
let n1: null = null;
n1 = null;

/** undefined **/
let undef1: undefined = undefined;

/** never **/

function infiniteLoop(): never {
  while (true) {}
}

function error(message: string): never {
  throw new Error(message);
}

/** object **/
const obj1: object = {};

/** asercja typów **/

let someValue: any;

someValue = "Hello!";

const len1 = (<string>someValue).length;
const len2 = (someValue as string).length;

let x2: boolean | string;

function randomValue() {
  return Math.random() > 0.5 ? "hello" : true;
}

x2 = randomValue();

if (typeof x2 === "string") {
  x2.split(" ");
}

/** interfejsy **/

interface Guest {
  firstName: string;
  lastName: string;
  getFullName1(): string;
  getFullName2?: () => string;
  age?: number;
}

let person1: Guest = {
  firstName: "Adrian",
  lastName: "Juszczak",
  getFullName1(): string {
    return this.firstName + " " + this.lastName;
  },
  age: 10,
};

function sayHeloGuest(guest: Guest) {
  return `Hello ${guest.getFullName1()}`;
}

sayHeloGuest(person1);

sayHeloGuest({
  firstName: "John",
  lastName: "Doe",
  getFullName1() {
    return "JD";
  },
});

/** classes **/

class Person {
  // public firstName: string;
  // private lastName: string;
  protected fullName: string;
  public readonly age = 30;
  public static index: number = 0;

  /* skrócony zapis */
  constructor(public firstName: string, private lastName: string) {
    this.fullName = `${this.firstName} ${this.lastName}`;
    Person.index++;
  }

  /* standardowy zapis:
  constructor(firstName: string, lastName: string) {
    // this.firstName = firstName;
    // this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
  */

  public getLastName() {
    return this.lastName;
  }
}

console.log(Person.index);
const p1 = new Person("John", "Doe");
p1.getLastName();

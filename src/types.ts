/** unia typów **/

interface A {
  a: string;
  b: boolean;
  c: number;
}

interface B {
  a: string;
  b: string;
}

interface C {
  d: string;
}

const a = { a: "a", b: false, c: 1 };
const b = { a: "a", b: "b" };
const c = { d: "d" };

const d1: A | B = { a: "a", b: false, c: 1 };
const d2: A | B = { a: "a", b: "b" };
const d3: A | B = a;
const d4: A | B = b;

const e1: A & C = { a: "a", b: false, c: 1, d: "d" };
const e2: A & C = { ...a, ...c };

let e3: A & B; // :(

/** literały jako typy **/

type Num = "1" | "2" | "3";

let l1: Num = "1";
let l2: Num = "2";
let l3: Num = "3";

// l1 = "4";

type AS = Array<Num>;

const as1: Array<Num> = ["1"];
const as2: AS = ["2"];

/*** keyof ***/

// let x1: keyof A = 'r';

// keyof Console === 'log' | 'warn' | 'info' | 'error'
function log(message: string, level?: keyof Console) {
  console[level ?? "log"](message);
}

log("Hello");

interface Person3 {
  firstName: string;
  lastName: string;
}

// keyof Person3 === 'firstName' | 'lastName'

function sayHello(person: Person3, key: keyof Person3) {
  console.log(`Hello ${person[key]}!`);
}

const p31 = { firstName: "John", lastName: "Doe" };

sayHello(p31, "firstName"); // -> Hello John!

sayHello(p31, "lastName"); // -> Hello Doe!

/** nullish coalescing operator **/

console.log("" || "hello!"); // -> "hello!"
console.log(false || "hello!"); // -> "hello!"
console.log(0 || "hello!"); // -> "hello!"
console.log(null || "hello!"); // -> "hello!"
console.log(undefined || "hello!"); // -> "hello!"

console.log("" ?? "hello!"); // -> ""
console.log(false ?? "hello!"); // -> false
console.log(0 ?? "hello!"); // -> 0
console.log(null ?? "hello!"); // -> "hello!"
console.log(undefined ?? "hello!"); // -> "hello!"

// console.log(ua1);

// const elx1 = document?.querySelector('asd')?.classList[0];

// const ua1 = window?.navigator?.userAgent?.split(" ") ?? "default";

interface E {
  a: {
    b?: {
      c?: string;
    };
  };
}

const e11: E = { a: { b: { c: "c" } } };
const e12: E = { a: {} };

console.log('-->', e11.a.b?.c ?? 'empty');
console.log('-->', e12.a.b?.c ?? 'empty');

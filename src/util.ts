interface F {
  a: string;
  b: string;
  c: string;
}

const f01: F = { a: "a", b: "b", c: "c" };

const f02: Partial<F> = { a: "a", b: "b" }; // wszystkie pola stają się opcjonalne

interface G {
  a?: string;
  b?: string;
}

const g01: G = {};
const g02: G = { a: "a", b: "b" };

const g03: Required<G> = { a: "a", b: "b" };

const g04: G = { a: "a", b: "b" };
g04.a = "xxx"; // OK

const g05: Readonly<G> = { a: "a", b: "b" };
// g05.a = "asd"; // ERROR

const r01: Record<string, G> = { a1: {}, b2: { a: "a", b: "b" } };

interface H {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
}

const h01: Pick<H, "c" | "d"> = { c: "c", d: "d" };

const h02: Omit<H, "e"> = {
  a: "",
  b: "",
  c: "",
  d: "",
};

const element01 = document.querySelector('asd');
const element02 = document.querySelector('asd') as NonNullable<Element>;

interface Person2 {
  firstName: string;
}

class Queue<T> {
  private queue: Array<T> = [];

  public add(element: T) {
    this.queue.push(element);
  }

  public getLast(): T {
    return this.queue[this.queue.length - 1];
  }
}

let strings = new Queue<string>();

strings.add("a");
strings.add("b");
strings.add("c");

const last1 = strings.getLast();

let people = new Queue<Person2>();
people.add({ firstName: "John" });

const last2 = people.getLast();

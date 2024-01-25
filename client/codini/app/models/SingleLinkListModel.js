import { v4 as uuidv4 } from "uuid";

export default class List {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  push(val, color) {
    const newNode = new Node(val, color);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.length = 0;
      this.head = null;
      this.tail = null;
      return undefined;
    }
    let node = this.head;
    const prevTail = this.tail;

    while (node.next !== this.tail) {
      node = node.next;
    }
    this.tail = node;
    this.tail.next = null;
    this.length -= 1;
    return prevTail;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const curHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return curHead;
    }
    this.head = this.head.next;
    this.length -= 1;
    return curHead;
  }

  unshift(val, color) {
    const newNode = new Node(val, color);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      const curHead = this.head;
      this.head = newNode;
      this.head.next = curHead;
      this.length += 1;
    }

    return this;
  }

  get(index) {
    if (this.length === 0 || this.length - 1 < index) {
      return null;
    }
    let node = this.head;
    for (let i = 0; i < index; i += 1) {
      node = node.next;
    }
    return node;
  }

  set(val, color, index) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      foundNode.color = color;
      return true;
    }
    return false;
  }

  insert(val, color, index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(val, color);
      return true;
    }
    if (index === this.length) {
      this.push(val, color);
      return true;
    }
    const node = new Node(val, color);
    let curr = this.head;
    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = node;
    node.next = curr;
    this.length += 1;
  }

  remove(index) {
    if (this.length === 0 || index < 0 || index > this.length - 1) {
      return null;
    }
    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    const before = this.get(index - 1);
    const removed = before.next;
    before.next = removed.next;
    this.length -= 1;
    return removed;
  }

  reverse() {
    if (this.lenght === 0) {
      return true;
    }
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

class Node {
  constructor(value, color) {
    this.value = value;
    this.next = null;
    this.key = uuidv4();
    this.color = color;
  }
}

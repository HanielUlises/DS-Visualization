class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(element) {
        const newNode = new Node(element);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
            this.tail = newNode;
        }
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(element) {
        const newNode = new Node(element);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            newNode.prev = this.last;
            this.last = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.first) return null;
        const removedNode = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removedNode.next;
            this.first.prev = null;
        }
        this.size--;
        return removedNode.element;
    }

    getSize() {
        return this.size;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(element) {
        const newNode = new Node(element);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first.prev = newNode;
            this.first = newNode;
        }
        this.size++;
    }

    pop() {
        if (!this.first) return null;
        const removedNode = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removedNode.next;
            this.first.prev = null;
        }
        this.size--;
        return removedNode.element;
    }
}
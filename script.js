class Node{
    constructor(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class linkedList{
    constructor(){
        this.head = head;
        this.tail = tail;
    }

    append(element){
        const newNode = new Node (element);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

// The rest of the data structures definitions will be based on the linked list

class Queue{
    constructor(){
        this.first = first;
        this.last = last;
    }
}

class Stack{
    constructor(){
        this.first = first;
        this.last = last;
    }

}


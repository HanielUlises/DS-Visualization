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
        this.size = 0;
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

    retrieve(index) {
        if (index < 0 || index >= this.size) {
            return null; 
        }
    
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
    
        return current.element;
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

const linkedListInstance = new linkedList();
const queueInstance = new Queue();
const stackInstance = new Stack();

function selectStructure() {
    const selectedStructure = document.getElementById("dataStructureSelector").value;
    document.getElementById("selectedStructureTitle").innerText = `Estructura seleccionada: ${selectedStructure}`;

    updateOperationsSection(selectedStructure);
}

function updateOperationsSection(selectedStructure) {
    const operationsSection = document.getElementById("operationsSection");
    operationsSection.innerHTML = "";

    if (selectedStructure === "linkedlist") {
        const inputField = document.createElement("input");
        inputField.placeholder = "Añadir elemento";
        const addButton = document.createElement("button");
        addButton.innerText = "Añadir";
        addButton.onclick = function () {
            const element = inputField.value;
            linkedListInstance.append(element);
            displayOperationResult(`Node created with the element: ${element}`);
            displayLinkedList();
        };

        operationsSection.appendChild(inputField);
        operationsSection.appendChild(addButton);
    }

    if (selectedStructure === "queue") {
        const inputField = document.createElement("input");
        inputField.placeholder = "Encolar elemento";
        const addButton = document.createElement("button");
        addButton.innerText = "Encolar";
        addButton.onclick = function () {
            const element = inputField.value;
            queueInstance.enqueue(element);
            displayOperationResult(`Node enqueued with the element: ${element}`);
            displayQueue();
        };

        operationsSection.appendChild(inputField);
        operationsSection.appendChild(addButton);
    }

    if (selectedStructure === "stack") {
        const inputField = document.createElement("input");
        inputField.placeholder = "Elemento a apilar";
        const addButton = document.createElement("button");
        addButton.innerText = "Apilar";
        addButton.onclick = function () {
            const element = inputField.value;
            stackInstance.push(element);
            displayOperationResult(`Node pushed with the element: ${element}`);
            displayStack();
        };

        operationsSection.appendChild(inputField);
        operationsSection.appendChild(addButton);
    }

    // Function to display the result of the operation
    function displayOperationResult(result) {
        const operationResult = document.getElementById("operationResult");
        operationResult.innerText = result;
    }

    // Función para mostrar la lista enlazada
    function displayLinkedList() {
        const linkedListDisplay = document.createElement("div");
        linkedListDisplay.innerHTML = "<h2>Lista Enlazada:</h2>";
        
        let current = linkedListInstance.head;
        while (current !== null) {
            const nodeElement = document.createElement("div");
            nodeElement.innerText = `Nodo: ${current.element}`;
            linkedListDisplay.appendChild(nodeElement);
            current = current.next;
        }

        operationsSection.appendChild(linkedListDisplay);
    }

    // Para enseñar la cola jeje
    function displayQueue() {
        const queueDisplay = document.createElement("div");
        queueDisplay.innerHTML = "<h2>Queue:</h2>";

        let current = queueInstance.first;
        while (current !== null) {
            const nodeElement = document.createElement("div");
            nodeElement.innerText = `Node: ${current.element}`;
            queueDisplay.appendChild(nodeElement);
            current = current.next;
        }

        operationsSection.appendChild(queueDisplay);
    }

    // Para mostrar la pila
    function displayStack() {
        const stackDisplay = document.createElement("div");
        stackDisplay.innerHTML = "<h2>Stack:</h2>";

        let current = stackInstance.first;
        while (current !== null) {
            const nodeElement = document.createElement("div");
            nodeElement.innerText = `Node: ${current.element}`;
            stackDisplay.appendChild(nodeElement);
            current = current.next;
        }

        operationsSection.appendChild(stackDisplay);
    }
}
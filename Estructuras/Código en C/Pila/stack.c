#include "stack.h"

Stack* createStack(){
    Stack *stack = (Stack*)malloc(sizeof(Stack));
    if (stack == NULL) {
        return NULL; 
    }
    stack->front = stack->top = NULL;
    stack->size = 0;
    return stack;
}

int isStackEmpty(Stack *stack){
    return (stack == NULL || stack->size == 0);
}

void push (Stack *stack, StackElement element) {
    if (stack == NULL) {
        return;
    }

    Node *newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        return;
    }
    newNode->data = element;
    newNode->next = NULL;

    if (stack->top == NULL) {
        stack->front = stack->top = newNode;
    } else {
        stack->top->next = newNode;
        stack->top = newNode;
    }
    stack->size++;
}

StackElement pop (Stack *stack){
    if (isStackEmpty(stack)) {
        return 0;
    }

    Node *temp = stack->top;
    StackElement data = temp->data;

    stack->top = stack->top->next;
    if (stack->top == NULL) {
        stack->front = NULL;
    }

    free(temp);
    stack->size--;
    return data;
}
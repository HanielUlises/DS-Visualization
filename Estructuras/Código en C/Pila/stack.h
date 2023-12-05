#ifndef STACK_H
#define STACK_H

#include <stdlib.h>

// Tipo de elemento para simular genéricos con C
typedef int StackElement;

typedef struct Node {
    StackElement data;
    struct Node *next;
} Node;

typedef struct Stack {
    Node *front;
    Node *top;
    int size;
} Stack;

// Métodos de una pila
// Crear una nueva pila
Stack* createStack();
// Verificar que la pila esté vacía
int isStackEmpty(Stack *stack);
// Apilar elemento
void push (Stack *stack, StackElement element);
// Desapilar elemento
StackElement pop (Stack *stack);
// Devuelve el elemento hasta arriba de la pila (top)
StackElement front(Stack *stack);
// Elimina la pila
void destroyStack(Stack *stack);

#endif // STACK_H

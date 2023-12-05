#ifndef QUEUE_H
#define QUEUE_H

#include <stdlib.h>

// Tipo de elemento para simular genéricos con C
typedef int QueueElementType;

typedef struct QueueNode {
    QueueElementType data;
    struct QueueNode *next;
} QueueNode;

typedef struct Queue {
    QueueNode *front;
    QueueNode *last;
    int size;
} Queue;

// Métodos de una cola
// Crear una nueva cola
Queue* createQueue();
// Verificar que la cola esté vacía
int isQueueEmpty(Queue *queue);
// Encolar elemento
void enqueue(Queue *queue, QueueElementType element);
// Desencolar elemento
QueueElementType dequeue(Queue *queue);
// Devuelve el elemento de enfrente
QueueElementType front(Queue *queue);
// Elimina la cola
void destroyQueue(Queue *queue);

#endif // QUEUE_H

#include "queue.h"

Queue* createQueue() {
    Queue *queue = (Queue*)malloc(sizeof(Queue));
    if (queue == NULL) {
        return NULL; 
    }
    queue->front = queue->last = NULL;
    queue->size = 0;
    return queue;
}

int isQueueEmpty(Queue *queue) {
    return (queue == NULL || queue->size == 0);
}

void enqueue(Queue *queue, QueueElementType element) {
    if (queue == NULL) {
        return;
    }

    QueueNode *newNode = (QueueNode*)malloc(sizeof(QueueNode));
    if (newNode == NULL) {
        return;
    }
    newNode->data = element;
    newNode->next = NULL;

    if (queue->last == NULL) {
        queue->front = queue->last = newNode;
    } else {
        queue->last->next = newNode;
        queue->last = newNode;
    }
    queue->size++;
}

QueueElementType dequeue(Queue *queue) {
    if (isQueueEmpty(queue)) {
        return 0;
    }

    QueueNode *temp = queue->front;
    QueueElementType data = temp->data;

    queue->front = queue->front->next;
    if (queue->front == NULL) {
        queue->last = NULL;
    }

    free(temp);
    queue->size--;
    return data;
}

QueueElementType front(Queue *queue) {
    if (isQueueEmpty(queue)) {
        return 0;
    }
    return queue->front->data;
}

void destroyQueue(Queue *queue) {
    while (!isQueueEmpty(queue)) {
        dequeue(queue);
    }
    free(queue);
}

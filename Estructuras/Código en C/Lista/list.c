#include "list.h"
#include "list.h"

LinkedList* createLinkedList() {
    LinkedList* newList = (LinkedList*)malloc(sizeof(LinkedList));
    if (newList != NULL) {
        newList->head = NULL;
        newList->tail = NULL;
        newList->length = 0;
    }
    return newList;
}

void append(LinkedList* list, listElement data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode != NULL) {
        newNode->data = data;
        newNode->next = NULL;
        newNode->prev = list->tail;

        if (list->tail == NULL) {
            list->head = newNode;
        } else {
            list->tail->next = newNode;
        }

        list->tail = newNode;
        list->length++;
    }
}

void prepend(LinkedList* list, listElement data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode != NULL) {
        newNode->data = data;
        newNode->prev = NULL;
        newNode->next = list->head;

        if (list->head == NULL) {
            list->tail = newNode;
        } else {
            list->head->prev = newNode;
        }

        list->head = newNode;
        list->length++;
    }
}

void insertAfter(LinkedList* list, Node* node, listElement data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode != NULL) {
        newNode->data = data;
        newNode->prev = node;
        newNode->next = node->next;

        if (node->next != NULL) {
            node->next->prev = newNode;
        }

        node->next = newNode;
        list->length++;
    }
}

void deleteNode(LinkedList* list, Node* node) {
    if (node->prev != NULL) {
        node->prev->next = node->next;
    } else {
        list->head = node->next;
    }

    if (node->next != NULL) {
        node->next->prev = node->prev;
    } else {
        list->tail = node->prev;
    }

    free(node);
    list->length--;
}

void printLinkedList(LinkedList* list) {
    Node* current = list->head;
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\n");
}

int getLength(LinkedList* list) {
    return list->length;
}
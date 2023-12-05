#ifndef LIST_H
#define LIST_H

#include <stdlib.h>

typedef int listElement;

typedef struct Node{
    Node* next;
    Node* prev;
    listElement data;
}Node;

typedef struct LinkedList{
    Node* head;
    Node* tail;
    int length;
}LinkedList;

LinkedList* createLinkedList();
void append(LinkedList* list, listElement data);
void prepend(LinkedList* list, listElement data);
void insertAfter(LinkedList* list, Node* node, listElement data) ;
void deleteNode(LinkedList* list, Node* node);
void printLinkedList(LinkedList* list);
int getLength(LinkedList* list);

#endif // LIST_H
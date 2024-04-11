let body = document.querySelector('body');

class LinkedList {
    //can initialise a LL with a node set as head, or an empty LL
    constructor(node){
        this.head = node || null;
    }

    append(value){ //*ADDS TO END* 
        //if head = null, means ll is empty. Set value.next to null. Set head.next to value
        if (this.head == null){
            this.prepend(value);
        }
        //else
        //find node with nextNode == null
        let temp = this.head;
        while (temp.nextNode != null){
            temp = temp.nextNode;
        }
        //set that nodes nextNode to new node
        //set new nodes next node to null
        temp.nextNode = new Node(value, null);

    }

    prepend(value){ //*ADDS TO START* 
        // if list empty, set new head
        //  if (this.head == null){
        //     this.head = new Node(value, null);
        //  } else {
        // //if list is not empty, find value of head
        // this.head = new Node(value, this.head);
        // }
        this.head = new Node(value, this.head);
    }

    size(){
        //returns total number of nodes in list
        let counter = 0;
        let temp = this.head;
        while (temp !== null) {
            counter++;
            temp = temp.nextNode;
        }
        return counter;
    }

    first(){
        //returns first node in the list
        return this.head;
    }   

    last(){
        let temp = this.head;
        if (temp){
            while (temp.nextNode){
                temp = temp.nextNode;
                } 
        }
        return temp; 
    }

    //returns the node at the given index
    at(index){
        let temp = this.head;
        let current_index = 0;
        while (temp !== null) {
            if(current_index == index){
                return temp;
            }
            current_index++;
            temp = temp.nextNode;
        }
    
    }
    //pop removes the last element from the list
    //find element before last and set its next to null 
    //additional - solve for if head is null or if only one node
    pop(){
        let temp = this.head;
        while (temp!==null){
            if (temp.nextNode.nextNode == null){
                temp.nextNode = null;
                return temp;
            }
            temp = temp.nextNode;
        }
    }

    // returns true if the passed in value is in the list and otherwise returns false.
    contains(value){
        let temp = this.head;
        while (temp !== null){
            if (temp.value == String(value)){
                return true;
            }
            temp = temp.nextNode;
        }
        return false;
    }


    //returns the index of the node containing value, or null if not found.
    find(value){
        let temp = this.head;
        let current_index = 0;
        while (temp !== null) {
            if(temp.value == value){
                return current_index;
            }
            current_index++;
            temp = temp.nextNode;
        }
        return `${value} not found`;
    }


    //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString(){
        let temp = this.head;
        let stringo = '';
        while (temp !== null){
            stringo += `${temp.value} -> `;
            temp = temp.nextNode;
        }
        stringo += `null`;
        console.log(stringo);
    }


    //inserts a new node with the provided value at the given index.
    insertAt(value, index){
        let temp = this.head;
        let current_index = 0;

        while (temp !== null){
            if(current_index == index){
                let prev_node = this.at(index-1);
                //set prev nodes next to new node
                prev_node.nextNode = new Node(value,temp);
                return;
            }
            current_index++;
            temp = temp.nextNode;
        }

    }

    //removes the node at the given index.
    removeAt(index){
        //get index of prevnode
        let prev_node = this.at(index-1);
        prev_node.nextNode = prev_node.nextNode.nextNode;
        return;

    }

}

//adjust this to be able to accept 0 as value. Currently defaults to null as 0 is falsy
class Node {
    constructor(value, nextNode){
       this.value =  value || null;
       this.nextNode = nextNode || null;
    }
    
}

let LLNoHead = new LinkedList();

let firstNode = new Node('Initial Node');
let LLwNode = new LinkedList(firstNode);

//  LLwNode.append(secondNode);
// LLwNode.append(thirdNode);

LLwNode.append('second');
LLwNode.append('third');
LLwNode.append('fourth');
LLwNode.append('fifth');

console.log(LLwNode);






//head value of LL is ref to first node OR null



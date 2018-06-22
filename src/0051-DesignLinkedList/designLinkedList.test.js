
var Node = function (val) {
    this.val = val;
    this.next = null;
}
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.tail = null;
    this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    var node = this.getNode(index);
    if (node) {
        return node.val;
    }
    return -1;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function (index) {
    var runner = this.head;
    var i = 0;
    while (runner) {
        if (i == index) {
            return runner;
        }
        i++;
        runner = runner.next;
    }
    return null;
};

/**
 * Add a node of value val before the first element of the linked list. 
 * After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    var node = new Node(val);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    }
    else {
        node.next = this.head;
        this.head = node;
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    var node = new Node(val);
    if (!this.tail) {
        this.head = this.tail = node;
    }
    else {
        this.tail.next = node;
        this.tail = node;
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. 
 * If index equals to the length of linked list, the node will be appended to the end of linked list. 
 * If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    var node = new Node(val);
    var nodeAtIndex;
    if (index == 0) {
        this.addAtHead(val);
    }
    else {
        nodeAtIndex = this.getNode(index - 1);
    }
    var addingAtTail = this.tail == nodeAtIndex;

    if (nodeAtIndex) {
        node.next = nodeAtIndex.next;
        nodeAtIndex.next = node;
    }
    if (addingAtTail) {
        this.tail = node;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    var deleteNextNode;
    if (index == 0) {
        // delete head
        deleteNextNode = this.head;
    }
    else {
        deleteNextNode = this.getNode(index - 1);
    }

    if (deleteNextNode.next == this.tail) {
        this.tail = deleteNextNode;
    }
    if (deleteNextNode.next) {
        deleteNextNode.next = deleteNextNode.next.next;
    }
};

MyLinkedList.prototype.printList = function () {
    var runner = this.head;
    var items = [];
    while (runner) {
        items.push(runner);
        runner = runner.next;
    }
    console.log("items", items);
};

function instructionRunner(instructions, params) {
    var list;
    var results = [];
    instructions.forEach((instruction, index) => {
        if (instruction == "MyLinkedList") {
            list = new MyLinkedList();
            results.push(null);
        }
        else if (instruction == "addAtHead") {
            results.push(list.addAtHead(params[index][0]));

        }
        else if (instruction == "deleteAtIndex") {
            results.push(list.deleteAtIndex(params[index]));
        }
        else if (instruction == "addAtIndex") {
            results.push(list.addAtIndex(params[index][0], params[index][1]));
        }
        else if (instruction == "addAtTail") {
            results.push(list.addAtTail(params[index][0]));
        }
        else if (instruction == "addAtHead") {
            results.push(list.addAtTail(params[index][0]));
        }
        else if (instruction == "get") {
            results.push(list.get(params[index][0]));
        }
    });
    return results.map(result => {
        if (result === undefined) {
            return null;
        }
        else {
            return result;
        }
    });
}


describe("Design LinkedList", () => {
    it("", () => {
        var list = new MyLinkedList();
        list.addAtHead(1);
        list.addAtTail(3);
        list.addAtIndex(1, 2);
        expect(list.get(1)).toBe(2);
        list.deleteAtIndex(1);
        expect(list.get(1)).toBe(3);
    });

    it("test case 2", () => {
        var instructions = ["MyLinkedList", "addAtHead", "addAtHead", "deleteAtIndex", "addAtIndex", "addAtTail", "addAtIndex", "addAtTail", "addAtHead", "addAtHead", "addAtHead", "addAtTail", "addAtTail", "addAtHead", "addAtTail", "addAtTail", "addAtHead", "addAtTail", "deleteAtIndex", "addAtTail", "addAtTail", "get", "addAtIndex", "addAtHead", "get", "get", "addAtHead", "get", "addAtIndex", "addAtTail", "addAtIndex", "addAtHead", "addAtHead", "addAtHead", "get", "addAtHead", "addAtIndex", "addAtTail", "addAtHead", "addAtIndex", "get", "addAtTail", "addAtTail", "addAtIndex", "addAtIndex", "addAtHead", "addAtHead", "get", "addAtTail", "addAtIndex", "addAtIndex", "addAtHead", "deleteAtIndex", "addAtIndex", "addAtHead", "deleteAtIndex", "addAtTail", "deleteAtIndex", "addAtTail", "addAtHead", "addAtTail", "addAtTail", "addAtHead", "addAtTail", "addAtIndex", "deleteAtIndex", "addAtHead", "addAtHead", "addAtHead", "addAtTail", "get", "addAtIndex", "addAtTail", "addAtTail", "addAtTail", "deleteAtIndex", "get", "addAtHead", "get", "get", "addAtTail", "deleteAtIndex", "addAtTail", "addAtIndex", "addAtHead", "addAtIndex", "addAtTail", "get", "addAtIndex", "addAtIndex", "addAtHead", "addAtHead", "get", "get", "get", "addAtIndex", "addAtHead", "addAtIndex", "addAtHead", "addAtTail", "addAtIndex", "get"]
        var params = [[], [38], [45], [2], [1, 24], [36], [3, 72], [76], [7], [36], [34], [91], [69], [37], [38], [4], [66], [38], [14], [12], [32], [5], [7, 5], [74], [7], [13], [11], [8], [10, 9], [19], [3, 76], [7], [37], [99], [10], [12], [1, 20], [29], [42], [21, 52], [11], [44], [47], [6, 27], [31, 85], [59], [57], [4], [99], [13, 83], [10, 34], [48], [9], [22, 64], [69], [33], [5], [18], [87], [42], [1], [35], [31], [67], [36, 46], [23], [64], [81], [29], [50], [23], [36, 63], [8], [19], [98], [22], [28], [42], [24], [34], [32], [25], [53], [55, 76], [38], [23, 98], [27], [18], [44, 27], [16, 8], [70], [15], [9], [27], [59], [40, 50], [15], [11, 57], [80], [50], [23, 37], [12]]
        instructionRunner(instructions, params);
    });

    it("test case 3", () => {
        var instructions = ["MyLinkedList", "get", "addAtIndex", "get", "get", "addAtIndex", "get", "get"];
        var params = [[], [0], [1, 2], [0], [1], [0, 1], [0], [1]];
        var results = JSON.stringify(instructionRunner(instructions, params));
        expect(results).toEqual("[null,-1,null,-1,-1,null,1,-1]");
    });

    // Passes all cases 53/53 (80ms)
})
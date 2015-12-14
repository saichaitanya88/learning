// Find cyclical linked list
Node = function(params){
	this.Name = (params && params.Name) ? params.Name : '';
	this.Value = (params && params.Value) ? params.Value : '';
	this.Next = (params && params.Next) ? params.Next : null;
}

var RootNode = new Node({Name: 'root', Value : 1 });
var currentNode = RootNode;

for(var i = 2; i < 20; i++){
	var newNode = new Node({Name: 'Node: ' + i, Value : i });
	currentNode.Next = newNode;
	currentNode = currentNode.Next;
}

var slow = RootNode;
var fast = RootNode.Next;

currentNode.Next = RootNode; // remove this line to test non-cyclical
while (true){
	if (!slow || !fast) {console.log("not cyclical"); break;}	
	// if either is null, then we are not in a cyclical list
	if (slow.Value == fast.Value){
		console.log("cyclical");
		break;
	}
	slow = slow.Next;
	fast = fast.Next;
	if (fast) fast = fast.Next;
}

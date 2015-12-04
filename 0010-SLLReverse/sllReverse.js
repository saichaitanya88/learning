//Reverse SLL without using any extra nodes
var Node = function(params){
	this.Name = (params && params.Name) ? params.Name : '';
	this.Value = (params && params.Value) ? params.Value : '';
	this.Next = (params && params.Next) ? params.Next : '';;
}

var RootNode = new Node({Name: 'root', Value : 1 });
var currentNode = RootNode;

// Create Nodes
for(var i = 2; i < 20; i++){
	var newNode = new Node({Name: 'Node: ' + i, Value : i });
	currentNode.Next = newNode;
	currentNode = currentNode.Next;
}

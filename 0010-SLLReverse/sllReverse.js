//Reverse SLL without using any extra nodes
function reverse(){
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

	currentNode = RootNode;
	var runner = currentNode.Next;

	while(runner.Next != null){
		currentNode.Next = currentNode;
		currentNode = runner;
		runner = runner.Next;
		console.log(runner);
	}
}
console.log("loaded");

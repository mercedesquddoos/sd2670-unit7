function printHello(){
	var input = document.getElementById("onenumber");
	var total = 100;
	var output = document.getElementById("printOut");
	var count = 1;
	
	output.innerHTML = "";
	
	while(count <= total){
		output.innerHTML += input.value;
		count++;
		
	}
}


		
	
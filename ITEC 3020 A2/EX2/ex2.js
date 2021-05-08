
var countpos = 0;    // Holds number of positive numbers
var countneg = 0;    // Holds number of negative numbers

function sort(){    // Checks how many positive and negative numbers are entered
	

	var pit = document.getElementById("inpt").value;    // Takes value of input

		if (pit < 0){    // Increases negative count if number is negative
			countneg = countneg+1;
		}
		else if (pit > 0){    // Increases positive count if number is positive
			countpos = countpos+1;
		}

		else if (pit == 0){
		document.getElementById("positive").innerHTML+= countpos;    // Prints number of positive numbers
		document.getElementById("negative").innerHTML+= countneg;    // Prints number of negative numbers
	}

}

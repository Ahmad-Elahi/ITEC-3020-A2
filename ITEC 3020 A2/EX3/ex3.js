
function check(){    // Checks if reverse and forward of number are the same
	
	var reverse = 0;    // Holds reverse of number
	var temp = document.getElementById("inpt").value;    //stores input value
	var hold = document.getElementById("inpt").value;    //stores input value
	var count = 1;

	while(hold > 0){    // Calculates if reverse of number is equal to forward of number
		count = hold % 10;
		reverse = reverse*10 + count;
		hold = parseInt(hold / 10);
		}

	if(reverse == temp){
		document.getElementById("result").innerHTML+= "YES";    // If reverse equals forward yes is printed
	}

	else{
		document.getElementById("result").innerHTML+= "NO";    // If reverse does not equal forward no is printed
	}

}

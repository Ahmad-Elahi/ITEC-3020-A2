var gr;    // Holds grade
function gradeConversion(grade){    // Converts number grade to letter grade
	if (grade >= 90){         // Calculates A+
		gr = "A+";
	}
	else if ((grade >= 80) && (grade <= 89)){    // Calculates A 
		gr = "A";
	}
	else if ((grade >= 75) && (grade <= 79)){    // Calculates B+
		gr = "B+";
	}
	else if ((grade >= 70) && (grade <= 74)){    // Calculates B
		gr = "B";
	}
	else if ((grade >= 65) && (grade <= 69)){    // Calculates C+
		gr = "C+";
	}
	else if ((grade >= 60) && (grade <= 64)){    // Calculates C
		gr = "C";
	}
	else if ((grade >= 55) && (grade <= 59)){    // Calculates D+
		gr = "D+";
	}
	else if ((grade >= 50) && (grade <= 54)){    // Calculates D
		gr = "D";
	}
	else if ((grade >= 40) && (grade <= 49)){    // Calculates E
		gr = "E";
	}
	else if (grade < 40){    // Calculates F
		gr = "F";
	}
	document.getElementById("result").innerHTML+= "Your Calculated Letter Grade Is: " + (gr);    // Prints result

}
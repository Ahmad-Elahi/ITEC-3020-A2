function deletealert(box){    // Deletes boxes and alerts when only one left
	var contain = document.getElementById("container");    // Gets container div
	var track = contain.childElementCount;    // Tracks how many boxes there are (children of container div)
	if(track != 1){    // If there is more than one box then boxes may be deleted
		box.remove();
	}
	else{    // If only one box is left then alert is displayed
		alert("Last one!");
	}
}


function boxes(){    // Creates the random boxes
	
	for(var i = 0; i < 100; i++){    // Creates 100 random boxes

		var boxes = document.createElement("div");    //Creates boxes using divs
		boxes.setAttribute("onmouseover", "deletealert(this)");    // Deletes boxes when moved over by mouse and sends alert when only one box left
		var leftcoord = parseInt(Math.random() * 400);    // Calculates left coordinate of box
		var topcoord = parseInt(Math.random() * 400);    // Calculates top coordinate of box
		var r = parseInt(Math.random() * 200);    // Chooses random number for red part of RGB code
		var g = parseInt(Math.random() * 200);    // Chooses random number for green part of RGB code
		var b = parseInt(Math.random() * 200);    // Chooses random number for blue part of RGB code

		boxes.style.height = 50 + "px";    // Box height
		boxes.style.width = 50 + "px";    // Box width
		boxes.style.left = leftcoord + "px";    // Places box at selected left coordinate
		boxes.style.top = topcoord + "px";    // Places box at selected top coordinate
		boxes.style.position = "Absolute"  // Sets position to absolute
		var colour = "rgb("+r+","+g+","+b+")";
		boxes.style.backgroundColor = colour;    // Gives box colour using random RGB code
		boxes.style.border = "thick solid #000000";    // Puts border on box

		container.appendChild(boxes);    // Connects box divs to container div
	}
}

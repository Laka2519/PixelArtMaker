// Setting variables for canvas size
var numberOfRows;
var numberOfColumns;

// Setting variable for canvas itself
var canvas = document.getElementById("pixelCanvas");

// Function for creating the canvas based on user input
function makeGrid () {
	// Emptying out the canvas first
	canvas.innerHTML = "";
	canvas.style.background = "#ffffff";
	// Creating a new canvas according to user input
	for (var r = 0; r < numberOfRows; r++) {
		var newRow = document.createElement("tr");
		for (var c = 0; c < numberOfColumns; c++) {
			var newCell = document.createElement("td");
			newRow.appendChild(newCell);
		canvas.appendChild(newRow);
		}
	}
	// Adding EventListeners to the canvas
	canvas.addEventListener('click', function (event) { 
		event.target.style.backgroundColor = document.getElementById("colorPicker").value;
	})
};

// Setting variable for submit button
var button = document.getElementById("button");

// Adding an EventListener to the submit button
button.addEventListener("click", submitForm);

// When canvas size is submitted by the user, call makeGrid()
function submitForm(event) {
	event.preventDefault();
	numberOfRows = document.getElementById("inputHeight").value;
	numberOfColumns = document.getElementById("inputWidth").value;
	makeGrid(numberOfRows, numberOfColumns);
};

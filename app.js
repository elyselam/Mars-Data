

// Select HTML elements and assign to variables
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#erase")

// Add click event listeners to the buttons, call the functions passed in
$searchBtn.addEventListener("click", searchButtonClick);
// erase input field when clicked out
$resetBtn.addEventListener("click", eraseText);


// Initially set filteredUfoData to dataSet to render all of the data within the file on the table.
var filteredUfoData = dataSet;

//When opening the page, the renderDataTable function loads all of the data in the file 'dataSet'

	function renderDataTable(){
	    $tbody.innerHTML = "";

	    for (var i = 0; i < filteredUfoData.length; i++) {
	        var dates = filteredUfoData[i];
	        var fields = Object.keys(dates);
	        var $row = $tbody.insertRow(i);

	        for (var j = 0; j < fields.length; j++) {
	            var field = fields[j];
	            var $cell = $row.insertCell(j);
	            $cell.innerText = dates[field];
	        }
	    }
	}
	renderDataTable();
	
	function eraseText() {
    $stateInput.value = "";
    $cityInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
    $dateInput.value = "";
}


var numFieldOne = document.getElementById('numFieldOne');
var numFieldTwo = document.getElementById('numFieldTwo');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY')


form.addEventListener('submit', function(event){
	if (!numFieldOne.value || !numFieldTwo.value){
		alert("Please enter values.")
	} else{
		var x = parseFloat(numFieldOne.value);//turns string into number
		var y = parseFloat(numFieldTwo.value);

		var result = x / y;
		var percent = result * 100;

		resultField.innerText = "Answer: " + percent + "%";
		event.preventDefault();//prevents page from refreshing
	}
});
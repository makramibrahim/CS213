/****************************************************
* Write the necessary JavaScript to put "Hello World" 
* in an alert with the click of a button
*****************************************************/
function problem1() {
	// get hello world in alert message!
	var text = "Hello World";
	console.log(text);
}

/*****************************************************
* Write a function to perform a simple form letter
* substitution. Consider the following letter:
******************************************************/
function problem2() {
	// get a new input name
	var newName = document.getElementById('name2').value;
	 // create a variable and assigned to text2
	var letter = document.getElementById('text2').innerHTML;
	// look for this name and find it
	var searchName = /RICH_GUY/g;

	var newLetter = letter.replace(searchName, newName);
	  console.log(newLetter);
}

/*****************************************************
* Write the necessary JavaScript to convert Fahrenheit to 
* Celsius. Display the resulting Celsius temperature in an alert.
******************************************************/
function problem3() {

	var f = Number(document.getElementById('text3').value);
	var c = 5.0 / 9 * (f - 32);
	var getCelsius = c.toFixed(1);
	console.log("Celsius: " + getCelsius);
}

/*****************************************************
* Write the necessary JavaScript to find the cost of 
* postage for a large envelope. The rates are:
******************************************************/
function problem4() {
	var weight = document.getElementById('text4').value;

 var array = {
		"1":"$0.98",
		"2":"$1.19",
		"3":"$1.40",
		"4":"$1.61",
		"5":"$1.82",
	}
  var getOutput= document.getElementById('text4').innerHTML = array[weight];

	console.log("Weight: " + getOutput);
}

/*****************************************************
* Write the necessary JavaScript to compute compound interest 
* using a FOR loop taking into account the APR (Annual 
* Percentage Rate), Term (time in years the loan will be 
* in force), and Amount (the amount of the loan in dollars).
******************************************************/
function problem5() {
	var apr = Number(document.getElementById('apr5').value);
	var term = Number(document.getElementById('term5').value);
	var amount = Number(document.getElementById('amount5').value);

	apr = apr * 0.01;

	for (var i = 0; i < term; i++) {
		amount = amount * (apr +1 );
	}
	count = amount.toFixed(2);
	console.log("Amount: " + count);
}
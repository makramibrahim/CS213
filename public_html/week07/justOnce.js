 /**********************************************
* this function will get in input from a user
***********************************************/
function getInputStayPrice() {
    
    // assign an array for all the input;
     var oneWeek = document.getElementsByName('input1').value = 2289.99; 
     
   document.getElementById('totalPrice').innerHTML = "Selected One Week Stay $" + oneWeek.toFixed(2); 
          
}

/*************************************************
* this function will get in input from a user
***************************************************/
   
function getInputFoodPrice() {
         
        var oneWeekFood = document.getElementsByName('input2').value = 899.99;
    
    if ('input1' !== 'input2') {

         document.getElementById('totalPrice2').innerHTML = "Selected One Week Meals $" + oneWeekFood.toFixed(2) + "<br>" + "Total Amount Due: $" + (oneWeekFood + 2289.99).toFixed(2);
    } else
    
    document.getElementById('totalPrice2').innerHTML = "Selected One Week Meals $" + oneWeekFood.toFixed(2);
      
}

/*************************************************
* Function: Get Name of the Customer
*************************************************/
function validateFirstName(firstName, theClass) {
    
    // if the filed is empty trun the alert message on
    
    if (firstName !== "") {
    
 	      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

} 

/**************************************************
* Function: Validate the Last Name of the Customer
****************************************************/
function validateLastName(lastName, theClass) {
    
    // if the filed is empty trun the alert message on
    if (lastName !== "") {
    
 	      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
}          

/**************************************************
* Function: Validate the phone number of the Customer
****************************************************/
function validatePhoneNumber(phoneNumber, theClass) {
    
    // if the phone Number is matching turn on the 
    // invalid message.
    var number = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    
    if (phoneNumber.match(number)) {             
         document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
}

/*************************************************
* Function: Get Name of the Customer
*************************************************/
function validateEmail(email, theClass) {
    
    // if the filed is empty trun the alert message on
    
    if (email !== "") {
    
 	      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

} 

/**************************************************
* Function: Validate the Street Adress
****************************************************/
function validateStreet(street, theClass) {
    
    // If the address is not there then turn invalid message

    
    if (street !== "") {
          document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
} 

/**************************************************
* Function: Validate the City
****************************************************/
function validateCity(city, theClass) {
    
    // If the city is not there then turn invalid message

    if (city !== "") {
          document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
} 

/**************************************************
* Function: Validate all USA States
****************************************************/
function validateStates(theStates, theClass) {

	// match all the states with uppercase only and white space before and after. 
	var states = /^\s*(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))(?!\S)/;

	if (theStates.match(states)) {
		
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

}

/**************************************************
* Function: Validate ZIP CODE for the United States
****************************************************/
function validateZip(theZip, theClass) {

	// match all the zip code of the United States of America. 
	var zip = /^\s*((\d{5})|(\d{5}-\d{4}))(?!\S)/;

	if (theZip.match(zip)) {
		
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

}

/**************************************************
* Function: Validate the customer's credit card numer 
****************************************************/
function validateCreditCard(theNum, theClass) {
	// match 16 numbers of credit card form with spaces before and after.
	var num = /^\s*(\d{4}[ ]){3}\d{4}|\d{16}(?!\S)/;
	if (theNum.match(num)) {
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
}

function reset() {
    // on focus, reset field placeholder.
    document.getElementById('expdate').placeholder = '00/00';
}

/**************************************************
* Function: Validate the credit card's expration date 
****************************************************/
function validateDate(theDate, theClass) {

    // if the input is in the passed or more than 4 digits then turn on 
    // invalid message.
    
    var exDate = /^((0[1-9])|(1[0-2]))\/(\d{2})$/;
    if (theDate.match(exDate)) {
        
	document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
        document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
}

/**************************************************
* Function: Rest the entire page! 
****************************************************/
function reset() {
    // reload the page once the user reset!
    location.reload();
}

/**************************************************
* Function: Submit 
****************************************************/
function submit() {
    //Run a message once it submitted
     reset();
    alert('Submitted Successfully');
   
}

            




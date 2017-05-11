/*************************************************************
#1 Age
Write the HTML and JavaScript to prompt the user for his or her age. 
Initially, the field will be blank and a message will appear next to 
the input field indicating that a valid age has not been presented. 
When the user types in a valid age (0-118), then the error message 
will disappear.

For problem #1, I will be checking for ages less than 0, 
greater than 118, and ages that are not a number.
******************************************************************/
function validateAge(theAge, theClass) {

    // if age above 118 or less than 0 trun on the red style.
	if (theAge >= 0 && theAge <= 118) {
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}


}

/*************************************************************
#2 Social Security Number
Write the HTML and JavaScript to prompt the user for a SSN. 
Initially, the field will be blank and a message will appear 
next to the input field indicating that a valid SSN has not 
been presented. When the user types a valid SSN (000-00-0000), 
then the error message will disappear.

For problem #2, I will be checking that the SSN is in the format 
000-00-0000. I will be checking that 000000000 does not work. 
I will be checking that the correct format works with white space 
both before and/or after it.
******************************************************************/
function validateSocialSecurity(theSSN, theClass) {

	// make sure that ssn input matches the regex
	var ssn = /^\s*\d{3}-\d{2}-\d{4}(?!\S)/;
	if (theSSN.match(ssn)) {
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
}

/*************************************************************
#3 Credit Card Number
Write the HTML and JavaScript to prompt the user for a credit card 
number. Initially, the field will be blank and a message will appear
next to the input field indicating that a valid credit card number 
has not been presented. When the user types a valid number 
(0000 0000 0000 0000), then the error message will disappear. 
Note that the user can either put spaces between the 4-digit 
series of numbers or may choose to put no spaces (0000000000000000).

For problem #3, I will be checking the credit card number both with 
and without internal spaces. I will be checking that both formats work 
with white space both before and/or after it.
******************************************************************/
function validateCreditCard(theNum, theClass) {
	// match 16 numbers of credit card form with spaces before and after.
	var num = /^\s*(\d{4}[ ]){3}\d{4}|\d{16}(?!\S)/;
	if (theNum.match(num)) {
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

}

/*************************************************************
#4 Date
Write the HTML and JavaScript to prompt the user for a date. 
Initially, the field will be blank and a message will appear 
next to the input field indicating that a valid date has not 
been presented. When the user types a valid date (m/d/yyyy), 
then the error message will disappear. The following constraints 
exist for the date:

For problem #4, I will be testing with dates such as 1/1/2015, 
12/12/2015, 13/1/2015, 1/33/2015, 1/1/2101, etc. with white space 
both before and/or after them.
******************************************************************/
function validateDate(theDate, theClass) {

	// match a US date form MM/DD/YYYY with space before and after.  
	var date = /^\s*(0?[1-9]|1[12])[/ -](0?[1-9]|[12][0-9]|3[01])[/ -](19[0-9]{2}|[2][0-9][0-9]{2})/;

	if  (theDate.match(date)) {
		
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

}

/*************************************************************
#5 State
Write the HTML and JavaScript to prompt the user for a 2-letter 
state abbreviation. Initially the field will be blank and a message 
will appear next to the input field indicating that a valid abbreviation
has not been presented. When the user types a valid abbreviation 
(ID), then the error message will disappear. Note that the abbreviation
must be UPPERCASE.

For problem #5, I will test a number of common US state abbreviations.
 I will be checking that uppercase, but no lowercase, is accepted. 
 I will be checking that the correct format works with white space both 
 before and/or after it.
******************************************************************/
function validateStates(theStates, theClass) {

	// match all the states with uppercase only and white space before and after. 
	var states = /^\s*(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))(?!\S)/;

	if (theStates.match(states)) {
		
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

}

/*************************************************************
#6 Dollar Amount
Write the HTML and JavaScript to prompt the user for an amount 
of money in dollars. Initially, the field will be blank and a message 
will appear next to the input field indicating that a valid amount 
has not been presented.

For problem #6, I will be testing with money amounts such as 
$1; 1.; 1.0; 1.00; $1.00; 1,000; 1000; 1,00; etc. I will be checking 
that the correct format works with white space both before and/or after it.
******************************************************************/
function validateDollarAmount(theDollar, theClass) {

	// match with dollar sign, commas, decimals and any number of white spaces
	// after or before the dollar amount. 
	var dollar = /^\s*\$?\d{1,3}(,\d{3})*(\.\d{2})?(?!\S)/;
	if (theDollar.match(dollar)) {

		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
    

}
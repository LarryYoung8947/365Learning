// FUNCTION EXPRESSIONS



function diffOfSquares (a, b) {
	return a*a - b*b;
}

// DO NOT NEED FUNCTION NAME WHEN STORING FUNCTION IN A VARIABLE (ANONYMOUS FUNCTION)



var diff = function (a, b) {
	return a*a - b*b;
};

diff( 9, 5 );

// LOOK WHAT IS STORED IN A VAR

console.log(diff); 

// EXAMPLE: NATIONAL STATE PARK - THE BADLANDS



var greeting = funtion () {
	alert("Thanks for visiting the Badlands!\n" + "We hope your stay is...better than most.");
};

closeTerminal( greeting);



funtion closeTerminal( message ){
	...
	message();
	...
}

// MULTIPLE GREETINGS

var NewCustomer = false;
var greeting;
if( newCustomer ){
	greeting = funtion {} {
		alert("Thanks for visiting the Badlands/n" + "We hope your stay is...better than most.");
	};
} else {
	greeting = function () {
		alert("Welcome back to the Badlands!/n" + "Guess they aren't so bad huh?");
	};
}

closeTerminal( greeting );


funtion closeTerminal( message ){
	...
	message();
	...
}



















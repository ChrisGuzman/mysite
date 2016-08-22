window.onload = function() {

	// Tell the world hello!
	console.log('Hello World!');
	// var visitorName;
	// visitorName = prompt("What is your name");
	// // alert("Thank you for visiting " + visitorName);

	// // document.getElementById("welcome-visitor").innerHTML = "Hello " + visitorName;

	// if (visitorName == "Chris" ) {
	// 	console.log("Welcome to the super secret admin page")
	// }

	var password = prompt("What is the password?");
	// alert("Thank you for visiting " + password);

	// document.getElementById("welcome-visitor").innerHTML = "Hello " + password;

	if (password == "Betamore" ) {
		document.getElementById("secret-video").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/YrAR2W-tHJs" frameborder="0" allowfullscreen></iframe>'
	}

	function greet() {
		var lastName = "Guzman";
		console.log("Greetings " + lastName);
	}

	//Won't work because it was defined in the method
	// alert(lastName)


	function shouldWalkAnimals(puppies, kittens) {
		if (puppies > 5 && (kittens + puppies > 15)) {
			console.log("We should walk them");
		} else {
			console.log("We should not walk them")
		}
	} 

	//Get from the user
	var userName;
	var userPassword;

	//From DB
	var realPassword = "1111 light st"
	var realUser = "cguzman"

	if (userName == realUser && userPassword == realPassword) {
		login();
	} else if (userName == realUser && userPassword != realPassword) {
		alert("Wrong password");
	} else if (true) {

	} else {
		alert("No account found, create an account?")
	}
}
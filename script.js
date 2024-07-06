function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	var firstName = document.getElementById('first').value;
	var lastName = document.getElementById('last').value;
	alert(`First Name: ${firstName}\nLast Name: ${lastName}`)
	

}

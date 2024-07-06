function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	var firstName = document.getElementById('first').value;
	var lastName = document.getElementById('last').value;
	alert(`${firstName} ${lastName}`);
	

}

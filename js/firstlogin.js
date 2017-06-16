

function foo(){
var arr = [];
	var user = {};
	user.login = document.getElementById("login").value;
	user.password = document.getElementById("password").value;
	user.firstName = document.getElementById("firstName").value;
	user.lastName = document.getElementById("lastName").value;
	user.email = document.getElementById("email").value;
	user.phone = document.getElementById("phone").value;
	user.myBookName = document.getElementById("myBookName").value;
	user.myBookAuthor = document.getElementById("myBookAuthor").value;
	user.findBookName = document.getElementById("findBookName").value;
	user.findBookAuthor = document.getElementById("findBookAuthor").value;

	console.log(arr.push(user));
}
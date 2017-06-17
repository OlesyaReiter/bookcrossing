var arr = [];
function foo(){
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

	arr.push(user);
    console.log(arr);
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("myBookName").value = "";
    document.getElementById("myBookAuthor").value = "";
    document.getElementById("findBookName").value = "";
    document.getElementById("findBookAuthor").value = "";
}

export {arr};


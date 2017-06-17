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


	var Petro = {
	firstName: "Petro",
	lastName : "Makitra",
	email : "makitra@mail.com",
	phone : "3803214455",
	myBookName : ["Harry Potter and the Philosopher's Stone", "Harry Potter and the Chamber of Secrets"],
	myBookAuthor : ["J.K. Rowling", "J.K. Rowling"],
	findBookName : ["Help Your Kids with Maths"],
	findBookAuthor : ["Carol Vorderman"],
	}

	var Ivan = {
	firstName: "Ivan",
	lastName : "Durko",
	email : "durko@mail.com",
	phone : "3803114455",
	myBookName : ["Help Your Kids with Maths"],
	myBookAuthor : ["Carol Vorderman"],
	findBookName : ["Harry Potter and the Philosopher's Stone"],
	findBookAuthor : ["J.K. Rowling"],
	}

	var Ivanka = {
	firstName: "Ivanka",
	lastName : "Kril",
	email : "kril@mail.com",
	phone : "3803112455",
	myBookName : ["Help Your Kids with Maths"],
	myBookAuthor : ["Carol Vorderman"],
	findBookName : ["Harry Potter and the Chamber of Secrets"],
	findBookAuthor : ["J.K. Rowling"],
	}

	var Pavlina = {
	firstName: "Pavlina",
	lastName : "Korol",
	email : "@mail.com",
	phone : "3803112455",
	myBookName : ["Help Your Kids with Maths"],
	myBookAuthor : ["Carol Vorderman"],
	findBookName : ["bla bla"],
	findBookAuthor : ["J.K. Rowling"],
	}


	arr.push(Petro);
	arr.push(Ivan);
	arr.push(Ivanka);
	arr.push(Pavlina);



	function show(){
		for(var i = 0; i < arr[0].myBookName.length; i++){
			document.getElementById("myBooks").innerHTML += arr[0].myBookName[i] +"</br>";
			// console.log(arr);
		}
	}
	function show2(){
		for(var i = 0; i < arr[0].findBookName.length; i++){
			document.getElementById("neededBooks").innerHTML += arr[0].findBookName[i] +"</br>";
		// console.log(arr);
		
		}
	}	
	show(); 
	show2();


	var result1=[];
	var result=[];

	function compaire () {

		for (var x = 0; x < arr[0].findBookName.length; x++) {

			for (var a = 0 ; a < arr.length; a++) {

				for (var b = 0; b < arr[a].myBookName.length; b++) {

					if (arr[0].findBookName[x]===arr[a].myBookName[b]) {

					arr[a].color='yellow';

					result1.push(arr[a]);

					}
				}
			}
		}

		for (var y = 0; y < arr[0].myBookName.length; y++) {

			for (var i = 0 ; i < result1.length; i++) {

				for (var j = 0; j < result1[i].findBookName.length; j++) {

					if (arr[0].myBookName[y]===result1[i].findBookName[j]) {

						result1[i].color="green";
						
					}
				}
			}
		}
	}

	compaire();

console.log(result1);




























function addMy(){
	var len = arr[0].myBookName.length;
	var addBook = document.getElementById("addMyBooks").value;
	arr[0].myBookName.push(addBook);
	document.getElementById("myBooks").innerHTML += arr[0].myBookName[len] +"</br>";
	document.getElementById("addMyBooks").value = "";
}

function addNeed(){
	var len = arr[0].myBookName.length;
	var addBook = document.getElementById("addNeededBooks").value;
	arr[0].myBookName.push(addBook);
	document.getElementById("neededBooks").innerHTML += arr[0].myBookName[len] +"</br>";
	document.getElementById("addNeededBooks").value = "";
}
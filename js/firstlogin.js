function foo(){
	var user = {
		author: document.getElementById("myBookauthor").value,
		bookName:document.getElementById("myBookName").value,
		bookYear : document.getElementById("myBookYear").value,
		bookIsbm : document.getElementById("myBookIsbn").value,
		statys : document.getElementById("statys").value,
		author2 : document.getElementById("findBookauthor").value,
		findBookName : document.getElementById("findBookName").value,
		findBookYear : document.getElementById("findBookYear").value,
		findBookIsbn : document.getElementById("findBookIsbn").value,
		BookIsbn : document.getElementById("BookIsbn").value,
		bookDescript : document.getElementById("bookDescript").value,
	}

	console.log(user);
}
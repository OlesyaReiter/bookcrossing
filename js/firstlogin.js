
var counter = localStorage.length + (new Date()).getMilliseconds();


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

  var obj = JSON.stringify(user);
  localStorage.setItem(counter++, obj);

  clearForm();
}  

function clearForm(){
  document.getElementById("myBookauthor").value = '';
  document.getElementById("myBookName").value = '';
  document.getElementById("myBookYear").value = '';
  document.getElementById("myBookIsbn").value = '';
  //document.getElementById("statys").value = '';
  document.getElementById("findBookauthor").value = '';
  document.getElementById("findBookName").value = '';
  document.getElementById("findBookYear").value = '';
  document.getElementById("findBookIsbn").value = '';
  //document.getElementById("BookIsbn").value = '';
  document.getElementById("bookDescript").value = '';
}

var counter = localStorage.length + (new Date()).getTime();


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
  owner: localStorage.getItem("nickName")
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

//Shows the liked books table
function showBookTable(){
  var myUser = localStorage.getItem("nickName");
  //If not logged in then do nothing
  if (!myUser) return;

  var booksMappings = localStorage.getItem('booksMappings');
  //If some mappings in localStorage exist, otherwise do nothing
  if (!booksMappings) return;

  var array = JSON.parse(booksMappings);
  var arrayToShow = [];

  for(var i = 0; i < array.length; i++){
    var el = array[i];
    //Check if our mapping object
    if (el && el['wantedBookKey']){
      var bookStr = localStorage.getItem(el.wantedBookKey);
      var book = JSON.parse(bookStr);
      //Checks if somebody wanted my book
      if (book && book.owner === myUser){
        arrayToShow.push({
          client: el.client,
          author: book.author,
          bookName: book.bookName
        });
      }
    }
  }

  if (arrayToShow.length === 0) return;

    var table = document.getElementById('loader_table');
    if (table) {        
        while (table.rows.length > 1) {
            table.deleteRow(table.rows.length - 1);
        }

        for (var i = 0; i < arrayToShow.length; i++) {
            var row = table.insertRow(table.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = arrayToShow[i].client;
            cell2.innerHTML = arrayToShow[i].author;
            cell3.innerHTML = arrayToShow[i].bookName;
        }

        table.style.display = 'table';
    }


}
var selectedId = 'about';

function switchPage(id){
        unselectOldButtonAndSelectNew(id);
        hideActivePage();
        showPage(id);
        if(id === 'bookcrossing'){
            addTwoDUMMYBooks();
        }
}
// closes active page 
function hideActivePage(){
    var section = document.getElementById(selectedId);
    section.style.display = "none";
}
//Shows the new page and changes the selected page Id
function showPage(pageId){
    var section = document.getElementById(pageId);
    section.style.display = "flex";
    selectedId = pageId;
}

//Finds old selected and new buttons by Ids. Removes two classes from old button and adds them to new one
function unselectOldButtonAndSelectNew(newButtonId){
        var buttonId = newButtonId + "_button";  
        var selectedButtonId = selectedId + "_button";

        var newButton = document.getElementById(buttonId);
        var previousButton = document.getElementById(selectedButtonId);

        previousButton.classList.remove("selected-button");
        previousButton.classList.remove("nohover");

        newButton.classList.add("selected-button");
        newButton.classList.add("nohover");
}

function addTwoDUMMYBooks(){
        fillBookForm({
            author: 'author 1',
            bookName: 'bookName 1',
            bookYear: 'bookYear 1',
            isbn: 'isbn 1',
            bookState: 'bookState 1',
            requestedAuthor: 'requestedAuthor 1',
            requestedBookName: 'requestedBookName 1',
            requestedBookYear: 'requestedBookYear 1',
            requestedIsbn: 'requestedIsbn 1',
            requestedBookState: 'requestedBookState 1',
            comment: 'comment 1'
        });

        fillBookForm({
            author: 'author 2',
            bookName: 'bookName 2',
            bookYear: 'bookYear 2',
            isbn: 'isbn 2',
            bookState: 'bookState 2',
            requestedAuthor: 'requestedAuthor 2',
            requestedBookName: 'requestedBookName 2',
            requestedBookYear: 'requestedBookYear 2',
            requestedIsbn: 'requestedIsbn 2',
            requestedBookState: 'requestedBookState 2',
            comment: 'comment 2'
        });
}

function fillBookForm(dataObj){
    var div = document.getElementById("info_div");
    var divBook = document.getElementById("bookId");
    var clone = divBook.cloneNode(true); 
    clone.id = "bookId1";

    var authorId = getElement(clone, "authorId");
    var bookNameId = getElement(clone, "bookNameId");
    var bookYearId = getElement(clone, "bookYearId");
    var isbnId = getElement(clone, "isbnId");
    var bookStateId = getElement(clone, "bookStateId");
    var authorIdR = getElement(clone, "authorIdR");
    var bookNameIdR = getElement(clone, "bookNameIdR");
    var bookYearIdR = getElement(clone, "bookYearIdR");
    var isbnIdR = getElement(clone, "isbnIdR");
    var bookStateIdR = getElement(clone, "bookStateIdR");
    var commentId = getElement(clone, "commentId");


    authorId.innerHTML = dataObj.author;
    bookNameId.innerHTML = dataObj.bookName;
    bookYearId.innerHTML = dataObj.bookYear;
    isbnId.innerHTML = isbnId.isbn;
    bookStateId.innerHTML = bookStateId.bookState;
    authorIdR.innerHTML = dataObj.requestedAuthor;
    bookNameIdR.innerHTML = dataObj.requestedBookName;
    bookYearIdR.innerHTML = dataObj.requestedBookYear;
    isbnIdR.innerHTML = dataObj.requestedIsbn;
    bookStateIdR.innerHTML = dataObj.requestedBookState;
    commentId.innerHTML = dataObj.comment;

    clone.style.display = 'flex';
    div.appendChild(clone);
}

function getElement(clone, id){
    var elements = clone.getElementsByClassName("book-info-span");

    for (var i = 0; i < elements.length; i++){
        var el = elements[i];

        if (el.id === id){
            return el;
        }
    }

    return null;
}
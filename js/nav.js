var selectedId = 'about';

function switchPage(id){
        unselectOldButtonAndSelectNew(id);
        hideActivePage();
        showPage(id);
        if(id === 'bookcrossing'){
            //Clean div container
            var div = document.getElementById("info_div");
            while (div.hasChildNodes()) {
                div.removeChild(div.lastChild);
            }


            for (var i = 0; i < localStorage.length; i++){
                var value = localStorage.getItem(localStorage.key(i));
                var obj = JSON.parse(value);

                if (obj['author']){
                    fillBookFormSmall(obj);
                    //fillBookForm(obj);
                }
            }
        }

        if (id === 'myroom'){
            checkIfLogedIn();
        }
}

function checkIfLogedIn(){
    if (localStorage.getItem("nickName") && localStorage.getItem("nickName") !== ''){
        var myProfileTitle = document.getElementById("myProfileTitle");
        myProfileTitle.innerHTML += ' (' + localStorage.getItem("nickName") + ')';
        showMyRoomButton(true);
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

function fillBookFormSmall(dataObj){
    var div = document.getElementById("info_div");
    var divBook = document.getElementById("bookDivSmall");
    var clone = divBook.cloneNode(true); 
    clone.id = "bookId1";

    var authorId = getElementSmall(clone, "bookAuthorSmall");
    var bookNameId = getElementSmall(clone, "bookNameSmall");
    var commentId = getElementSmall(clone, "bookCommentSmall");

    var buttonsSmallContainer = getElementSmall(clone, "buttonsSmallContainer");
    var thumbsUpButton = getElementSmall(buttonsSmallContainer, "thumbsUpButton");
    var viewMoreButton = getElementSmall(buttonsSmallContainer, "viewMoreButton");

    thumbsUpButton.addEventListener("click", function(){
        alert('thumbsUpButton');
    });

    viewMoreButton.addEventListener("click", function(){
        alert('viewMoreButton');
    });

    var ownerSmallContainer = getElementSmall(clone, "ownerSmallContainer");
    var ownerSmall = getElementSmall(ownerSmallContainer, "ownerSmall");

    authorId.innerHTML = dataObj.author ? dataObj.author : "N/A";
    bookNameId.innerHTML = dataObj.bookName ? dataObj.bookName : "N/A";    
    commentId.innerHTML = dataObj.bookDescript ? dataObj.bookDescript : "N/A";
    //Inserting the owner information
    ownerSmall.innerHTML = dataObj.owner ? dataObj.owner : "N/A";

    clone.style.display = 'block';
    div.insertBefore(clone, div.firstChild);
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


    authorId.innerHTML = dataObj.author ? dataObj.author : "-";
    bookNameId.innerHTML = dataObj.bookName ? dataObj.bookName : "-";
    bookYearId.innerHTML = dataObj.bookYear ? dataObj.bookYear : "-";
    isbnId.innerHTML = isbnId.bookIsbm ? isbnId.bookIsbm : "-";
    bookStateId.innerHTML = bookStateId.statys ? bookStateId.statys : "-";
    authorIdR.innerHTML = dataObj.author2 ? dataObj.author2 : "-";
    bookNameIdR.innerHTML = dataObj.findBookName ? dataObj.findBookName : "-";
    bookYearIdR.innerHTML = dataObj.findBookYear ? dataObj.findBookYear : "-";
    isbnIdR.innerHTML = dataObj.findBookIsbn ? dataObj.findBookIsbn : "-";
    bookStateIdR.innerHTML = dataObj.BookIsbn ? dataObj.BookIsbn : "-";
    commentId.innerHTML = dataObj.bookDescript ? dataObj.bookDescript : "-";

    clone.style.display = 'flex';
    //div.appendChild(clone);
    div.insertBefore(clone, div.firstChild);
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

function getElementSmall(clone, id){
    var elements = clone.childNodes;

    for (var i = 0; i < elements.length; i++){
        var el = elements[i];

        if (el.id === id){
            return el;
        }
    }

    return null;
}

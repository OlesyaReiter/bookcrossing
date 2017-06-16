var selectedId = 'about';

function switchPage(id){
        unselectOldButtonAndSelectNew(id);
        hideActivePage();
        showPage(id);
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
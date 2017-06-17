//Closes the modal window
function closeModal(){
    var modal = document.getElementById('myModal');
    if (modal){
        modal.style.display = "none";
    }
}

function showIntroduceForm(){
    //Shows the modal window
    var modal = document.getElementById('myModal');
    if (modal){
        modal.style.display = "block";
    }
}

function Login(){
    var name = document.getElementById("nickName").value;
    localStorage.setItem("nickName", name);

    alert(localStorage.getItem("nickName"));
    closeModal();
}
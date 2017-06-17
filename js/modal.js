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
    var myProfileTitle = document.getElementById("myProfileTitle");
    myProfileTitle.innerHTML += ' (' + localStorage.getItem("nickName") + ')';
    document.getElementById("nickName").value = '';
    closeModal();

    showMyRoomButton(true);
}

//If we are loged in we show 'Create new entry' and 'Logout' buttons, otherwise show only 'Introduce' button
function showMyRoomButton(isLogin){
    var newEntryButton = document.getElementById('newEntryButton');
    var introduceButton = document.getElementById('introduceButton');
    var logoutButton = document.getElementById('logoutButton');
    if (isLogin){
        newEntryButton.classList.remove('hide-button');
        logoutButton.classList.remove('hide-button');
        introduceButton.classList.add('hide-button');
    } else{
        newEntryButton.classList.add('hide-button');
        logoutButton.classList.add('hide-button');
        introduceButton.classList.remove('hide-button');
    }
}

function logout(){
    localStorage.removeItem("nickName");

    var myProfileTitle = document.getElementById("myProfileTitle");
    myProfileTitle.innerHTML = 'My Profile';
    showMyRoomButton(false);
}
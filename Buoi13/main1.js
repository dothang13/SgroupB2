async function login(){
    const username = document.getElementById('Dangnhap-username').value;
    const password = document.getElementById('Dangnhap-password').value;

    let loginArray = JSON.parse(localStorage.getItem('loginArray')) || [];
    
    var count = 0;
    for (var i = 0; i < loginArray.length; i++){
        if(username == loginArray[i].username && password == loginArray[i].password) count++;
    }
    if (count) {
        window.location.href = "https://youtu.be/x25387E3caw?si=JrVGjU3OsJ4k7CAl";
    }
    else{
        alert("Sai roi, nhap lai coi. Sai 3 lan khoa acc");
    }
}


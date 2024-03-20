function register() {
    const username = document.getElementById("Dang_ky-username").value;
    const password = document.getElementById("Dang_ky-password").value;

    let loginArray = JSON.parse(localStorage.getItem('loginArray')) || [];
    const loginInfo = {username, password };

    var count = 0;
    for (var i = 0; i < loginArray.length; i++){
        if(username == loginArray[i].username && password == loginArray[i].password) count++;
    }

    if(count == 0) {
        loginArray.push(loginInfo);

        localStorage.setItem('lloginArray', JSON.stringify(loginArray));
        window.location.href = "index1.html";
    }
    else {
        alert('Tài khoản đã tồn tại');
        window.location.href = "index.html";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", register)
});
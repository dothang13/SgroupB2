// //Rest

// const arr = [1, 2, 3, 4, 5];
// const [a, b, v, ...c] = arr;

// console.log(a, b, v, ...c);

//Spread
// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const arr = [...arr1, ...arr2]

// console.log(arr);



// const user = {
//     name: "hello",
//     age: 13,
//     gender: 1
// }

// const user2 = {
//     ...user,
//     name: "sadolasmoc"
// }

// console.log(user2)


async function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const data = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password,
        })
    })
    const res = await data.json();
    localStorage.setItem("token", res.token)
    redirectToNewPage();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", login);
});

function redirectToNewPage(){
    const token = localStorage.getItem("token")
    console.log(token);
    if(token){
        window.location.href = "https://youtu.be/x25387E3caw?si=JrVGjU3OsJ4k7CAl";
    }
    else{
        console.log("Token not found in localStorage");
    }
}

// function redirectToNewPage(){
//     const token = localStorage.getItem
// }
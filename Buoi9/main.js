// function h(tag, props, children) {
//     return{
//         tag,
//         props,
//         children
//     }
// }

/*
setTimeout(function (){
    console.log('SetTimeout');
}, 3000);

setInterval(function (){
    console.log('SetTimeout');
}, 1000);

let i = 0;
const vonglap = setInterval(function(){
    console.log(i)
    i++

    if ( i >= 5){
        clearInterval(vonglap);
        console.log('Ket thuc Interval');
    }
}, 1000)
Nên sử dụng ≥ n thay vì ===n
*/

//Baitap
/*
let i = 1;
const xoavonglap = setTimeout(function(){
    clearInterval(vonglap);
}, 5000)
const vonglap = setInterval(function(){
    console.log(i)
    i++
}, 1000)
*/


//chạy vòng lặp trước rồi mới đến setTimeout
/*
for(i = 0; i < 3; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}
*/

let randomNumber;
const myPromise = new Promise((resolve, reject) => {
    randomNumber = Math.random() * 10;

    //fulfilled
    if(randomNumber > 5) resolve(randomNumber);

    //rejected
    else reject(randomNumber);
});

myPromise
    .then(function (fulfilledNumber){
        console.log('fulfill (>5): ', fulfilledNumber);
    })
    .catch(function(rejectNumber){
        console.log('reject (<5): ', rejectNumber);
    })
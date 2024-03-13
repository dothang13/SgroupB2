// getElementById(Id)
    const a = document.getElementById('hello');
    console.log(a);
    const b = document.getElementsByClassName('haha');
    console.log(b);
    const c = document.querySelector('#xinchao');
    console.log(c);
    //lay ra phan tu co class 'xinchao'
    const d = document.querySelectorAll('#xinchao');     // lay tat ca cac phan tu co class 'xinchao'
    console.log(d);
    const e = document.getElementsByTagName("abc");
    console.log(e);
    a.textContent = "hehehe"; // thay doi text trong a thanh hehehe
    a.innerText = "VietNam";
    a.innerHTML = "<p>Chaonha</p>";
    //them
    let el = document.createElement('button')
    el.textContent="click me!"
    a.appendChild(el); //gắn vào cây DOM
    console.log(el);
    console(d);
    a.append("abmcps");
    a.insertAdjacentElement("beforebegin", el2);
    let el2 = document.createElement('button')
    el.textContent="click me3!"
    a.insertBefore(el2, el);

    //xoa
    a.removeChild(el);
    a.remove(); //tu xoa a
    a.replaceChild(el2, el);

    //update
    a.replaceChild(el2, el);
    console.log(a.id);
    a.title = "link link";
    a.setAttribute("title", hehehehehe) //thêm thuộc tính
    a.removeAttribute("title") // xóa thuộc tính

    //note
    a.classList.add = ('hehe') //thêm class
    a.classList.remove = ('Link') //xóa class //cách khác để xóa là replace tên rỗng

    a.style.color = "red" //style giống css

    //thêm sự kiện
    a.addEventListener("click", function(){ //chỉ xóa được cái giống nó mà loại thêm vào a.
        console.log("hello world")
        document.getElementById("haha").style.display = "none";
        event.stopPropagation(); //chống sự kiện lan truyền

    })
    
    //Khi 2 sự kiện chồng lên nhau
//Data-set:
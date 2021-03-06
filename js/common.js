const todoList = document.querySelector("#list");
const mainInput = document.querySelector("#main");
const controll = document.querySelector("#controll");
const allSel = document.querySelector('#all_sel');
const allBtn = document.querySelector('.sp_ac');
const activeBtn = document.querySelector('#act');
const completedBtn = document.querySelector('#com');
const dleAllBtn = document.querySelector('#cle');
const count = document.querySelector('#item');
const create = element => document.createElement(element);

// //값이 추가 되었을때,li_ac가 들어가 있는 상태 ul에 childern에 있는 값 중에 (forEach,filter)돌려서 나온 값 중에 text를 setItem
// function setStorage() {
//     // let re = [...todoList.children.classList.contains('list')].forEach((el)=>{console.})
//     // localStorage.setItem().
//     let resut = [...todoList.children].forEach((er) => {
//         er.classList.contains('list')
//         console.log(er)
//     })
// }




// window.onload = function () {
//     let title = document.querySelector("#title")
//     let content = document.querySelector("#content")
//     let submit = document.querySelector('#submit')
//     submit.addEventListener('click', function (e) {
//         // console.log(title.value, content.value)
//         localStorage.setItem(title.value, content.value)
//     })

// }
// window.onload = function () {
//     let target = document.querySelector('#target')
//     let arr = []
//     // console.log(localStorage.length)
//     for (let i = 0; i < localStorage.length; i++) {
//         let obj = {
//             title: localStorage.key(i),
//             content: localStorage.getItem(localStorage.key(i))
//         }
//         arr[i] = obj
//     }
//     console.log(arr.value)

//     target.innerHTML = JSON.stringify(arr);

// }





// function start(){
//     let json = JSON.parse(localStorage.getItem("json")) || [];

//     let a = [
//         {
//             text:"가나다라",
//             active:true
//         }
//     ]
//     // css
//     // li.active .check{ background:red }

//     json.forEach( ({text,active}) => {
//         const Li = item(text);
//         if( active ){
//             Li.classList.add("active");
//         }
//         todoList.insertAdjacentElement('afterbegin', Li);
//     } );

// }

// let json = JSON.parse(localStorage.getItem("json")) || [];


// function setLocalJSON(data){
//     localStorage.setItem("json",JSON.stringify(data));
// }

// json = [1,321312];

// setLocalJSON(json);























function controllDisplay() {
    if (list.children.length > 1) {
        controll.style.display = "flex";
    } else {
        controll.style.display = "none";
    };
};

function todoListIf(e, className, block, none) {
    if (todoList.children[e].classList.contains(className)) {
        todoList.children[e].style.display = block;
    } else {
        todoList.children[e].style.display = none;
    };
};

function btnBordre(This) {
    [...This.parentNode.children].forEach((element) => {
        //배열안에 들어있는 value들 마다 함수 실행
        element.classList.remove("sp_ac");
    });
    This.classList.add("sp_ac");
}

function normalCount() {
    count.innerHTML = document.querySelectorAll(".list").length;
};

function actCount() {
    count.innerHTML = [...document.querySelectorAll(".list")].filter(list => list.classList.length === 1).length;
};

function comCount() {
    count.innerHTML = document.querySelectorAll(".li_ac").length;
};

function cleCount() {
    let countNum = 0;
    [...todoList.children].forEach(function (element) {
        if (element.classList.contains("list")) {
            countNum++;
        } else {
            count.innerHTML = 0;
        }
        count.innerHTML = countNum;
    });
};

// todoList.addEventListener('dblclick', function ({ target }) {
//     if (target.classList.contains('text')) {
//         const textInput = create('input');
//         const parent = target.parentNode;
//         let text = target.innerText
//         textInput.value = target.innerText;
//         textInput.classList.add('text');

//         parent.appendChild(textInput);
//         target.remove();
//         textInput.addEventListener('keydown', function (e) {
//             let key = e.key;

//             // const isKey = ['Enter','Escape'].includes(key);
//             if (key === 'Escape') {
//                 const textP = create('p');
//                 textP.classList.add('text');
//                 textP.innerHTML = text
//                 parent.appendChild(textP);
//                 this.parentNode.children[2].remove();
//             }
//             if (key === 'Enter') {
//                 const textP = create('p');
//                 textP.classList.add('text');
//                 textP.innerHTML = this.value;
//                 parent.appendChild(textP)
//                 textInput.remove();
//             }
//         })
//     }
// })

function item(text) {
    const todoLi = create("li");
    const todoDiv = create("div");
    const todoP = create("p");
    const todoP2 = create("p");

    todoLi.classList.add('list');
    todoDiv.classList.add('check');
    todoP.classList.add('text');
    todoP2.classList.add('close');
    todoP.innerHTML = text;
    todoLi.appendChild(todoDiv);
    todoLi.appendChild(todoP);
    todoLi.appendChild(todoP2);
    todoP2.innerHTML = 'X';
    return todoLi;
}

mainInput.addEventListener('keydown', function (e) {
    let key = e.key.toLowerCase();
    if (key === "enter") {
        if (mainInput.value === '') {
            alert("정보를 입력하세요");
            return false;
        }


        const todoLi = item(this.value);

        todoList.insertAdjacentElement('afterbegin', todoLi);
        this.value = '';
        controll.style.display = 'flex';
        normalCount();
        // hover
        todoLi.addEventListener("mouseover", function () {
            this.classList.add('hov');
        });

        todoLi.addEventListener("mouseleave", function () {
            this.classList.remove('hov');
        });
        // setStorage();
    };
});

const todoCounter = () => {
    const button = document.querySelector(".sp_ac");
    const id = button.id;

    switch (id) {
        case "all":
            normalCount();
            allBtn.click();
            break;
        case "act":
            actCount();
            activeBtn.click();
            break;
        case "com":
            comCount();
            completedBtn.click();
            break;
    };
};

todoList.addEventListener('click', function ({ target }) {
    if (target.classList.contains('check')) {
        target.parentNode.classList.toggle('li_ac');
        if (target.parentNode.classList.contains('li_ac')) {
            target.parentNode.children[0].innerText = '✓';
        } else {
            target.parentNode.children[0].innerText = '';
        };

        todoCounter();
    };
});

todoList.addEventListener('click', function ({ target }) {
    if (target.classList.contains('close')) {
        target.parentNode.remove()
    }
})


allBtn.addEventListener("click", function () {
    if (!this.classList.contains('sp_ac')) { //없으면 sp_ac
        this.classList.add('sp_ac')
    }
    for (let i = 0; i < todoList.children.length; i++) {
        if (todoListIf(i, 'list', 'block', 'none'));
    }

    btnBordre(this);
    controllDisplay();
    todoCounter();
})

activeBtn.addEventListener("click", function () {
    for (let i = 0; i < todoList.children.length; i++) {
        if (todoListIf(i, 'li_ac', 'none', 'block'));
    };

    btnBordre(this);
    controllDisplay();
    todoCounter();
});

completedBtn.addEventListener('click', function () {
    for (let i = 0; todoList.children.length > i; i++) {
        if (!todoListIf(i, 'li_ac', 'block', 'none'));
    };

    btnBordre(this);
    controllDisplay();
    todoCounter();
});

dleAllBtn.addEventListener('click', function () {
    [...document.querySelectorAll('.li_ac')].forEach(element => {
        element.remove();
    });
    cleCount();
    controllDisplay();
})

allSel.addEventListener('click', function () {
    [...todoList.children].forEach(list => {
        if (list.classList.contains('list')) {
            list.children[0].innerText = '✓';
            list.classList.toggle('li_ac');
            if (!todoList.children[0].classList.contains('li_ac')) {
                list.children[0].innerText = '';
            };
        }
    });
});





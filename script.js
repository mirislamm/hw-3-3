let secret = Math.floor(Math.random() * 10) + 1;
let count = 0;

let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let restart = document.getElementById('restart');
let theme = document.getElementById('theme');
let msg = document.getElementById('msg');
let countSpan = document.getElementById('count');
let list = document.getElementById('list');

btn.onclick = function () {
    let num = Number(inp.value);

    if (inp.value === '' || isNaN(num)) {
        msg.textContent = 'Введи число';
        msg.className = 'red';
        return;
    }

    if (count >= 5) {
        msg.textContent = 'Попытки закончились!';
        msg.className = 'red';
        return;
    }

    count = count + 1;
    countSpan.textContent = count;

    let li = document.createElement('li');
    li.textContent = num;
    list.append(li);

    if (num === secret) {
        msg.textContent = 'Угадал!';
        msg.className = 'green';
    } else if (num < secret) {
        msg.textContent = 'Больше';
        msg.className = 'red';
    } else {
        msg.textContent = 'Меньше';
        msg.className = 'red';
    }

    inp.value = '';
};

inp.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        btn.click();
    }
});

restart.onclick = function () {
    secret = Math.floor(Math.random() * 10) + 1;
    count = 0;
    countSpan.textContent = 0;
    msg.textContent = '';
    inp.value = ''; 
    list.innerHTML = '';
};

theme.onclick = function () {
    document.body.classList.toggle('dark');
};

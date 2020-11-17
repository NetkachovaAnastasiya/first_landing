const burger = document.getElementById('burger');
console.log(burger);
burger.addEventListener('click', function() {
    burger.classList.add('open');
    const menu = document.getElementById('menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        burger.classList.remove('open');
    } else {
        menu.classList.add('open');
        burger.classList.add('open');
    }
});


const a = document.getElementById("timerOne");
const b = document.getElementById("timerTwo");
const c = document.getElementById("timerThree");

function launchCounter(element, end) {
    let counter = 0;
    const duration = 2000;
    const eachMs = duration / end;
    const timer = setInterval(function() {
        counter = counter + 1;
        console.log(counter);
        element.innerHTML = counter;
        if (counter === end) {
            clearInterval(timer);
        }
    }, eachMs);
}

launchCounter(a, 260);
launchCounter(b, 120);
launchCounter(c, 200);

// https://learn.javascript.ru/js-animation
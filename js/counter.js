// function inFuture() {
//   console.log("inFutuureeeee");
// }

// setTimeout(inFuture, 5000);

const a = document.getElementById("timerOne");
const b = document.getElementById("timerTwo");
const c = document.getElementById("timerThree");

function launchCounter(element, end) {
  let counter = 0;
  const duration = 2000;
  const eachMs = duration / end;
  const timer = setInterval(function () {
    counter = counter + 1;
    console.log(counter);
    element.innerHTML(counter);
    if (counter === end) {
      clearInterval(timer);
    }
  }, eachMs);
}

launchCounter(a, 2000);
launchCounter(b, 600);
launchCounter(c, 1200);

// https://learn.javascript.ru/js-animation

// Your code goes here


//mouseover
let mouseOver1 = document.querySelector("#mouseOver");

mouseOver1.addEventListener("mouseover", function (event) {
    // console.log(event)
    event.target.style.color = "green";
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);




//keydown
let displayValues = document.getElementById("output");

window.addEventListener("keydown", function (event) {
    let str = "KeyboardEvent: key='" + event.key + "' | code='" +
        event.code + "'";
    let el = document.createElement("span");
    el.innerHTML = str + "<br/>";
    displayValues.replaceChild(el, displayValues.childNodes[0])
}, true);




//wheel
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.zoomMe');
el.onwheel = zoom;




//beforeunload
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});




//copy
window.addEventListener('copy', (event) => {
  alert("Sorry!...can't do that")
  event.preventDefault();
});




//resize
const resizeOutput = document.querySelector('#resizeOutput');

function reportWindowSize() {
  resizeOutput.style.color = "grey";
}

window.onresize = reportWindowSize;




//scroll
const onScroll = document.querySelector('#onScroll');
window.addEventListener('scroll', function(e) {
  onScroll.style.backgroundColor = "aqua";
});




//select
document.querySelector("#myText").addEventListener("select", function(e) {
  alert( "You selected some text!");
});




//focus
const focusInput = document.querySelector("input")
focusInput.addEventListener("focus", function(e) {
  focusInput.style.backgroundColor = "pink";
});




//dbclick
const dbclickParagraph = document.querySelector("#demo")
dbclickParagraph.addEventListener("dblclick", function(e) {
  alert("I was double-clicked!");

    preventDefault();
    //focus
    const focusInput = document.querySelector("input")
    focusInput.addEventListener("focus", function(e) {
      focusInput.style.backgroundColor = "pink";
    });

});





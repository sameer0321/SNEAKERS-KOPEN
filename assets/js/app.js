function openTab(tabId) {

    var tabButtons = document.querySelectorAll(".tab-button");
    var tabContents = document.querySelectorAll(".tab-content");


    tabContents.forEach(function (tabContent) {
        tabContent.style.display = "none";
    });

    tabButtons.forEach(function (tabButton) {
        tabButton.classList.remove("active");
    });

    document.getElementById(tabId).style.display = "block";

    tabButtons.forEach(function (button) {
        if (button.getAttribute("onclick").includes(tabId)) {
            button.classList.add("active");
        }
    });
}

let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let navlinks = document.querySelector("ul");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
})
navlinks.addEventListener("click", function () {
    navlinks.classList.toggle("show");
    body.classList.remove("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
})


let counter = 1;

const counterValue = document.getElementById('value');
const incrementBtn = document.getElementById('incre');
const decrementBtn = document.getElementById('decre');

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});

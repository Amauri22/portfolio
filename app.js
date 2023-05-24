"use strict"
const openMenu = document.getElementById("hamburger");
const closeMenu = document.getElementById("x");
const scriptURL = 'https://script.google.com/macros/s/AKfycbyRNEONVxCf4qJRsXzb9_IPUGT6OLWrFrVE6bCJnRhyJ0LssuVmLMKpDaNgXECWunwO/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const learnMore = document.getElementById("learn-more-header");
const nav = document.querySelector(".nav")
const navBar = document.querySelector("nav ul");
const navLinks = document.querySelector(".nav--links");
const tabTitlesContainer = document.querySelector(".tab-titles");
const tabLinks = document.querySelectorAll(".tab-links");
const skillContent = document.querySelectorAll(".tab-contents");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");


// FORM HANDLER
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => msg.innerHTML = "", 5000);
            form.reset();

        })
        .catch(error => console.error('Error!', error.message))
})


/*Closing and opening menu ( MOBILE )*/
openMenu.addEventListener("click", openSidebar);
closeMenu.addEventListener("click", closeSidebar);

function openSidebar() {
    navBar.style.right = "0";
}

function closeSidebar() {
    navBar.style.right = "-200px";
}


/* Handling Learn more */
learnMore.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("services").scrollIntoView({behavior: "smooth"})
})

/* NAVBAR CLICKS*/
// 1. add event listener to common parent element
// 2. determine what element originated the event

navLinks.addEventListener("click", function (e) {
    e.preventDefault();


    // matching strategy
    if (e.target.classList.contains("nav--link")) {
        const id = e.target.getAttribute("href");
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior: "smooth"});
    }
})

/* TABBED COMPONENTS OPERATIONS */

tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");
    // console.log(clicked);

    // Ignore clicks where result is null
    // Guard clause
    // null is falsy value, so if clicked returns null, its falsy, so it
    // wont return, so we have to add !clicked is another way of saying
    // clicked == null
    // Makes sure that rest of code is not executed, good for performance

    // Guard Clause
    if (!clicked) return;

    // active tab
    tabs.forEach(t => t.classList.remove("operations__tab--active"));
    tabsContent.forEach(c => c.classList.remove("operations__content--active"));

    clicked.classList.add("operations__tab--active");
    // active content area
    const operationsContent = document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    operationsContent.classList.add("operations__content--active");

})

/* about us tab links */


tabTitlesContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".tab-links");
    if (!clicked) return;
    tabLinks.forEach(t => t.classList.remove("active-link"));
    skillContent.forEach(s => s.classList.remove("active-tab"));
    clicked.classList.add("active-link");


    const activeTab = document.querySelector(`.tab-contents-${clicked.dataset.tab}`);
    activeTab.classList.add("active-tab");

})

/* Menu Fade animation */
nav.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("nav--link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav--link")


        siblings.forEach(el => {
            if (el !== link) el.style.opacity = 0.5;

        });


    }
})
nav.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("nav--link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav--link")
        const logo = link.closest(".nav").querySelector("h1")

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = 1;
        });
        logo.style.opacity = 1;

    }

})















































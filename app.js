"use strict"
const openMenu = document.getElementById("hamburger");
const navBar = document.querySelector("nav ul");
const closeMenu = document.getElementById("x");
const tabTitles = document.querySelector(".tab-titles");
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");




openMenu.addEventListener("click", function () {
    console.log("i got clicked");
    navBar.style.right = "0";
})

closeMenu.addEventListener("click", function () {
    navBar.style.right = "-200px";
})

// tabTitles.addEventListener("click", function(e) {
//     console.log(e.target, "i got clicked")
//     console.log(e.currentTarget);
// });






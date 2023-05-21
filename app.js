"use strict"
const openMenu = document.getElementById("hamburger");
const navBar = document.querySelector("nav ul");
const closeMenu = document.getElementById("x");
const tabTitles = document.querySelector(".tab-titles");
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const scriptURL = 'https://script.google.com/macros/s/AKfycbyRNEONVxCf4qJRsXzb9_IPUGT6OLWrFrVE6bCJnRhyJ0LssuVmLMKpDaNgXECWunwO/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => msg.innerHTML = "",5000);
            form.reset();

        })
        .catch(error => console.error('Error!', error.message))
})


openMenu.addEventListener("click", openSidebar);

closeMenu.addEventListener("click", closeSidebar);


function openSidebar(){
    navBar.style.right = "0";
}

function closeSidebar(){
    navBar.style.right = "-200px";
}


// tabTitles.addEventListener("click", function(e) {
//     console.log(e.target, "i got clicked")
//     console.log(e.currentTarget);
// });






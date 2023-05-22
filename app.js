"use strict"
const openMenu = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav--links");
const closeMenu = document.getElementById("x");
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

// 1. add event listener to common parent element
// 2. determine what element originated the event

navLinks.addEventListener("click", function(e){
    e.preventDefault()
    
    
    // matching strategy
    if (e.target.classList.contains("nav--link")){
       const id = e.target.getAttribute("href");
        console.log(id)
        document.querySelector(id).scrollIntoView({behavior: "smooth"})
    }
})





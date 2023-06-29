//// MOBILE TOGGLE

let navToggle = document.querySelector('.nav-toggle');
let navMenu = document.querySelector('.nav-menu');
let navClose = document.querySelector('.nav-close');

//navToggle.onclick = function () {
    //navToggle.classList.toggle('active');
    //navMenu.classList.toggle('active');
//}

if(navToggle){
  navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
  })
}

if(navClose){
  navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
  })
}

//////// HEADER WHEN SCROLL

function scrollHeader(){
  const header = document.getElementById('header')
 
  if(this.scrollY >0) header.classList.add('sticky'); else header.classList.remove('sticky')
}
window.addEventListener('scroll', scrollHeader)

/////////////// SEARCH FORM

var searchIcon = document.querySelector('.fa-search');
var closeSearch = document.querySelector('.fa-times');
var search = document.getElementById('search');

searchIcon.onclick = () => {
  search.classList.add('expand')
}

closeSearch.onclick = () => {
  search.classList.remove('expand')
}

/////////////// HERO VIDEO INDICATORS 
var videoBtn = document.querySelectorAll('.video-btn');
videoBtn.forEach(btn =>{
  btn.addEventListener('click', () =>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');

    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  })
})


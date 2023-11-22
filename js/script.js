// Accordion

const accordions = document.querySelectorAll('.accordion');

// loops trough accordions and add event listener to all
accordions.forEach(accord => accord.addEventListener('click', () => {
    // dynamic select accordion content
    let content = accord.nextElementSibling;

    // add or remove active class
    accord.classList.toggle('active');
    // if accordion open close else open
    content.style.maxHeight ?
        content.style.maxHeight = null :
        content.style.maxHeight = `${content.scrollHeight}px`;
}));

// Video Play Speed
let video = document.querySelector('.storm');

video.playbackRate = 0.5;

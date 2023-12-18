/*LOCATION IMAGE CAROUSEL*/

const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')

var sectionIndex = 0;

/*LEFT*/
leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0; 
    slider.style.transform = 'translate(' + (sectionIndex) * -103 + '%)';
});

/*RIGHT*/
rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3; /*(sectionIndex < 3) does not allow it to go further to see blank*/
    slider.style.transform = 'translate(' + (sectionIndex) * -103 + '%)'; /*every time the button "right" is clicked it makes the section go right, and so that the next time it also goes further, the multiply is added*/
});

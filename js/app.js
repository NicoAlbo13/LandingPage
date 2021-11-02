/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const barList = document.querySelector("#navbar__list");

const Section1 = document.querySelector('#section1');
const Section2 = document.querySelector('#section2');
const Section3 = document.querySelector('#section3');
const Section4 = document.querySelector('#section4');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function CreateNav(sections, append){
    const fragment = document.createDocumentFragment();
    for(let i = 1; i<=sections; i++){
        const newLi = document.createElement("li");
        newLi.innerHTML = "<a href='#section"+ i+"' class='menu__link'> Section "+ i +" </a>";
        newLi.setAttribute("id", "s"+i)
    fragment.appendChild(newLi);
    }
    append.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
CreateNav(4, barList)
// Scroll to section on link click
function ScrollSection(listener, scroll2){
    listener.addEventListener('click', function(evt){
        evt.preventDefault();
        scroll2.scrollIntoView({block: "center", behavior: "smooth"});
    });
}

ScrollSection(s1, Section1);
ScrollSection(s2, Section2);
ScrollSection(s3, Section3);
ScrollSection(s4, Section4);
// Set sections as active



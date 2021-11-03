/**
 * Define Global Variables
 * 
*/
const barList = document.querySelector("#navbar__list");

const Section1 = document.querySelector('#section1');
const Section2 = document.querySelector('#section2');
const Section3 = document.querySelector('#section3');
const Section4 = document.querySelector('#section4');

const BackUp = document.querySelector('#back-up');
const PageTop = document.querySelector('#up');
const links = document.getElementsByTagName('li');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function AddActive(){
        for (const section of sections){
        const current = section.getBoundingClientRect();
        if (current.top <=200 && current.bottom >=300){
            section.classList.add("your-active-class");
            for (let z=0; z<links.length; z++){
                if (links[z].className === section.getAttribute('id')){
                    links[z].classList.add('active');
                }
            }
        }else{
            section.classList.remove("your-active-class");
            for (let z=0; z<links.length; z++){
                if (links[z].getAttribute('class').substring(0,8) === section.getAttribute('id')){
                    links[z].classList.remove('active');
                }
            }
        }
    }
}
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
        newLi.setAttribute("class", "section"+i)
    fragment.appendChild(newLi);
    }
    append.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
const sections = document.body.getElementsByTagName('section');
document.addEventListener('scroll', AddActive);

// Scroll to anchor ID 
function ScrollSection(listener, scroll2){
    listener.addEventListener('click', function(evt){
        evt.preventDefault();
        scroll2.scrollIntoView({block: "start", behavior: "smooth"});
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 
CreateNav(4, barList);
// Scroll to section on link click
ScrollSection(s1, Section1);
ScrollSection(s2, Section2);
ScrollSection(s3, Section3);
ScrollSection(s4, Section4);
// Scroll back up button
document.addEventListener('scroll', function(evt){
    if (window.scrollY > 1000){
        BackUp.style.display = "block";
    } else {
        BackUp.style.display = "none";
    }
});
BackUp.addEventListener('click', function(evt){
    evt.preventDefault();
    PageTop.scrollIntoView({block: "center", behavior: "smooth"});
});

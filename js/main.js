// pseudocode:
// i have my html and elements
// my ui has been created?
// create json data for the views
// need an event listener / click handler
// obtain the json data
//      using fetch? - callback function?
//      json data is received as a string - need to convert to a js object
//          parse method?
// make a new variable that can hold the new html data for each view
// loop through objects that represent the information/state?
//      with their corresponding html elements
// could increment the index of the information stored in arrays to change content displayed
// contents of the objects will add to that new variable
// new html view would be updated and rendered by manipulating the dom?
//      update using document.getelementbyid?



// instead of making and using json data, I can just make an array of javascript objects?
// my javascript objects would be my views - broken down into key value pairs of the content to be populated to the corresponding html elements


// MAIN JS ARRAY OF OBJECTS (VIEWS)
/* this could look like:

    let views = [
        {
            "main-text": "I can read your mind"
            "go-button-content": "GO"
        },
        {
            "main-text": "Pick a number from 01 - 99"
            "nav-button-text": "NEXT"
            "sub-text": "when you have your number click next"
            "go-button-content": //svg???? for the refresh icon?
        },
        {
            "main-text": "Add both digits together to get a new number"
            "nav-button-text": "NEXT"
            "sub-text": "Ex: 14 is 1 + 4 = 5 click next to proceed"
            "go-button-content": //svg for the refresh icon
        },
        {
            "main-text": "Subtract your new number from the original number"
            "nav-button-text": "NEXT"
            "sub-text": "Ex: 14 - 5 = 9 click next to proceed"
            "go-button-content": //svg for the refresh icon
        },
        {
            "main-text": "0 - &, 1 - #, 2 - @, 1 - !, 3 - ~, 4 - $, 5 - %, 6 - ^, 7 - *, 8 - +, 9 - ?" // this is where i need to add a way that randomizes this specific string
            "nav-button-text": "NEXT"
            "sub-text": "Find your new number. Note the symbol beside the number"
            "go-button-content": //svg for the refresh icon
        },
        {
            "main-text": "?" //this would have to be connected to the randomization of the previous symbols string - whatever the new symbol for 9 is should replace
            "sub-text": "Your symbol is ?" //also needs to connect to the randomize
            "go-button-content": //svg for the refresh icon
        }
    ]
*/


// HOW TO LOAD INITIALLY?
// do i need to get the first view in the array to render immediately by using window onload? and then the rest are using 'click'


// from here I need to create:


// WHAT HAPPENS WHEN INCREMENTING THROUGH ARRAY
// each within the array of view objects - use the index to increment through each view object dependent on a click

//      - if the go-restart-button is clicked (assuming starting with view #0 and displaying the button-text "GO") - it will increment to view object #1

/*
   if (currentViewIndex === 0) {
        go-restart-btn.style.display = "block"; //when the view index is 0 - block
        nav-btn.style.display = "none";
        go-restart-btn.textContent = "GO"; // - but how do i call instead to the array
}
*/


//      - (from view #1) - if the nav-button "NEXT" is clicked it will increment to view object #2
//              - go-restart-button is displaying the refresh svg
//                  - if the got-restart-button is clicked it will back increment? to the previous view or re-render to view #0

//      - (from view #2) - if the nav-button "NEXT" is clicked it will increment to view object #3
//              - go-restart-button is displaying the refresh svg
//                  - if the go-restart-button is clicked it will back increment? to the previous view or re-render to view #0

//      - (from view #3) - if the nav-button "NEXT" is clicked it will increment to view object #4
//              - go-restart-button is displaying the refresh svg
//                  - if the go-restart-button is clicked it will back increment? to the previous view or re-render to view #0

//      - (from view #4) - if the nav-button "REVEAL" is clicked it will increment to view object #5
//              - go-restart-button is displaying the refresh svg
//                  - if the go-restart-button is clicked it will back increment? to the previous view or re-render to view #0

//      - (from view #5) - only the go-restart button is displayed
//              - if the go-restart-button is clicked it will re-render to view #0
//                  - this click should signal for the mapped symbols and number pairs to shuffle and update the renders in view #4 and #5


// RENDERING THE JS CONTENT INTO HTML
// need a way to 'populate' the content - (key value pairs) within each view object into it's corresponding html elements
//      - this is also connected to the button 'click' handler when a new view is rendered
//      - the html elements should have their connected css through bootstrap
//
//      - could possibly use DOM methods
//          - getElementById and a for loop to fill in each element?
//          - document.body.innerHTML ? - no
//              - setting the value of innerHTML lets you replace existing contents of an element with new content
//              - replacing the contents for the document's body attribute
//              - leaving the html elements blank/empty to be replaced?
//                  - does that clash with my window onload?
/*          document.getElementById("nav-btn") .onclick = function() {
                document.getElementById("nav-btn").style.display = "none";
            }
*/



// EXTRA THOUGHTS
// .textcontent - to populate text into the html elements...
// - look into populating the refresh icon/svg
// html - initialing variables and getElementById
// including a scroll on view #4? - bootstrap?




//reference my html elements
let mainText = document.getElementById("main-text")
let goButtonContent = document.getElementById("go-restart-btn")
let navButtonText = document.getElementById("nav-btn-text")
let subText = document.getElementById("sub-text").value

//initialize the view index
let currentViewIndex = 0;
//initialize button's status? so it knows which button to switch to
let goRestartButton =

//RENDERS ONLOAD
// window.onload = //function

//array of view objects
    let views = [
        {
            mainText: "I can read your mind",
            goButtonContent: "GO"
        },
        {
            mainText: "Pick a number from 01 - 99",
            navButtonText: "NEXT",
            subText: "when you have your number click next",
            goButtonContent: //svg???? for the refresh icon?
        },
        {
            mainText: "Add both digits together to get a new number",
            navButtonText: "NEXT",
            subText: "Ex: 14 is 1 + 4 = 5 click next to proceed",
            goButtonContent: //svg for the refresh icon
        },
        {
            mainText: "Subtract your new number from the original number",
            navButtonText: "NEXT",
            subText: "Ex: 14 - 5 = 9 click next to proceed",
            goButtonContent: //svg for the refresh icon
        },
        {
            mainText: "0 - &, 1 - #, 2 - @, 1 - !, 3 - ~, 4 - $, 5 - %, 6 - ^, 7 - *, 8 - +, 9 - ?", // this is where i need to add a way that randomizes this specific string
            navButtonText: "NEXT",
            subText: "Find your new number. Note the symbol beside the number",
            goButtonContent: //svg for the refresh icon
        },
        {
            mainText: "?", //this would have to be connected to the randomization of the previous symbols string - whatever the new symbol for 9 is should replace
            subText: "Your symbol is ?", //also needs to connect to the randomize
            goButtonContent: //svg for the refresh icon
        }
    ];


//function to update view content with if statements

function updateView() {
    let currentView = views[currentViewIndex];
    mainText.textContent = currentView. ///not sure how to write this
    //have the others connected here

    if (currentViewIndex === 0) {
        go-restart-btn.style.display = "block"; //needs to be written like object.style.display = value - when the view index is 0 - block
        nav-btn.style.display = "none";
        go-restart-btn.textContent = "GO"; // - but how do i call instead to the array
    }
    else if (currenViewIndex === views.length - 1) {
        go-restart-btn.style.display = "none"; //means the go button will be hidden
        nav-btn.style.display = "block";
        nav-btn.textContent = "Next";// use textcontent to push in the new text

    }
    else {
        go-restart-btn.style.display = "block";
        nav-btn.style.display = "none";
        nav-btn.textContent = "Reveal";
    }

}

//calling that initial update view to update content
updateView();


//need event listeners for both buttons with if statements
//go-restart button -
go-restart-btn.addEventListener("click", () => {
    if (currentViewIndex === 0) {
        currentViewIndex = 1;
    } else {
        currentViewIndex = 0;
    }
    updateView();
})

nav-btn.addEventListener("click", () => {
    if (currentViewIndex < views.length - 2){
        currentViewIndex++;
        updateView();
    }
})

/* example:

    header = document.getElementById('header')
    header.textContent = array[i].header

    - or
    have a pageNum() function???

    header.innerHTML = array[pageNum()].header













//FUNCTION TO INCREMENT THROUGH ARRAY OF VIEW OBJECTS
let i = 0;
function changeView() {
    if (i >= views.length) i = 0;

    document.getElementById("go-btn-text").innerHTML = views[i];
    i++;

}


// problem is both the go button and nav button need to increment the page
//      - technically view #0 only needs to increment by 1 and then switches to refresh
//      - nav button needs to increment from view #1 through #4


// changing from view #0 to #1 with go button
for (i = 0; i < 1; i++){
    //document get element by id?
    // this increments by one if less than index 1
}

// changing from view #2-#5 with nav button
for (i = 0; i > 0 && < 5; i++){
    //document get element by id?
    // this increments by one if greater than index 0 AND less than index 5
}

// if page = 0 then go to 1
// if page =

// 1 for loop if i = 0 go button displays and next hidden
 then - nesting for let i = 0 <=5




//TO HIDE ELEMENTS IN HTML USING DISPLAY PROPERTY
/*
document.getElementById("nav-btn") .onclick = function() {
    document.getElementById("nav-btn").style.display = "none";
}

//this needs to happen at the same time as the clicks to increment through array
*/

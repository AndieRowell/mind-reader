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



// HOW TO LOAD INITIALLY?
// do i need to get the first view in the array to render immediately by using window onload? and then the rest are using 'click'


// from here I need to create:


// WHAT HAPPENS WHEN INCREMENTING THROUGH ARRAY
// each within the array of view objects - use the index to increment through each view object dependent on a click

//      - if the go-restart-button is clicked (assuming starting with view #0 and displaying the button-text "GO") - it will increment to view object #1

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


// EXTRA THOUGHTS
// .textcontent - to populate text into the html elements...
// - look into populating the refresh icon/svg
// html - initialing variables and getElementById


//button test

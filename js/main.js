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



//button test

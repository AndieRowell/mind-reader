# Pseudocode

## SMAC LIST:
1. Understand the problems
2. Break down the issues into smaller parts so that it's easier to comprehend what should happen in the code.
3. Consider wireframes and atomic design that's involved
4. Think about state being used.
    - (What data structures and/or algorithms do we need to use?)
5. Pseudocode!

## Brainstorm/Initial Thoughts:

### Analyzing the Wireframe Preview:
- this is a single page app
    - meaning there will be one single card/frame where the elements within will change as the user goes through the app
- need to analyze the visual previewl that shows the change from one page to another
- considering **STATE**
    - the navigation needs to be part of **state** because it is a single page app
    - the content needs to be stored
    - when we change **state** the view should be re-rendered
        - ex. nav/go/reset
    - we're pushing information into **state** and then figuring out how to use/execute and display the information on the page

- overall this is one page that displays different elements depending on the conditions and has the ability to reset
    - *(stretch goal would be to have a back navigation)*


### Questions to Ask While Pseudocoding:

- what do I need to initialize in the beginning?
    - state
    - arrays
    - index?

- what do we need to store **state** as?
    - arrays?
        - having arrays of the strings of information
        - arrays can represent the options to change within the views
        - array to hold where you are in the app
        - could use a for loop to go through an array and use the index to select what options to display

- if we were to use objects how could i implement those?
    - maybe an array of objects with key value pairs?
    - big text, small text, etc...

- how would we provide mapping and randomize?
    - matching symbols to numbers

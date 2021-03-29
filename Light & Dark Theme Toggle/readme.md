# Light|Dark Theme Toggler
Create a checkbox to switch the background's color and the text's color

This document is organized as follows:
- List of key concepts
- Sources used to build the project & to define the key concepts

## Key concepts
A list of key/new concepts. The list is subdivided by languages: ##HMTL, ##CSS, ##JS,...

### CSS

- **box-sizing: border-box;**

    - *Definition*

        - Allows us to include the padding and border in an element's total width and height.

    - *Explanation*

        - By default, the width and height of an element is calculated like this:
            - width + padding + border = actual width of an element
            - height + padding + border = actual height of an element

        - This means: When you set the width/height of an element, the element often appears bigger than you have set (because the element's border and padding are added to the element's specified width/height)

- **flex-direction: column;**

    - *Definition*

        - Specifies the direction of the flexible items

    - *Personal explanation*

        - column: invert the main & cross axis
        - main axis (=axis upon which items are aligned) is now vertical

    - *Syntax*

        - flex-direction: row|row-reverse|column|column-reverse|initial|inherit;

    - *Project*

        - To align vertically .checkbox & <p>
        - Without flex-direction: column; -> .checkbox & <p> are on the same line and .checkbox is no longer centered horizontally

- **transition: background 0.2s linear;**

    - *Definition*

        - CSS transitions allows you to change property values smoothly, over a given duration.

    - *Syntax*

        - transition: (transition-property) (transition-duration) (transition-timing-function) (transition-delay);

    - *Project*

        - transition-property = background
        - transition-duration = 0.2s
        - transition-timing-function = linear

- **.checkbox : opacity: 0; + position:absolute;**

    - *Project*

        - opacity: 0; -> Renders .checkbox invisible
        - position: absolute; -> .checkbox centered on the web page

- **.checkbox:checked + .label .ball**

    - *Explanation*

        - *+* = JSON selector
            - we select the input (.checkbox)
            - "+" = see what is after .checkbox (=.label)
            - then, we target .ball, inside .label

        - *:checked* = pseudo-class
            - matches every checked <input> element (only for radio buttons and checkboxes) and <option> element.
            - *Personal explanation* : the code between {} will be applied once .checkbox is ticked

- **transform: translateX(24px);**

    - *Definition*

        - applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.

    - *Syntax*

        - transform: none|transform-functions|initial|inherit;

    - *translateX(x)*

        - defines a translation, using only the value for the X-axis

    - *Personal Explanation*

        - moves .ball for 24px on the X axis

### JS

- **Arrow function**

    - *Definition*

        -Arrow functions were introduced in ES6. They allow us to write shorter function syntax

    - *Explanation*

        - Before:
            hello = function() {
                return "Hello World!";
            }

        - With arrow functions:
            hello = () => {
                return "Hello World!";
            }

- **.classList property**

    - *Definition*

        - The classList property returns the class name(s) of an element, as a DOMTokenList object. 
        - This property is useful to add, remove and toggle CSS classes on an element
        - The classList property is read-only, however, you can modify it by using methods.

    - *.toggle method*

        - *Syntax*
            - toggle(class, true|false)
        
        - *Explanation*
            - Toggles between a class name for an element.
            - The first parameter removes the specified class from an element, and returns false.
            - If the class does not exist, it is added to the element, and the return value is true.

        - *Project*
            - Toggle activates body.dark & body.dark p


## Sources
> Project - Florin Pop: [https://www.youtube.com/watch?v=xodD0nw2veQ]

> Concepts :
    > w3schools: [https://www.w3schools.com/] 
    > CSS Tricks: [https://css-tricks.com/]
    > Personal explanations
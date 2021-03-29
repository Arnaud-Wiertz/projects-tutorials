# Custom Progress Bar

Build a custome made and animated progress bar

## Key concepts

A mix of what I understand, what I know and what I researched

**HTML - Structure**

- .progress-bar = container
- .progress-done = content

**CSS**

- *How is the progress bar centered?*

    - *display: flex;* = flex container
    - *height: 100vh;* = body's (= flex container) height = viewport's height
    - *align-items: center;* = vertical alignment in flex container
    - *justify-content: center;* = horizontal alignment in flex container

    -> Conclusion: we have a flex container whose height = the viewport's height. The content (child) of this container is then centered vertically & horizontally. 
    
    *PS*: same logic for .progress-done's content

- *How to style .progress-done's color ?*

    - *linear-gradient(to right, #f2709c, #ff9472)*:
        - to left = gradient starts from right, to left
            -> So the 2nd color (#ff9472) appears first

- *How does box-shadow works ?*

    - *box-shadow: 0 3px 3px --5px #f2709c, 0 2px 5px #f2709c;*

        - 0 = h-offset (=*required*) = horizontal shadow. A positive value puts the shadow on the right side of the box, a negative value puts the shadow on the left side of the box (=.progess-done)

        - 3px = v-offset (=*required*) = vertical shadow.  A positive value puts the shadow below the box, a negative value puts the shadow above the box

        - 3px = blur radius (=*optional*). The higher the number, the more blurred the shadow will be

        - --5px = spread radius (=*optional*). A positive value increases the size of the shadow, a negative value decreases the size of the shadow

        - #f2709c = color (=*optional*).The color of the shadow. The default value is the text color

        *PS*: the coma indicates the presence of multiple shadows

**JS**

- *How to show .progress-done ?*

    1. Select .progress-done using the *querySelector()* method

        - *Syntax*: document.querySelector(CSS selectors);

    2. Show .progress-done by adding opacity using *.style* property

        - *Syntax*: element.style.property
        - *PS*: so, with .style, we can target any CSS property from our CSS file

    3. Adjust the width of .progess-done according to the data stored in data-done using *getAttribute()* method

        - *Syntax*: element.getAttribute(attributename)
        - *Reminder*: <div ... date-done="70">
            - <div> = tag
            - data-done = attribute

## Challenge

- dynamic update of %

## Sources

- Project - Florin Pop: [https://www.youtube.com/watch?v=U-4tg5snUuw]
- Key concepts - w3schools: [https://www.w3schools.com/]
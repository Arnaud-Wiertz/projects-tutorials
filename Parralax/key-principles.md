# PARALLAX

General idea: elements move at diffrent speed on screen

## Key Elements

_<div class="wrapper">_

- Creates a scrolling container

_perspective: 10px;_

- give 3-D positioned elements some perspective
- child elements get the perspective (header & section)

_z-index: -1;_

- pushes elements back
- text will scroll over them upon scrolling

_transform: translateZ(-10px) scale(2);_

- pushes .background further away from us by a factor of 2
- retains original aspect thanks to scale

_transform: translateZ(-5px) scale(1.5);_

- pushes .foreground further away from us by a factor of 50%
- retains orginal aspec thanks to scale

_transform-style: preserve-3d;_

- must be used with the transform property
- child elements (.foreground & .background) will preserve 3D its position

### Analysis

**<div class="wrapper">**

Will go around all the page's content.

To enable a parallax effect, you need to create a "scroll container".

By default, we are scrolling on the <body>.

To create the parallax effect, we need an element inside the <body>: <div class="wrapper">

**transform: translateZ(-10px) scale(2);**

This will make the background appear twice as far from us as it was originally.

Hence, we have to scale it with a factor of 2, to make it regain its appearance, while still being further away from us.

Though it regained it's original appearance, it's still _further away from us_ and will therefore _scroll at a different speed_.

**transform: translateZ(-5px) scale(1.5)**

Since we used _-5px_, the foreground is 50% further away from us.

Why 50%? Because our reference is _perspective: 10px_.

Therefore, we have to scale it to _1.5_ (=50%) to make it regain its orignal aspect, instead of appearing shrunken.

**transform-style: preserve-3d**

Child elements (.background & .foreground) will preserve its 3D position

## Source

Web Dev Simplified: https://www.youtube.com/watch?v=mxHoPYFsTuk

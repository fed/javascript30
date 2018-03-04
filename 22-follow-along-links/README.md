# Key Points

## `Element.getBoundingClientRect()`

This returns all the information of WHERE in the page that element lives in.

**The result is the smallest rectangle which contains the entire element, with read-only properties describing the overall border-box in pixels.**

```
| DomRect object
|-- top
|-- bottom
|-- left
|-- right
|-- width
|-- height
|-- x
|-- y
```

⚠️ Note that the `top`, `bottom`, `left`, `right` values returned by `getBoundingClientRect()` refer to the window (i.e. only the currently visible portion of the page) and not the document (i.e. whole page).

Hence, to get the distance between your element and the top of the document (NOT the top of the window but the Y coordinate = 0), you need to add up the value of the current vertical scroll:

```
element.getBoundingClientRect().top + window.scrollY;
```

## Create an element and append it to the DOM

```js
const highlight = document.createElement('span');

document.body.appendChild(highlight);
```

## How far down the page we've scrolled

```js
window.scrollY
```

## Mouse events

```js
link.addEventListener('mouseenter', highlightLink); // HOVER
link.addEventListener('mouseleave', highlightLink);
```

## Multiple CSS gradient backgrounds

```css
background:
  linear-gradient(
    45deg,
    hsla(340, 100%, 55%, 1) 0%,
    hsla(340, 100%, 55%, 0) 70%
  ),
  linear-gradient(
    135deg,
    hsla(225, 95%, 50%, 1) 10%,
    hsla(225, 95%, 50%, 0) 80%
  ),
  linear-gradient(
    225deg,
    hsla(140, 90%, 50%, 1) 10%,
    hsla(140, 90%, 50%, 0) 80%
  ),
  linear-gradient(
    315deg,
    hsla(35, 95%, 55%, 1) 100%,
    hsla(35, 95%, 55%, 0) 70%
  );
```

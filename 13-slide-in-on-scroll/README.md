# Key Points

## Make sure you debounce your `scroll` event handler

Otherwise you'd have a performance issue b/c the event handler will get called many many times **every second**.

## Positions on the screen

Calculating how many pixels I'm scrolled down the top of the page:

```js
window.scrollY
```

The previous result returns the pixel level of where you are at **considering the top of the viewport**. To consider the bottom of the viewport (i.e. how far down the bottom of the viewport is scrolled past the very top of the page) just add the viewport height:

```js
window.scrollY + window.innerHeight
```

To get the pixel level of how far down an element actually is from the very top of the page, do:

```js
const el = document.querySelector('#el');

el.offsetTop;
```

We can use this to calculate whether an element is at least half shown on the screen:

```js
const image = document.querySelector('#avatar');

// Distance in pixels from the top of the page to the bottom of the image
const imageBottom = image.offsetTop + image.height;

// Distance in pixels to the middle of the image
const slideInAt = window.scrollY + window.innerHeight - image.height / 2;

// The top of the viewport has scrolled past the middle of the image?
const isHalfShown = slideInAt > image.offsetTop;

// The top of the viewport has scrolled completely past the image?
const isScrolledPast = window.scrollY > imageBottom;
```

## Custom debounce implementation

```js
function debounce(func, wait = 20, immediate = true) {
  var timeout;

  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
```

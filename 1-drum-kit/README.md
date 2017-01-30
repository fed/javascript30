# Key Points

## Selecting an element based on one of its data attributes

```js
const key = document.querySelector('.key[data-key="65"]');
```

## HTML5 Audio Tag

This is how to include an HTML5 audio element on a page:

```js
<audio data-key="65" src="sounds/clap.wav" />
```

Once you grab this element, there are a number of methods you can run on the audio clip:

```js
const clapSound = document.querySelector(`audio[data-key="65"]`);

clapSound.play(); // play the clip
clapSound.pause(); // pause the clip
clapSound.currentTime = 0; // set the time to start playing from
```

## Adding and removing classes using JS

```js
element.classList.add('playing');
element.classList.remove('playing');
```

## Creating an array from a DOM collection (`NodeList`) with `Array.from`

```js
const keys = Array.from(document.querySelectorAll('.key'));
```

we now have access to methods like `filter`, `map`, etc.

However since we are only using `forEach` here, turning this into an actual array is not really necessary as `NodeList` implements the `forEach` interface.

## Attaching events using `addEventListener`

```js
keys.forEach((key) => {
  key.addEventListener('transitionend', cb)
});

window.addEventListener('keydown', cb);
```

## `event.target` and `event.propertyName`

`event.target` is a reference to the object that dispatched the event. In this case, the callback gets called once a CSS transition finishes, the `target` being the complete transtion.

We also make sure to discard transitions which are not CSS transforms using `event.propertyName`:

```js
if (event.propertyName !== 'transform') {
  return;
}
```

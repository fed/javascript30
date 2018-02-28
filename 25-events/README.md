# Key Points

## Event Capturing and Bubbling

Let's say we've got a bunch of nested divs we can click on, and we bind event listeners to all of them.

```html
<div class="one">
  <div class="two">
    <div class="three" />
  </div>
</div>
```

The browser will first do something called a **CAPTURE**, which means that when you click on the element, it's going to ripple down and say: "Okay, you clicked on the body, but you also clicked on `div.one`, but you also clicked on `div.two`, and finally you also clicked on `div.three`."

**By clicking on the innermost div, we are also clicking on the wrapping elements. The capture phase determines which one was the target element that triggered the event. So far no event has been fired yet, i.e. no event handler has been called. It just captures and stores whatever you clicked on.**

It then starts doing something called a **BUBBLE**, which means that it's triggering the events as you make your way up (*bubble up*) to the root element. It says: "Okay, we're done figuring out what you've clicked on, now I'm going to start firing off those click events, on `div.three`, then on `div.two`, then on `div.one`, then on `body`, and wherever else you're listening for.

Clicking on any DOM node will make the event bubble up the tree. If any parent nodes are also listening for that event and are ready to handle it, they will do. Note that all events bubble up. The thing's that we don't always see them because we are not listening for those events.

This is particularly obvious when you are listening for a click event on multiple nested elements.

## Deciding whether to trigger events on the capture phase vs the bubbling phase

```js
divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
}));
```

`addEventListener` takes in a third argument which is an options object, where we can set `capture` to `true`.

What that will do is, when we click on the innermost div, the handler `logText` is not going to be run on the bubble up, but rather on the capture down.

This means we'll have the handler run on this order when clicking the innermost div:

1. `div.one`
2. `div.two`
3. `div.three`

**Setting capture to true allows us to reverse the order in which events get fired.**

By default, capture is set to `false`, meaning the natural order goes as follows:

1. `div.three`
2. `div.two`
3. `div.one`

## Stop Propagation

Stop propagation basically means stop bubbling from happening.

If we click on the innermost div and call `event.stopPropagation()` within the event handler, then the event won't bubble up firing.

In this case, we'll only get the callback triggered on `div.three`.

If used in conjunction with `{ capture: true }` then it won't go all the way down until it finds the target element, instead it will stop on the first element listening for the click event.

## Once

The third argument to `addEventListener` can also take in a `once` property:

```js
{
  capture: false,
  once: true
}
```

This means our element will listen in for the event but just once, and unbind itself afterwards.

Unbind itself means running: `div.removeEventListener('click', logText)`.

**Use case:** on store checkouts, you don't want the same person to buy the same thing more than once.

## `this` vs `event.target`

Within event handlers:

* `this` is the element firing the event on the capture/bubble phase
* `event.target` is the element you've actually clicked on

And they are not always the same, particularly for nested elements.

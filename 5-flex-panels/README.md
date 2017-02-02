# Key Points

## Manipulating classnames

```js
const panel = document.querySelector('.panel');

panel.classList.add('active');
panel.classList.remove('active');
panel.classList.toggle('active');
panel.classList.length;
panel.classList.contains('active'); // returns boolean
panel.classList.forEach(classname => console.log(classname));
```

## Transition events

```js
panel.addEventListener('transitionend', (event) {
  // `event` is an instance of `TransitionEvent`
});
```

These events are of type `TransitionEvent`, and contain:

* `propertyName` is the animated property: `font-size`, `transform`, etc.
* `elapsedTime` is the time the animation has been running
* `type`, which in this case is `transitionend`
* and a bunch of others...

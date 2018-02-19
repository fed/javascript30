# Key Points

## "Submit" form event listener

On forms, listen for the submit event instead of the submit button click event.

**Form submit event listener = Submit button click + Hit enter on an input field + Handle when something external submits the form for us.**

## `this` on form event handlers

On a submit event handler, `this` refers to the actual form element.

```js
function submit(event) {
  // Grab the input field value.
  const email = this.querySelector('[name=email]').value;
  //              ^ instead of document.querySelector

  // You can also reset your form values.
  // `this` is the form element, which has a reset method on it.
  this.reset();
}
```

## Setting innerHTML

```js
const el = document.querySelector('#some-dom-node');
const countries = ['Australia', 'New Zealand', 'Italy'];

el.innerHTML = countries.map(country => (`
  <li class="list__item">${country}</li>
`).join('');
//   ^ map will return an array, what we need is a huge string.
```

## Saving objects to LocalStorage

LocalStorage is simply a key-value store, a map. Values are just strings.

When you try to put something other than a string into localStorage, it automatically calls the method `.toString()` on it.

To save an object you need to serialise it first:

```js
const country = {
  name: 'Italy',
  language: 'Italian',
  capital: 'Rome'
};

localStorage.setItem('italy', JSON.stringify(country));
```

## Reasons to use event delegation

1. **Performance:** instead of attaching hundreds of event handlers to each individual element, we attach a single event handler to the parent targeting all of its children.

2. **Evolution (add/removal) of children over time:** it might happen that some children (i.e. list items) get attached later on to the DOM, after attaching the event handlers to the original set of list items. This means the brand new item on the list will NOT respond to our event as we may expect as it simply doesn't have any event handler attached just yet.

## Handling event delegation

Attach event handler to the parent and filter out

```js
if (event.target.matches('input')) {
  // work your magic
}
```

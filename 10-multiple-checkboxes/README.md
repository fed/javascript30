# Key Points

## Highlight selected checkboxes using CSS only

```html
<div class="item">
  <input type="checkbox">
  <p>This is an item.</p>
</div>
```

```css
input:checked + p {
  background: #f9f9f9;
  text-decoration: line-through;
}
```

## `Event` vs `MouseEvent` event types

The event caught by `change` is of type `Event`.

The event caught by `click` is of type `MouseEvent` and contains the property `shiftKey` which is an indicator of whether the shift key was pressed when the event happened.

## Marking a checkbox as "checked"

Same `checked` property, we use it both ways as we can write to it.

```js
const checkbox = document.querySelector('input[type="checkbox"]');

checkbox.checked; // returns whether it's checked or not
checkbox.checked = true; // marks it as "checked"
```

## Context in event handlers

`this` within a click event handler references the element being clicked:

```js
function handleClick(event) {
  console.log(this.checked); // will return the current status of the checkbox
}
```

## Comparing DOM nodes

DOM elements can be compared for identity (actually references get compared):

```
const items = document.querySelectorAll('.items');
const firstItem = items[0];
const secondItem = items[1];

console.log(firstItem === secondItem); // false
console.log(firstItem === document.querySelector('.item')); // true
```

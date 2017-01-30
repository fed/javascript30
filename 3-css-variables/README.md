# Key Points

## Accessing HTML elements attributes

```html
<input id="width" name="width" type="range" />
```

```js
const widthInput = document.querySelector('#width');

console.log(widthInput.id); // returns "width"
console.log(widthInput.name); // returns "width-input"
console.log(widthInput.type); // returns "range"
```

## Data attributes and the `dataset` property

Object of type `DOMStringMap` that contains all of the **data attributes** for a particular HTML element.

```html
<input id="width" type="number" data-sizing="px" data-initial="10" />
```

```js
const widthInput = document.querySelector('#width');

console.log(widthInput.dataset); // returns { sizing: 'px', initial: 10 }
``

## HTML Input types

* `range`. Attributes: `min`, `max` and `value` (currently selected value).
* `color`. Attributes: `value` (currently selected color).

## Declaring CSS variables

All CSS vars should be declared prepending a **double dash** within the `:root {}` pseudo class.

```
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}
```

## Using CSS variables

Use the `var` function:

```css
.hl {
  color: var(--base);
}
```

## Updating CSS variables

Unlike Less/Sass variables which are compiled, CSS variables can be updated in run time using JS.

```js
document.documentElement.style.setProperty(property, value);
```

## Two new event listeners: `mousemove` and `change`

```js
input.addEventListener('change', handleUpdate)
input.addEventListener('mousemove', handleUpdate)
```

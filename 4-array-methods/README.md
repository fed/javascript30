# Key Points

| Operator | Takes in | Returns | Number of Elements of Resulting Array |
|----------|----------|---------|---------------------------------------|
| `map` | Array | Array | Same |
| `filter` | Array | Array | Same or less than the original |
| `reduce` | Array | Object | N/A |
| `sort` | Array | Array | Same |


## Filter

```js
Array.prototype.filter(cb)
```

Filter takes an array, returns a **new** array with either the same or less amount of elements than the original one.

It takes in a function whose argument is the current item which is being looped, and must return a boolean value: `true` to include the current item in the resulting array, `false` to skip it entirely.

## Map

```js
Array.prototype.map(cb)
```

Map takes an array, returns a **new** array with exactly the same number of elements the original one had.

It takes in a function whose argument is the current item which is being looped, and can return any value.

## Reduce

```js
Array.prototype.filter(cb, seed)
```

Reduce takes an array and returns an object.

It takes in a function whose arguments are the `accumulator` and `nextValue` (also the `nextIndex` and the array `reduce` was called upon). On each iteration, the `accumulator` values gets mutated.

Second argument is the `seed` or initial value.

## Sort

```js
Array.prototype.sort(cb)
```

Sort takes an array, returns a **new** array with exactly the same number of elements the original one had.

It takes in a callback whose argument is a [**compare function**](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

## Accessing DOM node text content

```html
<li class="name">
  <a href="#" target="_blank">John Doe</a>
</li>
```

```js
const item = document.querySelector('li.name');
const itemName = item.textContent; // "John Doe"
```

There's also `innerHTML` which works in the same way but returns the HTML content for that element:

```js
const item = document.querySelector('li.name');
const itemLink = item.innerHTML; // "<a href="#" target="_blank">John Doe</a>"
```

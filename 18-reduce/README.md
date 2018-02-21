# Key Points

## Node Lists

```js
const items = document.querySelectorAll('li');
```

`items` doesn't have a `filter`/`map`/`reduce` method on its prototype. This is b/c items is a `NodeList` and not an `Array`.

To manipulate it, cast it to an array first:

```js
const items = [...document.querySelectorAll('li')];

// or
const items = Array.from(document.querySelectorAll('li'));
```

## parseInt vs parseFloat or Number

```js
const time = '14:35';
const [mins, secs] = time.split(':').map(Number);

// or
const [mins, secs] = time.split(':').map(parseFloat);
```

In this example, we can map through the `Number` function constructor or through the `parseFloat` function, but we cannot use the `parseInt` function.

Problem is, `parseInt` takes a second argument called **radix** -- it's just the base of the numerical system we are using, usually `10` (decimal base).

From the MDN site: *Always specify this parameter to eliminate reader confusion and to guarantee predictable behaviour. Different implementations produce different results when a radix is not specified, usually defaulting the value to 10.*

# Key Points

## Get access to a `Date` instance details

```js
const now = new Date();
const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hours = now.getHours();
```

## Setting inline styles using JS

Attach css properties with a value to the `style` object:

```js
element.style.transform = 'rotate(90deg)';
```

Also (this overrides other existing styles):

```js
element.style = { transform: 'rotate(90deg)' };
```

## Periodically running a chunk of code using `setInterval`

```js
setInterval(cb, 1000);
```

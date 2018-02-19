# Key Points

## Create an array buffer of length `n`

```js
const buffer = [];

buffer.splice(-n - 1, buffer.length - n);
```

## DOM's `html` and `body`

Targetting the `html` tag:

```js
const html = document.body.parentElement;

 //or
const html = document.firstElementChild;
```

Targetting the `body` tag:

```js
const body = document.body;
```

## Assigning multiple inline styles at once

CAN'T DO THIS, it won't work:

```js
element.style = {
  backgroundColor: '#3cca5e',
  fontSize: '150px',
  color: '#fff',
  height: '100%',
  display: 'flex'
};
```

But we could:

```js
Object.assign(element.style, {
  backgroundColor: '#3cca5e',
  fontSize: '150px',
  color: '#fff',
  height: '100%',
  display: 'flex'
});

// or
element.setAttribute('style', 'background-color: #3cca5e; font-size: 150px; ...');
```

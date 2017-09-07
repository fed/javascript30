# Key Points

## DOM's `html` and `body`

Targetting the `html` tag:

```js
document.body.parentElement.style.height = '100%';

 //or
document.firstElementChild.style.height = '100%';
```

Targetting the `body` tag:

```js
document.body.style.backgroundColor = '#3cca5e';
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

## Create an array buffer of length `n`

```js
const buffer = [];

buffer.splice(-n - 1, buffer.length - n);
```

# Key Points

## Setting `innerHTML`

If you try to set anything other than a string to `innerHTML`, the DOM will call `.toString` on it.

This is why we need to `.join('')` on our array, otherwise we'll get all the commas between elements in the DOM too.

```js
document.querySelector('#bands').innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join('');
```

## Regex to remove "A", "An" or "The" from the beginning of a word

```js
str.replace(/^(the |a |an )/i, '').trim();
```

* `i` to make the search case insensitive.
* `^` to look for occurrences at the very beginning of the string only.

## Order text ASC

```js
bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
```

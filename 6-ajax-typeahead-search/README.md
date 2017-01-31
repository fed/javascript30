# Key Points

## Attaching event listeners

```js
const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener('keyup', cb);
```

where `keyup` is the event to listen for, and `cb` is the callback function that will handle all event occurrences.

## Fetch API: `window.fetch`

```js
fetch(endpoint)
  .then(response => response.json())
  .then(data => /* data is now readily available for manipulation and usage */);
```

## Spread operator to push individual elements into an array

```js
const results = [];
const cities = ['New York', 'Boston', 'Chicago', 'San Francisco'];

results.push(cities); // this will result in results being an array with a single element
results.push(...cities); // this will push cities individually into our results array
```

## Regular Expressions

```js
const regex = new RegExp(searchTerm, 'gi');
const city = 'Boston';

return city.match(regex);
```

`searchTerm` being something like "Bos" (to be matched against "Boston").

The `.match` method returns a boolean value indicating whether the term was matched.

`gi` are the regular expression flags:

* g = global search, searchs the whole string.
* i = case insensitive search

We need to use the `RegExp` function constructor as the string we are trying to match is a variable.

## Casting a number to a string: `Number.prototype.toString`

In order to have access to `String.prototype` methods, we need to cast numbers into strings beforehand:

```js
const population = 100000;
const formattedPopulation = population
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
```

## String replace: `String.prototype.replace`

```js
const value = 'Bos';
const city = 'Boston, Massachusetts';
const regex = new RegExp(value, 'gi');
const highlighted = city.replace(regex, `<span class="highlight">${value}</span>`);
```

This last constant will result into `<span class="highlight">Bos</span>ton, Massachusetts`.

## Using template literals w/interpolation for markup generation

```js
const ListItem = (city, state, population) => (`
  <li>
    <span class="name">${city}, ${state}</span>
    <span class="population">${population}</span>
  </li>
`);
```

Note that the parentheses here are not required, just there for readability.

## Turning an array into a string: `Array.prototype.join`

```js
const cities = ['<li>New York</li>', '<li>Boston</li>', '<li>Seattle</li>'];
const markup = cities.join('');
```

`markup` results in valid markup we can inject into our DOM: `<li>New York</li><li>Boston</li><li>Seattle</li>`.

## Setting markup chunks into our DOM with `innerHTML`

```js
const root = document.querySelector('.root');

root.innerHTML = '<p>Hello world</p>';
```

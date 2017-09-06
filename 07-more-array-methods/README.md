# Key Points

## Some: `Array.prototype.some`

Returns a boolean.

```js
const isAnyoneAussie = people.some(person => person.country === 'Australia');
```

## Every: `Array.prototype.every`

Returns a boolean.

```js
const isEveryoneAussie = people.some(person => person.country === 'Australia');
```

## Find: `Array.prototype.find`

Find is like filter, but instead returns just the one you are looking for. It returns `undefined` if the element doesn't exist.

```js
const countries = [{ id: 1, name: 'Australia' }, { id: 2, name: 'South Africa' }];
const australia = countries.find(country => country.name === 'Australia');
```

## Find Index: `Array.prototype.findIndex`

Returns an integer which represents the position in the array of the element we are looking for, `-1` if it can't find it.

```js
const countries = ['Ireland', 'New Zealand', 'Scotland'];
const nzIndex = countries.findIndex(country => country === 'New Zealand');
```

## Removing an element from an array

Mutating the original array:

```js
countries.splice(index, 1);
```

Preserving the original array:

```js
const updatedCountries = [
  ...countries.splice(0, index),
  ...countries.splice(index + 1)
];
```

## Console logging tips and tricks

Log not only the variable but also its name using short object notation:

```js
console.log({ index });
```

Log an array or object as a table:

```js
console.table(updatedComments);
```

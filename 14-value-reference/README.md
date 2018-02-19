# Key Points

## Strings, numbers, booleans get assigned by VALUE (essentially copied over)

```js
let name = 'John';
let name2 = name;
console.log(name, name2); // John John

name = 'Jane';
console.log(name, name2); // Jane John
```

`name2` doesn't get updated to the latest value of `name`.

## Arrays and objects get assigned by REFERENCE

```js
const countries = ['AU', 'NZ', 'Italy'];
const places = countries;

console.log(countries, places); // ['AU', 'NZ', 'Italy'] ['AU', 'NZ', 'Italy']

places[2] = 'IT';

console.log(countries, places); // ['AU', 'NZ', 'IT'] ['AU', 'NZ', 'IT']
```

Same thing happens with objects:

```js
const person = {
  name: 'John Doe',
  age: 27
};

const anotherPerson = person;

anotherPerson.age = 28;

console.log(person.age); // 28
```

## Shallowly copying an array by value (a.k.a. array cloning):

```js
const countries = ['AU', 'NZ', 'IT'];

// Using slice
const clone = countries.slice();

// Using concat
const clone = [].concat(countries);

// Using the ES6 array spread operator
const clone = [ ...countries ];

// Using Array.from
const clone = Array.from(countries);
```

## Shallowly copying an object by value (a.k.a. object cloning)

```js
const country = {
  name: 'Italy',
  language: 'Italian',
  continent: 'Europe'
};

// Using Object.assign
const clone = Object.assign({}, country);

// Using the ES6 object spread operator
const clone = { ...country };
```

## Super simple deep cloning strategy (a.k.a. poorman's deep clone)

```js
const deepClone = JSON.parse(JSON.stringify(country));
```

ONLY for valid JSON data (won't work if the object has methods, for instance).

Also might be expensive in terms of performance.

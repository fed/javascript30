# Key Points

## Updating tab title

```js
document.title = 'Yo';
```

## Cancelling intervals and timeouts

Both `setInterval` and `setTimeout` return a reference we can use to stop the interval/timeout later.

```js
const countdown = setInterval(() => console.log('Heya'), 300);

// ... later
clearInterval(countdown);
```

## Read data attributes

Given:

```html
<button data-time="3600" class="timer__button">Lunch Break</button>
```

You can retrieve the `data-time` value by running:

```js
const seconds = parseInt(this.dataset.time);
```

## Create a valid `Date` object from a timestamp

```js
const end = new Date(timestamp);
```

## `document.<name>`

Given:

```html
<form name="customForm" id="custom">
  <input type="text" name="minutes" placeholder="Enter Minutes">
</form>
```

Notice how `form` and `input` both have a `name` attribute.

You can use this `name` attribute to retrieve these elements:

```js
// Returns the <form> element.
document.customForm

// Returns the <input> element within <form>.
document.customForm.minutes
```

# Key Points

## Mouse events

The `MouseEvent` **interface** represents events that occur due to the user interacting with a pointing device (such as a mouse). Common events using this interface include:

* `click`
* `dlbclick`
* `mousedown`
* `mouseup`
* `mouseleave`
* `mousemove`

`MouseEvent` derives from `UIEvent`, which in turn derives from `Event`.

Some important properties are:

* `MouseEvent.offsetX` (Read only): The X coordinate of the mouse pointer relative to the position of the padding edge of the target node.
* `MouseEvent.offsetY` (Read only): The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.
* `MouseEvent.pageX` (Read only): The X coordinate of the mouse pointer relative to the whole document.
* `MouseEvent.pageY` (Read only): The Y coordinate of the mouse pointer relative to the whole document.

## Scroll left

The `Element.scrollLeft` property gets or sets the number of pixels that an element's content is scrolled to the left.

Note that the element has to be scrollable, i.e. we need to set `overflow-x: scroll;`.

```js
// Get the number of pixels scrolled.
const sLeft = element.scrollLeft;
```

`sLeft` is an **INTEGER** (and not a string, meaning we don't need to set it to `10px` but to `10`) representing the number of pixels that element has been scrolled to the left.

```js
// Set the number of pixels scrolled.
element.scrollLeft = 10;
```

`scrollLeft` can be set to any integer value, however:

* If the element can't be scrolled (e.g. it has no overflow), scrollLeft is set to 0.
* If set to a value less than 0, scrollLeft is set to 0.
* If set to a value greater than the maximum that the content can be scrolled, scrollLeft is set to the maximum.

## Funky CSS properties

### `perspective: 500px;`

The perspective CSS property gives an element a 3D-space by affecting the distance between the Z plane and the user.

The strength of the effect is determined by the value. The smaller the value, the closer you get from the Z plane and the more impressive the visual effect. The greater the value, the more subtle will be the effect.

### `user-select: none;`

The `user-select` CSS property controls whether the user can select text. Setting it to `none` will prevent the user from highlighting / selecting text.

### `will-change: transform;`

The will-change CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimisations ahead of time before the element is actually changed. These kind of optimisations can increase the responsiveness of a page by doing potentially expensive work ahead of time before they are actually required.

The will-change property in CSS optimises animations by letting the browser know which properties and elements are just about to be manipulated, potentially increasing the performance of that particular operation.

This property has four values:

* `auto`: standard browser optimisations will be applied.
* `scroll-position`: indicates that the element's scroll position will be animated sometime in the near future so the browser will prepare for content which is not visible in the scroll window of an element.
* `contents`: the contents of an element is expected to change so the browser will not cache this element’s content.

We can inform the browser that a change is about to take place to the transform property like so:

```css
.element {
  will-change: transform;
}
```

Or if we want to declare multiple values we can use a comma-separated list such as:

```css
.element {
  will-change: transform, opacity;
}
```

It's important not to overuse the `will-change` property however since it might, in fact, cause the page to be less performant (note that there is not an all value for this property for a good reason). Instead, it's recommended to toggle on `will-change` just before an element or property changes and then toggle it off again shortly after the process is finished.

### `cursor: grab;`

Chrome requires to vendor prefix this property: `cursor: -webkit-grab;`.

## CSS `calc` function

```css
height: calc(100% - 40px);
width: calc(100% / 6);

/* Also works with variables */
--base-width: 100px;
width: calc(var(--base-width) / 2);
```

# Key Points

## `this` vs `event.target` on event handlers

Within an event handler function, `this` and `event.target` are not always the same. They will be different when there are nested elements inside the element you set the handler on.

Rules of thumb:

* `this` is the thing that are listening on (i.e. what you attached the event handler to).
* `event.target` is the thing that actually triggered the event.
* `this` will always be the same for your event handler whereas `event.target` might change.

## `offsetX` and `offsetY`

Use `offsetX` and `offsetY` to get the position your cursor is at.

## `offsetWidth` and `offsetHeight`

`offsetWidth` and `offsetHeight` are an element's width and height, respectively, including borders and paddings.

![dimension-offsets](https://developer.mozilla.org/@api/deki/files/186/=Dimensions-offset.png)

## `HTMLElement.contentEditable`

This attribute will make **any** HTML element editable. Any elements with the `contenteditable` attribute set will have a grey outline as you hover over. Supported on all browsers including IE.

```html
<h1 contenteditable>🔥WOAH!</h1>
```

```js
element.contentEditable = "true"
```

You can also use the `HTMLElement.isContentEditable` property to test the computed boolean value of this property.

# Key Points

## Event handlers: fat arrow vs proper functions

there's a difference in what `this` refers to when using a fat arrow function instead of a proper function as a callback:

```js
function handleSpeedChange(event) {
  const y = event.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  // ...
}

speed.addEventListener('mousemove', handleSpeedChange);
```

Here we need a proper function b/c we need `this` to be the speed bar (we are retrieving its offset height).

## video.playbackRate

We can use this property as a getter and setter. Defaults to `1`.

```js
// 3x
video.playbackRate = 3;
```

## Self closing tags

According to the HTML5 spec, tags that cannot have any contents can be self-closing. The HTML Standard calls these **void elements**. This includes the following tags:

```
area, base, br, col, embed, hr, img, input,
keygen, link, meta, param, source, track, wbr
```

The `/` is completely optional on the above tags, however, so `<img />` is not different from `<img>`, but `<img></img>` is invalid.

`video` is not a self-closing tag.

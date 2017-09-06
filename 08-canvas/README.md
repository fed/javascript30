# Key Points

## Canvas element

```
<canvas id="canvas"></canvas>
```

## Canvas sizing

Like you'd do with any other html element:

```js
const canvas = document.querySelector('#canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

## Canvas rendering context

```js
const context = canvas.getContext('2d');

context.strokeStyle = '#333'
context.lineWidth = 50;
context.lineJoin = 'round';
context.lineCap = 'round';
```

## Drawing on a canvas

We will draw on every mouse move, provided the `mousedown` flag is set to true.

```js
let mousedown = false;

canvas.addEventListener('mousedown', () => mousedown = true);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => mousedown = false);
canvas.addEventListener('mouseout', () => mousedown = false);

function draw(event) {
  if (!mousedown) return;
  context.beginPath();
  context.moveTo(x, y); // start from coords x and y
  context.lineTo(event.offsetX, event.offsetY); // go to
  context.stroke(); // this is the method that actually draws on the canvas
}
```

## hsl colours

```css
background-color: hsl(hue, saturation, lightness);
```

* Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue.
* Saturation is a percentage value; 0% means a shade of gray and 100% is the full color.
* Lightness is also a percentage; 0% is black, 100% is white.

HSL colours can be used on canvas:

```js
context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
```

# Key Points

## Case insensitive CSS selector

Matches `Twitter`, `TWITTER`, `twitter`, `tWitter`, `TWiTTeR`, etc.

```css
.button[href*='twitter'] {
  background: #019fe9;
}
```

## Adding or removing multiple CSS classes simultaneously

```js
element.classList.remove('trigger-enter', 'trigger-enter-active');
```

## Setting inline styles with `setProperty`

```js
background.style.setProperty('width', `${coords.width}px`);
```

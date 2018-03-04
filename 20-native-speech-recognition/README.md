# Key Points

## Web Speech API

Currently (as of March 2018) it's only supported on Chrome via the `webkit` prefix.

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
```

Create a new `SpeechRecognition` object instance using the `SpeechRecognition()` constructor:

```js
const recognition = new SpeechRecognition();
```

Custom settings:

```js
recognition.lang = 'en-US';
recognition.interimResults = true;
```

The default value for `interimResults` is `false`, meaning that the only results returned by the recogniser are final and will not change. The demo sets it to true so we get early, interim results that may change as we speak.

Bind the event handler that will run when the speech recognition service returns a result — a word or phrase has been positively recognised -- i.e. when the `result` event fires.

```js
recognition.addEventListener('result', event => {
  // Retrieve identified word.
  const transcript = Array.from(event.results)
    .map(result => result[0].transcript)
    .join('');

  // Replace words with emojis.
  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
  const unicornScript = transcript.replace(/unicorn/gi, '🦄');

  p.textContent = poopScript;
  p.textContent = unicornScript;

  // Create a new paragraph after we stop talking.
  if (event.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});
```

Bind the event handler that will run when the speech recognition service has disconnected, i.e. when the `end` event fires. In this case we initialise the speech recognition service again.

```js
recognition.addEventListener('end', recognition.start);
```

Tell the speech recognition service to begin listening to incoming audio. This fires the `start` event.

```js
recognition.start();
```

Note: the speech recognition service works on `http(s)` but not using `file:///`.

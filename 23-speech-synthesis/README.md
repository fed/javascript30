# Key Points

## Global `window.speechSynthesis` object

The `speechSynthesis` read-only property of the `Window` object returns a `SpeechSynthesis` object, which **is the entry point into using Web Speech API speech synthesis functionality**.

**Properties:**

* `SpeechSynthesis.paused` (read only): A Boolean that returns true if the SpeechSynthesis object is in a paused state.

* `SpeechSynthesis.pending` (read only): A Boolean that returns true if the utterance queue contains as-yet-unspoken utterances.

* `SpeechSynthesis.speaking` (read only): A Boolean that returns true if an utterance is currently in the process of being spoken — even if SpeechSynthesis is in a paused state.

**Event handlers:**

`SpeechSynthesis.onvoiceschanged`: Fired when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed. Event name: `voiceschanged`.

```js
speechSynthesis.addEventListener('voiceschanged', populateVoices);
```

**Methods:**

* `SpeechSynthesis.cancel()`: Removes all utterances from the utterance queue.

* `SpeechSynthesis.getVoices()`: Returns a list of SpeechSynthesisVoice objects representing all the available voices on the current device.

* `SpeechSynthesis.pause()`: Puts the SpeechSynthesis object into a paused state.

* `SpeechSynthesis.resume()`: Puts the SpeechSynthesis object into a non-paused state: resumes it if it was already paused.

* `SpeechSynthesis.speak(utterance)`: Adds an utterance to the utterance queue; it will be spoken when any other utterances queued before it have been spoken. The argument is an `SpeechSynthesisUtterance` instance.

## `SpeechSynthesisUtterance` interface

The `SpeechSynthesisUtterance` interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

**Properties:**

* `SpeechSynthesisUtterance.lang`: Gets and sets the language of the utterance.

* `SpeechSynthesisUtterance.pitch`: Gets and sets the pitch at which the utterance will be spoken at.

* `SpeechSynthesisUtterance.rate`: Gets and sets the speed at which the utterance will be spoken at.

* `SpeechSynthesisUtterance.text`: Gets and sets the text that will be synthesised when the utterance is spoken.

* `SpeechSynthesisUtterance.voice`: Gets and sets the voice that will be used to speak the utterance.

* `SpeechSynthesisUtterance.volume`: Gets and sets the volume that the utterance will be spoken at.

**Supported events:**

* `SpeechSynthesisUtterance.onboundary`: Fired when the spoken utterance reaches a word or sentence boundary. Event name: `boundary`.

* `SpeechSynthesisUtterance.onend`: Fired when the utterance has finished being spoken. Event name: `end`.

* `SpeechSynthesisUtterance.onerror`: Fired when an error occurs that prevents the utterance from being succesfully spoken. Event name: `error`.

* `SpeechSynthesisUtterance.onstart`: Fired when the utterance has begun to be spoken. Event name: `start`.

## Querying multiple elements at the same time

This just works as CSS selectors:

```js
const options = document.querySelectorAll('[type="range"], [name="text"]');
```

## Querying by *any* attribute

Given:

```html
<select name="voice" foo="bar">
  <option value="">Select A Voice</option>
</select>
```

You can grab the `select` element by its `name` attribute:

```js
const dropdown = document.querySelector('[name="voice"]');
```

Or even by a non-standard HTML attribute (not recommended, yet possible):

```js
const dropdown = document.querySelector('[foo="bar"]');
```

## Populating a `select` from an array

```js
const options = document.querySelector('#options');

options.innerHTML = ['it-IT', 'en-AU', 'en-US', 'fr-CA', 'en-NZ']
  .filter(option => option.includes('en'))
  .map(option => `<option value="${option}">${option}</option>`)
  .join('');
```

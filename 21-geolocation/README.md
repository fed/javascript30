# Key Points

## Global `window.navigator` object

The `window.navigator` read-only property returns a reference to the `Navigator` object, which can be queried for information about the application running the script.

## The `Navigator` interface

The `Navigator` interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

A `Navigator` object can be retrieved using the read-only `window.navigator` property.

**Some properties:**

* `NavigatorID.appVersion` (read only): Returns the version of the browser as a DOMString. Do not rely on this property to return the correct value.

* `Navigator.battery` (read only): Returns a BatteryManager object you can use to get information about the battery charging status.

* `Navigator.connection` (read only): Provides a NetworkInformation object containing information about the network connection of a device.

* `Navigator.cookieEnabled` (read only): Returns false if setting a cookie will be ignored and true otherwise.

* `Navigator.geolocation` (read only): Returns a Geolocation object allowing accessing the location of the device.

## `Navigator.geolocation`

The `Navigator.geolocation` read-only property returns a `Geolocation` object that gives access to the location of the device. This allows a webapp to offer customised results based on the user's location.

For security reasons, when a web page tries to access location information, the user is notified and asked to grant permission. Be aware that each browser has its own policies and methods for requesting this permission.

This feature is available only in secure contexts (HTTPS).

```js
window.navigator.geolocation.watchPosition(
  data => { // Success callback.
    console.log('current speed', data.coords.speed);
    console.log('heading (direction)', data.coords.heading);
  },
  err => { // Error callback.
    // The user might not have granted permission to access their location.
    console.error(err);
  }
);
```

# Dynamic Object Extension Utility

A utility function for dynamically extending objects with additional properties and methods at runtime. This library allows you to enhance existing objects without altering their original structure.

## Features

- Dynamically add properties and methods to objects.
- Extend existing objects at runtime.
- Simple and flexible API.

## Usage
Here's how you can use the `Prototype` function to extend an object

```js
const user = {};

const Prototype = require('./src');
Prototype(user, {
    id: `${Math.floor(Math.random() * 99999999999) + 88888888}`,
    username: function() {
        return 'Username'
    }
})
 
console.log(user.id);
console.log(user.username());
```

## API

`Prototype(object, props)`
Extends the `object` with properties and methods defined in `props`.

- `object`: The target object to be extended.
- `props`: An object containing the properties and methods to add. Each key represents the property or method name, and each value can be a function (method) or a string (property).

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/i3raby/Prototype/blob/main/LICENSE) file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request to contribute to this project.
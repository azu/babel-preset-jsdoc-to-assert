# babel-preset-jsdoc-to-assert

Babel preset for [jsdoc-to-assert](https://github.com/azu/jsdoc-to-assert "jsdoc-to-assert").

It contain these plugins.

- [babel-plugin-jsdoc-to-assert](https://github.com/azu/babel-plugin-jsdoc-to-assert "babel-plugin-jsdoc-to-assert")

## Installation

    npm i -D babel-preset-jsdoc-to-assert
    
via `.babelrc` (Recommended)

```json
{
  "presets": [
    "jsdoc-to-assert"
  ]
}
```

via Babel CLI

```
$ babel --presets jsdoc-to-assert /path/to/src/target.js > /path/to/build/target.js
```

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

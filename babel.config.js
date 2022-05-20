module.exports = function(api) {
    api.cache(true);
    return {
        "presets": ["next/babel"],
        "plugins": [
          "transform-react-pug",
          "styled-components",
          ["transform-jsx-classname-components"],
          "transform-react-jsx",
          "@babel/plugin-transform-modules-commonjs"
        ]
      }
  };
webpackJsonp([300],{1657:function(module,exports){module.exports="const inputDriverFactory = component => {\n  const input = component.$('input');\n  const clearButton = component.$('[data-hook=\"input-clear-button\"]');\n\n  return {\n    element: () => component,\n    enterText: text => input.clear().sendKeys(text),\n    getText: () => input.getAttribute('value'),\n    hasClearButton: () => clearButton.isPresent(),\n    clickClear: () => clearButton.isPresent() && clearButton.click()\n  };\n};\n\nexport default inputDriverFactory;\n"}});
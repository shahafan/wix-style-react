webpackJsonp([423],{1534:function(module,exports){module.exports='const filePickerDriverFactory = component => ({\n  click: () => component.click(),\n  getInput: () => component.$(`input`),\n  getSubLabel: () => component.$(`[data-hook="sub-label"]`).getText(),\n  getMainLabel: () => component.$(`[data-hook="main-label"]`).getText(),\n  hasError: () => !!component.$(`[data-hook="filePicker-error"]`),\n  errorMessage: () => component.$(`[data-hook="filePicker-error"]`).getText(),\n  element: () => component\n});\n\nexport default filePickerDriverFactory;\n'}});
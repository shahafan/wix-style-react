webpackJsonp([167],{1790:function(module,exports){module.exports="import styles from './Badge.scss';\n\nexport default ({element}) => ({\n  exists: () => !!element,\n  isOfType: type => element.classList.contains(styles[type]),\n  isOfAlignment: alignment => element.classList.contains(styles[alignment]),\n  hasClass: className => {\n    return element.classList.contains(className);\n  },\n  text: () => element.textContent\n});\n"}});
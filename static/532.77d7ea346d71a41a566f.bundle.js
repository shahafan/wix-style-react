webpackJsonp([532],{1425:function(module,exports){module.exports="import typography, {convertFromUxLangToCss} from '../Typography';\nimport styles from './Badge.scss';\n\nexport default ({element}) => ({\n  exists: () => !!element,\n  isBadge: () => element.classList.contains(styles.badge),\n  isOfType: type => element.classList.contains(styles[type]),\n  isOfAppearance: appearance => element.classList.contains(typography[convertFromUxLangToCss(appearance)]),\n  isOfAlignment: alignment => element.classList.contains(styles[alignment]),\n  isOfShape: shape => element.classList.contains(styles[shape]),\n  text: () => element.textContent\n});\n"}});
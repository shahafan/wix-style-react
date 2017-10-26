webpackJsonp([524],{1433:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\nimport ReactTestUtils from 'react-dom/test-utils';\n\nconst textLinkLayoutDriverFactory = ({element, wrapper, component}) => {\n\n  return {\n    exists: () => !!element,\n    getContent: () => element.textContent,\n    doesComponentHasClass: className => element.className.indexOf(className) > 0,\n    isDarkBackground: () => element.style._values.color === 'rgb(255, 255, 255)',\n    hover: () => ReactTestUtils.Simulate.mouseEnter(element),\n    isUnderline: () => element.style._values['text-decoration'] === 'underline',\n    isLightBackground: () => element.style._values.color === 'rgb(56, 153, 236)',\n    getSize: () => element.classList.contains('t1_3') ? 'medium' : element.classList.contains('t3_3') ? 'small' : 'unknown',\n    setProps: props => {\n      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));\n      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);\n    }\n  };\n};\n\nexport default textLinkLayoutDriverFactory;\n"}});
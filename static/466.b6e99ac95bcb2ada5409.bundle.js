webpackJsonp([466],{1491:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\nimport $ from 'jquery';\nimport fieldLabelAttributesDriverFactory from '../../FieldLabelAttributes/FieldLabelAttributes.driver';\n\nconst inputAreaWithLabelCompositeDriverFactory = ({element, wrapper, component}) => {\n  const label = element.childNodes[0].childNodes[0];\n  return {\n    exists: () => !!element,\n    getLabel: () => label.textContent,\n    hasLabel: () => label.tagName.toLowerCase() === 'label',\n    getAttr: attrName => element.getAttribute(attrName),\n    getNumberOfChildren: () => element.childElementCount,\n    getInfoTooltipTestKit: () => fieldLabelAttributesDriverFactory({wrapper, element: $(element).find('[data-hook=\"field-label-attributes\"]')}).getTooltipTestKit(),\n    hasFieldLabelAttributes: () => !!$(element).find('[data-hook=\"field-label-attributes\"]').length,\n    setProps: props => {\n      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));\n      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);\n    }\n  };\n};\n\nexport default inputAreaWithLabelCompositeDriverFactory;\n"}});
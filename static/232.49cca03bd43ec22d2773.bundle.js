webpackJsonp([232],{1725:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport Label from '../../Label';\n\nconst TextLabel = ({children}) => (\n  <Label appearance=\"T1.2\" dataHook=\"notification-label\" >\n    {children}\n  </Label>\n);\n\nTextLabel.propTypes = {\n  children: PropTypes.any\n};\n\nTextLabel.displayName = 'Notification.TextLabel';\n\nexport default TextLabel;\n"}});
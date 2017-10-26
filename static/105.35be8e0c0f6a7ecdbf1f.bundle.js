webpackJsonp([105],{1852:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\n\nexport default function Exclamation(props) {\n  const {width, height, color} = props;\n\n  let path = '';\n\n  for (let i = 0; i <= width; ++i) {\n    path += `M${i} 0 L${i} ${height - (2 * width)} `;\n    path += `M${i} ${height - width} L${i} ${height} `;\n  }\n\n  const style = {stroke: color, strokeWidth: '1px'};\n\n  return (\n    <svg width={width} height={height} style={{shapeRendering: 'crispEdges'}}>\n      <path d={path} style={style}/>\n    </svg>\n  );\n}\n\nExclamation.displayName = 'Exclamation';\nExclamation.propTypes = {\n  width: PropTypes.number.isRequired,\n  height: PropTypes.number.isRequired,\n  color: PropTypes.string.isRequired\n};\nExclamation.defaultProps = {\n  color: 'white'\n};\n"}});
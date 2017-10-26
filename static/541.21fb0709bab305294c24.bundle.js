webpackJsonp([541],{1416:function(module,exports){module.exports="import PropTypes from 'prop-types';\nimport React from 'react';\nimport WixComponent from '../../BaseComponents/WixComponent';\nimport BaseTextLink from '../../BaseComponents/TextLink';\n\nexport default class TextLink extends WixComponent {\n\n  static propTypes = {\n    ...BaseTextLink.propTypes,\n    link: PropTypes.string.isRequired,\n    disabled: PropTypes.bool,\n    download: PropTypes.bool,\n    rel: PropTypes.string,\n    target: PropTypes.string,\n    ariaLabel: PropTypes.string\n  };\n\n  static defaultProps = {\n    ...BaseTextLink.defaultProps,\n    disabled: false,\n    download: false,\n    rel: null,\n    target: null\n  };\n\n  render() {\n    return (\n      <BaseTextLink {...this.props}/>\n    );\n  }\n}\n"}});
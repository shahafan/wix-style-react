webpackJsonp([166],{1791:function(module,exports){module.exports="import React, {Component} from 'react';\nimport tpaStyleInjector from '../TpaStyleInjector';\nimport {string, any} from 'prop-types';\nimport WixStyleBadge from '../../Badge';\n\n\nlet badgeStyles = {locals: {}};\ntry {\n  badgeStyles = require(`!css-loader?modules&camelCase&localIdentName=\"[path][name]__[local]__[hash:base64:5]\"!sass-loader!./Badge.scss`);\n} catch (e) {\n}\n\nclass Badge extends Component {\n  static propTypes = {\n    primaryClassName: string,\n    warningClassName: string,\n    defaultClassName: string,\n    successClassName: string,\n    dangerClassName: string,\n    infoClassName: string,\n    alignmentTopClassName: string,\n    alignmentBottomClassName: string,\n    alignmentMiddleClassName: string,\n    children: any\n  };\n\n  extendStyles() {\n    const {\n      primaryClassName,\n      warningClassName,\n      defaultClassName,\n      successClassName,\n      dangerClassName,\n      infoClassName,\n      alignmentTopClassName,\n      alignmentBottomClassName,\n      alignmentMiddleClassName\n    } = this.props;\n    const _styles = Object.assign({}, badgeStyles.locals, {\n      primary: primaryClassName || badgeStyles.locals.primary,\n      warning: warningClassName || badgeStyles.locals.warning,\n      default: defaultClassName || badgeStyles.locals.default,\n      success: successClassName || badgeStyles.locals.success,\n      info: infoClassName || badgeStyles.locals.info,\n      danger: dangerClassName || badgeStyles.locals.danger,\n      top: alignmentTopClassName || badgeStyles.locals.top,\n      bottom: alignmentBottomClassName || badgeStyles.locals.bottom,\n      middle: alignmentMiddleClassName || badgeStyles.locals.middle\n    });\n\n    return Object.keys(_styles).reduce((acc, next) => {\n      acc[next] = _styles[next] || next;\n      return acc;\n    }, {});\n  }\n\n  render() {\n    return (<WixStyleBadge {...this.props} styles={this.extendStyles()}>{this.props.children}</WixStyleBadge>);\n  }\n}\n\nBadge.displayName = 'Badge';\n\nexport default tpaStyleInjector(Badge, badgeStyles);\n"}});
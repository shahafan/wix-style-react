webpackJsonp([152],{1805:function(module,exports){module.exports="import React from 'react';\nimport {string, bool} from 'prop-types';\nimport classNames from 'classnames';\nimport WixComponent from '../../BaseComponents/WixComponent';\nimport tpaStyleInjector from '../TpaStyleInjector';\nimport omit from 'omit';\n\nlet styles = {locals: {}};\ntry {\n  styles = require('!css-loader?modules&camelCase&localIdentName=\"[path][name]__[local]__[hash:base64:5]\"!sass-loader!./Input.scss');\n} catch (e) {\n}\n\nclass Input extends WixComponent {\n  static propTypes = {\n    errorClassName: string,\n    inputClassName: string,\n    error: bool\n  };\n\n  static defaultProps = {\n    errorClassName: '',\n    inputClassName: '',\n    error: false\n  };\n\n  constructor(props) {\n    super(props);\n    //Used for testing enviorment, to mock the styles\n    //TODO: remove this line once css loader mock solution will be found\n    styles = props.styles || styles;\n  }\n\n  get errorClassName() {\n    return this.props.errorClassName || styles.locals.error;\n  }\n\n  render() {\n    const errorClassName = this.props.error === true ? this.errorClassName : '';\n    return (<input className={classNames(styles.locals.input, this.props.inputClassName, errorClassName)} {...omit(['injectedStyles', 'styles', 'errorClassName', 'inputClassName', 'error', 'dataHook'], this.props)}/>);\n  }\n}\n\nInput.displayName = 'Input';\n\nexport default tpaStyleInjector(Input, styles);\n"}});
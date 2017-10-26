webpackJsonp([256],{1701:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport WixComponent from '../BaseComponents/WixComponent';\nimport classNames from 'classnames';\n\nimport Button from '../Backoffice/Button';\nimport SvgX from '../svg/X.js';\n\nimport * as styles from './MessageBoxMarketerialLayout.scss';\n\nclass MessageBoxMarketerialLayout extends WixComponent {\n\n  render() {\n    const {title, content, primaryButtonLabel, secondaryButtonLabel, onPrimaryButtonClick, onSecondaryButtonClick, imageUrl, onClose, theme, imageComponent} = this.props;\n\n    const headerClasses = classNames({\n      [styles.header]: true,\n      [styles[`header-${theme}`]]: true\n    });\n\n    return (\n      <div className={styles.root}>\n        <div className={headerClasses}>\n          <button className={styles.close} onClick={onClose} data-hook=\"close-button\">\n            <SvgX width={9} height={9} thickness={1} color={'white'}/>\n          </button>\n          { imageComponent ?\n            <div className={styles.headerImageComponent}>{imageComponent}</div> :\n            <div className={styles.headerImage}>\n              <img src={imageUrl} data-hook=\"header-image\"/>\n            </div>\n          }\n        </div>\n        <div className={styles.title} data-hook=\"message-box-title\">\n          {title}\n        </div>\n        <div className={styles.content}>\n          {content}\n        </div>\n        <div className={styles.buttonsContainer}>\n          { primaryButtonLabel ?\n            <div className={styles.primaryButtonContainer}>\n              <Button theme={`full${theme}`} onClick={onPrimaryButtonClick} dataHook=\"primary-button\">{primaryButtonLabel}</Button>\n            </div> : null\n          }\n          { secondaryButtonLabel ?\n            <div className={styles.secondaryButtonContainer}>\n              <span onClick={onSecondaryButtonClick} data-hook=\"secondary-button\">\n                {secondaryButtonLabel}\n              </span>\n            </div> : null\n          }\n        </div>\n      </div>\n    );\n  }\n}\n\nMessageBoxMarketerialLayout.propTypes = {\n  title: PropTypes.node.isRequired,\n  content: PropTypes.node.isRequired,\n  primaryButtonLabel: PropTypes.string,\n  secondaryButtonLabel: PropTypes.string,\n  onPrimaryButtonClick: PropTypes.func,\n  onSecondaryButtonClick: PropTypes.func,\n  imageUrl: PropTypes.string,\n  onClose: PropTypes.func.isRequired,\n  imageComponent: PropTypes.node,\n  theme: PropTypes.oneOf([\n    'blue',\n    'purple'\n  ])\n};\n\nMessageBoxMarketerialLayout.defaultProps = {\n  theme: 'blue'\n};\n\nexport default MessageBoxMarketerialLayout;\n"}});
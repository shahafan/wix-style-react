import React from 'react';
import {any, func, node, string, bool, oneOf} from 'prop-types';
import classnames from 'classnames';

import WixComponent from '../../BaseComponents/WixComponent';

import styles from './Button.scss';

const affixIcon = (className, icon, height) => {
  const iconSize = height === 'small' ? '8px' : height === 'medium' ? '12px' : '16px';
  const dataHook = className === styles.prefix ? 'btn-prefix' : 'btn-suffix';

  return (
    icon ?
      <div className={className} data-hook={dataHook}>
        {React.cloneElement(icon, {size: iconSize})}
      </div> :
      null
  );
};

class Button extends WixComponent {
  static displayName = 'Button'

  static propTypes = {
    children: any,
    id: string,

    /** The icon to show at the begging of the button */
    prefixIcon: node,

    /** The icon to show at the end of the button */
    suffixIcon: node,
    type: string,
    onClick: func,
    onMouseEnter: func,
    onMouseLeave: func,
    active: bool,
    disabled: bool,

    /** The size of the button, can be small, medium, large or x-large */
    height: oneOf(['small', 'medium', 'large']),
    hover: bool,

    /** The theme of the button */
    theme: oneOf([
      'transparent', 'fullred', 'fullgreen', 'fullpurple', 'emptyred',
      'emptygreen', 'emptybluesecondary', 'emptyblue', 'emptypurple', 'fullblue',
      'login', 'emptylogin', 'transparentblue', 'whiteblue', 'whiteblueprimary',
      'whitebluesecondary', 'close-standard', 'close-dark', 'close-transparent', 'icon-greybackground',
      'icon-standard', 'icon-standardsecondary', 'icon-white', 'icon-whitesecondary'
    ])
  }

  static defaultProps = {
    height: 'medium',
    theme: 'fullblue',
    type: 'button'
  }

  render() {
    const {
      active,
      children,
      disabled,
      height,
      hover,
      onClick,
      onMouseEnter,
      onMouseLeave,
      prefixIcon,
      suffixIcon,
      theme,
      type
    } = this.props;

    return (
      <button
        {...{
          className: classnames(
            styles.button,
            styles[theme],
            {
              [styles.hover]: hover,
              [styles.active]: active,
              [styles.disabled]: disabled,
              [styles[`height${height}`]]: height !== 'medium'
            }
          ),
          onClick,
          disabled,
          type,
          onMouseEnter,
          onMouseLeave
        }}
        >
        <div className={styles.inner}>
          {affixIcon(styles.prefix, prefixIcon, height)}
          {children}
          {affixIcon(styles.suffix, suffixIcon, height)}
        </div>
      </button>
    );
  }
}

export default Button;

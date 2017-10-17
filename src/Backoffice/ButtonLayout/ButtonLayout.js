import React from 'react';
import classNames from 'classnames';
import styles from './ButtonLayout.scss';
import Button from '../Button';

const ButtonLayout = props => {
  const {theme, hover, active, disabled, height, children} = props;

  const className = classNames(
    styles.button,
    styles[theme],
    children.props.className,
    {
      [styles.hover]: hover,
      [styles.active]: active,
      [styles.disabled]: disabled,
      [styles[`height${height}`]]: height !== 'medium'
    }
  );

  const style = {
    ...children.props.style,
    height,
    display: 'inline-block'
  };

  if (React.Children.count(children) === 1) {
    return React.cloneElement(
      children,
      {className, style},
      <div className={styles.inner}>
        {children.props.children}
      </div>
    );
  }
};

ButtonLayout.displayName = 'ButtonLayout';
ButtonLayout.defaultProps = Button.defaultProps;
ButtonLayout.propTypes = Button.propTypes;

export default ButtonLayout;

import React from 'react';
import classNames from "classnames"
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string,
  children: React.ReactNode
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { btnType, disabled, children, size, href } = props

  // btn,btn-lg,btn-primary
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  console.log(classes,"classes")
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>{children}</a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled}>{children}</button>
    )
  }
}


Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
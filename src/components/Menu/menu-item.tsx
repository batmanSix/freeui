import React,{useContext} from 'react';
import classNames from 'classnames';
import { MenuContext } from "./menu"
export interface MenuItemProps {
  index : number;
  disabled ?: boolean,
  className ?: string,
  style ?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className,disabled,style,children,index} = props

  const context = useContext(MenuContext)
  
  const classes = classNames('free-menu-item',className,{
    'is-disabled': disabled,
    'is-active' : context.index === index
  })

  const handleClick = () =>{
    if(context.onSelect && !disabled){
      context.onSelect(index)
    }
  }

  return(
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
  
}

MenuItem.displayName = 'MenuItem'
export default MenuItem;

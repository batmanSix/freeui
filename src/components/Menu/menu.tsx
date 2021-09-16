import React, { createContext,useState } from 'react';
import classNames from 'classnames';
import MenuItem, {MenuItemProps} from "./menu-item"
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void;
export interface MenuProps{
  defaultIndex ?: number;
  className ?: string;
  mode ?: MenuMode;
  style ?: React.CSSProperties
  onSelect ?: SelectCallback
}

interface IMenuContext {
  index: number;
  onSelect ?: SelectCallback;
}

export const MenuContext  = createContext<IMenuContext>({index:0})

const Menu :React.FC<MenuProps> = (props) => {
  const { className,mode,style,children,defaultIndex,onSelect} = props

  const classes = classNames('free-menu',className,{
    'menu-vertical': mode === 'horizontal'
  })

  const [currentActive, setActive] = useState(defaultIndex)

  const handleClick = (index:number) => {
    setActive(index)
    if(onSelect){
      onSelect(index)
    }
  }
  const passedContext : IMenuContext = {
    index : currentActive ? currentActive : 0,
    onSelect : handleClick
  }

  // 渲染子组件判断子组件是不是 menuitem
  const renderChildren = ()=>{
    return React.Children.map(children,(child,index)=>{
      const childelement = child as React.FunctionComponentElement<MenuItemProps> 
      const {displayName} = childelement.type
      if(displayName === 'MenuItem'){
        return children
      }else{
        console.error('warning: menu has a child which is not a MenuItem')
      }
    })
  }
  
  return(
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex : 0,
  mode:'horizontal'
}

export default Menu
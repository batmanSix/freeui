import React from 'react';
import './App.css';
import Button, { ButtonType, ButtonSize } from "./components/Button/button"
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menu-item';
const flex={
  display: 'flex',
  justifyContent: 'space-between',
}
const App: React.FC = () => {
  return (
    <div className="App">
      <div className={'flex'}>
        <Button disabled>hello world</Button>
        <Button btnType={ButtonType.Default} className="custom" onClick={(e)=>{e.preventDefault(); alert(131)}}>Default</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Primary}>Small</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello world</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>hello world</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" >hello world</Button>
      </div>
      <div>
        <Menu defaultIndex={0} onSelect={(index)=>{alert('点击了'+index)}}>
           <MenuItem index={0} disabled
           >测试menu1组件</MenuItem>
           <MenuItem index={1}>测试menu2组件</MenuItem>
           <MenuItem index={2}>测试menu3组件</MenuItem>
        </Menu>
      </div>
      <code> const a = b</code>
      <p>edit <code>scr/app.tsx</code>and save to reload</p>
    </div>
  )
}

export default App;

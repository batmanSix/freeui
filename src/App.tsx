import React from 'react';
import './App.css';
import Button, { ButtonType, ButtonSize } from "./components/Button/button"

const flex={
  display: 'flex',
  justifyContent: 'space-between',
}
const App: React.FC = () => {
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>hello world</h2>
      <h3>hello world</h3>
      <hr></hr>
      <div className={'flex'}>
        <Button disabled>hello world</Button>
        <Button btnType={ButtonType.Default}>Default</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Primary}>Small</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello world</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>hello world</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" >hello world</Button>
      </div>
      <code> const a = b</code>
      <p>edit <code>scr/app.tsx</code>and save to reload</p>
    </div>
  )
}

export default App;

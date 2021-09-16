import React from 'react';
import {render,RenderResult} from "@testing-library/react"
import Menu,{MenuProps}  from './menu';
import MenuItem from './menu-item';

const testProps: MenuProps = {
  defaultIndex : 0,
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: MenuProps = {
  defaultIndex:0,
  mode:'vertical'
}

const NiceMenu = (props:MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem disabled index={1}>disabled</MenuItem>
      <MenuItem index={2}>active2</MenuItem>
    </Menu>
  )
}
let wapper:RenderResult, menuelement:HTMLElement,activeelement:HTMLElement,disabledelement:HTMLElement
describe('test Menu and MenuItem component',()=>{
  beforeEach(()=>{
    wapper = render(NiceMenu(testProps))
    menuelement = wapper.getAllByTestId('test-menu')
    activeelement = wapper.getByText('active')
    disabledelement = wapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on default props',()=>{
    expect(menuelement).toBeInTheDocument()
    expect(menuelement).toHaveClass('free-menu test')
    expect(menuelement.getElementsByTagName('li').length).toEqual(3)
    expect(activeelement).toHaveClass('menu-item is-active')
    expect(disabledelement).toHaveClass('menu-item is-disabled')
  })

  it('click items should change active and  call the right callback',()=>{

  })

  it('should render vertical mode when mode is set  to vertical',()=>{

  })

})
import React from 'react';
import {render} from "@testing-library/react"
import Button  from './button';

test("our first react test case",()=>{
  const wrapper = render(<Button>nice</Button>)
  const element = wrapper.queryAllByText('nice')
  expect(element).toBeTruthy()
})
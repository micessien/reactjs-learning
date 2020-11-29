import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

it('render without crashing', () => {
  const div = document.createElement('div')
  render(<App/>, div)
})

it('demoes', () => {
  expect({name: 'Joe'}).toEqual({name: 'Jane'})
})
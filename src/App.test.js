// import { render } from '@testing-library/react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import GuessCount from './GuessCount';

describe('<App />', () => {
  it('render without crashing', () => {
    const wrapper = shallow(<App/>)
    // eslint-disable-next-line jest/valid-expect
    expect(wrapper).to.contain(<GuessCount guesses={0}/>)
  })

  it('has 36 cards', () => {
    const wrapper = shallow(<App/>)
    // eslint-disable-next-line jest/valid-expect
    expect(wrapper.find('Card')).to.have.length(36)
  })

})

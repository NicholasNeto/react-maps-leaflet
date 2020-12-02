import React from 'react';
import App from '../ui/App';
import CustomPopup from '../ui/component/popup';
import { expect } from 'chai';
import { mount } from 'enzyme';



import { shallow, configure } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe('Delivery', () => {
  let wrapper: any

  beforeEach(() => {
    const delivery = {
      name: 'name test',
      address: 'address test',
      componen: 'componen test',
    }

    wrapper = shallow(<App />)

  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Exists id', () => {
    expect(wrapper.exists('#page-map')).to.equal(true);
  })

  it('Exists ClassName', () => {
    expect(wrapper.exists('.input-block')).to.equal(true);
    expect(wrapper.exists('.confirm-button')).to.equal(true);
    expect(wrapper.exists('.confirm-reset')).to.equal(true);
  })

  it('renders an `.input-block`', () => {
    expect(wrapper.find('.input-block')).to.have.length(4);
  });
})




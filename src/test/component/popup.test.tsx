import React from 'react';
import CustomPopup from '../../ui/component/popup';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });
describe("[UNIT] Testing the CustomPopup component", () => {
  let wrapper

  beforeEach(() => {
    const helper = {
      name: 'name test',
      address: 'address test',
      componen: 'componen test',
    }

    wrapper = shallow(<CustomPopup delivery={helper} />)
  })

  describe("Component validation", () => {

    it('displays 0 as a default value', () => {
      expect(wrapper.find("h3").text()).toContain("name test")
    })
    it('contain class map-popup', () => {
      expect(wrapper.exists('.map-popup')).toEqual(true);
    })
    it('contain class edit-button', () => {
      expect(wrapper.exists('.edit-button')).toEqual(true);
    })
    it('contain class edit-button', () => {
      expect(wrapper.exists('.delete-button')).toEqual(true);
    })
  })
})
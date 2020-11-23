import React from 'react';
import CustomPopup from '../../ui/component/popup';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });
describe("[UNIT] Testing the CustomPopup component", () => {
  let wrapper

  beforeEach(() => {
    const delivery = {
      name: 'name test',
      address: 'address test',
      componen: 'componen test',
    }

    wrapper = shallow(<CustomPopup delivery={delivery} />)
  })

  describe("Component validation", () => {

    it('Exists ClassName', () => {
      expect(wrapper.exists('.map-popup')).toEqual(true);
      expect(wrapper.exists('.edit-button')).toEqual(true);
      expect(wrapper.exists('.delete-button')).toEqual(true);
    })

    it('displays 0 as a default value', () => {
      expect(wrapper.find("h3").text()).toContain("name test")
    })
  })
})
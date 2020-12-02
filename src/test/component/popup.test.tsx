import React from 'react';
import moment from 'moment'
import CustomPopup from '../../ui/component/popup';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';

configure({ adapter: new Adapter() });



describe("[UNIT] Testing the CustomPopup component", () => {
  let wrapper: any
  let delivery: object
  const date = moment()

  beforeEach(() => {

    delivery = {
      name: 'name test',
      address: 'address test',
      componen: 'componen test',
      date: date,
    }

    wrapper = shallow(<CustomPopup delivery={delivery} />)
  })

  describe("Component validation", () => {

    it('Exists ClassName', () => {
      expect(wrapper.exists('.map-popup')).to.equal(true);
      expect(wrapper.exists('.edit-button')).to.equal(true);
      expect(wrapper.exists('.delete-button')).to.equal(true);
    })

    it('displays 0 as a default value', () => {
      expect(wrapper.find("h3").text()).to.contain("name test")
    })

    it('displays 0 as a default value', () => {
      const texts = wrapper.find('p').map((node) => node.text());
      expect(texts).to.eql(["address test -  ", date.format("MMM Do YY")]);
    })
  })
})
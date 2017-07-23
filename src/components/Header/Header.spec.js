import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';

describe('Header component', () => {
  const props = {
    categories: [
      'test1',
      'test2',
      'test3'
    ],
    activeCategory: 'test2',
    handleClick: () => {}
  }

  const wrapper = shallow(<Header {...props} />);

  it('have been rendered as expected', () => {
    expect(wrapper.length).to.equal(1);
  });

  it('navbar contains all items', () => {
    expect(wrapper.find('.nav-list')).to.have.length(1);
    expect(wrapper.find('.nav-list').children()).to.have.length(props.categories.length);
    expect(wrapper.find('.nav-list').childAt(0).type()).to.equal('li');
  });

  it('navbar have selected active category', () => {
    expect(wrapper.find('.nav-list').childAt(1).hasClass('nav-list__item--active')).to.equal(true);
  });
})

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';

describe('Footer component', () => {
  const props = {copyright: 'test copyright'}
  const wrapper = shallow(<Footer {...props} />);

  it('have been rendered as expected', () => {
    expect(wrapper.length).to.equal(1);
  });

  it('should contain link to copyright page', () => {
    expect(
      wrapper.find('.footer > a').prop('href')
    ).to.equal('https://www.nytimes.com/content/help/rights/copyright/copyright-notice.html');

    expect(
      wrapper.find('.footer > a').text()
    ).to.equal(props.copyright);
  });
});

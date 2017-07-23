import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import App from './App';
import Header from '../Header/Header';
import Article from '../Article/Article';
import Footer from '../Footer/Footer';

describe('App component', () => {
  const wrapper = shallow(<App />);
  const fetchStub = sinon.stub(window, 'fetch');

  after(() => {
    fetchStub.resetBehavior();
  });

  it('shows a loader icon when data is not received from API', () => {
    expect(
      wrapper.find('.loader-img')
    ).to.have.length(1);
  });

  it('has been rendered the content', () => {
    const setActiveCategoryStub = sinon.stub(wrapper.instance(), 'setActiveCategory');
    const categories = ['Love'];
    const posts = [
      {
        web_url: 'xxx-url',
        headline: {
          main: 'Cool title'
        },
        pub_date: '2017-07-17T16:09:26+0000',
        lead_paragraph: 'Love is the reason we\'re here on Earth',
        section_name: 'Love'
      }
    ];
    const copyright = 'Hello I\'m a copyright';
    const activeCategory = 'Love';

    wrapper.setState({
      categories, posts, copyright, activeCategory
    });

    expect(wrapper.find('Header').props().categories).to.equal(categories);
    expect(wrapper.find('Header').props().handleClick).to.equal(setActiveCategoryStub);
    expect(wrapper.find('Header').props().activeCategory).to.equal(activeCategory);

    expect(wrapper.find('Article').props().posts).to.equal(posts);
    expect(wrapper.find('Article').props().activeCategory).to.equal(activeCategory);

    expect(wrapper.find('Footer').props().copyright).to.equal(copyright);
  })
})

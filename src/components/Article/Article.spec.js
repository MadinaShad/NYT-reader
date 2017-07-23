import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Article from './Article';

describe('Article component', () => {
  const posts = [
    {
      web_url: 'xxx-url-1',
      headline: {
        main: 'If you wish to be loved, love!'
      },
      pub_date: '2017-07-17T16:09:26+0000',
      lead_paragraph: 'There is a time for many words, and there is also a time for sleep',
      section_name: 'U.S.'
    },
    {
      web_url: 'xxx-url-2',
      headline: {
        main: 'Never say never!'
      },
      pub_date: '2017-07-17T16:09:27+0000',
      lead_paragraph: 'Many ideas grow better when transplanted into another mind than in the one they sprung up',
      section_name: 'U.S.'
    },
    {
      web_url: 'xxx-url-3',
      headline: {
        main: 'Never stop dreaming!'
      },
      pub_date: '2017-07-17T16:09:28+0000',
      lead_paragraph: 'The future belongs to those, who believe in beauty of their dreams',
      section_name: 'Style'
    }
  ];

  it('should render all posts, when activeCategory is null', () => {
    const props = {
      posts,
      activeCategory: null
    };
    const wrapper = shallow(<Article {...props} />);
    expect(
      wrapper.find('.section-articles').children()
    ).to.have.length(props.posts.length);
  })

  it('should render only filtered posts, when activeCategory is passed', () => {
    const activeCategory = 'U.S.';
    const props = { posts, activeCategory };
    const activeCategoriesCount = posts.filter((v, i) => v.section_name === activeCategory).length;
    const wrapper = shallow(<Article {...props} />);
    expect(
      wrapper.find('.section-articles').children()
    ).to.have.length(activeCategoriesCount);
  })
})

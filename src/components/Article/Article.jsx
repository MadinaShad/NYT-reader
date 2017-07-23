import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './article.css';

const Article = ({posts, activeCategory}) => {
  const articleList = posts.map((i, index) => {
    const postDate = moment(i.pub_date).format('LLL');
    if (activeCategory === i.section_name || activeCategory === null) {
      return (
        <article key={index} className='article-item'>
          <a className='article-item__link-to-news' href={i.web_url} target='_blank'>
            <img src={'https://unsplash.it/302/250?image=107' + index}
              alt='post-image'
              className='article-item__image'/>
            <h2>
              {i.headline.main}
            </h2>
            <time className='article-item__date' dateTime={i.pub_date}>
              {postDate}
            </time>
            <p className='article-item__snippet'>
              {i.lead_paragraph}
            </p>
          </a>
        </article>
      );
    }
  });

  return (
    <section className='section-articles'>
      {articleList}
    </section>
  );
}

export default Article;

Article.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      web_url: PropTypes.string,
      headline: PropTypes.shape({
        main: PropTypes.string
      }),
      pub_date: PropTypes.string,
      lead_paragraph: PropTypes.string,
      section_name: PropTypes.string
    })
  ).isRequired,
  activeCategory: PropTypes.string,
};

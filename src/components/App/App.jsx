import React, { Component } from 'react';
import Header from './../Header/Header.jsx';
import Article from './../Article/Article.jsx';
import Footer from './../Footer/Footer.jsx';
import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.setActiveCategory = this.setActiveCategory.bind(this);
    this.state = {
      categories: [],
      posts: [],
      copyright: '',
      activeCategory: null
    }
  }

  /**
   * Save active category name to the state
   * @param {string} value
   */
  setActiveCategory(value) {
    this.setState({activeCategory: value});
  }

  componentDidMount() {
    fetch('http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f3258153a83a4aceb8490e3dc0e3b5fe')
    .then(response => response.json())
    .then(articles => {
      const posts = articles.response.docs;
      const categories = [];
      posts.forEach((i) => {
        if (categories.indexOf(i.section_name) === -1) {
          categories.push(i.section_name);
        }
      })
      categories.push(null);

      this.setState({
        categories: categories,
        posts: posts,
        copyright: articles.copyright
      });
    });
  }

  render() {
    const loading = <img src='http://fundcentre.newireland.ie/Content/Media/loading.gif'
      className='loader-img'/>;
    if (!this.state.posts.length) return loading;

    return (
      <div>
        <Header categories={this.state.categories}
          handleClick={this.setActiveCategory}
          activeCategory={this.state.activeCategory} />

        <main className='main-container'>
          <Article posts={this.state.posts}
            activeCategory={this.state.activeCategory} />
        </main>

        <Footer copyright={this.state.copyright} />
      </div>
    );
  }
}

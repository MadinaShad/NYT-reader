import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

const Footer = ({copyright}) => {
  return (
    <footer className='footer'>
      <a href='https://www.nytimes.com/content/help/rights/copyright/copyright-notice.html'
        target='_blank'
        className='footer__copyright-link'>
        {copyright}
      </a>
    </footer>
  );
}

export default Footer;

Footer.propTypes = {
  copyright: PropTypes.string.isRequired
}

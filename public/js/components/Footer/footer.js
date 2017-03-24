import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <div className="footerLine">
          <span className="follow">Follow us</span>
          <a href="https://www.facebook.com/welldressed.uzh/" className="followUrl" target="_blank">
            <span data-hover="Facebook" className="followSpan">Facebook</span>
          </a>
          <a href="https://www.instagram.com/welldressed_uzh/" className="followUrl" target="_blank">
            <span data-hover="Instagram" className="followSpan">Instagram</span>
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;

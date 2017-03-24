import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.hamburgerIcon = '';
    this.hamburgerIconRect = '';
    this.menu = this.menu.bind(this);
    this.clickBurger = this.clickBurger.bind(this);
  }

  componentDidMount() {

    this.hamburgerIcon = ReactDOM.findDOMNode(this.refs.burger);
    this.hamburgerIconRect = this.hamburgerIcon.getBoundingClientRect();
  }

  clickBurger(event) {
    event.preventDefault();

    if(!this.props.status) {
      TweenMax.to(this.hamburgerIcon, 1, {className: "openBurgerIcon"});
    } else {
      TweenMax.to(this.hamburgerIcon, 1, {className: ""});
    }
  }

  menu() {
    this.props.setMenuStatus(this.hamburgerIconRect);
  }

  render() {
    return(
      <header className="header">
        <div className="menu" onClick={this.menu}>
          <div ref='burger' id="burgerIcon" onClick={this.clickBurger}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;

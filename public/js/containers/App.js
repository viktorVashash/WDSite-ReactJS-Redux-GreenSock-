import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { menu } from '../actions/index';
import { Loader, Header, Menu, Footer } from './containers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowHeight: 0,
      windowWidth: 0
    };

    this.onResize = this.resize.bind(this);
    this.setMenuStatus = this.setMenuStatus.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  resize() {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }

  setMenuStatus(hamburgerIconRect) {
    this.hamburgerIconRect = hamburgerIconRect;
    this.props.menu(!this.props.menuStatus);
  }

  render() {
    return(
      <div className="app">
        <Loader />
        <Header setMenuStatus={this.setMenuStatus} status={this.props.menuStatus}/>
        <Menu status={this.props.menuStatus} hamburgerIconRect={this.hamburgerIconRect} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    homePage: state.homePage,
    menuStatus: state.menuStatus
  }
}

export default connect(mapStateToProps, { menu })(App);

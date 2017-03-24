import React, { Component } from 'react';

class Second extends Component {
  constructor(props) {
    super(props);

    this.move = this.move.bind(this);
  }

  addClass(active) {
    return `navigationLineActive ${active}`;
  }

  addClassNumber(active) {
    return `navigationNumber ${active}`;
  }

  move(e) {
    e.preventDefault();
    this.props.moveToIndex(this.props.page);
  }

  render() {
    const LineActive = this.props.page === this.props.homePage ? 'navigationLineIsActive' : '';
    const NumberActive = this.props.page === this.props.homePage ? 'navigationNumberIsActive' : '';

    return(
      <div className="navigationItem" onClick={this.move}>
        <div className="navigationText">
          <div className="navigationLine">
            <div className={this.addClass(LineActive)}></div>
          </div>
          <div className="navigationName">About Us</div>
        </div>
        <div className={this.addClassNumber(NumberActive)}>0{this.props.page}</div>
      </div>
    );
  }
};

export default Second;

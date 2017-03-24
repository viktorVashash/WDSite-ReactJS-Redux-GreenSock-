import React, { Component } from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);

    this.hideCircle = this.hideCircle.bind(this);
  }

  componentDidUpdate() {
    this.hideCircle();
  }

  hideCircle() {
    TweenMax.fromTo('#circles', 1, {
      opacity: 1,
      ease: Power1.easeOut
    }, {
      opacity: 0,
      onComplete() {
        TweenMax.set('#circles', {
          visibility: 'hidden'
        });
      }
    });
  }

  render() {
    return(
      <div id="circles" className="circles" onClick={this.props.downClick}>
        <div className="scrollDownText">Scroll Down</div>
        <div className="compareCircles">

          <div className="scrollStrokes"></div>

          <div className="firstCircle">
            <svg height={100+'%'} width={100+'%'}>
              <circle cx={50+'%'} cy={50+'%'} r={48+'%'}></circle>
            </svg>
          </div>

          <div className="secondCircle">
            <svg height={100+'%'} width={100+'%'}>
              <circle cx={50+'%'} cy={50+'%'} r={48+'%'}></circle>
            </svg>
          </div>

        </div>
      </div>
    );
  }
};

export default Circle;

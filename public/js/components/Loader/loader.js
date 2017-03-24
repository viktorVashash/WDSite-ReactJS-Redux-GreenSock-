import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Loader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };

    this.onHideLoader = this.hideLoader.bind(this);
  }

  componentDidMount() {
    this.self = this;
    this.el = ReactDOM.findDOMNode(this);
    const delay = 0;
    this.tl = new TimelineMax({
      delay: 1,
      onComplete: this.onHideLoader
    });
    this.tl.timeScale(.8);

    const timeOut = setInterval(() => {
      this.state.progress < 100 ? this.setState({
        progress: this.state.progress + 1
      }) : clearInterval(timeOut);
    }, 30);

    this.tl.from(this.refs.percent, 1, {
      y: -8,
      autoAlfa: 0,
      ease: Power2.easeOut
    }, "start+=1");
    this.tl.to(this.refs.percent, .2, {
      y: -8,
      autoAlfa: 0,
      ease: Power2.easeOut
    }, "close");
    this.tl.from(this.refs.logo, 1, {
      y: 8,
      autoAlfa: 0,
      ease: Power2.easeOut
    }, "start+=1");
    this.tl.to(this.refs.logo, .2, {
      y: 8,
      autoAlfa: 0,
      ease: Power2.easeOut
    }, "close");
  }

  hideLoader() {
    const e = this;
    this.delay = .5;
    window.scrollTo(0, 0);
    TweenMax.to(this.el, 2, {
      opacity: 0,
      ease: Expo.easeInOut,
      onComplete() {
        TweenMax.set(e.el, {
          display: 'none'
        });
      }
    });
  }

  render() {
    return(
      <div className="loader">
        <div className="loaderBottom">
          <div className="iconSvg">
            <div className="drawSwg">
              <svg ref="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.67 57.56">
                <title>icon</title>
                <path className="path" d="M250.75,221.83s-0.5-1.67,2.42-1.33c0,0,2.65,0,1.92,1.81,0,0,0,1.29-4.83,1.19,0,0-2.12-.09-1.72,1.81,0,0,.06,2.19,6,2.19,0,0,2.75.22,3.91-1.56,0,0,1.29-2.29-3.85-1.46,0,0-6.73,1.21-6.48,4.42,0,0,0,2.19,6.35,2.56,0,0,3,.23,4-0.46a1.72,1.72,0,0,0,.95-1.17s0.48-1.8-2.53-1-8.77,1.48-8.34,3.42,4.11,2.33,4.11,2.33l5.19,0.52s2.71-.17,3.5,3.38,4,7.21,4,7.21l3.88,4.54a14.06,14.06,0,0,1,3.46,9.5,24.17,24.17,0,0,1-2,9.33s-0.62,2-5,5.38c0,0-5.33,3.79-13.83,2.21s-12.42-9.54-12.42-9.54-3.12-6.46-.33-12.92a24.67,24.67,0,0,1,5.54-7,6.52,6.52,0,0,0,1.75-4l0.21-6.25a1.32,1.32,0,0,1,1.46-1.51" transform="translate(-237.51 -219.96)"/>
                <path className="path" d="M246.83,249.5a4.19,4.19,0,0,0,4.54-2.75,6.16,6.16,0,0,1,7.08-.25s-0.21,3,4.42,3" transform="translate(-237.51 -219.96)"/>
                <path className="path" d="M251.38,246.75a9.38,9.38,0,0,0,.17,5.29,17.17,17.17,0,0,0,6.79,0,14,14,0,0,0,.13-5.54" transform="translate(-237.51 -219.96)"/>
                <path className="path" d="M251.54,252s5.33,3.75-2.25,11.42c0,0-5.94,5.42,6,5.33,0,0,13.37-.37,6.08-6.79s-3-10-3-10" transform="translate(-237.51 -219.96)"/>
                <path className="path" d="M254.89,245.63c-0.18-1.52.41-1.83,0.41-1.83,2.34-1.79,0-2.62,0-2.62-2.41-.79-1.8,1.5-1.8,1.5a3.63,3.63,0,0,0,1.32,1.72" transform="translate(-237.51 -219.96)"/>
                <path className="path" d="M254.64,234.76s2.17,3.87.24,6.29" transform="translate(-237.51 -219.96)"/>
              </svg>
            </div>
            <div className="loaderStatusNumber" ref="percent">{`${this.state.progress}%`}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.onUpdateCircle = this.updateCircle.bind(this);
  }

  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.circleBg = ReactDOM.findDOMNode(this.refs.circleBg);
    this.menu = ReactDOM.findDOMNode(this.refs.menu);
    this.createCircle();
  }

  componentWillReceiveProps(props) {
    if(props.status) {
      this.circleTl.play();
    } else {
      this.circleTl.reverse();
    }
  }

  updateCircle(t) {
    const e = this.props.hamburgerIconRect.width / 2 + this.props.hamburgerIconRect.left - 17;
    const n = this.props.hamburgerIconRect.top;

    this.circleCtx.save();
    this.circleCtx.scale(1, 1);
    this.circleCtx.clearRect(0, 0, 1024, 600);
    this.circleCtx.fillStyle = "hsl(23, 23%, " + Math.round(t.target.color) + "%)";
    this.circleCtx.beginPath();
    this.circleCtx.arc(e, n, t.target.radius * 1, 0, 2 * Math.PI);
    this.circleCtx.fill();
    this.circleCtx.restore();
  }

  createCircleTween() {
    const self = this;
    return TweenMax.fromTo(this.circle, 1.1, {
      radius: 0,
      color: 30
    }, {
      radius: 1024 * 1.2,
      color: 40,
      zIndex: 6,
      ease: Expo.easeInOut,
      onUpdateParams: ["{self}"],
      onUpdate:  this.onUpdateCircle
    });
  }

  createCircle() {
    const t = ReactDOM.findDOMNode(this);
    this.circleCanvas = ReactDOM.findDOMNode(this.refs.circleAnimation);
    this.circleCtx = this.circleCanvas.getContext('2d');
    this.circleCtx.fillRect(0, 0, 0, 0);
    this.circle = {
      radius: 0,
      color: 90
    };
    this.circleTl = new TimelineMax({
      paused: true
    });
    this.circleTl.timeScale(0.7);
    this.circleTl.to(t, .5, {
      zIndex: 6,
      autoAlpha: 1,
      ease: Power2.easeOut
    }, 'start');
    // this.circleTl.fromTo(this.hi, .55, {
    //   y: 0
    // }, {
    //   y: 100+'%',
    //   ease: Expo.easeInOut,
    //   onStart() {
    //     TweenMax.set(this.menu, {
    //       visibility: 'visible'
    //     })
    //   },
    //   onReverseComplete() {
    //     TweenMax.set(this.menu, {
    //       visibility: 'hidden'
    //     })
    //   }
    // });
    this.circleTl.addLabel('createCircleTween', 0);
    this.scaleCircleTween = this.createCircleTween();
    this.circleTl.add(this.scaleCircleTween, 'createCircleTween');
  }

  render() {
    return(
      <div className="menuPage" ref="menu">
        <div ref="circleBg" className="canvasCircle">
          <canvas ref="circleAnimation" className="canvasCircle canvasCircleItem" width={1024} height={600}></canvas>
        </div>
      </div>
    );
  }
}

export default Menu;

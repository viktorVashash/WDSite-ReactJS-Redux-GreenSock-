import React, { Component } from 'react';

class MainView extends Component {
  constructor(props) {
    super(props);

    this.mouseEvent = this.mouseEvent.bind(this);
  }

  componentWillMount() {
    document.addEventListener('mousemove', this.mouseEvent);
  }

  componentDidUpdate() {
    if(this.props.page !== 1) {
      document.removeEventListener('mousemove', this.mouseEvent);
    } else {
      document.addEventListener('mousemove', this.mouseEvent);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseEvent);
  }

  mouseEvent(event) {
    let width = 632;
    let height = 682;
    let uHeight = 10;
    let sWidth = 10;
    let x = (event.pageX - height) / height * uHeight;
    let y = (event.pageY - width) / width * sWidth;

    const backgroundImg = document.getElementById('backgroundImg');
    const wellDressed = document.getElementById('wellDressed');
    const desighnShop = document.getElementById('desighnShop');

    TweenMax.to(backgroundImg, 1, {
      x,
      y,
      ease: Power2.easeOut
    });
    TweenMax.to(wellDressed, 2, {
      x,
      ease: Power2.easeOut
    });
    TweenMax.to(desighnShop, 2, {
      x: -x,
      ease: Power2.easeOut
    });
  }

  render() {
    return(
      <div className="firstView" id="first">
        <div className="backgroundImg">
          <figure id="backgroundImg"></figure>
        </div>
        <div id="home" className="home">
          <h1 id="wellDressed">Well Dressed</h1>
          <img src="imgs/icons/icon.png" />
          <h3 id="desighnShop">designer clothing shop</h3>
        </div>
      </div>
    );
  }
};

export default MainView;

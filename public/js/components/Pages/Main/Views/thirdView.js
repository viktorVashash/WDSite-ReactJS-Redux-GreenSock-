import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'

class ThirdView extends Component {
  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);
    this.onUnload = this.onUnload.bind(this);
  }

  componentDidUpdate() {
    if(this.props.page === 3) {
      setTimeout(() => {
         this.onLoad();
      }, 700);
    } else if(this.props.page === 2) {
       this.onUnload();
    }
  }

  componentWillUnmount() {
    this.onUnload();
  }

  onLoad() {
    TweenMax.fromTo('.thirdView', 0.3, {
      scale: 0.5,
      opacity: 0,
      ease: Power1.easeOut
    }, {
      scale: 1,
      opacity: 1
    });
  }

  onUnload() {
    TweenMax.fromTo('.thirdView', 0.3, {
      scale: 1,
      opacity: 1,
      ease: Power1.easeOut
    }, {
      scale: 0.5,
      opacity: 0
    });
  }

  render() {
    return (
      <div className="thirdView" >
        <div className="googleMapText">
          <h1 className="googleMapHeader">Find us:</h1>
          <p className="googleMapParagraph">uzhgorod, Sobranetska vulytsia, 89</p>
        </div>
        <GoogleMapLoader
          containerElement={ <div className="GoogleMapView" /> }
          googleMapElement={
            <GoogleMap defaultZoom={20} defaultCenter={{lat: 48.63322117551946, lng: 22.2798986826092}} />
          }
        />
      </div>
    )
  }
}

export default ThirdView;

import React, { Component } from 'react';

class SecondView extends Component {
  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);
    this.onUnload = this.onUnload.bind(this);
  }

  componentWillUnmount() {
    this.onUnload();
  }

  componentDidUpdate() {
    if(this.props.page === 2) {
      setTimeout(() => {
         this.onLoad();
      }, 700);
    } else {
       this.onUnload();
    }
  }

  onLoad() {
    TweenMax.fromTo('#firstRow', 0.3, {
      scale: 0.5,
      opacity: 0,
      ease: Power1.easeOut
    }, {
      scale: 1,
      opacity: 1
    });
    TweenMax.fromTo('#secondRow', 0.6, {
      scale: 0.5,
      opacity: 0,
      ease: Power1.easeOut
    }, {
      scale: 1,
      opacity: 1
    });
    TweenMax.fromTo('#thirdRow', 0.9, {
      scale: 0.5,
      opacity: 0,
      ease: Power1.easeOut
    }, {
      scale: 1,
      opacity: 1
    });
  }

  onUnload() {
    TweenMax.to('#firstRow', 1.5, {
      scale: 0.5,
      opacity: 0,
      ease: Power1.easeOut
    });
    TweenMax.to('#secondRow', 1.3, {
      scale: 0.5,
      opacity: 0,
      ease: Power1.easeOut
    });
    TweenMax.to('#thirdRow', 1, {
      scale: 0.5,
      opacity: 0,
      ease: Power1.easeOut
    });
  }

  render() {
    return (
      <div className="secondView" id="second" >
        <div className="row_1">
          <article className="row_1_article">
            <div className="row_1_text">
              <header>
                <h2 className="row_1_head">ONE COPY</h2>
              </header>
              <span>
                <p className="row_1_p">One size. One exist. Natural fabric.</p>
              </span>
            </div>
            <figure className="imgRow"></figure>
          </article>
        </div>
        <div className="row_2">
          <div className="row_2_section">
            <article className="row_1_article">
              <div className="row_1_text">
                <header>
                  <h2 className="row_1_head">BE UNIQUE</h2>
                </header>
                <span>
                  <p className="row_1_p">The best choice. The highest quality.</p>
                </span>
              </div>
              <figure className="imgRow middle"></figure>
            </article>
          </div>
          <div className="row_2_section">
            <article className="row_1_article">
              <div className="row_1_text">
                <header>
                  <h2 className="row_1_head">WITH LOVE FOR YOU</h2>
                </header>
                <span>
                  <p className="row_1_p">Cause youre special</p>
                </span>
              </div>
              <figure className="imgRow last"></figure>
            </article>
          </div>
        </div>


      </div>
    );
  }
};

export default SecondView;

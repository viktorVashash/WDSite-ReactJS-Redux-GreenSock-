import React, { Component } from 'react';
import VirtualScroll from 'virtual-scroll';
import { FirstView, SecondView, ThirdView } from './Views/views';
import { First, Second, Third } from './Navigation/navigation';
import Circle from './circle';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

    this.pages = 3;
    this.blockMove = false;
    this.activeSection = '';
    this.activeSectionIndex = 1;
    this.direction = '';
    this.hamburgerIconRect = {};

    this.wheelEvent = this.wheelEvent.bind(this);
    this.downClick = this.downClick.bind(this);
    this.setMenuStatus = this.setMenuStatus.bind(this);
  }

  componentDidMount() {
    this.moveTo(this.activeSectionIndex);
    this.virtualScroll = new VirtualScroll({
      preventTouch: true,
      touchMultiplier: 1
    });

    this.virtualScroll.on(this.wheelEvent);
  }

  componentWillUpdate(props, state) {
    if(props.homePage !== this.props.homePage) {
      this.moveTo(props.homePage, this.props.homePage);
    }
  }

  componentWillUnmount() {
    this.virtualScroll.off(this.wheelEvent);
  }

  setBlockMove() {
    const self = this;
    this.blockMove = true;
    setTimeout(() => {
      self.blockMove = false;
    }, 2000);
  }

  moveTo(props, state) {
    this.activeSectionIndex = props;
    this.setActiveSection(state);
  }

  setActiveSection(state) {
    const self = this;

    if(this.activeSectionIndex < 1) {
      this.activeSectionIndex = 1;
    } else if (this.activeSectionIndex > self.pages) {
      this.activeSectionIndex = self.pages;
    }

    this.setBlockMove();
    this.oldSectionEl = this.activeSection;

    const ref = this.refs[`section_${this.activeSectionIndex}`];

    this.activeSection = ReactDOM.findDOMNode(ref);
    this.prevMoveToIndex = state;
    this.activeSectionIndex > state ? this.direction = 'down' : this.direction = 'up';

    if(this.direction === 'down') {
      TweenMax.set(this.activeSection, {
        y: 0,
        zIndex: 4
      });
      TweenMax.fromTo(this.oldSectionEl, 1.5, {
        y: `${0}%`,
        zIndex: 5
      }, {
        y: `${-100}%`,
        ease: Expo.easeInOut,
        onComplete() {
          TweenMax.set(self.oldSectionEl, {
            clearProps: "z-index"
          });
        }
      });
    } else if(this.direction === 'up') {
      TweenMax.set(this.oldSectionEl, {
        zIndex: 4
      });
      TweenMax.fromTo(this.activeSection, 1.5, {
        y: `${-100}%`,
        zIndex: 5
      }, {
        y: `${0}%`,
        ease: Expo.easeInOut,
        onComplete() {
          TweenMax.set(self.oldSectionEl, {
            clearProps: "z-index"
          });
        }
      });
    }
  }

  setMenuStatus(hamburgerIconRect) {
    this.hamburgerIconRect = hamburgerIconRect;
    this.props.menu(!this.props.menuStatus);
  }

  downClick(event) {
    event.preventDefault();
    this.props.moveToIndex(2);
  }

  wheelEvent(event) {
    event.originalEvent.preventDefault();
    if(event.deltaY < 0  && !this.blockMove && this.activeSectionIndex < this.pages) {
      this.props.moveToIndex(this.activeSectionIndex + 1)
    } else if (event.deltaY > 0  && !this.blockMove && this.activeSectionIndex > 1) {
      this.props.moveToIndex(this.activeSectionIndex - 1);
    }
  }

  render() {
    return(
      <div id="mainView" className="mainView">
        <FirstView ref="section_1" page={this.activeSectionIndex} />
        <SecondView ref="section_2" page={this.activeSectionIndex} />
        <ThirdView ref="section_3" page={this.activeSectionIndex} />
        <nav className="navigationMenu">
          <First page={1} homePage={this.props.homePage} moveToIndex={this.props.moveToIndex} />
          <Second page={2} homePage={this.props.homePage} moveToIndex={this.props.moveToIndex} />
          <Third page={3} homePage={this.props.homePage} moveToIndex={this.props.moveToIndex} />
        </nav>
        <Circle downClick={this.downClick}/>
      </div>
    );
  }
}

export default MainView;

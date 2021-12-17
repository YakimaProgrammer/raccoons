import { Component } from "react";
import style from "./index.module.css";
import arrow from "./resources/caret-left-fill.svg";

function mod(n, m) {
  return ((n % m) + m) % m;
}

function NavButton(props) {
  return (
    <div onClick={props.onClick} className={style.navButton}>
      {
        (props.facing === "left") ?
          <img src={arrow} alt="Go back." />
          :
          <img src={arrow} className={style.flipped} alt="Go forward." />
      }
    </div>
  )
}

export class BasicSlideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {slide: 0, transitionState: "done" /* "fadeOut" */};

    this.onNavigationPress = this.onNavigationPress.bind(this);
    this.onNavigationKeyDown = this.onNavigationKeyDown.bind(this);

    this.timer = setInterval(() => this.changeSlide(1), 5000);
  }

  render() {
    return (
      <div 
        onKeyDown={this.onNavigationKeyDown} 
        className={style.asTable}
        tabIndex="0"
      >
        <NavButton 
          onClick={() => this.onNavigationPress(-1)} 
          facing="left" 
        />

        <div 
          className={
            style.navContent + 
            " " + 
            (this.state.transitionState === "fadeOut" ? style.fadeOut : "")
          }
        >
          <div className={style.content} style={{"height": this.props.height}}>
            {this.props.children[this.state.slide]}
          </div>
        </div>

        <NavButton 
          onClick={() => this.onNavigationPress(1)} 
          facing="right" 
        />
      </div>
    )
  }

  changeSlide(direction) {
    this.setState({transitionState: "fadeOut"});
    setTimeout(() => this.setState({
      slide: mod(this.state.slide + direction, this.props.children.length), 
      transitionState: "done"
    }), 500);
  }

  onNavigationPress(direction) {
    clearInterval(this.timer);
    this.changeSlide(direction);
  }

  onNavigationKeyDown(event) {
    console.log(event.key);
    if (event.key === "ArrowLeft") {
      this.onNavigationPress(-1);
    } else if (event.key === "ArrowRight" || event.key === " ") {
      this.onNavigationPress(1);
    }
  }
}

export function SimpleSlide(props) {
  return (
    <div className={style.simpleSlide}>
      <img className={style.simpleSlideImg} src={props.src} alt={props.alt || ""} />
      <p className={style.simpleSlideText}><b>{props.desc}</b></p>
    </div>
  )
}
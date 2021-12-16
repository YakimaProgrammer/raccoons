import { Component, createRef } from 'react';
import style from "./index.module.css";

//I honestly probably should have just used Redux

var currentId = 0;

function getNextId() {
  return currentId += 1;
}

/*
const callbacks = {};

const observer = new IntersectionObserver(
  ([entry]) => {
    console.log(entry);
    callbacks[entry.target.id](entry.intersectionRatio);
  }, { threshold: 1 }
);
*/

const callbacks = {};

const watched = [];

//Kind of a magic number
const minVisible = 400;

function onScroll() {
  for (var elem of watched) {
    var rect = elem.getBoundingClientRect();

    if (
//      rect.top >= 0 &&
//      rect.left >= 0 &&
      rect.bottom - minVisible <= (window.innerHeight || document.documentElement.clientHeight)// &&
//      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      callbacks[elem.id]()
    }
  }
}

document.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll)

function VeryBasicSlide(props) {
  return (
    <div 
      className={style.slide + " " + (props.isVisible ? style.active : "")} 
      ref={props.passedRef} 
      id={props.id}
    >
      {props.children}
    </div>
  )
}

export class BasicSlide extends Component {
  constructor(props) {
    super(props);
    
    this.state = {isVisible: false};
    this.ref = createRef();
    this.id = "Slide#" + getNextId();

    callbacks[this.id] = () => {this.setState({isVisible: true})};
  }

  render() {
    return (
      <VeryBasicSlide 
        id={this.id} 
        isVisible={this.state.isVisible} 
        passedRef={this.ref} 
      >
        {this.props.children}
      </VeryBasicSlide>
    )
  }

  componentDidMount() {
    watched.push(this.ref.current);
  }
}
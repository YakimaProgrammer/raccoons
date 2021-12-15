import { Component, createRef } from 'react';
import style from "./index.module.css";

//I honestly probably should have just used Redux

var currentId = 0;

function getNextId() {
  return currentId += 1;
}

const callbacks = {};

const observer = new IntersectionObserver(
  ([entry]) => {
    callbacks[entry.target.id]();
  }, { rootMargin: '0px', threshold: 1.0 }
);

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
    observer.observe(this.ref.current);
  }
}
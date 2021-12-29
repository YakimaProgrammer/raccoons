import {default as LineTo} from "react-lineto";
import { Component } from "react";

//foods
import acorn from "../../resources/flaticon.com/acorn.png";
import bud from "../../resources/flaticon.com/bud.png";
import crayfish from "../../resources/flaticon.com/crayfish.png";
import grass from "../../resources/flaticon.com/grass.png";
import mussel from "../../resources/flaticon.com/mussel.png";
import apple from "../../resources/google-noto/apple.svg";
import bird from "../../resources/google-noto/bird.svg";
import cherry from "../../resources/google-noto/cherry.svg";
import corn from "../../resources/google-noto/corn.svg";
import fish from "../../resources/google-noto/fish.svg";
import frog from "../../resources/google-noto/frog.svg";
import insect from "../../resources/google-noto/insect.svg";
import mouse from "../../resources/google-noto/mouse.svg";
import reptile from "../../resources/google-noto/reptile.svg";
import trash from "../../resources/icons.getbootstrap.com/trash.svg";

import raccoon from "../../resources/google-noto/raccoon.svg";

//predators
import cougar from "../../resources/flaticon.com/cougar.png";
import coyote from "../../resources/flaticon.com/coyote.png";
import dog from "../../resources/flaticon.com/dog.png";
import hawk from "../../resources/flaticon.com/hawk.png";
import owl from "../../resources/flaticon.com/owl.png";
import snake from "../../resources/flaticon.com/snake.png";
import person from "../../resources/flaticon.com/person.png";

import style from "./index.module.css";

//https://www.maine.gov/ifw/docs/raccoon-speciesassessmant.pdf

const prey = [style.acorn, style.bud, style.crayfish, style.grass, style.mussel, style.apple, style.bird, style.cherry, style.corn, style.fish, style.frog, style.insect, style.mouse, style.reptile, style.trash];
const predators = [style.cougar, style.coyote, style.dog, style.hawk, style.owl, style.snake, style.person];

export function PageLoadWatcher(C){
  return class extends Component {
    constructor(props) {
      super(props);
  
      this.state = {pageLoaded: false};
  
      if (document.readyState !== "complete") {
        window.addEventListener("load", () => this.setState({pageLoaded: true}));
      } else {
        this.setState({pageLoaded: true})
      }
  
      window.addEventListener("resize", () => {this.setState({pageLoaded: false}); this.setState({pageLoaded: true})});
    }
  
    render() {
      return <C pageLoaded={this.state.pageLoaded} {...this.props} />
    }
  }
}

//LineTo is rather finicky, so I have to micromanage it along a little bit
function Slide4Component(props) {
  return (
    <div>
      <h2>Raccoons in the food web</h2>
      <div className={style.foodsContainer}>
        <div className={style.foods}>
          <img src={acorn} className={style.acorn} alt='' />
          <img src={bud} className={style.bud} alt='' />
          <img src={crayfish} className={style.crayfish} alt='' />
          <img src={grass} className={style.grass} alt='' />
          <img src={mussel} className={style.mussel} alt='' />
          <img src={apple} className={style.apple} alt='' />
          <img src={bird} className={style.bird} alt='' />
          <img src={cherry} className={style.cherry} alt='' />
          <img src={corn} className={style.corn} alt='' />
          <img src={fish} className={style.fish} alt='' />
          <img src={frog} className={style.frog} alt='' />
          <img src={insect} className={style.insect} alt='' />
          <img src={mouse} className={style.mouse} alt='' />
          <img src={reptile} className={style.reptile} alt='' />
          <img src={trash} className={style.trash} alt='' />
        </div>
      </div>

      <img src={raccoon} className={style.bigRaccoon} alt="" />

      <div className={style.foods}>
        <img src={cougar} className={style.cougar} alt='' />
        <img src={coyote} className={style.coyote} alt='' />
        <img src={dog} className={style.dog} alt='' />
        <img src={hawk} className={style.hawk} alt='' />
        <img src={owl} className={style.owl} alt='' />
        <img src={snake} className={style.snake} alt='' />
        <img src={person} className={style.person} alt='' />
      </div>

      {props.pageLoaded ? prey.map((p, index) => <LineTo key={index} from={p} to={style.bigRaccoon} delay={0} zIndex={-1} borderColor="black" />) : null}
      {props.pageLoaded ? predators.map((p, index) => <LineTo key={index} from={style.bigRaccoon} to={p} delay={0} zIndex={-1} borderColor="black" />) : null}
    </div>
  )
}

export const Slide4 = PageLoadWatcher(Slide4Component);
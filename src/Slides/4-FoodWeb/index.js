import { LineTo } from 'react-lineto';

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

export function Slide4() {
  return (
    <div ref={this.imgsRef}>
      <h2>Raccoon's role in the food web</h2>
      <div className={style.foodsContainer}>
        <div className={style.foods}>
          <img src={acorn} alt="" />
          <img src={bud} alt="" />
          <img src={crayfish} alt="" />
          <img src={grass} alt="" />
          <img src={mussel} alt="" />
          <img src={apple} alt="" />
          <img src={bird} alt="" />
          <img src={cherry} alt="" />
          <img src={corn} alt="" />
          <img src={fish} alt="" />
          <img src={frog} alt="" />
          <img src={insect} alt="" />
          <img src={mouse} alt="" />
          <img src={reptile} alt="" />
          <img src={trash} alt="" />
        </div>
      </div>

      <img src={raccoon} className={style.bigRaccoon} alt="" />

      <div className={style.foods}>
        <img src={cougar} alt="" />
        <img src={coyote} alt="" />
        <img src={dog} alt="" />
        <img src={hawk} alt="" />
        <img src={owl} alt="" />
        <img src={snake} alt="" />
        <img src={person} alt="" />
      </div>

    </div>
  )
}
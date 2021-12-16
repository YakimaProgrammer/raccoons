import style from "./index.module.css";

import world from "./resources/world.svg";
import raccoon from "../../resources/raccoon.svg";

export function Slide2() {
  return (
    <div className={style.container}>
      <h2>Range</h2>

      <div className={style.mapContainer}>
        <img className={style.map} src={world} />
        <img className={style.raccoon1} src={raccoon} />
        <img className={style.raccoon2} src={raccoon} />
        <img className={style.raccoon3} src={raccoon} />
        <img className={style.raccoon4} src={raccoon} />
        <img className={style.raccoon5} src={raccoon} />
        <img className={style.raccoon6} src={raccoon} />
        <img className={style.raccoon7} src={raccoon} />
        <img className={style.raccoon8} src={raccoon} />
        <img className={style.raccoon9} src={raccoon} />
      </div>
    </div>
  )
}
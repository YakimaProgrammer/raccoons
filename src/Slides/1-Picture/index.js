import style from "./index.module.css";
import raccoon from "./resources/raccoon.jpg"

export function Slide1() {
  return (
    <div>
      <h1>Raccoons - <i>Procyon lotor</i></h1>
      <img className={style.coverImg} src={raccoon} alt="A raccoon hisses angrily" />
    </div>
  )
}
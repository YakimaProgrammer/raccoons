import style from "./index.module.css";
import raccoon from "./resources/raccoon.jpg"

export function Slide1(props) {
  return (
    <div>
      <h1 className={style.title}>Raccoons</h1>
      <img className={style.coverImg} src={raccoon} alt="A raccoon hisses angrily" />
    </div>
  )
}
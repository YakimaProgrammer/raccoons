import { PageLoadWatcher } from "../../PageLoaderWatcher";
import LineTo from "react-lineto";
import style from "./index.module.css";
import raccoon from "../../resources/google-noto/raccoon.svg";

const raccoons = [style.targetRaccoon1, style.targetRaccoon2, style.targetRaccoon3, style.targetRaccoon4];

function Slide5Component(props) {
  return (
    <div>
      <h2>What is the reproductive capacity of a raccoon?</h2>
      <div className={style.asTable}>
        <div>
          <img src={raccoon} className={style.srcRaccoon + " " + style.inTheMiddle} alt="" />
        </div>
        <div>
          <div className={style.verticalRaccoons}>
            <img src={raccoon} className={style.targetRaccoon1} alt="" />
            <img src={raccoon} className={style.targetRaccoon2} alt="" />
            <img src={raccoon} className={style.targetRaccoon3} alt="" />
            <img src={raccoon} className={style.halfRaccoon + " " + style.targetRaccoon4} alt="" />
          </div>
        </div>
      </div>
      
      {props.pageLoaded ? raccoons.map((p, index) => <LineTo key={index} from={p} to={style.srcRaccoon} delay={0} zIndex={-1} borderColor="black" />) : null}
      
    </div>
  )
}

export const Slide5 = PageLoadWatcher(Slide5Component);
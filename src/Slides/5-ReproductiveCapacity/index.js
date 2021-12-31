import { MoreDetails } from "../../MoreDetails";
import { PageLoadWatcher } from "../../PageLoaderWatcher";
import { Citation } from "../12-SourcesCited";
import LineTo from "react-lineto";
import style from "./index.module.css";
import tableStyle from "../../resources/table.module.css";
import raccoon from "../../resources/google-noto/raccoon.svg";

const raccoons = [style.targetRaccoon1, style.targetRaccoon2, style.targetRaccoon3, style.targetRaccoon4];

function Slide5Component(props) {
  return (
    <div>
      <h2>What is the reproductive capacity of a raccoon?<Citation name="reproduction" /></h2>
      <div className={tableStyle.asTable}>
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

      <MoreDetails>The pregnancy rate of adult female raccoons is 96% compared to 66% in one-year-old raccoons.</MoreDetails>
      <MoreDetails>The average litter size for raccoons ranges between 1-7, averaging at 3.9 for adults, and 3.6 for one-year-olds.</MoreDetails>

      {props.pageLoaded ? raccoons.map((p, index) => <LineTo key={index} from={p} to={style.srcRaccoon} delay={0} zIndex={-1} borderColor="black" />) : null}
      
    </div>
  )
}

export const Slide5 = PageLoadWatcher(Slide5Component);
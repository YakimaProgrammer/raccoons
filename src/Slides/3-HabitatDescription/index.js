import { Citation } from "../12-SourcesCited";
import { BasicSlideshow } from "../../BasicSlideshow";
import tableStyle from "../../resources/table.module.css";
import style from "./index.module.css";

import forest from "./resources/stocksy.com.jpg";
import urban from "./resources/treehugger.com.webp";
import farm from "./resources/tarawildlife.com.webp";
import marsh from "./resources/ncsu.edu.jpg";

import forestChart from "./resources/earthobservatory.nasa.gov.png";
import marshChart from "./resources/nrcs.usda.gov.svg";

function FastFacts(props) {
  return (
    <ul>
      {props.children}
    </ul>
  )
}

export function Slide3() {
  return (
    <BasicSlideshow>
      <img className={style.biomeExample} src={forest} />
      <img className={style.biomeExample} src={forestChart} />
    </BasicSlideshow>
  )
}

function OldSlide3() {
  return (
    <div>
      <h2>Habitat<Citation name={["maine", "chesapeakebay"]} /></h2>
      <BasicSlideshow slideChangeDelay={5000}>
        <div className={style.habitatInfo}>
          <h3>Forests</h3>
          <div className={tableStyle.asTable}>
            <div>
              <img className={style.biomeExample} src={forest} />
            </div>
            <div>
              <div className={style.overview}>
                <img className={style.biomeExample} src={forestChart} />
                <ul className={style.fastFacts}>
                  <li>Moderate average temperatures</li>
                  <li>Consistent, abundant rainfall</li>
                  <li>Long, warm summers</li>
                  <li>Cold winters</li>
                  <li>Broad-leaf deciduous trees</li>
                  <li>Slower rate of decomposition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={style.habitatInfo}>
          <h3>Urban Areas</h3>
          <img className={style.biomeExample} src={urban} />
        </div>

        <div className={style.habitatInfo}>
          <h3>Farms</h3>
          <img className={style.biomeExample} src={farm} />
        </div>

        <div className={style.habitatInfo}>
          <h3>Swamps &amp; Marshes</h3>
          <div className={tableStyle.asTable}>
            <div>
              <img className={style.biomeExample} src={marsh} />
            </div>
            <div>
            <img className={style.biomeExample} src={marshChart} />
            </div>
          </div>
        </div>
      </BasicSlideshow>
    </div>
  )
}
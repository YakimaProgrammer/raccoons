import { Citation } from "../12-SourcesCited";
import { BasicSlideshow } from "../../BasicSlideshow";
import { MoreDetails } from "../../MoreDetails";

import tableStyle from "../../resources/table.module.css";
import style from "./index.module.css";

import forest from "./resources/stocksy.com.jpg";
import urban from "./resources/treehugger.com.webp";
import farm from "./resources/tarawildlife.com.webp";
import marsh from "./resources/ncsu.edu.jpg";

import forestChart from "./resources/earthobservatory.nasa.gov.png";
import marshChart from "./resources/nrcs.usda.gov.svg";

export function Slide3() {
  return (
    <div>
      <h2>Habitat<Citation name={["marshes", "maine", "textbook", "chesapeakebay"]} /></h2>
      <BasicSlideshow slideChangeDelay={10000}>
        <div>
          <h3>Forests</h3>
          <div className={tableStyle.asTable}>
            <div>
              <img className={style.biomeExample} src={forest} />
              <p className={style.center}>Although not at Knoxville, Tennessee, a raccoon can be seen foraging for insects in the soil</p>
            </div>
            <div>
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

        <div>
          <h3>Urban Areas</h3>
          <img className={style.biomeExample} src={urban} />
          <p className={style.center}>Raccoons are notorious for breaking into houses and garbage cans, earning them the moniker of <i>trash panda</i></p>
        </div>

        <div>
          <h3>Farms</h3>
          <img className={style.biomeExample} src={farm} />
          <p className={style.center}>Raccoons hold no qualms against raiding local farmland for food</p>
        </div>

        <div>
          <h3>Swamps &amp; Marshes</h3>
          <div className={tableStyle.asTable}>
            <div>
              <img className={style.biomeExample} src={marsh} />
              <p className={style.center}>While not at the marsh found at Whitewood Township, South Dakota, a raccoon can be seen fishing for its next meal in the water</p>
            </div>
            <div>
              <img className={style.biomeExample} src={marshChart} />
              <ul className={style.fastFacts}>
                <li>Highly productive ecosystem</li>
                <li>Some wetlands go years without water</li>
                <li>Others have water year-round</li>
                <li>Important habitat for many foundation species</li>
                <li>Lack peat soils</li>
                <li>Lacky of woody vegitation</li>
                <li>Abundance of grasses and sedges that can grow in soggier conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </BasicSlideshow>
      <MoreDetails>These masked bandits won't just eat just about anything - they'll also live just about anywhere with water as well!</MoreDetails>
    </div>
  )
}
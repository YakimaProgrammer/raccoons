import { DistributionMap } from "../2-DistributionMap";
import { Citation } from "../12-SourcesCited";
import tableStyle from "../../resources/table.module.css";
import style from "./index.module.css";

export function Slide6() {
  return (
    <div>
      <h2>Functional role of raccoons in their environment<Citation name={["range", "skedaddle"]}/></h2>
      <div className={tableStyle.asTable}>
        <div>
          <ul className={style.rolesOfRaccoons}>
            <li><b>Native</b> to North America</li>
            <li><b>Non-Native</b> and <b>invasive</b> everywhere else</li>
            <li>A <b>generalist</b> that will survive almost anywhere with water</li>
            <li><b>Contribute to soil turnover</b> by foraging for insects</li>
            <li><b>Aid plant reproduction</b> by dispersing seeds</li>
            <li><b>Predator of wasps</b>, which helps local bee populations</li>
          </ul>
        </div>
        <div>
          <DistributionMap showInvasive={true} />
        </div>
      </div>
    </div>
  )
}
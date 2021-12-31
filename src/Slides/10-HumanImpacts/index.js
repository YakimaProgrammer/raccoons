import { Citation } from "../12-SourcesCited";
import tableStyle from "../../resources/table.module.css";
import style from "./index.module.css";

import redfern from "./resources/redfern.jpg";
import trash from "./resources/havahart.com.webp";
import house from "./resources/cropped-sanjosepestwildlife.com.jpg";

function Impact(props) {
  return (
    <div>
      <h3>{props.area}<Citation name={props.source} /></h3>
      <img src={props.src} alt="" />
    </div>
  )
}

export function Slide10() {
  return (
    <div>
      <h2>How are raccoons impacted by human activities?</h2>
      <div className={tableStyle.asTable + " " + style.tableOverride}>
        <Impact area="Housing" src={house} source="maine"/>
        <Impact area="Hunting" src={redfern} source="hunting" />
        <Impact area="Feeding" src={trash} source="depOfAg" />
      </div>
    </div>
  )
}
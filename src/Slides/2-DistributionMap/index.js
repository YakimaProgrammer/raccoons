import { Citation } from "../12-SourcesCited";
import style from "./index.module.css";

import world from "./resources/world.svg";
import raccoon from "../../resources/google-noto/raccoon.svg";

//Source: https://www.nationalgeographic.com/animals/article/raccoons-expanding-range-climate-change

export function RangeMap(props) {
  return (
    <div className={style.mapContainer + " " + (props.showInvasive ? style.invasive : "")}>
      <img className={style.map} src={world} alt="A map of the world showing where raccoons can be found." />
      <img className={style.north_america} src={raccoon} alt="Raccoons are native to North America."/>
      <img className={style.europe} src={raccoon} alt="Raccoons have been found in Europe."/>
      <img className={style.south_africa} src={raccoon} alt="Raccoons have been found in south Afria." />
      <img className={style.south_america} src={raccoon} alt="Raccoons have been found in South America." />
      <img className={style.cuba} src={raccoon} alt="Raccoons have been found in Cuba." />
      <img className={style.japan} src={raccoon} alt="Raccoons have been found in Japan." />
      <img className={style.australia} src={raccoon} alt="Raccoons have been found in Australia." />
      <img className={style.china} src={raccoon} alt="Raccoons have been found in China." />
      <img className={style.east_middle_east_area} src={raccoon} alt="Raccoons have been found in the Iran / east Middle East area." />
    </div>
  )
}

export function Slide2() {
  return (
    <div className={style.container}>
      <h2>Range <Citation name="range" /></h2>
      <div className={style.narrowMapContainer}>
        <RangeMap />
      </div>
    </div>
  )
}
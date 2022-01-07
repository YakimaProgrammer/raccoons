import { Citation } from "../12-SourcesCited";
import { MoreDetails } from "../../MoreDetails";
import style from "./index.module.css";

import world from "./resources/world.svg";
import noSign from "./resources/freesvg.org.svg";
import raccoon from "../../resources/google-noto/raccoon.svg";
//Source: https://www.nationalgeographic.com/animals/article/raccoons-expanding-range-climate-change

function NoRaccoon(props) {
  return (
    <div className={props.className + " " + style.noRaccoon}>
      <img src={raccoon} alt={`Raccoons are currently not found in ${props.country}`} />
      <img src={noSign} alt="" />
    </div>
  )
}

export function DistributionMap(props) {
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
      <NoRaccoon className={style.northern_russia} country="northern Russia" />
      <NoRaccoon className={style.northern_afria} country="northern Africa" />
      <NoRaccoon className={style.northern_south_america} country="northern South America" />
      <NoRaccoon className={style.northern_canada} country="northern Canada" />
      <NoRaccoon className={style.india} country="India" />
      <NoRaccoon className={style.saudiArabiaArea} country="the Saudi Arabia area" />
      <NoRaccoon className={style.northern_australia} country="northern Australia" />
      <NoRaccoon className={style.indonesian_area} country="Indonesian area" />
    </div>
  )
}

export function Slide2() {
  return (
    <div className={style.container}>
      <h2>Distribution<Citation name="range" /></h2>
      <div className={style.narrowMapContainer}>
        <DistributionMap />
      </div>
      <MoreDetails>Although they're native to North America, raccoons can be found in many places across the globe</MoreDetails>
    </div>
  )
}
import style from "./index.module.css";

import world from "./resources/world.svg";
import raccoon from "../../resources/raccoon.svg";

//Source: https://www.nationalgeographic.com/animals/article/raccoons-expanding-range-climate-change

export function Slide2() {
  return (
    <div className={style.container}>
      <h2>Range</h2>

      <div className={style.mapContainer}>
        <img className={style.map} src={world} alt="A map of the world showing where raccoons can be found." />
        <img className={style.raccoon1} src={raccoon} alt="Raccoons are native to North America."/>
        <img className={style.raccoon2} src={raccoon} alt="Raccoons have been found in Europe."/>
        <img className={style.raccoon3} src={raccoon} alt="Raccoons have been found in south Afria." />
        <img className={style.raccoon4} src={raccoon} alt="Raccoons have been found in South America." />
        <img className={style.raccoon5} src={raccoon} alt="Raccoons have been found in Cuba." />
        <img className={style.raccoon6} src={raccoon} alt="Raccoons have been found in Japan." />
        <img className={style.raccoon7} src={raccoon} alt="Raccoons have been found in Australia." />
        <img className={style.raccoon8} src={raccoon} alt="Raccoons have been found in China." />
        <img className={style.raccoon9} src={raccoon} alt="Raccoons have been found in the Iran / east Middle East area." />
      </div>
    </div>
  )
}
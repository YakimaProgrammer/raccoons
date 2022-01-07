import { Citation } from "../12-SourcesCited";
import style from "./index.module.css";

import wash from "./resources/animals.howstuffworks.com.webp";
import biohazard from "../../resources/google-noto/biohazard.svg";
import raccoon from "../../resources/google-noto/raccoon.svg";

export function Slide11() {
  return (
    <div>
      <h2>Fast facts</h2>
      <div className={style.multiRowTable}>
        <div>
          <div>
            <h3>Raccoons are known for "washing" their food. In reality, their forepaws become more sensitive when wet, allows them to better examine their food.<Citation name={["howstuffworks","pbs"]} /></h3>
          </div>
          <div>
            <h3>Raccoons account for 30.3% of reported rabies incidence in wild animals<Citation name="cdc" /></h3>
          </div>
          <div>
            <h3>One hypothesis holds that the mask around a raccoon's eyes helps to reduce the effects of glare and enhance its night vision<Citation name="pbs" /></h3>
          </div>
        </div>
        <div>
          <div>
            <img className={style.icon} src={wash} alt="" />
          </div>
          <div>
            <img className={style.icon} src={biohazard} alt="" />
          </div>
          <div>
            <img className={style.icon} src={raccoon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
import { SimpleSlide, BasicSlideshow } from "../../BasicSlideshow";

import world from "../2/resources/world.svg";
import raccoon from "../../resources/raccoon.svg";

export function Slide3() {
  return (
    <BasicSlideshow height="30vh">
      <SimpleSlide src={raccoon} desc="RACCOON" />
      <SimpleSlide src={world} desc="The world as we know it" />
    </BasicSlideshow>
  )
}
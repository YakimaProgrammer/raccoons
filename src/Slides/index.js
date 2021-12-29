import { BasicSlide } from "../BasicSlide"
import { Slide1 } from "./1 - Picture";
import { Slide2 } from "./2 - Distribution map";
import { Slide3 } from "./3 - Habitat description";

export function Slides(props) {
  return (
    <div>
      <BasicSlide>
        <Slide1 />
      </BasicSlide>

      <BasicSlide>
        <Slide2 />
      </BasicSlide>

      <BasicSlide>
        <Slide3 />
      </BasicSlide>
    </div>
  )
}
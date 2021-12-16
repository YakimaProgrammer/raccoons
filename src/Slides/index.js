import { BasicSlide } from "../BasicSlide"
import { Slide1 } from "./1";
import { Slide2 } from "./2";
export function Slides(props) {
  return (
    <div>
      <BasicSlide>
        <Slide1 />
      </BasicSlide>

      <BasicSlide>
        <Slide2 />
      </BasicSlide>
    </div>
  )
}
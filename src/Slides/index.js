import { BasicSlide } from "../BasicSlide"
import { Slide1 } from "./1-Picture";
import { Slide2 } from "./2-DistributionMap";
import { Slide3 } from "./3-HabitatDescription";
import { Slide4 } from "./4-FoodWeb";
import { Slide5 } from "./5-ReproductiveCapacity";
import { Slide6 } from "./6-FunctionalRole";
import { Slide12 } from "./12-SourcesCited";

export function Slides() {
  return (
    <div>
      <BasicSlide>
        <Slide1 />
      </BasicSlide>

      <BasicSlide>
        <Slide2 />
      </BasicSlide>

      <BasicSlide>
        <Slide4 />
      </BasicSlide>

      <BasicSlide>
        <Slide5 />
      </BasicSlide>

      <BasicSlide>
        <Slide6 />
      </BasicSlide>

      <BasicSlide>
        <Slide12 />
      </BasicSlide>
    </div>
  )
}
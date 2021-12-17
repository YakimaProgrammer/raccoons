import { SimpleSlide, BasicSlideshow } from "../../BasicSlideshow";

import woodlands from "./resources/ecology.fnal.gov/woodland.jpg";
import wetlands from "./resources/ecology.fnal.gov/wetland.jpg";
import tree from "./resources/slate.com/tree.webp";

/*
  <SimpleSlide src={woodlands} desc="Woodland areas are one of the prefered habitats for raccoons" alt="A deciduous forest with leaf litter and a small pool of water." />
  <SimpleSlide src={wetlands} desc="Raccoons can also be found in wetland areas" alt="A panorama of a marshy forest. A thick, still layer of water covers everything, broken up by the numberous trees and bushes dotting the landscape." />
  <SimpleSlide src={tree} desc="Raccoons are becoming increasingly prevalent in urban areas" alt="A raccoon stares at the camara while clinging to a tree. Buildings can be seen in the background." />
*/

export function Slide3() {
  return (
    <div>
      <h2>Habitat</h2>
      <BasicSlideshow>
        <img width="100%" src={woodlands} />
        <img width="100%" src={wetlands} />
        <img width="100%" src={tree} />
      </BasicSlideshow>
    </div>
  )
}
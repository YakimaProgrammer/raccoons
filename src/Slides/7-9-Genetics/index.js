import { Component, createRef, Fragment } from "react";
import { Citation } from "../12-SourcesCited"

import tableStyle from "../../resources/table.module.css";
import style from "./index.module.css";

import biohazard from "../../resources/google-noto/biohazard.svg";

function CustomizableRaccoon(props) {
  return (
    <svg x="0px" y="0px" viewBox="0 0 128 128" >
      <path style={{"fill": props.headColor || "#B0B0B0"}} d="M9.93,67.23c0,0,3.52-5.7,9.01-11.76c2.01-2.21,5.07-5.49,5.21-6.76c0.14-1.27-2.11-8.09-3.24-13.73  c-0.94-4.71-1.41-10.7,0.28-12.53c1.69-1.83,11.23,0.04,16.89,2.82c5.8,2.84,8.77,5.34,9.57,5.35c1,0.01,6.9-4.65,16.05-4.5  s15.63,4.36,16.89,4.36s5.34-3.04,10.98-5.98c6.62-3.45,14.36-3.73,15.91-2.6c1.55,1.13,0.56,9.29-0.56,13.51  c-1.44,5.39-3.87,11.47-3.73,12.6c0.14,1.13,2.6,2.32,7.53,7.81c3.89,4.34,8.66,12.81,8.66,12.81L66.67,79.48L9.93,67.23z"/>
      <path style={{"fill": props.faceColor || "#DEDEDE"}} d="M5.71,75.12c0,0.84,8.73,5.63,8.73,5.63s-10.42,3.8-10.42,4.5c0,1.13,15.91,16.75,31.53,22.1  c13.02,4.46,40.22,9.99,61.94-1.2c18.86-9.71,25.06-17.25,25.06-18.37s-8.45-5.63-8.45-5.63s8.87-6.05,8.87-6.9  c0-0.84-3.52-7.04-4.65-8.87s-4.5-7.18-5.91-7.74c-1.41-0.56-27.73-11.54-36.46-5.49c-4.56,3.16-5.21,6.76-5.21,10.28  c0,6.2,0.56,11.54,0.56,11.54s-2.11-2.32-5.77-2.39c-3.45-0.07-5.42,1.9-5.42,1.9s1.06-8.66,0.92-11.9  c-0.14-3.24-0.84-7.32-6.48-10.42c-8.07-4.44-28.19,3.62-34.35,7.11c-4.22,2.39-8.87,5.56-10.42,7.95S5.71,74.13,5.71,75.12z"/>
      <path style={{"fill": "#5D6268"}} d="M30.63,44.33c0.32,0,2.8-2.54,5.44-4.69c2.78-2.27,5.91-4.55,5.91-4.79c0-0.47-11.64-9.01-14.92-6.48  S29.88,44.33,30.63,44.33z"/>
      <path style={{"fill": "#5D6268"}} d="M86.66,34.66c-0.03,0.33,3.2,2.21,5.73,4.5c2.53,2.3,5.02,4.65,5.35,4.6  c0.66-0.09,6.29-12.86,3.66-15.11S86.75,33.73,86.66,34.66z"/>
      <path style={{"fill": "#464C4F"}} d="M43.02,102.52c1.82-0.71,1.5-7.6,4.6-14.27c3.1-6.66,6.66-9.95,8.73-11.36  c2.06-1.41,3.66-1.88,4.79-3.38c1.13-1.5,1.01-8.48-0.09-10.93c-1.5-3.33-5.63-7.93-13.8-7.37c-8.17,0.56-14.92,9.1-18.68,12.67  c-3.75,3.57-9.48,7.41-9.39,14.73c0.09,7.32,6.19,12.39,9.95,15.11C32.88,100.46,40.39,103.55,43.02,102.52z"/>
      <path style={{"fill": "#464C4F"}} d="M71.17,75.02c-1.69-1.13-1.03-6.19-0.94-8.54c0.09-2.35,1.03-8.35,7.41-10.04s9.76,0.84,13.61,3.47  c3.85,2.63,7.79,6.15,10.51,8.07c6.1,4.32,11.26,9.76,9.95,15.58c-1.31,5.82-5.11,9.45-10.98,13.61c-6.1,4.32-11.73,7.88-13.7,6.66  s-1.31-11.26-5.73-18.21C76.9,78.68,73.15,76.34,71.17,75.02z"/>
      <path style={{"fill": "#2F2F2F"}} d="M64.84,82.15c-5.68,0.15-8.29,3.83-8.35,7.04c-0.09,4.55,1.97,5.44,2.91,6.01  c1.17,0.7,2.87,1.24,2.06,2.77c-0.84,1.6-1.64,2.25-5.11,1.97c-2.15-0.17-3.01-2.28-5.16-1.64c-2.86,0.84-0.28,5.57,6.1,5.82  c5.96,0.23,7.88-2.82,7.88-2.82s2.21,3.05,7.6,2.72c5.53-0.34,8.4-5.21,5.21-6.15c-2.29-0.67-1.92,2.16-5.11,2.3  c-2.3,0.1-3.51-0.58-4.36-1.69c-0.47-0.61-0.42-2.06,0.23-2.53c0.66-0.47,3.83-1.69,3.94-6.1C72.77,86.14,70,82.01,64.84,82.15z"/>
      <path style={{"fill": props.eyeColor || "#000101"}} d="M54.47,67.49c0,3.41-1.5,6.36-4.58,6.17c-2.52-0.15-4.67-2.49-4.58-6.17c0.09-3.41,2.02-5.7,4.55-5.7  S54.47,64.08,54.47,67.49z"/>
      <path style={{"fill": props.eyeColor || "#000101"}} d="M85.77,68.08c-0.13,3.41-0.75,6.76-4.32,6.43c-2.52-0.23-4.31-2.53-4.08-6.21  c0.21-3.4,1.97-5.85,4.5-5.75C84.4,62.63,85.89,64.67,85.77,68.08z"/>
      <path style={{"fill": "#B0B0B0"}} d="M47.15,64.51c-0.46,0.93-0.41,2.15,0.28,2.53c0.84,0.47,2.12-0.29,2.58-1.22s0.1-1.99-0.61-2.35  C48.69,63.12,47.61,63.58,47.15,64.51z"/>
      <path style={{"fill": "#B0B0B0"}} d="M79.01,65.54c-0.46,0.93-0.46,1.96,0.23,2.35c0.84,0.47,1.93-0.06,2.39-0.99  c0.46-0.93,0.28-1.95-0.42-2.3S79.47,64.62,79.01,65.54z"/>
    </svg>
  )
}

function RabidRaccoon(props) {
  return (
    <div className={style.rabidRaccoon}>
      <CustomizableRaccoon {...props} eyeColor="#FF0000" />
      <img src={biohazard} className={style.biohazardRaccoon} />
    </div>
  )
}

class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  blend(otherColor, weight) {
    return new Color(
      Math.floor((this.r * weight) + (otherColor.r * (1 - weight))),
      Math.floor((this.g * weight) + (otherColor.g * (1 - weight))),
      Math.floor((this.b * weight) + (otherColor.b * (1 - weight)))
    )
  }

  toString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

//Face
const FACESILVER = new Color(222, 222, 222);
const FACEBROWN = new Color(153, 130, 87);

//Head
const HEADSILVER = new Color(176, 176, 176);
const HEADBROWN = new Color(148, 109, 92);

class RaccoonCustomizer extends Component {
  constructor(props) {
    super(props);

    this.state = {numberOfRings: 5, length: 75, color: 0, rabiesResistant: false};

    this.ringRef = createRef();
    this.lengthRef = createRef();
    this.colorRef = createRef();
    this.rabiesResistantRef = createRef();

    this.onInput = () => this.setState({
      numberOfRings: parseInt(this.ringRef.current.value),
      length: parseInt(this.lengthRef.current.value),
      color: parseInt(this.colorRef.current.value),
      rabiesResistant: this.rabiesResistantRef.current.checked
    });
  }

  render() {
    const Raccoon = this.state.rabiesResistant ? CustomizableRaccoon : RabidRaccoon;

    const faceColor = FACEBROWN.blend(FACESILVER, this.state.color / 100);
    const headColor = HEADBROWN.blend(HEADSILVER, this.state.color / 100);

    return (
      <div className={tableStyle.asTable}>
        <div>
          <div className={style.inputSlidersContainer}>
            <div className={style.inputSliders}>
              <p>Number of tail rings - {this.state.numberOfRings}: <input ref={this.ringRef} onInput={this.onInput} type="range" min="5" max="10" value={this.state.numberOfRings} /></p>
              <p>Color: <input ref={this.colorRef} onInput={this.onInput} type="range" min="0" max="100" value={this.state.color} /></p>
              <p>Length head to tail - {this.state.length} cm: <input ref={this.lengthRef} onInput={this.onInput} type="range" min="75" max="90" value={this.state.length} /></p>
              <p>Rabies resistant? <input type="checkbox" ref={this.rabiesResistantRef} onChange={this.onInput} checked={this.state.rabiesResistant} /></p>
            </div>
          </div>
        </div>

        <div>
          <div className={style.raccoonPreview} style={{"--dynamic-height": (((this.state.length - 75) / 15) * 20 + 10 + (window.innerWidth > window.innerHeight ? 10 : 0)) + "vh"}}>
            <Raccoon headColor={headColor} faceColor={faceColor}/>
          </div>

          <div className={style.tailRings}>
            <svg viewBox={`0 0 ${this.state.numberOfRings * 16 - 16} 32`}>
              {
                new Array(this.state.numberOfRings).fill(0).map((zero, index) => (
                  <Fragment key={index}>
                    <circle cx={index*16} cy={16} r={16} fill={faceColor} />
                    <circle cx={index*16 + 8} cy={16} r={16} fill={headColor} />
                  </Fragment>
                ))
              }
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export function Slide7() {
  return (
    <div>
      <h3>Genetics<Citation name={["pubmed", "britannica"]} /></h3>
      <RaccoonCustomizer />

      <div className={tableStyle.asTable + " " + style.tableOverride}>
        <div>
          <h3>Raccoons are also well adapted to their environment</h3>
          <ul>
            <li>Dexterous forepaws that allow for easy manipulation of the surrounding environment</li>
            <li>Omnivorous, opportunistic eaters</li>
            <li>Proficient swimmers &amp; climbers</li>
            <li>Can enter periods of dormancy in the winter time</li>
          </ul>
        </div>

        <div>
          <h3>Potential future adaptations</h3>
          <ol>
            <li>Although not currently detected in a significant manner in the wild population, raccoons may begin to select for rabies resistance. Rabies, and other diseases, are often the cause of death for raccoons, rather than predation.</li>
            <li>Warming trends in some areas may shorten the periods of food scarcity in the winter, which may lead some raccoons to lose their ability to store up body fat and go dormant for the winter months</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
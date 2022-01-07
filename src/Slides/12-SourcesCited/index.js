import { Component } from "react";
import style from "./index.module.css";

//Unnecessarily convoluted you say? Yes, absolutely. I whole-heartedly agree.
const sources = {
  marshes: <p> U.S. Fish &amp; Wildlife Service . (2017, September 19). <i>Marshes.</i> Ten Thousand Islands National Wildlife Refuge. Retrieved December 30, 2021, from https://www.fws.gov/refuge/Ten_Thousand_Islands/wildlife_and_habitat/habitats/marshes.html</p>,
  reproduction: <p>Asano, M. (2003, March). <i>Reproductive characteristics of the feral raccoon (Procyon lotor) in Hokkaido, Japan.</i> The Journal of veterinary medical science. Retrieved December 30, 2021, from https://pubmed.ncbi.nlm.nih.gov/12679568/ </p>,
  hunting: <p>Bromley, P. T. (1984). <i>Raccoon Biology and Management.</i> Department of Fisheries and Wildlife Sciences. Retrieved December 30, 2021, from https://vtechworks.lib.vt.edu/bitstream/handle/10919/47750/VCE420_801.pdf</p>,
  cdc: <p>Centers for Disease Control and Prevention. (2020, April 6). <i>Wild animals.</i> Rabies in the U.S. and around the world. Retrieved December 30, 2021, from https://www.cdc.gov/rabies/location/usa/surveillance/wild_animals.html</p>,
  howstuffworks: <p>Conger, C. (2008, September 29). <i>Why do raccoons wash their food?</i> HowStuffWorks. Retrieved January 7, 2022, from https://animals.howstuffworks.com/mammals/raccoons-wash-food.htm</p>,
  maine: <p>Connolly, J. M. (1986, March 4). <i>Raccoon Assessment.</i> Maine Department of Inland Fisheries and Wildlife. Retrieved December 30, 2021, from https://www.maine.gov/ifw/docs/raccoon-speciesassessmant.pdf </p>,
  pubmed: <p>Kyle, C. J. (2014, May). <i>Spatial patterns of neutral and functional genetic variations reveal patterns of local adaptation in Raccoon (procyon lotor) populations exposed to raccoon rabies.</i> PubMed. Retrieved December 30, 2021, from https://pubmed.ncbi.nlm.nih.gov/24655158/ </p>,
  britannica: <p>Lariviere, S. (n.d.). <i>Raccoon.</i> Encyclopædia Britannica. Retrieved December 30, 2021, from https://www.britannica.com/animal/raccoon</p>,
  range: <p>Main, D. (2019, July 29). <i>Raccoons are rapidly spreading across Earth-and climate change could help.</i> Animals. Retrieved December 30, 2021, from https://www.nationalgeographic.com/animals/article/raccoons-expanding-range-climate-change </p>,
  textbook: <p>Miller, G. T., &amp; Spoolman, S. (2012). <i>Living in the environment, Ap edition.</i> Brooks/Cole, Cengage Learning.</p>,
  skedaddle: <p>Mueller, M. (2020, September 22). <i>What is a raccoon's role in the ecosystem?</i> Skedaddle Humane Wildlife Control. Retrieved December 30, 2021, from https://www.skedaddlewildlife.com/blog/raccoons-role-in-the-ecosystem/</p>,
  pbs: <p>Public Broadcasting Service. (2012, February 7). <i>Raccoon Facts.</i> Raccoon Nation. Retrieved December 30, 2021, from https://www.pbs.org/wnet/nature/raccoon-nation-raccoon-fact-sheet/7553/</p>,
  chesapeakebay: <p><i>Raccoons. </i>Chesapeake Bay Program. (2021). Retrieved December 30, 2021, from https://www.chesapeakebay.net/S=0/fieldguide/critter/raccoon </p>,
  depOfAg: <p>Tesky, J. L. (1995). <i>Procyon lotor.</i> U.S. Department of Agriculture. Retrieved December 30, 2021, from https://www.fs.fed.us/database/feis/animals/mammal/prlo/all.html </p>,
  depOfFish: <p>Washington Department of Fish &amp; Wildlife. (2021). <i>Raccoons.</i> Retrieved December 30, 2021, from https://wdfw.wa.gov/species-habitats/species/procyon-lotor</p>
};

//This is an indicator of doing something wrong, by the way
const toNumber = Object.keys(sources).map((key, index) => [key, index + 1]).reduce((acc, curr) => {acc[curr[0]] = curr[1]; return acc},{});

//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa
export function Citation(props) {
  const names = typeof props.name === "object" ? props.name : [props.name];

  return (
    <sup>[{names.map((name, index) => <span key={index}>{index > 0 ? "," : null}<a href={"#raccoon-citation" + toNumber[name]}>{toNumber[name]}</a></span>)}]</sup>
  )
}

function Slide12Component(props) {
  return (
    <div>
      <h2>Works cited</h2>
      <ol className={style.citationList}>
        {
          Object.values(sources).map((source, index) => {
            const id = "raccoon-citation" + (index + 1);

            return <li id={id} key={index} className={("#"+id) === props.hash ? style.selectedCitation : null}>{source}</li>
          })
        }
      </ol>
    </div>
  )
}

function WithHash(C) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {hash: window.location.hash};

      window.addEventListener("hashchange", () => this.setState({hash: window.location.hash}));
    }
   
    render() {
      return <C hash={this.state.hash} {...this.props} />
    }
  }
}

export const Slide12 = WithHash(Slide12Component);
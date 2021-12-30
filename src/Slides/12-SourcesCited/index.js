import style from "./index.module.css";

//Unnecessarily convoluted you say? Yes, absolutely. I whole-heartedly agree.
const sources = {
  reproduction: <p>Asano, M. (2003, March). <i>Reproductive characteristics of the feral raccoon (Procyon lotor) in Hokkaido, Japan.</i> The Journal of veterinary medical science. Retrieved December 30, 2021, from https://pubmed.ncbi.nlm.nih.gov/12679568/ </p>,
  maine: <p>Connolly, J. M. (1986, March 4). <i>Raccoon Assessment.</i> Maine Department of Inland Fisheries and Wildlife. Retrieved December 30, 2021, from https://www.maine.gov/ifw/docs/raccoon-speciesassessmant.pdf </p>,
  pubmed: <p>Kyle, C. J. (2014, May). <i>Spatial patterns of neutral and functional genetic variations reveal patterns of local adaptation in Raccoon (procyon lotor) populations exposed to raccoon rabies.</i> PubMed. Retrieved December 30, 2021, from https://pubmed.ncbi.nlm.nih.gov/24655158/ </p>,
  range: <p>Main, D. (2019, July 29). <i>Raccoons are rapidly spreading across Earth-and climate change could help.</i> Animals. Retrieved December 30, 2021, from https://www.nationalgeographic.com/animals/article/raccoons-expanding-range-climate-change </p>,
  textbook: <p>Miller, G. T., &amp; Spoolman, S. (2012). <i>Living in the environment, Ap edition.</i> Brooks/Cole, Cengage Learning.</p>,
  skedaddle: <p>Mueller, M. (2020, September 22). <i>What is a raccoon's role in the ecosystem?</i> Skedaddle Humane Wildlife Control. Retrieved December 30, 2021, from https://www.skedaddlewildlife.com/blog/raccoons-role-in-the-ecosystem/</p>,
  chesapeakebay: <p><i>Raccoons. </i>Chesapeake Bay Program. (2021). Retrieved December 30, 2021, from https://www.chesapeakebay.net/S=0/fieldguide/critter/raccoon </p>,
  depOfAg: <p>Tesky, J. L. (1995). <i>Procyon lotor.</i> U.S. Department of Agriculture. Retrieved December 30, 2021, from https://www.fs.fed.us/database/feis/animals/mammal/prlo/all.html </p>,
  depOfFish: <p>Washington Department of Fish &amp; Wildlife. (2021). <i>Raccoons.</i> Retrieved December 30, 2021, from https://wdfw.wa.gov/species-habitats/species/procyon-lotor</p>
};

const toNumber = Object.keys(sources).map((key, index) => [key, index + 1]).reduce((acc, curr) => (acc[curr[0]] = curr[1], acc),{});

export function Citation(props) {
  const names = typeof props.name === "object" ? props.name : [props.name];

  return (
    <sup>[{names.map((name, index) => <span key={index}>{index > 0 ? "," : null}<a href={"#raccoon-citation" + toNumber[name]}>{toNumber[name]}</a></span>)}]</sup>
  )
}

export function Slide12() {
  return (
    <div>
      <h2>Works cited</h2>
      <ol className={style.citationList}>
        {
          Object.values(sources).map((source, index) => <li id={"raccoon-citation" + (index + 1)} key={index}>{source}</li>)
        }
      </ol>
    </div>
  )
}
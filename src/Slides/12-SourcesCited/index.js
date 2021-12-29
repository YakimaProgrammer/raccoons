const sources = [

];

sources.sort();

export function Slide12() {
  return (
    <div>
      <h2>Sources cited</h2>
      {
        sources.map((source, index) => <p key={index}>{source}</p>)
      }
    </div>
  )
}
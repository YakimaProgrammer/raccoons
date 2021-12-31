import style from "./index.module.css";

export function MoreDetails(props) {
  return <p className={style.moreDetails}>{props.children}</p>
}
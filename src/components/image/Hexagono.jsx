import { Link } from "react-router-dom";
import imgHexagono from "../../assets/icon/hexagono.svg";
export default function Hexagono({ children, className, localUrl }) {
  return (
    <Link to={localUrl} className="figure">
      <div className={className}>
        <div className="figure-cont">
          <img className="figure-img" src={imgHexagono} alt="" />
          <p className="figure-text">{children}</p>
        </div>
      </div>
    </Link>
  );
}

import { Link } from "react-router-dom";
import imgHex from "../../assets/icon/hexagon.png";
export default function Hexagon({ localUrl, className, children }) {
  return (
    <Link to={localUrl} className="hex-cont">
      <div className={className}>
        <div className="hex-subcont">
          <img className="hex-img" src={imgHex} alt="" />
          <p className="hex-text">{children}</p>
        </div>
      </div>
    </Link>
  );
}

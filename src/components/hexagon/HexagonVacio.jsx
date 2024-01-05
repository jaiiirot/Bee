import { Link } from "react-router-dom";
// import imgHex from "../../assets/icon/hexagon.png";
export default function Hexagon({ localUrl, className, children, subClass }) {
  return (
    <Link
      to={localUrl}
      className={`hex-cont hex-cont-${subClass}`}
      style={{ background: "#f8d788" }}
    >
      <div className={className}>
        <div className="hex-subcont">
          <p className="hex-text">{children}</p>
        </div>
      </div>
    </Link>
  );
}

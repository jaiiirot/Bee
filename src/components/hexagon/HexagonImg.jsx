import { Link } from "react-router-dom";

export default function HexagonImg({ children, url, img }) {
  return (
    <Link to={url} className="heximg">
      <div className="heximg-cont">
        <div
          className="heximg-image"
          style={{
            backgroundImage: `url("${img}")`,
          }}
        ></div>
        <span className="heximg-text">
          <p>{children}</p>
        </span>
      </div>
    </Link>
  );
}

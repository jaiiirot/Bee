import { Link } from "react-router-dom";

export default function HexagonImg({ Children }) {
  return (
    <div className="heximg">
      <div className="heximg-image">
        <Link to={url} className="heximg-text">
          {Children}
        </Link>
      </div>
    </div>
  );
}

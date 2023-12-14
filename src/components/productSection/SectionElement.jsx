import { useParams } from "react-router-dom";

export default function SectionElement() {
  const { element } = useParams();
  return (
    <div>
      <h1>{element}</h1>
    </div>
  );
}

export default function Texto({ titulo, texto }) {
  return (
    <aside className="cont-text">
      <h3 className="cont-text-titulo">{titulo}</h3>
      <p className="cont-text-parrafo">{texto}</p>
    </aside>
  );
}

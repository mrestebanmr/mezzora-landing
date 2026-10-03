// Fondo fijo: manchas difuminadas con los verdes de Mezzora que se desplazan
// con el scroll (variable --sp), retícula técnica, grano y viñeta.
export default function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__drift">
        <div className="aurora__blob aurora__blob--a" />
        <div className="aurora__blob aurora__blob--b" />
        <div className="aurora__blob aurora__blob--c" />
        <div className="aurora__blob aurora__blob--d" />
      </div>
      <div className="aurora__grid" />
      <div className="aurora__vignette" />
      <div className="aurora__noise" />
    </div>
  );
}

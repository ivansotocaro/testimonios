import '../estilo/testimonio.css'

function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/${props.imagen}.png`)}
        alt="Testimonio"
      />
      <div className="contendor-texto-testimonio">
        <p className="nombre-testimonio">
          <b>{props.nombre} </b>en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <b>{props.empresa}</b>
        </p>
        <p className="text-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;
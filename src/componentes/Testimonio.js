function Testimonio(){
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/imagen-1.png")}
        alt="Testimonio"
      />
      <div className="contendor-texto-testimonio">
        <p className="nombre-testimonio">Ivan andres soto</p>
        <p className="nombre-testimonio">Software Engineer at Amazon</p>
        <p className="nombre-testimonio">
          "It's scary to change careers. I only gained confidence that I could
          code by working through the hundreds of hours of free lessons on
          freeCodeCamp. Within a year I had a six-figure job as a Software
          Engineer. freeCodeCamp changed my life."
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
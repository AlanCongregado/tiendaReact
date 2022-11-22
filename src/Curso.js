const Curso = (props) => {
  return (
    <>
      <hr></hr>
      <h2>{props.curso}</h2>
      <div>
        Profesor: <span>{props.profesor}</span>
      </div>
      <div>
        Duracion: <span>{props.duracion} semanas</span>
      </div>
    </>
  );
};

export default Curso;

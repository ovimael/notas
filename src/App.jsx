import { useState } from "react";

function App() {
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const initialState = JSON.parse(localStorage.getItem("notas")) || [];
  const [notas, setNotas] = useState(initialState);

  const handleInputChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleResetChange = () => {
    setInputState({
      ...inputState,
      titulo: "",
      fecha: "",
      nota: "",
    });
    console.log(handleResetChange);
  };

  const handleClickGuardar = () => {
    setNotas([...notas, inputState]);
    localStorage.setItem("notas", JSON.stringify(notas));
    handleResetChange();
  };

  const handleBorrarNota = (index) => {
    const nuevoArreglo = [];

    notas.forEach((nota, i) => {
      if (index !== i) {
        nuevoArreglo.push(nota);
      }
    });
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    setNotas([...nuevoArreglo]);
  };

  const handleClickLimpiaLista = () => {
   setNotas([]);
   localStorage.setItem("notas", JSON.stringify([]));
  
  };

  return (
    <div className=" App container mt-4">
      <div className="row  ">
        <div className="row card shadow" >
          <div className="col p-4">
            <h3 className="text-center bi bi-card-list"> Lista</h3>

            {notas.length === 0 ? (
              "Al momento no tienes notas guardadas. Puedes crear una en el formulario contiguo"
            ) : (
              <ol>
                {notas.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.titulo} ({item.fecha}) {item.nota} &nbsp;
                      <i
                        className="bi bi-x-circle-fill "
                        onClick={() => handleBorrarNota(index)}
                        style={{ color: "red", cursor: "pointer" }}
                      ></i>
                    </li>
                  );
                })}
              </ol>
            )}

            {/* {arregloNotas.length !== 0 &&(
              <ol>
                {arregloNotas.map((item)=>{
                  return (
                    <li>
                      {item.titulo} ({item.fecha}) ({item.nota})
                    </li>
                  )
                })}
              </ol>
            )} */}
          </div>
          {/* Boton agregado por mi */}
          <hr />
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-secondary mx-2 "
              disabled={notas.length===0}
              onClick={handleClickLimpiaLista}
              style={{ marginLeft: "15px", width: "250px" }}
            >
              <i class="bi bi-trash-fill" style={{ color: "red" }}></i> Borrar
            </button>
          </div>

          <br />

          <div className="col text-center mx-auto p-4">
            <h3 className="bi bi-file-earmark-plus-fill"> Notas</h3>
            <label className="mb-2" style={{ width: "100%" }}>
              {" "}
              <i class="bi bi-chat-square-text-fill"></i> Titulo
              <input
                className="text-center"
                id="titulo"
                name="titulo"
                type="text"
                style={{ width: "100%" }}
                onChange={handleInputChange}
                value={inputState.titulo}
              />
            </label>
            <br></br> <br />
            <label className="mb-2  " style={{ width: "100%" }}>
              {" "}
              <i class="bi bi-calendar-date"></i> Fecha
              <input
                className="text-center"
                id="fecha"
                name="fecha"
                type="date"
                style={{ width: "100%" }}
                onChange={handleInputChange}
                value={inputState.fecha}
              />
            </label>
            <br></br>
            <br />
            <label style={{ width: "100%" }}>
              {" "}
              <i class="bi bi-card-text"></i> Nota
              <textarea
                id="nota"
                name="nota"
                style={{ width: "100%" }}
                onChange={handleInputChange}
                value={inputState.nota}
              />
            </label>
            <hr />
            <div className="ms-2 me-2 mt-2 row">
              <div className="col">
                <span className="row mx-1">
                  <button
                    type="button"
                    className="btn btn-outline-secondary mx-2 "
                    disabled={inputState.titulo==="" || 
                    inputState.fecha==="" || 
                    inputState.titulo==="" }
                    onClick={handleResetChange}
                    style={{ marginLeft: "15px" }}
                    
                  >
                    <i class="bi bi-trash-fill" style={{ color: "red" }}></i>{" "}
                    Borrar
                  </button>
                </span>
              </div>

              <div className="col">
                <span className="row mx-1">
                  <button
                    type="button"
                    className="btn btn-outline-secondary mx-2 "
                    disabled={inputState.titulo==="" || 
                    inputState.fecha==="" || 
                    inputState.titulo===""}
                    onClick={handleClickGuardar}
                    style={{ marginLeft: "15px" }}
                    
                  >
                    <i
                      class="bi bi-save-fill"
                      style={{
                        color: "red",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                      }}
                    ></i>{" "}
                    Guardar
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;

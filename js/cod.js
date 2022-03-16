let datosA = document.querySelector(".contenedor");
let boton = document.querySelector(".confirmar");
alumnos = [
  {
    nombre: "Israel Dillanes",
    email: "israel@gmail.com",
    materia: "fisica",
  },
  {
    nombre: "Leonel Dillanes",
    email: "Leonel@gmail.com",
    materia: "algebra",
  },
  {
    nombre: "Juan Dillanes",
    email: "juan@gmail.com",
    materia: "español",
  },
  {
    nombre: "betsa Dillanes",
    email: "betsa@gmail.com",
    materia: "calculo",
  },
];

for (alumno in alumnos) {
  let datos = alumnos[alumno];
  let nombre = datos["nombre"];
  let email = datos["email"];
  let materia = datos["materia"];

  let htmlCodigo = `<div class="item" id="nombre">${nombre}</div>
      <div class="item" id="email">${email}</div>
      <div class="item" id="matria">${materia}</div>
      <div class="item semana">
      <select class="semana-elegida">
        <option value="semana 1">Semana1</option>
        <option value="semana 2">Semana2</option>
      </select></div>`;

  datosA.innerHTML += htmlCodigo;
}

boton.addEventListener("click", () => {
  let confirmarM = confirm("Quieres confirmar las mesas");

  if (confirmarM) {
    document.body.removeChild(boton);
    let elementos = document.querySelectorAll(".semana");
    let semanaelegida = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos) {
      semana = elementos[elemento];
      semana.innerHTML = semanaelegida[elemento].value;
    }
  }
});

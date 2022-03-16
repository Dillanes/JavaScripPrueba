let nombre = document.querySelector("#nombre");
let materia = document.querySelector("#materia");
let correo = document.querySelector("#gmail");
let btn = document.querySelector("#btn-enviar");
let mensaje = document.querySelector(".mensaje");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let error = validar();

  if (error[0]) {
    mensaje.classList.remove("colorV");
    mensaje.innerHTML = error[1];
    mensaje.classList.add("colorR");
  } else {
    mensaje.innerHTML = "Formulario enviado";
    mensaje.classList.add("colorV");
    mensaje.classList.remove("colorR");
  }
});

const validar = () => {
  let error = [];
  if (nombre.value.length < 4 || nombre.value.length > 30) {
    error[0] = true;
    error[1] = "Nombre no valido";
    return error;
  } else if (materia.value.length < 5 || materia.value.length > 30) {
    error[0] = true;
    error[1] = "Materia invalida";
    return error;
  } else if (
    correo.value.length < 5 ||
    correo.value.length > 30 ||
    correo.value.indexOf("@") == -1 ||
    correo.value.indexOf(".") == -1
  ) {
    error[0] = true;
    error[1] = "Correo invalido";
    return error;
  }

  error[0] = false;
  return error;
};

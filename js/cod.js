// const boton = document.querySelector(".oneClick");
const select = document.querySelector(".selector");
const intp = document.querySelector(".txt");

intp.addEventListener("keypress", (e) => {
  let dato = e.key;

  select.innerHTML = `La ultima tecla precionada fue <b>${dato}</b>`;
});

// div.addEventListener("contextmenu", (e) => {
//   alert("HOLA GUAPO");
// });
// boton.addEventListener("dblclick", (e) => {
//   alert("HOla Guapo")
// });

// function saludar() {
//   alert("HOLA GUAPO DE NUEVO");
// }

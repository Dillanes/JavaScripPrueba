// const boton = document.querySelector(".oneClick");
const select = document.querySelector(".selector");
const intp = document.querySelector(".txt");

addEventListener("select", (e) => {
  let start = e.target.selectionStart;
  let end = e.target.selectionEnd;
  let TextoSelect = intp.value;

  select.innerHTML = TextoSelect.substring(start, end);
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

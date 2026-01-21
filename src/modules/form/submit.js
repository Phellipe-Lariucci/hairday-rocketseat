import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual e define a data minima como a data atual
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  //previne o comportamento do formulario de recarregar a página
  event.preventDefault();

  console.log("enviado");
};

import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

//data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual e define a data minima como a data atual
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  //previne o comportamento do formulario de recarregar a página
  event.preventDefault();

  try {
    //Recuperando nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Por favor, insira o nome do cliente");
    }

    //recupera o horario selecionado
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Por favor, selecione um horario para o agendamento");
    }

    //Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":");
    //inserindo a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    //Gera um ID
    const id = new Date().getTime();

    //faz agendamento
    await scheduleNew({
      id,
      name,
      when,
    });
    //recarrega os agendamentos´
    await schedulesDay();
    //limpa o input de nome do cliente
    clientName.value = "";
  } catch (error) {
    alert("Nao foi possivel realizar o agendamento");
    console.log(error);
  }
};

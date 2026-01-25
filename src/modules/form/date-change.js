import { schedulesDay } from "../schedules/load";
//SELECIONANDO INPUT DE DATA
const selectedDate = document.getElementById("date");

//recarrega a lista de horarios quando o input de data mudar.

selectedDate.onchange = () => schedulesDay();

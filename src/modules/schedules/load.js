import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

const selectedDate = document.getElementById("date");
export async function schedulesDay() {
  //obtem a data do input
  const date = selectedDate.value;

  //busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  //exibe os agendamentos
  schedulesShow({ dailySchedules });

  hoursLoad({ date, dailySchedules });
}

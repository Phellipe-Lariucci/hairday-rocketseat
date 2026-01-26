import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    // Fazendo a requisição.
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    const data = await response.json();

    //filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day"),
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Nao foi possivel buscar os agendamentos do dia");
  }
}

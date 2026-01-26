import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    //faz a requisiçao para enviar os dados do agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        when,
      }),
    });
    alert("Horário agendado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar o horário");
  }
}

import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Cancelamento realizado com sucesso");
  } catch (erro) {
    console.log(erro);
    alert("nao foi possivel realizar o cancelamento");
  }
}

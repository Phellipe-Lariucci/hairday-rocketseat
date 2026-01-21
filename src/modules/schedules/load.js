import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");
export function schedulesDay() {
  //obtem a data do imput
  const date = selectedDate.value;

  hoursLoad({ date });
}

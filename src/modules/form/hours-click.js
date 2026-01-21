export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      hours.forEach((hour) => {
        //aqui estamos removendo a classe de todos os horarios nao selecionados
        hour.classList.remove("hour-selected");
      });
      selected.target.classList.add("hour-selected");
    });
  });
}

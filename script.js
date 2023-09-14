document.addEventListener("DOMContentLoaded", function () {
  const cells = document.querySelectorAll(".value");
  let selectedCell = null;

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (selectedCell) {
        selectedCell.parentElement.classList.remove("selected");
      }
      cell.parentElement.classList.add("selected");
      selectedCell = cell;
    });
  });

  const candidateSwitch = document.getElementById("candidate-switch");

  candidateSwitch.addEventListener("change", () => {
    if (candidateSwitch.checked) {
      if (selectedCell) {
        const candidates = selectedCell.previousElementSibling; // .candidates span
        const candidateNumber = selectedCell.textContent;
        const candidateNumbers = candidates.textContent.split("").filter((num) => num !== candidateNumber);

        if (candidates.textContent.includes(candidateNumber)) {
          candidates.textContent = candidateNumbers.join("");
        } else {
          candidateNumbers.push(candidateNumber);
          candidates.textContent = candidateNumbers.sort().join("");
        }
      }
    }
  });

  const numberControls = document.querySelectorAll(".number-control");

  numberControls.forEach((button) => {
    button.addEventListener("click", () => {
      if (selectedCell && !candidateSwitch.checked) {
        selectedCell.textContent = button.textContent;
      }
    });
  });
});

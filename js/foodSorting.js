const disheItems = document.getElementsByClassName("dishe-item");
const dishesList = document.getElementById("dishesList");

let lastFood;

dishesList.addEventListener("click", (e) => {
  for (let a = 0; a < disheItems.length; a++) {
    disheItems[a].classList.remove("active");
    disheItems[a].classList.add("inactive");
  }

  const food = document.getElementsByName(e.target.id);

  if (lastFood == food[0].attributes[1].value) {
    for (let b = 0; b < disheItems.length; b++) {
      disheItems[b].classList.remove("active");
      disheItems[b].classList.remove("inactive");
    }
    lastFood = "";
    return;
  } else {
    lastFood = food[0].attributes[1].value;
  }

  for (let i = 0; i < food.length; i++) {
    food[i].classList.add("active");
    food[i].classList.remove("inactive");
  }
});

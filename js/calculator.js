let slider = document.querySelector(
  ".calculator__interface-advanced-scorematch-input"
);

let value = (slider.value - slider.min) / (slider.max - slider.min);
slider.style.backgroundImage =
  "linear-gradient(to right, #ffc700 0%, #ffc700 " +
  value * 100 +
  "%, #3C3C3C " +
  value * 100 +
  "%, #3C3C3C 100%)";

slider.addEventListener("input", function () {
  document.querySelector(
    ".calculator__interface-advanced-scorematch-current"
  ).innerText = slider.value;
  let value = (slider.value - slider.min) / (slider.max - slider.min);
  slider.style.backgroundImage =
    "linear-gradient(to right, #ffc700 0%, #ffc700 " +
    value * 100 +
    "%, #3C3C3C " +
    value * 100 +
    "%, #3C3C3C 100%)";
});

const isCheckboxClick = ({ target }) => {
  if (target.nodeName === "BUTTON") {
    if (target.classList.contains("active")) {
      target.classList.remove("active");
    } else {
      target.classList.add("active");
    }
  }
};

document
  .querySelector(".calculator__interface-categories-select")
  .addEventListener("click", isCheckboxClick);

const isCheckboxClick = ({ target }) => {
  if (target.nodeName === "BUTTON") {
    if (target.classList.contains("active")) {
      target.classList.remove("active");
    } else {
      target.classList.add("active");
    }
  }
};

if (document.querySelector(".calculator__interface-boost-categories-select")) {
  document
    .querySelector(".calculator__interface-boost-categories-select")
    .addEventListener("click", isCheckboxClick);

  let value = (slider.value - slider.min) / (slider.max - slider.min);
  slider.style.backgroundImage =
    "linear-gradient(to right, #ffc700 0%, #ffc700 " +
    value * 100 +
    "%, #3C3C3C " +
    value * 100 +
    "%, #3C3C3C 100%)";

  slider.addEventListener("input", function () {
    document.querySelector(
      ".calculator__interface-boost-advanced-scorematch-input"
    ).innerText = slider.value;
    let value = (slider.value - slider.min) / (slider.max - slider.min);
    slider.style.backgroundImage =
      "linear-gradient(to right, #ffc700 0%, #ffc700 " +
      value * 100 +
      "%, #3C3C3C " +
      value * 100 +
      "%, #3C3C3C 100%)";
  });
}

if (document.querySelector(".calculator__interface-low-categories-select")) {
  document
    .querySelector(".calculator__interface-low-categories-select")
    .addEventListener("click", isCheckboxClick);
}

if (
  document.querySelector(".calculator__interface-elevated-categories-select")
) {
  document
    .querySelector(".calculator__interface-elevated-categories-select")
    .addEventListener("click", isCheckboxClick);
}

const slider = document.querySelector(
  ".calculator__interface-boost-advanced-scorematch-input"
);

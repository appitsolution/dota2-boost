const openInformationHistory = ({ target }) => {
  if (target.classList.contains("cabinet-information__history-info-button")) {
    if (target.parentElement.parentElement.classList.contains("active")) {
      target.parentElement.parentElement.classList.remove("active");
    } else {
      target.parentElement.parentElement.classList.add("active");
    }
  }
};

const openInformationOrder = ({ target }) => {
  if (target.classList.contains("cabinet-information__order-info-button")) {
    if (target.parentElement.parentElement.classList.contains("active")) {
      target.parentElement.parentElement.classList.remove("active");
    } else {
      target.parentElement.parentElement.classList.add("active");
    }
  }
};

document
  .querySelector(".cabinet-information__history-list")
  .addEventListener("click", openInformationHistory);

document
  .querySelector(".cabinet-information__order-list")
  .addEventListener("click", openInformationOrder);

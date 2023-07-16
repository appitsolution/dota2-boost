const historyButton = document.querySelector(
  ".cabinet-booster-history-table-column"
);

const openInfoHistory = ({ target }) => {
  console.dir(target.parentElement.parentElement);
  if (target.nodeName === "BUTTON") {
    target.parentElement.parentElement.classList.toggle("active");
  }
};

historyButton.addEventListener("click", openInfoHistory);

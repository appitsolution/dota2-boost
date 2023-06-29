const isSelectedClick = ({ target }) => {
  if (target.nodeName === "BUTTON") {
    if (target.classList.contains("active")) {
      target.classList.remove("active");
    } else {
      target.classList.add("active");
    }
  }
};

document.querySelector(".faq-list").addEventListener("click", isSelectedClick);

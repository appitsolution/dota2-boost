const heroesPower = document.querySelector(
  ".preparation-additional-heroes-class-power-list"
);

const heroesAgilite = document.querySelector(
  ".preparation-additional-heroes-class-agility-list"
);
const heroesIntellect = document.querySelector(
  ".preparation-additional-heroes-class-intellect-list"
);
const heroesVersatility = document.querySelector(
  ".preparation-additional-heroes-class-versatility-list"
);

const selectedHeroes = document.querySelector(
  ".preparation-additional-heroes-control-select-list"
);

const banHeroes = document.querySelector(
  ".preparation-additional-heroes-control-ban-list"
);

const selectHero = (target) => {
  console.log(target);

  if (Array.from(selectedHeroes.children).length >= 5) return;

  const newList = [];

  Array.from(selectedHeroes.children).forEach((item) => {
    newList.push(item.outerHTML);
    // console.dir(item);
  });

  selectedHeroes.innerHTML = [
    ...newList,
    `<button
  class="preparation-additional-heroes-control-select-button"
>
  <img
    class="preparation-additional-heroes-control-select-button-image"
    src="${target.src}"
  />
</button>`,
  ].join("");

  // console.dir(newList.join(""));
  target.parentElement.classList.add("select");
};

const banHero = (target) => {
  console.log("ban");
  if (Array.from(banHeroes.children).length >= 5) return;

  const checkSeleced = Array.from(selectedHeroes.children).find((item) => {
    if (item.firstElementChild.src === target.src) {
      return item;
    }
  });

  if (checkSeleced) {
    const selectedList = [];
    Array.from(selectedHeroes.children).forEach((item) => {
      if (item.firstElementChild.src !== target.src) {
        selectedList.push(item.outerHTML);
      }
      selectedHeroes.innerHTML = selectedList.join("");
    });
  }

  const newList = [];

  Array.from(banHeroes.children).forEach((item) => {
    newList.push(item.outerHTML);
  });

  banHeroes.innerHTML = [
    ...newList,
    `<button
  class="preparation-additional-heroes-control-ban-button"
>
  <img
    class="preparation-additional-heroes-control-ban-button-image"
    src="${target.src}"
  />
</button>`,
  ].join("");

  target.parentElement.classList.remove("select");
  target.parentElement.classList.add("ban");
};

const deleteHero = (target) => {
  const checkBan = Array.from(banHeroes.children).find((item) => {
    if (item.firstElementChild.src === target.src) {
      return item;
    }
  });
  if (checkBan) {
    const banList = [];
    Array.from(banHeroes.children).forEach((item) => {
      if (item.firstElementChild.src !== target.src) {
        banList.push(item.outerHTML);
      }
      banHeroes.innerHTML = banList.join("");
    });
  }

  target.parentElement.classList.remove("ban");
};

const handleHero = ({ target }) => {
  if (target.nodeName !== "IMG") return;
  if (target.parentElement.classList.contains("select")) {
    banHero(target);
  } else if (target.parentElement.classList.contains("ban")) {
    deleteHero(target);
  } else {
    selectHero(target);
  }

  if (target.nodeName !== "IMG") return;
};

heroesPower.addEventListener("click", handleHero);
heroesAgilite.addEventListener("click", handleHero);
heroesIntellect.addEventListener("click", handleHero);
heroesVersatility.addEventListener("click", handleHero);

const getStar = (level = 5, className) => {
  if (level > 5) return;

  document.querySelector(`.${className}`).appendChild(`<p>Test</p>`);
};

export default getStar;

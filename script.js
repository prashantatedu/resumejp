const progress = document.querySelector(".about-me");
const progressBarPercents = [80, 89, 85, 57];
const skillProgressBarPercents = [95, 89, 85, 77, 65, 76];

const scrollFunction = () => {
  var y = window.scrollY;
  console.log(y);
  if (window.pageYOffset + window.innerHeight > progress.offsetTop) {
    document.querySelectorAll(".lang-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });

    document.querySelectorAll(".skill-percent").forEach((el, i) => {
      el.style.width = `${skillProgressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        skillProgressBarPercents[i];
    });
  }
};

window.addEventListener("scroll", () => {
  scrollFunction();
});

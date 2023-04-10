const buttons = document.querySelectorAll(".tech__buttons button");
const launch = document.querySelector(".launch");
const spaceport = document.querySelector(".spaceport");
const capsule = document.querySelector(".capsule");

const techs = [launch, spaceport, capsule];

Array.from(buttons).map((button) => {
  button.addEventListener("click", () => {
    switch (button.textContent) {
      case "1":
        techs.map((tech) => {
          tech.classList.remove("hidden");
          tech.classList.add("hidden");
        });
        launch.classList.remove("hidden");
        break;
      case "2":
        techs.map((tech) => {
          tech.classList.remove("hidden");
          tech.classList.add("hidden");
        });
        spaceport.classList.remove("hidden");
        break;
      case "3":
        techs.map((tech) => {
          tech.classList.remove("hidden");
          tech.classList.add("hidden");
        });
        capsule.classList.remove("hidden");
        break;
    }
  });
});

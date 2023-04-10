const planetName = document.querySelectorAll(".tab-list button");
const Moon = document.querySelector(".moon");
const Mars = document.querySelector(".mars");
const Europa = document.querySelector(".europa");
const Titan = document.querySelector(".titan");

const planets = [Moon, Mars, Europa, Titan];

Array.from(planetName).map((planetName) => {
  planetName.addEventListener("click", () => {
    switch (planetName.innerHTML) {
      case "Moon":
        planets.map((planet) => {
          planet.classList.remove("hidden");
          planet.classList.add("hidden");
        });
        Moon.classList.remove("hidden");
        break;
      case "Mars":
        planets.map((planet) => {
          planet.classList.remove("hidden");
          planet.classList.add("hidden");
        });
        Mars.classList.remove("hidden");
        break;
      case "Europa":
        planets.map((planet) => {
          planet.classList.remove("hidden");
          planet.classList.add("hidden");
        });
        Europa.classList.remove("hidden");
        break;
      case "Titan":
        planets.map((planet) => {
          planet.classList.remove("hidden");
          planet.classList.add("hidden");
        });
        Titan.classList.remove("hidden");
        break;
    }
  });
});

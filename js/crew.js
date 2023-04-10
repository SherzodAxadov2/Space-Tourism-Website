const allDots = document.querySelectorAll(".dots button");
const hurley = document.querySelector(".hurley");
const mark = document.querySelector(".mark");
const victor = document.querySelector(".victor");
const ansari = document.querySelector(".ansari");

const crews = [hurley, mark, victor, ansari];

Array.from(allDots).forEach((dot) => {
  dot.addEventListener("click", () => {

    switch (dot.textContent) {
      case "hurley":
        crews.map((crew) => {
          crew.classList.remove("hidden");
          crew.classList.add("hidden");
        });
        hurley.classList.remove("hidden");
        break;

      case "mark":
        crews.map((crew) => {
          crew.classList.remove("hidden");
          crew.classList.add("hidden");
        });
        mark.classList.remove("hidden");
        break;
      case "victor":
        crews.map((crew) => {
          crew.classList.remove("hidden");
          crew.classList.add("hidden");
        });
        victor.classList.remove("hidden");
        break;
      case "ansari":
        crews.map((crew) => {
          crew.classList.remove("hidden");
          crew.classList.add("hidden");
        });
        ansari.classList.remove("hidden");
        break;
    }
  });
});

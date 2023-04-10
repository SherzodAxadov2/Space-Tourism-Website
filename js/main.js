const menuNavigation = document.querySelector(".navigation-primary--mobile");

const showMenu = () => {
  menuNavigation.classList.toggle("open");
};

// Parallax
document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".destination__img").forEach(function (move) {
    let moving__value = move.getAttribute("data-value");
    console.log(moving__value);
    let x = e.clientX / moving__value;
    let y = e.clientY / moving__value;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

document.addEventListener("mousemove", parallaxRotate);
function parallaxRotate(e) {
  document.querySelectorAll(".tech__img").forEach(function (move) {
    let moving__value = move.getAttribute("data-rotate");
    console.log(moving__value);
    let x = e.clientX / moving__value;
    let y = e.clientY / moving__value;

    move.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  });
}

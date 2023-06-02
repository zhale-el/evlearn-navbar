const humberger = document.querySelector(".humberger");

humberger.addEventListener("click", function () {
  console.log("ok");
  let navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
});

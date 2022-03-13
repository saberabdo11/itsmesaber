let ourWork = document.querySelector(".our-work");

let imgs = document.querySelectorAll(".our-work-img img");

let view = document.getElementById("img-view");

let imgView = document.querySelector("#img-view img");

let blurApp = document.getElementById("blur");

imgs.forEach(function (ele) {
  ele.addEventListener("click", function () {
    view.style.display = "block";
    imgView.src = this.src;
    blurApp.classList.add("active");
  });
});

imgView.onclick = function () {
  view.style.display = "none";
  blurApp.classList.remove("active");
};

let up = document.getElementById("up");

up.onclick = function() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}
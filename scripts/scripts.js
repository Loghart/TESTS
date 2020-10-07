var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
var hamburgerIcon = document.querySelector(".hamburger_close");
var hamburgerMenu = document.querySelector(".hamburger_menu");

hamburger.addEventListener("click", function (e) {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    hamburgerIcon.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  } else {
    nav.classList.add("active");
    hamburgerIcon.classList.add("active");
    hamburgerMenu.classList.add("active");
  }
});

var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/audi1.jpg") {
    myImage.setAttribute("src", "images/audi2.jpg");
    return;
  }

  if (mySrc === "images/audi2.jpg") {
    myImage.setAttribute("src", "images/audi3.jpg");
    return;
  }

  myImage.setAttribute("src", "images/audi1.jpg");
};

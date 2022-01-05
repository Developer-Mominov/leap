var splide = new Splide(".splide", {
  type: "loop",
  height: "auto",
  focus: "center",
  autoWidth: true,
});

splide.mount();

var splide2 = new Splide("#splide2", {
  perPage: 3,
  rewind: true,
  type: "loop",
  height: "auto",
  focus: "center",
  autoWidth: true,
});

splide2.mount();

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".main").style.height = "auto";
    document.querySelector(".main").style.overflow = "";
    document.querySelector(".fake").style.height = "0";
    window.scrollBy(0, 1);
  }, 10);
});

let goOnlineLesson = document.querySelectorAll(".flex-buttons");
goOnlineLesson[0].addEventListener("click", () => {
  window.open(
    "https://www.youtube.com/watch?v=nE6gUj8bl6M&list=PLoJKIHSiiOFLcG2bL8WFZMqlUJfnq3PD3"
  );
});
goOnlineLesson[1].addEventListener("click", () => {
  window.open(
    "https://www.youtube.com/watch?v=wTETNrz630U&list=PLoJKIHSiiOFJC_-iWReIPO8RTCCFhaaUE"
  );
});
goOnlineLesson[2].addEventListener("click", () => {
  window.open(
    "https://www.youtube.com/watch?v=yABRv9K5uB0&list=PLoJKIHSiiOFJqSyXwH2vTZVE7qOlmbrJE"
  );
});
goOnlineLesson[3].addEventListener("click", () => {
  window.open(
    "https://www.youtube.com/watch?v=LBzkxyRFQ2o&list=PLoJKIHSiiOFIiGtnD9WasDBIw2K4VouFB"
  );
});

let menubarSum = 0;
document.querySelector(".burger-menu").addEventListener("click", showClose);
document.querySelector(".close").addEventListener("click", showClose);

let ul_li = document.querySelectorAll(".menubar li");
ul_li.forEach((e) => {
  e.addEventListener("click", showClose);
});

function showClose() {
  if (menubarSum == 0) {
    document.querySelector(".menubar").style.cssText = "display:flex;opacity:1";
    menubarSum = 1;
  } else {
    menubarSum = 0;
    document.querySelector(".menubar").style.cssText = "display:none;opacity:0";
  }
}

let youtvid = document.querySelector(".text_playb");
let map = document.querySelector(".text_playb");
let closemod = document.querySelector(".closemod1");
// let closemod2 = document.querySelector(".closemod2");

// let mapbutton = document.querySelector(".mapbutton");

let formobile = document.querySelector(".for-mobile");
formobile.addEventListener("click", () => {
  window.location.href = "#courses";
});

let url1 = "https://www.youtube.com/embed/pRKAWRL6Asc";
youtvid.addEventListener("click", () => {
  document.querySelectorAll(".fulmodal")[0].classList.toggle("visible_mod");
  document.querySelector(".youtube-modal iframe").setAttribute("src", url1);
  document.querySelector(".main").style.filter = "blur(30px)";
});
closemod.addEventListener("click", () => {
  document.querySelectorAll(".fulmodal")[0].classList.toggle("visible_mod");
  document.querySelector(".youtube-modal iframe").setAttribute("src", "");
  document.querySelector(".main").style.filter = "none";
});

// mapbutton.addEventListener("click", () => {
//   document.querySelectorAll(".fulmodal")[1].classList.toggle("visible_mod");
// });
// closemod2.addEventListener("click", (e) => {
//   document.querySelectorAll(".fulmodal")[1].classList.toggle("visible_mod");
// });

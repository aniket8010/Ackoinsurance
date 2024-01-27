var car = document.getElementById("car");
var bike = document.getElementById("bike");
var health = document.getElementById("health");
var life = document.getElementById("life");
var travel = document.getElementById("travel");

//Banners

var carBanner = document.querySelector(".a_car_service");
var bikeBanner = document.querySelector(".a_bike_service");
var healthBanner = document.querySelector(".a_health_service");
var lifeBanner = document.querySelector(".a_life_service");
var travelBanner = document.querySelector(".a_travel_service");

window.onload = function () {
  car.classList.add("active");
  //banner
  carBanner.classList.remove("d-none");
};

bike.addEventListener("click", function (event) {
  car.classList.remove("active");
  health.classList.remove("active");
  life.classList.remove("active");
  travel.classList.remove("active");
  bike.classList.add("active");

  //banner

  carBanner.classList.add("d-none");
  healthBanner.classList.add("d-none");
  lifeBanner.classList.add("d-none");
  travelBanner.classList.add("d-none");
  bikeBanner.classList.remove("d-none");
});

car.addEventListener("click", function (event) {
  bike.classList.remove("active");
  health.classList.remove("active");
  life.classList.remove("active");
  travel.classList.remove("active");
  car.classList.add("active");

  //banner

  bikeBanner.classList.add("d-none");
  healthBanner.classList.add("d-none");
  lifeBanner.classList.add("d-none");
  travelBanner.classList.add("d-none");
  carBanner.classList.remove("d-none");
});

health.addEventListener("click", function (event) {
  bike.classList.remove("active");
  health.classList.add("active");
  life.classList.remove("active");
  travel.classList.remove("active");
  car.classList.remove("active");

  //banner

  bikeBanner.classList.add("d-none");
  healthBanner.classList.remove("d-none");
  lifeBanner.classList.add("d-none");
  travelBanner.classList.add("d-none");
  carBanner.classList.add("d-none");
});

life.addEventListener("click", function (event) {
  bike.classList.remove("active");
  life.classList.add("active");
  health.classList.remove("active");
  travel.classList.remove("active");
  car.classList.remove("active");

  //banner

  bikeBanner.classList.add("d-none");
  healthBanner.classList.add("d-none");
  lifeBanner.classList.remove("d-none");
  travelBanner.classList.add("d-none");
  carBanner.classList.add("d-none");
});

travel.addEventListener("click", function (event) {
  bike.classList.remove("active");
  health.classList.remove("active");
  life.classList.remove("active");
  travel.classList.add("active");
  car.classList.remove("active");

  //banner

  bikeBanner.classList.add("d-none");
  healthBanner.classList.add("d-none");
  lifeBanner.classList.add("d-none");
  travelBanner.classList.remove("d-none");
  carBanner.classList.add("d-none");
});

//video section 

const currentVideo = document.getElementById("currentvideo")
const currentTitle = document.getElementById("currenttitle")
const videoList = document.getElementsByClassName("a_videos")

for (let i=0 ; i<videoList.length ; i++){
  const listSrc =videoList[i].children.item("div").children.item("div").children.item("video").src
  const text=videoList[i].children.item("1").children.item("0").innerText
  
  videoList[i].addEventListener("click",() => {
    currentVideo.src=listSrc
    currentTitle.innerText=text
    currentVideo.play()
  })
}
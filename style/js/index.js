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

const currentVideo = document.getElementById("currentvideo");
const currentTitle = document.getElementById("currenttitle");
const videoList = document.getElementsByClassName("a_videos");

for (let i = 0; i < videoList.length; i++) {
  const listSrc = videoList[i].children
    .item("div")
    .children.item("div")
    .children.item("video").src;
  const text = videoList[i].children.item("1").children.item("0").innerText;

  videoList[i].addEventListener("click", () => {
    currentVideo.src = listSrc;
    currentTitle.innerText = text;
    currentVideo.play();
  });
}

// Footer navbar section

const footerNavdata = [
  {
    title: "products",
    navLinks: [
      "Motor Insurance",
      "Car Insurance",
      "Bike Insurance",
      "Health Insurance",
      "Travel Insurance",
      "International Travel Insurance",
      "Life Insurance",
      "Term Insurance",
      "Group Health Insurance",
    ],
  },
  {
    title: "Company",
    navLinks: [
      "About us",
      "Booad of directors",
      "careers",
      "Media kit",
      "All resources",
      "Articles",
      "Ackology-the tech blog",
      "Partnerships",
      "Site map",
    ],
  },
  {
    title: "Legal",
    navLinks: [
      "Whistleblower policy",
      "Public disclosure",
      "Financials & disclosure",
      "Privacy policy",
      "Terms & Conditions",
      "steywardership code",
      "Disclaimer",
      "Anti fraud policy",
      "Health underwriting philosophy",
    ],
  },
  {
    title: "Support",
    navLinks: [
      "Contact us",
      "cuostmer service",
      "Cancellations and refunds",
      "Downloads",
      "Unclaimed amount",
      "IRDAI website",
      "IRDAIS call center Feedback Survey",
      "Bima Bharosa",
      "Ayushaman bharat Health account creation",
      "Other Products",
    ],
  },
  {
    title: "car Insurance",
    navLinks: [
      "car Insurance",
      "Comprehensive car Insurance",
      "third party car insurances",
      "Own damage car Insurance",
      "Zero Depreciation car insurance",
      "old car insurances",
      "Ev car insurances",
      "Car insurance calculator",
      "Car insurance cheak",
      "compare car insurances",
      "Pay as you drive car Insurances",
    ],
  },
  {
    title: "Bike Insurance",
    navLinks: [
      "Bike Insurance",
      "Scooter Insurance",
      "Comprehensive Bike Insurance",
      "third party Bike insurances",
      "Used Bike Insurance",
      "Ev bike insurance",
      "Own damage Bike insurances",
      "Bike insurance calculator",
      "compare Bike insurances",
    ],
  },
  {
    title: "Health Insurance",
    navLinks: [
      "Health Insurance",
      "Arogya sanjivani policy",
      "Covid-19 Health insurance",
      "Corona Kavach Policy",
      "Health insurances plans For family",
      "Individual Health insurance",
      "cashless health insurance",
      "Womens health Insurances",
      "Health insurance for parants",
      "Health insurance for Childrens",
      "Health insurance for Senior citizens",
      "Health Insurence Premium calculator",
      "wait period in Health insurance",
      "Reimbursement Health insurance",
      "Health insurance Portability",
      "Super top up Health Insurance",
    ],
  },
  {
    title: "Group health insurance",
    navLinks: [
      "Corporate Health insurance",
      "Group helath insurance Add-on",
      "Maternity cover in Group Helath Insurance",
    ],
  },
  {
    title: "Travel Insurance",
    navLinks: [
      "Travel Insurance",
      "International Travel Insurance",
      "USA Travel Insurance",
      "Schengen Travel Insurance",
      "Travel Insurance for Dubai",
      "Travel Insurance for thailand",
    ],
  },
  {
    title: "Life Insurance",
    navLinks: [
      "Life Insurance",
      "Term Insurance",
      "Critical illness Insurance",
      "Accidental Death Benifits rider",
      "Disablity Income Rider",
      "Life Insurance Riders in india",
    ],
  },
];

//Footer navbar
const footernavbar = document.getElementById("footer_navbar");
footernavbar.style.width = "75%";
footernavbar.style.margin = "auto";

for (let i = 0; i < footerNavdata.length; i++) {
  // creat div and give class name col-12 col-lg-3\
  const div = document.createElement("div");
  div.className = "col-12 col-lg-3 mt-4";

  //creat h5
  const h5 = document.createElement("h5");
  h5.innerText = footerNavdata[i].title;

  //creat ul element
  const ul = document.createElement("ul");
  ul.style.listStyle = "none";
  ul.style.lineHeight = "32px";

  //loops start on the footernavdata[i].navLink

  for (let link = 0; link < footerNavdata[i].navLinks.length; link++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.style.textDecoration = "none";
    a.style.color = "#000";
    a.classList.add("a_force_fontsize");
    a.href = "#";
    a.innerText = footerNavdata[i].navLinks[link];

    //adding li ti ul
    ul.appendChild(li);
    //adding a to li
    li.appendChild(a);
  }
  //adding h5 to the div
  div.appendChild(h5);
  //adding ul to div
  div.appendChild(ul);

  //appent the childs
  footernavbar.appendChild(div);
}

// toggle for mobile view

const openSliderbtn = document.getElementById("a_open_slider");
const closeSliderbtn = document.getElementById("a_close_slider");
const drawer = document.querySelector(".a_small_screen_drawer");

openSliderbtn.addEventListener("click", function () {
  drawer.classList.remove("d-none");

  closeSliderbtn.addEventListener("click", function () {
    drawer.classList.add("d-none");
  });
});

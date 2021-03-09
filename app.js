//storing the elements in a variable
//dark mode text
let toggleText = document.querySelector(".dark-mode-paragraph");
// console.log(toggleText);

//toggle button container
let darkMode = document.querySelector(".dark-mode");
// console.log(darkMode);

//toggle button
let toggleBtn = document.querySelector(".toggle-button");
// console.log(toggleBtn);

//function to change the text to either darkmode or light mode
const textChange = () => {
  if (toggleText.innerHTML === "dark mode") {
    toggleText.innerHTML = "light mode";
  } else {
    toggleText.innerHTML = "dark mode";
  }
};

//set the dark mode on clicking on the toggle button
darkMode.addEventListener("click", () => {
  // DAlu big head
  const daluBigHead = document.querySelector(".daluBigHead");
  daluBigHead.classList.toggle("active");

  //moving the toggle button
  toggleBtn.classList.toggle("active");

  //changing the background color of the toggle button
  darkMode.classList.toggle("active");

  //text-change
  textChange();

  //body change
  document.body.classList.toggle("active");

  //cards
  const cards = document.querySelectorAll(".content-body");
  // console.log(cards)
  cards.forEach((item) => {
    item.classList.toggle("active");
  });

  //followers
  const follows = document.querySelectorAll(".icon-container-paragraph");
  follows.forEach((item) => {
    item.classList.toggle("active");
  });

  //overview cards
  const overviewCards = document.querySelectorAll(".cards");
  overviewCards.forEach((item) => {
    item.classList.toggle("active");
  });
});

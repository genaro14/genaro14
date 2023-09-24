function darkerClass(className) {
  var elements = document.getElementsByClassName(className);
  for (let a of elements) {
    a.classList.toggle( className + "__dark");
  }
}
const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
  document.getElementById("sidebar").classList.toggle("sidebar--dark");
  document.getElementById("back_author").classList.toggle("back_author--dark");
  document.getElementById("span-italic").classList.toggle("span--dark");
  document.getElementById("mainpart").classList.toggle("mainpart--dark");
  document.getElementById("custom-btn").classList.toggle("custom-btn--dark");
  document.getElementById("custom-btn2").classList.toggle("custom-btn--dark");
  darkerClass("card");
  toggleDescriptionDarkClass();
  toggleDateColor();
  // toggleBackgroundCards();
});

//GO TOP BTN:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleDescriptionDarkClass() {
  let elements = document.getElementsByClassName("description");
  let elementsArray = Array.from(elements);

  elementsArray.forEach(function(element) {
      if (element.classList.contains("description__dark")) {
          element.classList.remove("description__dark");
      } else {
          element.classList.add("description__dark");
      }
  });
}

function toggleBackgroundCards() {
  let cards = document.getElementsByClassName("card");
  let cardsArray = Array.from(cards);
  cardsArray.forEach(function(element) {
      if (element.classList.contains("card__dark")) {
          element.classList.remove("card__dark");
      } else {
          element.classList.add("card__dark");
      }
  });
}

function toggleDateColor() {
  let role = document.getElementsByClassName("role");
  let roles = Array.from(role);
  roles.forEach(function(element) {
      if (element.classList.contains("role__dark")) {
          element.classList.remove("role__dark");
      } else {
          element.classList.add("role__dark");
      }
  });
}


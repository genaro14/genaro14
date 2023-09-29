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
// Lang switcher 
const languageSelect = document.getElementById("languageSelector");
languageSelect.addEventListener("click", function () {
  const flagImage = document.getElementById("flagImage");
  const flagDropdown = document.getElementById("flagDropdown");
  const currentSelect = document.getElementById("currentSelect");
  const langDropdown = document.getElementById("langDropdown");
  const selectedLanguage = languageSelect.textContent.trim();
  console.log('Lang switch:',selectedLanguage);
  let langClass = selectedLanguage === "Español"? "es" : "en";
// Define an object to map language codes to flag image URLs
let flagImageMap = '';
let flagImageSwitch = '';
if (selectedLanguage === "Español") {
  flagImageMap = "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Spain.png" 
  flagImageSwitch = "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_United_Kingdom.png";
} else {
  flagImageSwitch = "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Spain.png" 
  flagImageMap = "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_United_Kingdom.png";
}
flagImage.src = flagImageMap;
flagDropdown.src = flagImageSwitch;
currentSelect.textContent = selectedLanguage;
langDropdown.textContent = selectedLanguage === "Español"? "English" : "Español"

const translateElements = document.querySelectorAll(".translate");
  translateElements.forEach((element) => {
    element.classList.remove("active");
  });

  // Show elements with the selected language class
const selectedLanguageElements = document.querySelectorAll(`.${langClass}`);
selectedLanguageElements.forEach((element) => {
  element.classList.add("active");
  });
});
  
// });

// var english = document.getElementById("en"),
// spanish = document.getElementById("es"),
// change_text = document.getElementById("translate");
// declare some variables to catch the various HTML elements

// english.addEventListener("click", function() {
// change(english, spanish);
// }, false
// );
// // add an event listener to listen to when the user clicks on one of the language span tags
// // this triggers our custom "change" function, which we will define later

// spanish.addEventListener("click", function() {
// change(spanish, english);
// }, false
// );

// function change(lang_on, lang_off1, lang_off2) {
// if (!lang_on.classList.contains("current_lang")) {
// // if the span that the user clicks on does not have the "current_lang" class
// lang_on.classList.add("current_lang");
// // add the "current_lang" class to it
// lang_off1.classList.remove("current_lang");
// lang_off2.classList.remove("current_lang");
// // remove the "current_lang" class from the other span
// }

// if (lang_on.innerHTML == "EN") {
// change_text.classList.add("en");
// change_text.classList.remove("spanish");

// }

// else if (lang_on.innerHTML == "ES") {
// change_text.classList.remove("en");
// change_text.classList.add("spanish");
// }

// }
// When the user scrolls the page, execute myFunction
let navbar = document.getElementById("navbar");
let navPos = navbar.getBoundingClientRect().top;
    navbar.classList.add("sticky");
    window.addEventListener("scroll", e => {
      scrollPos = window.scrollY;
    });
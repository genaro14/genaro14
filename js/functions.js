function darkerClass(className) {
  var elements = document.getElementsByClassName(className);
  for (let a of elements) {
    a.classList.toggle("dark");
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
  darkerClass("card");
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
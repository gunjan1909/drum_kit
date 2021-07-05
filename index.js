function myFunction(x) {
  if (x.matches) {
    alert("THIS SITE IS BEST VIEWED IN DESKTOP.");
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x);

// button detect
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonText = this.innerHTML;
    soundfunction(buttonText);
    animationfn(buttonText);
  });
}

// detecting keypress
document.addEventListener("keydown", function (event) {
  soundfunction(event.key);
  animationfn(event.key);
});

// function to make sound
function soundfunction(key) {
  switch (key) {
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function animationfn(selectkey) {
  var ab = document.querySelector("." + selectkey);
  ab.classList.add("pressed");
  setTimeout(function () {
    ab.classList.remove("pressed");
  }, 100);
}

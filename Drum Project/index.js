var noofdrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < noofdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function handleclick() {
    var buttoninnerhtml = this.innerHTML;
    switch_statement(buttoninnerhtml);
    buttonAnimation(buttoninnerhtml);
  }
  )
  document.querySelectorAll(".drum")[i].addEventListener("keypress", function (event) {
    
    switch_statement(event.key);
    buttonAnimation(event.key);
  })
};

function switch_statement(event) {
  switch (event) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    case "k":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log("buttoninnerhtml")
  }
}

function buttonAnimation(currentkey)
{
  var currentkey = document.querySelector("." + currentkey);
  currentkey.classList.add("pressed");
  setTimeout(function(){
    currentkey.classList.remove("pressed");
  },100)

}
var noofdrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < noofdrums; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function handleclick() {
        alert("I got clicked!");
    });
}


//toggles dark mode when button is pressed

function toggle(button) {
  if (button.value == "OFF") {
    button.value = "ON";
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("picc").style.backgroundColor = "darkslategray";
    document.getElementById("gallery").style.backgroundColor = "#27121C";
    document.getElementById("cont").style.backgroundColor = "#27121C";
    document.getElementById("head").style.backgroundColor = "#4E2337";
    document.getElementById("foot").style.backgroundColor = "#636363";
  } else {
    button.value = "OFF";
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("picc").style.backgroundColor = "white";
    document.getElementById("gallery").style.backgroundColor = "white";
    document.getElementById("cont").style.backgroundColor = "white";
    document.getElementById("head").style.backgroundColor = "#353635";
    document.getElementById("foot").style.backgroundColor = "lightgray";
  }
}
// Toggles the passed button from OFF to ON and vice-versa.
function toggle(button) {
    if (button.value == "OFF") {
      button.value = "ON";
        document.getElementById("t").style.backgroundColor = "black";
        document.getElementById("picc").style.backgroundColor = "darkslategray";
        document.getElementById("picc").style.borderRadius = "90%";
    } 
    else {
      button.value = "OFF";
      document.getElementById("t").style.backgroundColor = "white";
      document.getElementById("picc").style.backgroundColor = "white";
    }
  }
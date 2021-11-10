// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

const root = document.documentElement;

function copy() {
  navigator.clipboard.writeText("Siarune#0047");
  document.getElementById("copy").innerHTML = "Copied!"
}

function reset() {
  document.getElementById("copy").innerHTML = "Copy ID?"
}

window.onscroll = () => {
  var currentState = document.body.scrollTop || document.documentElement.scrollTop;
  var pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollStatePercentage = Math.floor((currentState / pageHeight) * 100);
  //setInterval(console.log(scrollStatePercentage), 250);
  root.style.setProperty("--perc", scrollStatePercentage);
}

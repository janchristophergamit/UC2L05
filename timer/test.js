var myVar = setInterval(myTimer ,100);
function myTimer() {
  var d = new Date();
  document.getElementById("a").innerHTML = d.toLocaleTimeString();
}
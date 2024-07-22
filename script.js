function clickSearch() {
  var x = document.getElementById("filterSort");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function clickLogin() {
  var x = document.getElementById("containerLogin");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function clickRegister() {
  var x = document.getElementById("containerRegister");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$('selector').click(function(event) {
  if(!event.detail || event.detail == 1){//activate on first click only to avoid hiding again on multiple clicks
    // code here. // It will execute only once on multiple clicks
  }
});
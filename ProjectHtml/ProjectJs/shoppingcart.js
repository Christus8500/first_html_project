var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myfunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let num = 0
let demoEl = document.getElementById('demo')
let priceEl = document.getElementById('price')
let totalEl = document.getElementById('total')
let subTotalEl = document.getElementById('subTotal')
let overallTotalEl = document.getElementById('overallTotal')

function increment() {
	num = num + 1
	demoEl.textContent = num
	totalEl.textContent = '$' + num * priceEl.textContent + '.00'
	subTotalEl.textContent = totalEl.textContent
	overallTotalEl.textContent = totalEl.textContent
}
function decrement() {
	num = num - 1
	demoEl.textContent = num
	totalEl.textContent = '$' + num * priceEl.textContent + '.00'
	subTotalEl.textContent = totalEl.textContent
	overallTotalEl.textContent = totalEl.textContent
}

function btnFunction() {
  num = 0
  demoEl.textContent = 0
  totalEl.textContent = '$' + num + '.00'
  subTotalEl.textContent = totalEl.textContent
  overallTotalEl.textContent = totalEl.textContent
}
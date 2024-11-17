// Footer Copyright Year
const fYear = document.getElementById("FYear")
const year = new Date().getFullYear();
console.log(year);
fYear.textContent = year;

// The Time-Based Greeting Message
var today = new Date();
var time = today.getHours();
var greet;

if (time > 0 && time <= 12) {
  greet = 'Good morning!';
} else if (time > 12 && time <= 17) {
  greet = 'Good afternoon!';
} else if (time > 17 && time <= 24) {
  greet = 'Good evening!';
} else {
  greet = 'It\'s Midnight!';
}

var show = document.getElementById('timeBasedMessage');
show.textContent = greet;

//The Alert Button
function bioAlert() {
    alert('Button works!');
  }

// The Alert Button That Changes Text
  var text = document.getElementById('btn-alert')
  //Default Text: "Test Button"
  text.addEventListener("mouseout", function() {
    text.textContent = "Test Button"
  })
  //Hover Text: "Click Me!"
  text.addEventListener("mouseover", function() {
    text.textContent = "Click Me!"
  })

  // The Random Numbered List That's Required
const list = document.getElementById("numbers");

for (let i = 1; i <= 12; i++) {
  const listItem = document.createElement("li");

  // Print those words!
  if (i % 2 === 0) {
    listItem.textContent = `This number is Even!`;
  } else {
    listItem.textContent = `This number is Odd!`;
  }

  list.appendChild(listItem);
}

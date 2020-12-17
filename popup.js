
// test for events
document.getElementById("userData").addEventListener("submit", myFunction);

function myFunction() {
  alert("The form was submitted");
  console.log("This is the start");
  // get user input from form
  var name = document.getElementById('email');
  var email = document.getElementById('name');
  var time = document.getElementById('time');
  var websites = document.getElementById('websites');
  
  // print stuff
  console.log(name);
  console.log(email);
  console.log(time);
  console.log(websites);
  console.log("The input ends here");
}


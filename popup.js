


// Ideally this shift would be given to us as input by the instructor
let shift = 2;
 // test for events

document.getElementById("userData").addEventListener("submit", myFunction);


function myFunction() {

  // Gets syudent name from form field
  var stuName = document.getElementById("sname").value;

  alert("The form was submitted");
  sleep(5000);
  // encyrpt name
  // student can submit this key as a canvas assignment and canvas answer key will decrypt it and give the student
  // points if the decrypted message equals the student's name
  encrypt(stuName);
  }
  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
  }
  // ideally this would be RSA but for now we will implement Caesar's Cipher
  function encrypt(stuName){
  
  
  // creates empty string to append the shifted characters to
  var res = "";
  stuName = stuName.toLowerCase();
  // go through each character and shift it's ascii value and return the corresponding character
  for (i = 0; i < stuName.length; i++) {
    val = stuName.charCodeAt(i) + shift;
    // in the event that the value goes beyond the number of ascii characters
    if(val > 255){
      val = val%255;
    }
    res += String.fromCharCode(val);
  }
  alert("Encrypted name: " +res);
}


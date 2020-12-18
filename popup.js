 
//Test
var prof_info = [];
var weblists =[];
var dur = 0;
document.getElementById("userData").addEventListener("submit", myFunction); 
function myFunction() {
  console.log("This is the start");
  // get user input from form
  var name = document.getElementById('name').value;
  var class_name = document.getElementById('class_name').value;
  var duration = document.getElementById('duration').value;
  var key = document.getElementById('key').value;
  var websites = document.getElementById('websites').value;
  var StuName = document.getElementById('sname').value;
  var sclass = document.getElementById('sclass').value;
  //The cookies accept input from only one professor. Ideally we would use an array of objects, but for the
  //proof we used
  if(name != '' && duration != ''){
    setCookie("class", class_name, 365);
    setCookie("duration", duration, 365);
    setCookie("key", key, 365);
    setCookie("websites", websites, 365);
 
  }
  var pclass = getCookie("class");
  if(sclass == pclass){
    var dur = getCookie("duration");
    var west = getCookie("key");
    sleep(dur * 6000);
    encrypt(StuName, west);
  }
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
  }
  // ideally this would be RSA but for now we will implement Caesar's Cipher
  function encrypt(stuName, shift){
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
  document.write("Encrypted name: " +res);
}
//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
 
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

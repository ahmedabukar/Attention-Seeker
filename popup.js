
let changeColor = document.getElementById('changeColor');


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
// split websites into individual strings and store in array
/*var websitesList = websites.split(",");

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);

  });
*/
/*changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};*/

//BLOCK WORDS
findString = function findText(text) {
  var i;
  for (i = 0; i < text.length; i++){
    if(!window.find(text)){
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = 'This site is blocked';
      document.documentElement.scrollTop = 0;
    };
  }
}

findString("WordToBlock");
findURL = function changeURL(text){
  var i;
  for (i = 0; i < text.length; i++){
    var current = window.location.href;
    if(current != text[i]){
      window.location.replace("https://www.google.co.in");
    }
    if(!current.startsWith(text[i])){
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = 'Domain is blocked';
      document.documentElement.scrollTop = 0;
    };
  } 
}


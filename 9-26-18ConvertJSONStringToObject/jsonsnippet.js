request.open('GET', requestURL);
request.responseType = 'text' // now we are getting raw textarea
request.send();

request.onload = function() {
  var superHeroesText = request.response; // get the string from the response
  var superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  showHeroes(superHeroes);

//stringify works the opposite way

//console commands
var myJSON = { "name": "Chris", "age": "38" };
myJSON
var myString = JSON.stringify(myJSON);
myString
Here we're creatin
}

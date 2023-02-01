
const stringList = ['Do it!', 'Don"t!', 'Maybe next time', 'What if you take a break?', 'You are lucky today!', 'Do some more documentation.'];

function generateRandomStringFromList() {
  const randomIndex = Math.floor(Math.random() * stringList.length);
  const result = stringList[randomIndex];
  document.getElementById("demo").innerHTML = result;
}

function menuItem(name, d1, d2, d3, gluten, cal, path) {
  this.name = name;
  this.d1 = d1;
  this.d2 = d2;
  this.d3 = d3;
  this.gluten = gluten;
  this.calories = cal;
  this.path = path;
}

function getNameKcal(menuItem) {

  return menuItem.name + ", " + menuItem.calories + " kCal";
}

let soph = new menuItem("The sophisticated burger", "A beautiful burger for all my fancy pants out there.", "It's even gluten free n shit.", "It'll keep you full but it won't make you happy.", false, "400", "https://www.theawesomegreen.com/wp-content/uploads/2014/09/Beet-Burger.jpg");
//document.getElementById("b1").innerHTML = getNameKcal(soph);

let greedy = new menuItem("The greedy burger", "A thicc burger for all you protein deficient vegans.", "Will fill that big black hole of emptiness inside you and then some.", "We won't be held responsible for any jaw fractures.", true, "1500", "https://static01.nyt.com/images/2019/10/23/dining/22fakemeat1/22fakemeat1-articleLarge.jpg?quality=75&auto=webp&disable=upscale");
//document.getElementById("b2").innerHTML = getNameKcal(greedy);

let dirty = new menuItem("The dirty burger", "A filthy burger with too much mayo for when you're feeling nasty.", "Seriously this one is gross, don't eat it if you're having a good day.", "At least it's low on cholesterol.", true, "3000", "https://www.theawesomegreen.com/wp-content/uploads/2016/01/Vegan-Burger.jpg");
//document.getElementById("b3").innerHTML = getNameKcal(dirty);

let randomBurger1 = new menuItem("Random burger 1", "d1", "d2", "d3", false, "1000", "https://www.pinclipart.com/picdir/big/13-132538_burger-svg-png-icon-free-download-545640-clip.png");
//document.getElementById("b4").innerHTML = getNameKcal(randomBurger1);

let randomBurger2 = new menuItem("Random burger 2", "d1", "d2", "d3", false, "1000", "https://www.pinclipart.com/picdir/big/13-132538_burger-svg-png-icon-free-download-545640-clip.png");
//document.getElementById("b5").innerHTML = getNameKcal(randomBurger2);

menu = [soph, greedy, dirty, randomBurger1, randomBurger2];

let burgerElem = document.getElementsByClassName("burger");
console.log(burgerElem);
for (let i = 0; i < burgerElem.length; i++) {

	let title = document.createElement("h3");
  let titleText = document.createTextNode(menu[i].name);
  let img = document.createElement("img");
  img.src = menu[i].path;
  img.width = 400;

  let list = document.createElement("ul");
  let desc1 = document.createElement("li");
  let d1 = document.createTextNode(menu[i].d1);
  let desc2 = document.createElement("li");
  let d2 = document.createTextNode(menu[i].d2);
  let desc3 = document.createElement("li");
  let d3 = document.createTextNode(menu[i].d3);

  let gluten = document.createElement("li");
  let glut;


  if (menu[i].gluten == true) {
    glut = document.createTextNode("Allergies: Gluten.");
  }
  if (menu[i].gluten == false){
    glut = document.createTextNode("Allergies: None.");
  }

  let calories = document.createElement("li");
  let cal = document.createTextNode(menu[i].calories + " kCal.");

  burgerElem[i].appendChild(img);
  burgerElem[i].appendChild(title);
  burgerElem[i].appendChild(list);

  title.appendChild(titleText);

  list.appendChild(desc1);
  list.appendChild(desc2);
  list.appendChild(desc3);
  list.appendChild(gluten);
  list.appendChild(calories);

  desc1.appendChild(d1);
  desc2.appendChild(d2);
  desc3.appendChild(d3);
  gluten.appendChild(glut);
  calories.appendChild(cal);


}

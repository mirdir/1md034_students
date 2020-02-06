function menuItem(burger, algr, cal, path) {
  this.burger = burger;
  this.allergies = algr;
  this.calories = cal;
  this.path = path;
}

function getNameKcal(menuItem) {

  return menuItem.burger + ", " + menuItem.calories + " kCal";
}

let soph = new menuItem("The sophisticated burger", "None", "400", "https://www.theawesomegreen.com/wp-content/uploads/2014/09/Beet-Burger.jpg");
document.getElementById("b1").innerHTML = getNameKcal(soph);

let greedy = new menuItem("The greedy burger", "Gluten", "1500", "https://static01.nyt.com/images/2019/10/23/dining/22fakemeat1/22fakemeat1-articleLarge.jpg?quality=75&auto=webp&disable=upscale");
document.getElementById("b2").innerHTML = getNameKcal(greedy);

let dirty = new menuItem("The dirty burger", "Gluten", "3000", "https://www.theawesomegreen.com/wp-content/uploads/2016/01/Vegan-Burger.jpg");
document.getElementById("b3").innerHTML = getNameKcal(dirty);

let randomBurger1 = new menuItem("Random burger 1", "None", "1000", "picture missing");
document.getElementById("b4").innerHTML = getNameKcal(randomBurger1);

let randomBurger2 = new menuItem("Random burger 2", "None", "1000", "picture missing");
document.getElementById("b5").innerHTML = getNameKcal(randomBurger2);

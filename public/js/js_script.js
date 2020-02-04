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
console.log(getNameKcal(soph));

let greedy = new menuItem("The greedy burger", "Gluten", "1500", "https://static01.nyt.com/images/2019/10/23/dining/22fakemeat1/22fakemeat1-articleLarge.jpg?quality=75&auto=webp&disable=upscale");
console.log(getNameKcal(greedy));

let dirty = new menuItem("The dirty burger", "Gluten", "3000", "https://www.theawesomegreen.com/wp-content/uploads/2016/01/Vegan-Burger.jpg");
console.log(getNameKcal(dirty));

let randomBurger1 = new menuItem("Random burger 1", "None", "1000", "picture missing");
console.log(getNameKcal(randomBurger1));

let randomBurger2 = new menuItem("Random burger 2", "None", "1000", "picture missing");
console.log(getNameKcal(randomBurger2));

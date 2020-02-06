const vm = new Vue({
  el: '#burgers',
  data: {
    burger1: getNameKcal(soph),
    burger2: getNameKcal(greedy),
    burger3: getNameKcal(dirty),
    burger4: getNameKcal(randomBurger1),
    burger5: getNameKcal(randomBurger2)
  }
}) 

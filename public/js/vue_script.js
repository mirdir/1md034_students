
const vm = new Vue({
  el: '#burgers',
  data: {
    food,
    //menu: [soph, greedy, dirty, randomBurger1, randomBurger2]
    checkedBurgers: []
  }
});

const ex = new Vue({
  el: '#contact',
  data: {
    nameInput: "",
    emailInput: "",
    streetInput: "",
    numberInput: "",
    paymentInput: "Credit card",
    radioOption: "female",
    array: "",
    func: function() {
      //console.log("hej")
      this.array = this.nameInput + this.emailInput + this.streetInput + this.numberInput + this.paymentInput + this.radioOption + vm.checkedBurgers
    }

  }
});

'use strict';
const socket = io();




const vm = new Vue({
  el: '#main',
  data: {
    nameInput: "",
    emailInput: "",
    //streetInput: "",
    //numberInput: "",
    paymentInput: "Credit card",
    radioOption: "female",
    array: "",
    orders: {},
    order: {
      details: {x: 0, y: 0},
      showT: false,
    },
    integer: 0,
    food,
    checkedBurgers: [],
  },
    func: function() {
      //console.log("hej")
      this.array = this.nameInput + this.emailInput /*+ this.streetInput + this.numberInput */+ this.paymentInput + this.radioOption + this.checkedBurgers
    },
    methods: {
      getNext: function() {
        return this.integer + 1;
      },
      addOrder: function(event) {
        this.array = this.nameInput + this.emailInput /*+ this.streetInput + this.numberInput */+ this.paymentInput + this.radioOption + this.checkedBurgers
        socket.emit('addOrder', {
          orderId: this.getNext(),
          details: {
            x: this.order.details.x,
            y: this.order.details.y,
          },
          orderItems: [this.checkedBurgers],
        });
      },
      displayOrder: function(event) {
        let offset = {
          x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top,
        };
        this.order.details.x = event.clientX - 10 - offset.x,
        this.order.details.y = event.clientY - 10 - offset.y,
        this.order.showT = true    
      }
    
    },
});

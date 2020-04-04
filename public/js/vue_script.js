'use strict';
const socket = io();




const vm = new Vue({
  el: '#main',
  data: {
    nameInput: "",
    emailInput: "",
    paymentInput: "Credit card",
    radioOption: "female",
    array: "",
    orders: {},
    order: {
      details: {x: 0, y: 0},
      showT: false,
    },
    integ: 1,
    food,
    checkedBurgers: [],
    customerInfo: [],
    orderConfirmation: false,
  },
    methods: {
      getNext: function() {
        return this.integ++;
      },
      addOrder: function(event) {
        this.orderConfirmation = true
        socket.emit('addOrder', {
          orderId: this.getNext(),
          details: {
            x: this.order.details.x,
            y: this.order.details.y,
          },
          orderItems: [this.checkedBurgers.join(", ")],
          customerInfo: "Name: " + this.nameInput + ", Email: " + this.emailInput + ", Payment method: " + this.paymentInput + ", Gender: " + this.radioOption,
          
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

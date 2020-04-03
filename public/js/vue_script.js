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
    order: {details: {x: 0, y: 0},},
    food,
    checkedBurgers: [],
  },
    func: function() {
      //console.log("hej")
      this.array = this.nameInput + this.emailInput /*+ this.streetInput + this.numberInput */+ this.paymentInput + this.radioOption + this.checkedBurgers
    },
    created: function() {
      socket.on('initialize', function(data) {
        this.orders = data.orders;
      }.bind(this));
      socket.on('currentQueue', function(data) {
        this.orders = data.orders;
      }.bind(this));
    },
    methods: {
      getNext: function() {
        let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
          return Math.max(last, next);
        }, 0);
        return lastOrder + 1;
      },
      addOrder: function(event) {
        
        socket.emit('addOrder', {
          orderId: this.getNext(),
          details: {
            x: event.clientX - 10 - offset.x,
            y: event.clientY - 10 - offset.y,
          },
          orderItems: ['Beans', 'Curry'],
        });
      },
      displayOrder: function(event) {
        let offset = {
          x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top,
        };
        this.order.details.x = event.clientX - 10 - offset.x,
        this.order.details.y = event.clientY - 10 - offset.y,    
      }
    
    },
});

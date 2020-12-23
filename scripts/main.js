document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      products: [
        { id: 1, name: '老大', price: 20, photo: 'images/cat001.jpg' },
        { id: 2, name: '貝貝', price: 15, photo: 'images/cat002.jpg' },
        { id: 3, name: '老虎', price: 10, photo: 'images/cat003.jpg' },
        { id: 4, name: '胖胖', price: 8.5, photo: 'images/cat004.jpg' },
        { id: 5, name: '小花', price: 9.99, photo: 'images/cat005.jpg' },
        { id: 6, name: '黑臉', price: 12.5, photo: 'images/cat006.jpg' }
      ],
      cartItems: []
    },
    methods: {
      updateQuantity(itemId) {
        const index = this.cartItems.findIndex(item => item.id == itemId)
        if (index >= 0) {
          const item = this.cartItems[index]
          item.quantity += 1
          this.cartItems.splice(index, 1, item)
        }
      },
      emptyCart() {
        this.cartItems = []
      },
      addItem(product) {
        const index = this.cartItems.findIndex(item => item.id == product.id)
        if (index >= 0) {
          const product = this.cartItems[index]
          product.quantity += 1
          this.cartItems.splice(index, 1, product)
        } else {
          product.quantity = 1
          this.cartItems.push(product)
        }
      },
      removeItem(itemId) {
        const index = this.cartItems.findIndex(item => item.id == itemId)
        if (index >= 0) {
          this.cartItems.splice(index, 1)
        }
      }
    },
    computed: {
      totalPrice() {
        let total = 0
        this.cartItems.forEach(item => {
          total += item.price * item.quantity
        })
        return Math.round(total * 100) / 100
      }
    }
  })
})
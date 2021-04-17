const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
<<<<<<< Updated upstream
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
=======
            todos: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1234, farba: 'Hnedá'},
                {id: 4567, farba: 'fialová'}
            ],
            sizes: [
               'XS', 'S', 'M', 'L', 'XL', 'XXL'
            ]


>>>>>>> Stashed changes
        }
    }
})


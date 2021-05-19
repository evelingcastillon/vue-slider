const app = new Vue (
    {
        el: '#app',
        data: {
            counter: 0,
            images: [
                "./assets/img/montagna.jpg",
                "./assets/img/citta.jpg",
                "./assets/img/fiume.jpg",
                "./assets/img/prato.jpg",
                "./assets/img/spiaggia.jpg"
            ]
        },
        methods: {
            prev(){
                if(this.counter === 0){
                    return this.counter = this.images.length -1;
                }
                return this.counter -=1
            },
            next(){
                if(this.counter === this.images.length -1){
                    return this.counter = 0;
                }
                return this.counter += 1;
            },
            changeSlide(index){
                return this.counter = index;
            }
        }
    }
)
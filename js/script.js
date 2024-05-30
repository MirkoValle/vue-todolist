const { createApp, ref } = Vue

createApp({
    data() {
        return {
            task: [
                {
                    text: "Finire l'esercizio",
                    done: false,
                },
                {
                    text: "Non disperarsi",
                    done: false,
                },
                {
                    text: "Dai su che ce la fai",
                    done: false,
                },
                {
                    text: "Non te ferma",
                    done: false,
                },
                {
                    text: "Dormire non è un opzione",
                    done: false,
                }
            ],
        }
    },
    methods: {
        
    }
}).mount('#app')
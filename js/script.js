const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
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
        changeDone: function (index) {
            this.tasks[index].done = !this.tasks[index].done;
        },

    }
}).mount('#app')
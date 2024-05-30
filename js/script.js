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
            newTask: "",
        }
    },
    methods: {
        changeDone: function (index) {
            this.tasks[index].done = !this.tasks[index].done;
        },

        deleteTask: function (index) {
            this.tasks.splice(index, 1);
        },

        addTask: function () {
            if (this.newTask.trim().length > 0) {
                const newItem = {
                    text: this.newTask.trim(),
                    done: false,
                }
                this.tasks.push(newItem);
                this.clearInput()
            }
        },

        clearInput() {
            this.newTask = ""
        }

    }
}).mount('#app')
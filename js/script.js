const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "Finire l'esercizio",
                    done: false,
                    edit: false,
                },
                {
                    text: "Non disperarsi",
                    done: false,
                    edit: false,
                },
                {
                    text: "Dai su che ce la fai",
                    done: false,
                    edit: false,
                },
                {
                    text: "Non te ferma",
                    done: false,
                    edit: false,
                },
                {
                    text: "Dormire non è un opzione",
                    done: false,
                    edit: false,
                }
            ],
            newTask: "",
            editContent: "",
        }
    },
    methods: {
        changeDone: function (index) {
            this.tasks[index].done = !this.tasks[index].done;
        },

        deleteTask: function (index) {
            this.stopEdit()
            this.tasks.splice(index, 1);
        },

        addTask: function () {
            if (this.newTask.trim().length > 0) {
                const newItem = {
                    text: this.newTask.trim(),
                    done: false,
                    edit: false,
                }
                this.stopEdit()
                this.tasks.push(newItem);
                this.clearInput()
            }
        },

        clearInput() {
            this.newTask = ""
        },

        stopEdit() {
            this.tasks.forEach(task => {
                task.edit = false
            });
            this.editContent = "";
        },

        startEdit: function (index) {
            this.tasks.forEach(task => {
                task.edit = false
            });
            this.stopEdit()
            this.tasks[index].edit = true;
        },

        editTask: function (index) {
            if (this.editContent.trim().length > 0)
                this.tasks[index].text = this.editContent;
            this.stopEdit()
            this.tasks[index].edit = false
        },

        undoEdit: function (index) {
            this.stopEdit()
            this.tasks[index].edit = false
        }
    }
}).mount('#app')
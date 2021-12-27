import createTask from './new-task.js'

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.length) {
        for (let i = 0 ; i < localStorage.length ; i++) {
            let taskObjString = localStorage.getItem("task_" + (i + 1))
            let taskObj = JSON.parse(taskObjString)
            let { name:taskName, id:taskId } = taskObj
            createTask(taskName, taskId)
        }
    }
})


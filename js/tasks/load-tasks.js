import changeTaskPage from "./page-change.js"
import createTask from "./create-task.js"

let lists = JSON.parse(localStorage.getItem("lists"))

document.addEventListener("DOMContentLoaded", () => {
    // changeTaskPage(selectedList)

    if (localStorage.length) {
        for (let i = 0 ; i < localStorage.length ; i++) {
            let taskObjString = localStorage.getItem("task_" + (i + 1))
            let taskObj = JSON.parse(taskObjString)
            let { name:taskName, id:taskId } = taskObj
            createTask(taskName, taskId)
        }
    }
})
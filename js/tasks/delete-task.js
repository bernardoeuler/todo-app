function deleteTask(btn) {
    const tasksContainer = document.querySelector(".tasks-container")
    const lists = JSON.parse(localStorage.getItem("lists"))
    const taskElement = btn.parentNode

    let listId = tasksContainer.parentElement.dataset.listId
    let taskId = taskElement.dataset.taskId

    let listIndex = lists.findIndex(list => list.id === listId)
    let taskIndex = lists[listIndex].tasks.findIndex(task => task.id === taskId)
    lists[listIndex].tasks.splice(taskIndex, 1)

    let listsStr = JSON.stringify(lists)
    localStorage.setItem("lists", listsStr)
    
    tasksContainer.removeChild(taskElement)
}

function deleteAll() {
    const tasksContainer = document.querySelector(".tasks-container")
    const lists = JSON.parse(localStorage.getItem("lists"))

    let listId = tasksContainer.parentElement.dataset.listId
    let listIndex = lists.findIndex(list => list.id === listId)
    let listTasks = lists[listIndex].tasks
    lists[listIndex].tasks.splice(0, listTasks.length)

    let listsStr = JSON.stringify(lists)
    localStorage.setItem("lists", listsStr)

    let tasks = Array.from(tasksContainer.children)
    tasks.forEach(task => {
        tasksContainer.removeChild(task)
    })
}
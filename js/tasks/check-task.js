function checkTask(checkbox) {
    const tasksContainer = document.querySelector(".tasks-container")
    const checkboxContainer = checkbox.parentElement
    const taskElement = checkboxContainer.parentElement
    const lists = JSON.parse(localStorage.getItem("lists"))

    let listId = tasksContainer.parentElement.dataset.listId
    let taskId = taskElement.dataset.taskId

    let listIndex = lists.findIndex(list => list.id === listId)
    let taskIndex = lists[listIndex].tasks.findIndex(task => task.id === taskId)
    let task = lists[listIndex].tasks[taskIndex]

    lists[listIndex].tasks[taskIndex].checked = !task.checked
    checkboxContainer.classList.toggle("checked")

    let listsStr = JSON.stringify(lists)
    localStorage.setItem("lists", listsStr)
}
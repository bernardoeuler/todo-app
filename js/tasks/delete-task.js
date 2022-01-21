function deleteTask(btn) {
    let tasksContainer = document.querySelector(".tasks-container")
    tasksContainer.removeChild(btn.parentNode)
    localStorage.removeItem(btn.parentNode.id)
}
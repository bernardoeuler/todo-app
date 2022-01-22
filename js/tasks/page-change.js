import createTask from "./create-task.js"

export default function changeListPage(list) {
    const mainContent = document.querySelector("main")
    mainContent.innerHTML = ""
    createListPage()

    let tasksArray = list.listTasks
    if (tasksArray.length) {
        tasksArray.forEach(task => {
            let { name:taskName, id:taskId } = task
            createTask(taskName, taskId)
        })
    }

    function createListPage() {
        let titleText = list.listName

        // Create task page container 
        let listPage = document.createElement("div")
        listPage.id = titleText
        listPage.classList.add("list-page")
        mainContent.appendChild(listPage)

        // Create page title
        let pageTitle = document.createElement("h1")
        pageTitle.innerText = titleText
        listPage.appendChild(pageTitle)

        // Create action buttons
        let tasksActions = document.createElement("div")
        tasksActions.classList.add("tasks-actions")
        listPage.appendChild(tasksActions)

        // Create new task button
        let newTaskBtn = document.createElement("button")
        newTaskBtn.classList.add("new-task")
        tasksActions.appendChild(newTaskBtn)
        
        let newTaskBtnText = document.createElement("span")
        newTaskBtnText.innerText = "New Task"
        newTaskBtn.appendChild(newTaskBtnText)

        let plusIcon = document.createElement("i")
        plusIcon.classList.add("fas", "fa-plus")
        newTaskBtn.appendChild(plusIcon)

        // Create delete all button
        let deleteAllBtn = document.createElement("button")
        deleteAllBtn.classList.add("delete-all")
        deleteAllBtn.setAttribute("onclick", "deleteAll(this)")
        deleteAllBtn.innerText = "Delete All"
        tasksActions.appendChild(deleteAllBtn)

        // Create divider element
        let divider = document.createElement("div")
        divider.classList.add("divider")
        listPage.appendChild(divider)

        // Create tasks container
        let tasksContainer = document.createElement("div")
        tasksContainer.classList.add("tasks-container")
        listPage.appendChild(tasksContainer)
    }
}
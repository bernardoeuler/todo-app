export default function changeTaskPage(list) {
    const mainContent = document.querySelector("main")
    mainContent.innerHTML = ""
    createTaskPage()

    function createTaskPage() {
        let titleText = list.listName

        // Create task page container 
        let taskPage = document.createElement("div")
        taskPage.id = titleText
        taskPage.classList.add("task-page")
        mainContent.appendChild(taskPage)

        // Create page title
        let pageTitle = document.createElement("h1")
        pageTitle.innerText = titleText
        taskPage.appendChild(pageTitle)

        // Create action buttons
        let tasksActions = document.createElement("div")
        tasksActions.classList.add("tasks-actions")
        taskPage.appendChild(tasksActions)

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
        taskPage.appendChild(divider)

        // Create tasks container
        let tasksContainer = document.createElement("div")
        tasksContainer.classList.add("tasks-container")
        taskPage.appendChild(tasksContainer)   
    }
}
import changeListPage from "./page-change.js"
import createListObj from "./create-list-obj.js"
import createList from "./create-list.js"

const newList = document.querySelector(".new-list")

newList.addEventListener("click", () => {
    newList.blur()

    // Create modal which adds a new list
    let modalContainer = document.createElement("div")
    modalContainer.classList.add("modal-container")
    
    let modalContent = document.createElement("div")
    modalContent.classList.add("modal-content")
    modalContainer.appendChild(modalContent)

    let listNameField = document.createElement("textarea")
    listNameField.classList.add("name-field")
    listNameField.setAttribute("placeholder", "List name")
    listNameField.setAttribute("rows", "1")
    modalContent.appendChild(listNameField)

    let modalActions = document.createElement("div")
    modalActions.classList.add("modal-actions")
    modalContent.appendChild(modalActions)

    let cancelBtn = document.createElement("button")
    cancelBtn.classList.add("action", "cancel-btn")
    cancelBtn.innerText = "Cancel"
    modalActions.appendChild(cancelBtn)

    let saveBtn = document.createElement("button")
    saveBtn.classList.add("action", "save-btn")
    saveBtn.innerText = "Save"
    modalActions.appendChild(saveBtn)

    document.body.appendChild(modalContainer)
    listNameField.focus()

    listNameField.addEventListener("keydown", evt => {
        if (evt.key === "Enter") {
            evt.preventDefault()
            saveBtn.click()
        }
    })

    listNameField.addEventListener("input", () => {
        listNameField.style.height = "auto"
        listNameField.style.height = listNameField.scrollHeight + "px"
    })

    // For window size changes
    window.addEventListener("resize", () => {
        listNameField.style.height = "auto"
        listNameField.style.height = listNameField.scrollHeight + "px"
    })

    // Exit modal clicking outside the modal
    modalContainer.addEventListener("click", evt => {
        if (evt.target == modalContainer)
            document.body.removeChild(modalContainer)
    })

    // Exit modal clicking on cancel button
    cancelBtn.addEventListener("click", () => {
        listNameField.blur()
        document.body.removeChild(modalContainer)
    })

    saveBtn.addEventListener("click", () => {
        const listsContainer = document.querySelector('.lists-container')
        const listsSection = listsContainer.firstElementChild
        let lists = JSON.parse(localStorage.getItem("lists"))

        let listsSectionElements = Array.from(listsSection.children)
        let listElements = listsSectionElements.filter(elm => elm.classList.contains("list"))

        listElements.forEach(list => {
            list.classList.remove("selected-list")
        })
        
        lists.forEach(list => {
            list.selected = false
        })

        let listName = listNameField.value
        let listId = Date.now().toString()
        let listTasks = []
        let listObj = createListObj(listName, listId, listTasks, true)
        lists.push(listObj)
        let listsStr = JSON.stringify(lists)
        localStorage.setItem("lists", listsStr)

        // Create a new list component
        createList(listName, listId, true)

        // Clear field value
        listNameField.value = ""

        // Exit modal and remove it from the HTML
        document.body.removeChild(modalContainer)

        changeListPage(listObj)

        listNameField.blur()
    })
})
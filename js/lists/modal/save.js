import changeListPage from "../page-change.js"
import createList from "../create-list.js"
import createListObj from "../create-list-obj.js"

export default function save(saveBtn, field, modalContainer) {
    saveBtn.addEventListener("click", () => {
        const listsContainer = document.querySelector('.lists-container')
        const listsSection = listsContainer.firstElementChild
        const lists = JSON.parse(localStorage.getItem("lists"))

        let listsSectionElements = Array.from(listsSection.children)
        let listElements = listsSectionElements.filter(elm => elm.classList.contains("list"))

        listElements.forEach(listElement => {
            let listIcon = listElement.querySelector("i")
            listIcon.className = "far fa-folder"
            listElement.classList.remove("selected-list")
        })
        
        lists.forEach(list => {
            list.selected = false
        })

        let listName = field.value
        let listId = Date.now().toString()
        let listTasks = []
        let listObj = createListObj(listName, listId, listTasks, true)
        lists.push(listObj)
        let listsStr = JSON.stringify(lists)
        localStorage.setItem("lists", listsStr)

        // Create a new list component
        createList(listName, listId, true)

        // Clear field value
        field.value = ""

        // Exit modal and remove it from the HTML
        document.body.removeChild(modalContainer)

        changeListPage(listObj)

        field.blur()
    })

    field.addEventListener("keydown", evt => {
        // If press "Enter" key it also saves the task
        if (evt.key == "Enter") {
            evt.preventDefault()
            saveBtn.click()
        }
    })
}

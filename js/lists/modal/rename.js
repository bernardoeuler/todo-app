import changeListPage from "../page-change.js"

export default function rename(saveBtn, field, modalContainer, listId) {
    saveBtn.addEventListener("click", () => {
        const listElement = document.querySelector(`[data-list-id="${listId}"]`)
        const lists = JSON.parse(localStorage.getItem("lists"))

        let listNameText = field.value

        let listName = listElement.querySelector(".list-name")
        listName.innerText = listNameText

        let listIndex = lists.findIndex(list => list.id === listId)
        lists[listIndex].name = listNameText

        let listsStr = JSON.stringify(lists)
        localStorage.setItem("lists", listsStr)
        
        if (listElement.classList.contains("selected-list")) {
            changeListPage(lists[listIndex])
        }

        field.blur()

        document.body.removeChild(modalContainer)
    })

    field.addEventListener("keydown", evt => {
        // If press "Enter" key it also saves the task
        if (evt.key == "Enter") {
            evt.preventDefault()
            saveBtn.click()
        }
    })
}
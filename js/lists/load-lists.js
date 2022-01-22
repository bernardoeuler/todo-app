import changeListPage from "../tasks/page-change.js"
import createListObj from "./create-list-obj.js"
import createList from "./create-list.js"

const listsContainer = document.querySelector(".lists-container")
const listsSection = listsContainer.firstElementChild

let lists
getLists()
render()

listsSection.addEventListener("click", e => {
    let elm = e.target
    getLists()

    if (elm.className === "list") {
        let selectedListId = elm.dataset.listId
        let listElements = Array.from(listsSection.children)

        listElements.forEach(listElement => {
            let listIcon = listElement.firstElementChild
            listIcon.className = "far fa-folder"
            listElement.classList.remove("selected-list")
        })

        lists.forEach(list => {
            list.selected = false
        })

        elm.classList.add("selected-list")
        elm.children[0].className = "far fa-folder-open"
        let selectedListIndex = lists.findIndex(elm => elm.listId === selectedListId)
        let selectedList = lists[selectedListIndex]
        selectedList.selected = true
        let listsStr = JSON.stringify(lists)
        localStorage.setItem("lists", listsStr)

        changeListPage(selectedList)
    }
})

function getLists() {
    let listsArray = JSON.parse(localStorage.getItem("lists"))
    if (listsArray === null) {
        let defaultListObj = createListObj("Tasks", "1", [], true)
        lists = [defaultListObj]
        let listsStr = JSON.stringify(lists)
        localStorage.setItem("lists", listsStr)
    }

    else {
        lists = listsArray
    }
}

function render() {
    listsSection.innerHTML = ""
    lists.forEach(list => {
        let { listName, listId, selected } = list
        createList(listName, listId, selected)
    })
}

function deleteList(list) {
    listsContainer.removeChild(list)
    let deletedListId = list.dataset.listId
    let deletedListIndex = lists.findIndex(elm => elm.listId === deletedListId)
    lists.splice(deletedListIndex, 1)
    let listsStr = JSON.stringify(lists)
    localStorage.setItem("lists", listsStr)
}
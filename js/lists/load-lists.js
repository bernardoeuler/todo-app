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

    if (elm.classList.contains("list")) {
        let selectedListId = elm.dataset.listId
        let listIcon = elm.querySelector("i")

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

        elm.classList.add("selected-list")
        listIcon.className = "far fa-folder-open"

        let selectedListIndex = lists.findIndex(list => list.id === selectedListId)
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
        let defaultListObj = createListObj("Tasks", "default", [], true)
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
        let { name, id, selected } = list
        createList(name, id, selected)
    })
}
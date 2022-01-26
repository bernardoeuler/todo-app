export default function createList(name, id, selected) {
    const listsContainer = document.querySelector('.lists-container')
    const listsSection = listsContainer.firstElementChild

    let newList = document.createElement("div")
    newList.dataset.listId = id
    newList.classList.add("list")
    newList.setAttribute("ondblclick", "deleteList(this)")
    listsSection.appendChild(newList)

    let listIcon = document.createElement("i")
    listIcon.classList.add("far", "fa-folder")
    newList.appendChild(listIcon)

    let listNameContainer = document.createElement("div")
    listNameContainer.classList.add("list-name-container")
    newList.appendChild(listNameContainer)

    let listName = document.createElement("span")
    listName.classList.add("list-name")
    listName.innerText = name
    listNameContainer.appendChild(listName)

    let listOptions = document.createElement("button")
    listOptions.classList.add("list-options")
    listOptions.setAttribute("onclick", "openListOptions(this)")
    newList.appendChild(listOptions)

    let listOptionsIcon = document.createElement("i")
    listOptionsIcon.classList.add("fas", "fa-ellipsis-h", "dots")
    listOptions.appendChild(listOptionsIcon)

    let listSeparator = document.createElement("div")
    listSeparator.classList.add("list-separator")
    listsSection.appendChild(listSeparator)

    if (selected) {
        newList.classList.add("selected-list")
        listIcon.className = "far fa-folder-open"
    }
}
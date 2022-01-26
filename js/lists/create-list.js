export default function createList(name, id, selected) {
    const listsContainer = document.querySelector('.lists-container')
    const listsSection = listsContainer.firstElementChild

    let newList = document.createElement("div")
    let listIcon = document.createElement("i")
    let listName = document.createElement("span")
    let listSettings = document.createElement("div")
    let listSeparator = document.createElement("div")

    newList.dataset.listId = id
    newList.classList.add("list")
    listIcon.classList.add("far", "fa-folder")
    newList.setAttribute("ondblclick", "deleteList(this)")
    listName.innerText = name
    listSeparator.classList.add("list-separator")


    if (selected) {
        newList.classList.add("selected-list")
        listIcon.className = "far fa-folder-open"
    }

    newList.appendChild(listIcon)
    newList.appendChild(listName)
    listsSection.appendChild(newList)
    listsSection.appendChild(listSeparator)
}
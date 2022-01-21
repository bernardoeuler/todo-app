export default function createList(name, id, selected) {
    const listsContainer = document.querySelector('.lists-container')
    const listsSection = listsContainer.firstElementChild

    let newList = document.createElement("div")
    let listIcon = document.createElement("i")
    let listName = document.createElement("span")
    newList.dataset.listId = id
    newList.classList.add("list")
    listIcon.classList.add("far", "fa-folder")
    newList.setAttribute("ondblclick", "deleteList(this)")
    listName.innerText = name

    if (selected) {
        newList.classList.add("selected-list")
        listIcon.className = "far fa-folder-open"
    }

    newList.appendChild(listIcon)
    newList.appendChild(listName)
    listsSection.appendChild(newList)
}
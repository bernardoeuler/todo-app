import listModal from "./modal/list-modal.js"
import changeListPage from "../tasks/page-change.js"

const listsSection = document.querySelector(".lists")

listsSection.addEventListener("click", openListOptions)

function openListOptions(e) {
    let elm = e.target
    if (elm.classList.contains("list-options")) {
        const lists = JSON.parse(localStorage.getItem("lists"))

        const coords = getPos(elm)
        const {x, y} = coords
    
        const listElement = elm.parentElement
        const listId = listElement.dataset.listId
        
        elm.blur()
        createListMenu()
    
        // Get menu elements
        let menuOverlay = document.querySelector(".menu-overlay")
        let deleteOption = document.querySelector(".delete-list")
        let renameOption = document.querySelector(".rename-list")
    
        if (listId === "default") {
            deleteOption.classList.add("disabled");
        }
    
        function createListMenu() {
            let menuOverlay = document.createElement("div")
            menuOverlay.classList.add("menu-overlay")
            document.body.appendChild(menuOverlay)
    
            let listMenuContainer = document.createElement("div")
            listMenuContainer.classList.add("list-menu-container")
            menuOverlay.appendChild(listMenuContainer)
            listMenuContainer.style.left = `${x}px`
            listMenuContainer.style.top = `${y}px`
    
            let option = document.createElement("div")
            option.classList.add("option")
             
            let optionIcon = document.createElement("i")
            option.appendChild(optionIcon)
    
            let optionText = document.createElement("div")
            option.appendChild(optionText)
    
            let deleteOption = option.cloneNode(true)
            let deleteIcon = deleteOption.querySelector("i")
            let deleteText = deleteOption.querySelector("div")
            deleteOption.classList.add("delete-list")
            deleteIcon.classList.add("fas", "fa-trash-alt")
            deleteText.innerText = "Delete"
            listMenuContainer.appendChild(deleteOption)
    
            let renameOption = option.cloneNode(true)
            let renameIcon = renameOption.querySelector("i")
            let renameText = renameOption.querySelector("div")
            renameOption.classList.add("rename-list")
            renameIcon.classList.add("fas", "fa-edit")
            renameText.innerText = "Rename"
            listMenuContainer.appendChild(renameOption)
        }
    
        function getPos(elm) {
            let rect = elm.getBoundingClientRect()
            return { x:rect.left, y:rect.top }
        }

        menuOverlay.addEventListener("click", e => {
            let elm = e.target
            if (elm === menuOverlay) {
                document.body.removeChild(menuOverlay)
            }
        })
    
        deleteOption.addEventListener("click", () => {
            document.body.removeChild(menuOverlay)

            let deletedListIndex = lists.findIndex(list => list.id === listId)
            lists.splice(deletedListIndex, 1)
            lists[0].selected = true

            listsSection.removeChild(listElement.nextElementSibling) // remove separator
            listsSection.removeChild(listElement)

    
            let defaultList = listsSection.firstElementChild
            let defaultListIcon = defaultList.querySelector("i")

            defaultList.classList.add("selected-list")
            defaultListIcon.className = "far fa-folder-open"
            changeListPage(lists[0])

            let listsStr = JSON.stringify(lists)
            localStorage.setItem("lists", listsStr)
        })

        renameOption.addEventListener("click", () => {
            document.body.removeChild(menuOverlay)
            listModal("rename", listId)
        })
    }
}
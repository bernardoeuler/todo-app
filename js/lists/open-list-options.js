function openListOptions(btn) {
    const coords = getPos(btn)
    const {x, y} = coords
    
    btn.blur()
    console.log(coords)
    createListMenu()

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

        let optionText = document.createElement("span")
        option.appendChild(optionText)

        let deleteOption = option.cloneNode(true)
        let deleteIcon = deleteOption.querySelector("i")
        let deleteText = deleteOption.querySelector("span")
        deleteIcon.classList.add("fas", "fa-trash")
        deleteText.innerText = "Delete"
        listMenuContainer.appendChild(deleteOption)

        let renameOption = option.cloneNode(true)
        let renameIcon = renameOption.querySelector("i")
        let renameText = renameOption.querySelector("span")
        renameIcon.classList.add("fas", "fa-pen")
        renameText.innerText = "Rename"
        listMenuContainer.appendChild(renameOption)

        console.log(menuOverlay)
    }

    function getPos(elm) {
        let rect = elm.getBoundingClientRect()
        return { x:rect.left, y:rect.top }
    }
}
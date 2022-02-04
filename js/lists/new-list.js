import listModal from "./modal/list-modal.js"

const newList = document.querySelector(".new-list")

newList.addEventListener("click", () => {
    // Remove focus from the new list button
    newList.blur()

    // Create and render list modal
    listModal("new")
})
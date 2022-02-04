// Import external functions
import taskModal from "./modal/task-modal.js"

const mainContent = document.querySelector("main")

mainContent.addEventListener("click", e => {
    let elm = e.target
    if (elm.classList.contains("new-task")) {
        elm.blur()

        taskModal("new")
    }
})


// Import external functions
import exitModal from "./modal/exit-modal.js"
import resizeField from "./modal/resize-field.js"
import verifyField from "./modal/verify-field.js"
import cancelBtnActions from "./modal/cancel.js"
import saveBtnActions from "./modal/save.js"

const mainContent = document.querySelector("main")

mainContent.addEventListener("click", e => {
    
    
    let elm = e.target
    if (elm.classList.contains("new-task")) {
        // Remove focus from the new task button
        elm.blur()

        // Create modal which adds a new task
        let modalContainer = document.createElement("div")
        modalContainer.classList.add("modal-container")
        
        let modalContent = document.createElement("div")
        modalContent.classList.add("modal-content")
        modalContainer.appendChild(modalContent)
    
        let taskNameField = document.createElement("textarea")
        taskNameField.classList.add("name-field")
        taskNameField.setAttribute("placeholder", "Task name")
        taskNameField.setAttribute("maxlength", "120")
        taskNameField.setAttribute("rows", "1")
        modalContent.appendChild(taskNameField)
    
        let modalActions = document.createElement("div")
        modalActions.classList.add("modal-actions")
        modalContent.appendChild(modalActions)
    
        let cancelBtn = document.createElement("button")
        cancelBtn.classList.add("action", "cancel-btn")
        cancelBtn.innerText = "Cancel"
        modalActions.appendChild(cancelBtn)
    
        let saveBtn = document.createElement("button")
        saveBtn.classList.add("action", "save-btn")
        saveBtn.innerText = "Save"
        modalActions.appendChild(saveBtn)

        // Exit modal clicking outside the modal
        exitModal(modalContainer, taskNameField)

        // Increase or decrease the field height based on its value or window size
        resizeField(taskNameField, saveBtn)

        // Disable the save button 
        verifyField(taskNameField, saveBtn)

        // Exit modal clicking on cancel button
        cancelBtnActions(cancelBtn, taskNameField, modalContainer)

        // Save the new task in local storage and put it in HTML
        saveBtnActions(saveBtn, taskNameField, modalContainer)

        // Add modal element to the HTML
        document.body.appendChild(modalContainer)

        // Enter (focus) the <textarea> automatically
        taskNameField.focus()
    }
})


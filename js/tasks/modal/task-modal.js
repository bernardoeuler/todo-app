import exitModal from "./exit-modal.js"
import resizeField from "./resize-field.js"
import verifyField from "./verify-field.js"
import cancel from "./cancel.js"
import save from "./save.js"
import edit from "./edit.js"

export default function taskModal(action, taskId) {
    // Create modal element
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

    // Verify modal action
    switch (action) {
        // Save the new task
        case "new":
            save(saveBtn, taskNameField, modalContainer)
            break

        // Edit the task
        case "edit":


            // Get task data
            let taskElement = document.querySelector(`[data-task-id="${taskId}"]`)
            let taskElementName = taskElement.querySelector(".task-name")
            let taskNameText = taskElementName.innerText
            
            taskNameField.value = taskNameText

            edit(saveBtn, taskNameField, modalContainer, taskId)
            break
        
        // Alert the error on the console
        default:
            console.log("Modal action not specified")
            break
    }

    // Exit modal clicking outside the modal
    exitModal(modalContainer, taskNameField)

    // Verify the input and disable the save button if necessary
    verifyField(taskNameField, saveBtn)

    // Increase or decrease the field height based on its value or window size
    resizeField(taskNameField, saveBtn)

    // Exit modal clicking on cancel button
    cancel(cancelBtn, taskNameField, modalContainer)

    // Add modal element to the HTML
    document.body.appendChild(modalContainer)

    // Enter (focus) the <textarea> automatically
    taskNameField.focus()
}
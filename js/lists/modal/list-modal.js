import exitModal from "./exit-modal.js"
import resizeField from "./resize-field.js"
import verifyField from "./verify-field.js"
import cancel from "./cancel.js"
import save from "./save.js"
import rename from "./rename.js"

export default function listModal(action, listId) {
    // Create modal element
    let modalContainer = document.createElement("div")
    modalContainer.classList.add("modal-container")
    
    let modalContent = document.createElement("div")
    modalContent.classList.add("modal-content")
    modalContainer.appendChild(modalContent)

    let listNameField = document.createElement("textarea")
    listNameField.classList.add("name-field")
    listNameField.setAttribute("placeholder", "List name")
    listNameField.setAttribute("maxlength", "60")
    listNameField.setAttribute("rows", "1")
    modalContent.appendChild(listNameField)

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
    exitModal(modalContainer, listNameField)

    // Increase or decrease the field height based on its value or window size
    resizeField(listNameField, saveBtn)

    // Verify the input and disable the save button if necessary
    verifyField(listNameField, saveBtn)

    // Exit modal clicking on cancel button
    cancel(cancelBtn, listNameField, modalContainer)

    // Verify modal action
    switch (action) {
        // Save the new list
        case "new":
            save(saveBtn, listNameField, modalContainer)
            break

        // Rename the list
        case "rename":
            rename(saveBtn, listNameField, modalContainer, listId)
            break
        
        // Alert the error on the console
        default:
            console.log("Modal action not specified")
            break
    }

    // Add modal element to the HTML
    document.body.appendChild(modalContainer)

    // Enter (focus) the <textarea> automatically
    listNameField.focus()
}
export default function cancel(cancelBtn, taskNameField, modalContainer) {
    cancelBtn.addEventListener("click", () => {
        taskNameField.blur()
        document.body.removeChild(modalContainer)
    })
}
export default function cancel(cancelBtn, field, modalContainer) {
    cancelBtn.addEventListener("click", () => {
        field.blur()
        document.body.removeChild(modalContainer)
    })
}
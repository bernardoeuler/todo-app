export default function exitModal(modalContainer, field) {
    modalContainer.addEventListener("click", evt => {
        // If click outside the modal content, then remove it from the HTML
        if (evt.target == modalContainer)
            document.body.removeChild(modalContainer)
    })

    field.addEventListener("keydown", evt => {
        // If press "Esc" it exit the modal and remove it from the HTML
        if (evt.key == "Escape") {
            document.body.removeChild(modalContainer)
        }
    })
}

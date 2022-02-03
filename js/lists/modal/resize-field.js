import verifyField from "./verify-field.js"

export default function resizeField(field, saveBtn) {
    // For input value changes
    field.addEventListener("input", () => {
        verifyField(field, saveBtn)
        field.style.height = "auto"
        field.style.height = field.scrollHeight + "px"
    })

    // For window size changes
    window.addEventListener("resize", () => {
        field.style.height = "auto"
        field.style.height = field.scrollHeight + "px"
    })
}
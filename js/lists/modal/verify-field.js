export default function verifyField(field, btn) {
    let valueWithoutSpace = field.value.trim()
    if (valueWithoutSpace.length == 0) {
        btn.classList.add("disabled");
        btn.disabled = true;
    }

    else {
        btn.classList.remove("disabled");
        btn.disabled = false;
    }
}
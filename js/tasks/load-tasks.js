import changeListPage from "./page-change.js"

let lists = JSON.parse(localStorage.getItem("lists"))
let selectedList = lists.find(list => list.selected === true)

document.addEventListener("DOMContentLoaded", () => {    
    changeListPage(selectedList)
})